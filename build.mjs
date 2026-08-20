// Build downloadable CV assets from index.html — the single source of truth.
//
//   node build.mjs
//
// Emits:
//   files/valentin-lapchevskiy-cv-{en,ru,es}.md    (parsed out of index.html)
//   files/valentin-lapchevskiy-cv-{en,ru,es}.pdf   (printed by headless Chrome, A4)
//   og-card.png                                    (1200x630 social preview)

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const ROOT = fileURLToPath(new URL('.', import.meta.url));
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const SITE = 'https://gen4sp.github.io/cv/';
const LANGS = ['en', 'ru', 'es'];
const BASENAME = 'valentin-lapchevskiy-cv';
const html = readFileSync(join(ROOT, 'index.html'), 'utf8');

const L10N = {
  en: { online: 'Online CV' },
  ru: { online: 'Онлайн-версия' },
  es: { online: 'CV en línea' },
};

// ---------------------------------------------------------------- HTML → text

// Find <tag ...> matching `open` and return everything up to its balanced closing tag.
function block(src, open, tag, from = 0) {
  const start = src.indexOf(open, from);
  if (start === -1) throw new Error(`not found: ${open}`);
  const openRe = new RegExp(`<${tag}[\\s>]`, 'g');
  const closeRe = new RegExp(`</${tag}>`, 'g');
  let depth = 0, i = start;
  while (i < src.length) {
    openRe.lastIndex = i;
    closeRe.lastIndex = i;
    const o = openRe.exec(src);
    const c = closeRe.exec(src);
    if (!c) throw new Error(`unbalanced <${tag}> from ${open}`);
    if (o && o.index < c.index) { depth++; i = o.index + 1; continue; }
    depth--;
    i = c.index + c[0].length;
    if (depth === 0) return { html: src.slice(start, i), end: i };
  }
  throw new Error(`unbalanced <${tag}>`);
}

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", nbsp: ' ' };

// Inline HTML → Markdown. <br> becomes \n; callers decide what to do with it.
function md(fragment) {
  return fragment
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<(?:b|strong)>([\s\S]*?)<\/(?:b|strong)>/gi, (_, t) => `**${t.trim()}**`)
    .replace(/<span class="nda">([\s\S]*?)<\/span>/gi, (_, t) => `*${t.trim()}*`)
    .replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, t) => `[${t.trim()}](${href})`)
    .replace(/<[^>]+>/g, '')
    .replace(/&([a-z#0-9]+);/gi, (m, e) => (e.toLowerCase() in ENTITIES ? ENTITIES[e.toLowerCase()] : m))
    .split('\n').map((line) => line.replace(/[ \t]+/g, ' ').trim()).join('\n')
    .trim();
}

const all = (src, re) => [...src.matchAll(re)].map((m) => m[1]);
const one = (src, re) => {
  const m = src.match(re);
  if (!m) throw new Error(`no match: ${re}`);
  return m[1];
};

function sections(src) {
  const out = [];
  let i = 0;
  while (true) {
    const start = src.indexOf('<section>', i);
    if (start === -1) break;
    const b = block(src, '<section>', 'section', start);
    out.push({ title: md(one(b.html, /<h2>([\s\S]*?)<\/h2>/)), html: b.html });
    i = b.end;
  }
  return out;
}

function entries(section) {
  const out = [];
  let i = 0;
  while (true) {
    const start = section.indexOf('<div class="entry">', i);
    if (start === -1) break;
    const b = block(section, '<div class="entry">', 'div', start);
    out.push({
      title: md(one(b.html, /<span class="entry-title">([\s\S]*?)<\/span>/)),
      date: md(one(b.html, /<span class="entry-date">([\s\S]*?)<\/span>/)),
      meta: md(one(b.html, /<div class="entry-meta">([\s\S]*?)<\/div>/)),
      bullets: all(b.html, /<li>([\s\S]*?)<\/li>/g).map(md),
    });
    i = b.end;
  }
  return out;
}

const heading = (s) => `## ${s.title}`;
const entriesMd = (s) =>
  entries(s.html)
    .map((e) => [`**${e.title}** — ${e.meta} · ${e.date}`, ...e.bullets.map((b) => `- ${b}`)].join('\n'))
    .join('\n\n');
const factsMd = (s) => all(s.html, /<li>([\s\S]*?)<\/li>/g).map((li) => `- ${md(li)}`).join('\n');

function toMarkdown(lang) {
  const lb = block(html, `<div class="lang lang-${lang}`, 'div').html;
  const main = block(lb, '<main class="col-main">', 'main').html;
  const aside = block(lb, '<aside class="col-side">', 'aside').html;
  const m = sections(main);
  const a = sections(aside);
  if (m.length !== 3 || a.length !== 5) {
    throw new Error(`[${lang}] expected 3 main + 5 aside sections, got ${m.length} + ${a.length} — index.html structure changed, update build.mjs`);
  }
  const [summary, work, experience] = m;
  const [contact, highlights, howIWork, skills, education] = a;

  const cbody = one(contact.html, /<div class="side-contact">([\s\S]*?)<\/div>\s*<\/section>/);
  const place = all(cbody, /<span[^>]*>([\s\S]*?)<\/span>/g).map(md).join(' · ');
  const links = all(cbody, /(<a[^>]*>[\s\S]*?<\/a>)/g).map(md).join(' · ');

  const skillsMd = [...skills.html.matchAll(/<div class="sk-k">([\s\S]*?)<\/div><div class="sk-v">([\s\S]*?)<\/div>/g)]
    .map(([, k, v]) => `- **${md(k)}:** ${md(v)}`)
    .join('\n');

  // Degree paragraphs carry a <br> (title / institution); the languages line does not.
  const plains = all(education.html, /<p class="plain">([\s\S]*?)<\/p>/g).map(md);
  const educationMd = [
    plains.filter((p) => p.includes('\n')).map((p) => `- ${p.split('\n').join(' — ')}`).join('\n'),
    plains.filter((p) => !p.includes('\n')).join('\n'),
  ].filter(Boolean).join('\n\n');

  const url = lang === 'en' ? SITE : `${SITE}?lang=${lang}`;

  return [
    `# ${md(one(lb, /<h1 class="name">([\s\S]*?)<\/h1>/))}`,
    `### ${md(one(lb, /<div class="title">([\s\S]*?)<\/div>/))}`,
    '',
    `📍 ${place}`,
    '',
    `🔗 ${links}`,
    '',
    `> ${md(one(lb, /<p class="tagline">([\s\S]*?)<\/p>/))}`,
    '',
    '---',
    '',
    heading(summary),
    '',
    md(one(summary.html, /<p class="summary">([\s\S]*?)<\/p>/)),
    '',
    heading(highlights),
    '',
    factsMd(highlights),
    '',
    heading(work),
    '',
    entriesMd(work),
    '',
    heading(experience),
    '',
    entriesMd(experience),
    '',
    heading(skills),
    '',
    skillsMd,
    '',
    heading(howIWork),
    '',
    factsMd(howIWork),
    '',
    heading(education),
    '',
    educationMd,
    '',
    '---',
    '',
    `*${md(one(lb, /<footer>([\s\S]*?)<\/footer>/))}*`,
    '',
    `*${L10N[lang].online}: ${url}*`,
    '',
  ].join('\n');
}

// ---------------------------------------------------------------- Chrome

// Headless Chrome writes the artifact and then lingers (updater / crash handler keep it
// alive), so we wait for "written to file" on stderr and kill it ourselves.
function chrome(args, out, timeoutMs = 60000) {
  const profile = join(tmpdir(), `cv-build-${process.pid}-${Math.abs(hash(out))}`);
  rmSync(out, { force: true });
  const child = spawn(CHROME, [
    '--headless', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
    '--no-default-browser-check', '--disable-background-networking',
    '--disable-component-update', '--disable-breakpad', '--disable-sync',
    `--user-data-dir=${profile}`, ...args,
  ], { stdio: ['ignore', 'ignore', 'pipe'] });

  let log = '';
  child.stderr.on('data', (d) => { log += d; });

  return new Promise((resolve, reject) => {
    const done = (err) => {
      clearInterval(poll);
      clearTimeout(timer);
      child.kill('SIGKILL');
      rmSync(profile, { recursive: true, force: true });
      const ok = existsSync(out) && statSync(out).size > 0;
      if (err && !ok) return reject(new Error(`${err}\n${log.split('\n').slice(0, 6).join('\n')}`));
      if (!ok) return reject(new Error(`chrome produced no ${out}\n${log}`));
      resolve();
    };
    const poll = setInterval(() => { if (/written to file/i.test(log)) done(); }, 120);
    const timer = setTimeout(() => done(`chrome timed out after ${timeoutMs}ms`), timeoutMs);
    child.on('error', (e) => done(`chrome failed to start: ${e.message}`));
  });
}

const hash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg',
  '.png': 'image/png', '.svg': 'image/svg+xml', '.xml': 'application/xml',
  '.md': 'text/markdown; charset=utf-8', '.pdf': 'application/pdf',
};

function serve() {
  const server = createServer((req, res) => {
    const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    const file = join(ROOT, path === '/' ? 'index.html' : path.replace(/^\/+/, ''));
    try {
      const body = readFileSync(file);
      res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404).end('not found');
    }
  });
  return new Promise((ok) => server.listen(0, '127.0.0.1', () => ok({ port: server.address().port, close: () => server.close() })));
}

// ---------------------------------------------------------------- OG card

const OG_CARD = `<!doctype html><meta charset="utf-8">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{width:1200px;height:630px;display:flex;align-items:center;gap:64px;padding:0 80px;
    background:#fdfdfb;border-left:16px solid #047857;overflow:hidden;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;color:#17171b}
  .txt{flex:1}
  .name{font-size:66px;font-weight:760;letter-spacing:-.025em;line-height:1.02}
  .title{margin-top:16px;font-size:29px;font-weight:640;color:#047857;line-height:1.3}
  .facts{margin-top:34px;display:flex;flex-wrap:wrap;gap:10px}
  .facts span{font-size:20px;font-weight:600;color:#3a3a44;background:rgba(4,120,87,.08);
    border:1px solid rgba(4,120,87,.18);border-radius:999px;padding:9px 18px}
  img{width:320px;height:320px;border-radius:50%;object-fit:cover;object-position:center 20%;
    border:3px solid #e6e6ea;flex:0 0 auto}
</style>
<div class="txt">
  <div class="name">Valentin Lapchevskiy</div>
  <div class="title">AI-Native Product Engineer<br>full-stack + LLM / agent systems, end-to-end</div>
  <div class="facts">
    <span>7M+ installs · Apple-featured app</span>
    <span>$300K+ · Top Rated</span>
    <span>15 years building products</span>
  </div>
</div>
<img src="photo.jpeg" alt="">
`;

// ---------------------------------------------------------------- run

mkdirSync(join(ROOT, 'files'), { recursive: true });

for (const lang of LANGS) {
  writeFileSync(join(ROOT, 'files', `${BASENAME}-${lang}.md`), toMarkdown(lang));
  console.log(`md   files/${BASENAME}-${lang}.md`);
}

const srv = await serve();
try {
  for (const lang of LANGS) {
    const out = join(ROOT, 'files', `${BASENAME}-${lang}.pdf`);
    await chrome([
      '--no-pdf-header-footer', '--virtual-time-budget=10000',
      `--print-to-pdf=${out}`, `http://127.0.0.1:${srv.port}/?lang=${lang}`,
    ], out);
    console.log(`pdf  files/${BASENAME}-${lang}.pdf`);
  }

  const tmp = join(ROOT, '.og-card.html');
  const card = join(ROOT, 'og-card.png');
  writeFileSync(tmp, OG_CARD);
  try {
    await chrome([
      '--window-size=1200,630', '--virtual-time-budget=5000',
      `--screenshot=${card}`, `http://127.0.0.1:${srv.port}/.og-card.html`,
    ], card);
    console.log('png  og-card.png');
  } finally {
    rmSync(tmp, { force: true });
  }
} finally {
  srv.close();
}
