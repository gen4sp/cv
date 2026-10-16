# CV site — Valentin Lapchevskiy

Live on GitHub Pages: **[gen4sp.github.io/cv](https://gen4sp.github.io/cv/)** · trilingual (EN / RU / ES), two-column, print-friendly.

A single self-contained `index.html` — no framework, no dependencies. Everything else in this
repo is either an asset or something generated *from* that file.

Downloadable CVs (also linked from the Download button on the site):

```
/files/valentin-lapchevskiy-cv-{en,ru,es}.pdf    A4, 3 pages
/files/valentin-lapchevskiy-cv-{en,ru,es}.md
```

---

## Deploy

GitHub Pages serves the **`master`** branch from the repo root (not `main`). So deploying is
just pushing to `master`:

```sh
node build.mjs                 # regenerate the PDFs, the Markdown and the OG card
git add -A
git commit -m "…"
git push                       # Pages rebuilds in ~1 min
```

Then check it landed:

```sh
gh api repos/gen4sp/cv/pages/builds/latest --jq '.status + " " + .commit[0:7]'
curl -sI https://gen4sp.github.io/cv/files/valentin-lapchevskiy-cv-en.pdf | head -1
```

Skip `node build.mjs` only if you changed nothing that shows up in the CV itself (e.g. this
README). Any content edit means the committed PDFs and `.md` files are stale until you rebuild.

> **Why the remote is HTTPS.** The SSH key that reaches this repo is marked read-only, so
> `git push` over `git@github.com:…` fails with *"The key you are authenticating with has been
> marked as read only"*. The remote is therefore `https://github.com/gen4sp/cv.git`, authenticated
> through the `gh` credential helper. Don't switch it back to SSH unless that key gets write access.

## Editing the content

**`index.html` is the single source of truth.** The PDFs and the Markdown files are *derived* from
it — never hand-edit anything in `files/`, it gets overwritten on the next build.

Each language is a complete content block inside `index.html` — `.lang-en`, `.lang-ru`, `.lang-es`.
Edit the block for the language you want; the switcher (top-right) toggles between them and
remembers the choice in localStorage. `?lang=ru` / `?lang=es` deep-link straight into a language —
which is also how the build prints the per-language PDFs.

Change the accent colour in one place — `--accent:` in `:root` near the top of `index.html`:

| Preset | Value |
|---|---|
| Teal (current) | `#0f766e` |
| Indigo | `#5b4bdb` |
| Blue | `#1d4ed8` |
| Emerald | `#047857` |
| Amber | `#b45309` |
| Rose | `#be123c` |

The photo is `photo.jpeg` (square, shown at 190×190 in all three blocks and on the OG card).

## Build

```sh
node build.mjs
```

Needs Node and Google Chrome. Chrome is expected at the standard macOS location; override with
`CHROME=/path/to/chrome node build.mjs`.

It reads `index.html` and writes:

- `files/*.md` — Markdown parsed out of the markup, one file per language.
- `files/*.pdf` — printed by headless Chrome from `?lang=…`, A4, using the site's own print
  stylesheet. Real text, not an image, so ATS parsers can read it.
- `og-card.png` — the 1200×630 social preview (what Telegram / LinkedIn / Slack show when the link
  is pasted).

The parser asserts the expected structure (3 sections in `<main>`, 5 in `<aside>`, per language)
and fails loudly rather than silently emitting a half-empty CV — so if you restructure the page,
expect to update `build.mjs` too.

## Preview locally

```sh
python3 -m http.server 8765     # → http://localhost:8765
```

## Things that will quietly break

- **Keep `.nojekyll`.** Without it Pages runs the files through Jekyll, which can mangle or skip
  them — the `.md` downloads especially.
- **Keep the mobile media query scoped to `screen`** (`@media screen and (max-width:760px)`). An A4
  page box is only ~703px wide, so an unscoped `max-width:760px` also matches when *printing*, which
  collapses the two-column grid and turns a 3-page PDF into 8 pages of a broken narrow column.
- **`output/`** is an old build directory, superseded by `files/`. Gitignored; ignore it.

## Analytics

GA4, inline in `index.html`. Beyond pageviews it tracks `link_click` (every link, tagged by type),
`language_switch`, and `cv_download` (with `file_format` and `ui_language`).
