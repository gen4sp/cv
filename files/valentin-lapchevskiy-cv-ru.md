# Valentin Lapchevskiy
### AI-Native Product Engineer — full-stack + LLM / агентные системы, end-to-end

📍 Аргентина · UTC-3 · Remote · оверлап с US-часами

🔗 [v.lapchevskiy@gmail.com](mailto:v.lapchevskiy@gmail.com) · [Telegram @gen4sp](https://t.me/gen4sp) · [Upwork ↗](https://www.upwork.com/fl/valentinel) · [App in the Air ↗](https://www.crunchbase.com/organization/app-in-the-air)

> Собираю продукты целиком — backend, frontend и LLM-слой — оркестрируя кодинг-агентов с производительностью команды.

---

## Кратко

AI-native продуктовый инженер: собираю системы целиком — backend, frontend и LLM/агентный слой — оркестрируя кодинг-агентов с производительностью команды. 15 лет строю продукты: co-founder **App in the Air** (**7M+ установок**, featured by Apple) и независимый инженер: **61 проект на Upwork, средняя оценка 4.9/5**. Текущий фокус: production-системы на LLM-агентах и мультимодальные LLM-пайплайны.

## Главное

- **7M+** установок · featured by Apple
- **4.9/5** · 61 проект на Upwork
- **5** AI-систем (2024–26)
- Agent-native подход

## Избранные проекты

**B2B-платформа для коллабораций брендов и креаторов** — Контракт · senior full-stack / AI-инженер · *под NDA* · 2026
- Спроектировал **workflow-движок на Temporal** и **control plane для AI-провайдеров** (cost ledger, rate-limiting, circuit breakers, webhook-replay) для мультидоменной платформы.
- Выстроил **domain-driven монорепо** (переносимое platform-ядро + бизнес-домены) с P0–P5 smoke-гейтами и полным observability (Grafana / Loki / Alloy).
- Построил **skills-based LLM-генерацию** (обогащение бренда, генерация брифов/сценариев, антифрод) с guardrails.

**Agentic-система поддержки** — Контракт · AI-инженер · *B2B-компания (GPU-инфраструктура), под NDA* · 2026
- Построил end-to-end **систему поддержки на LLM-агентах** (Vercel AI SDK, OODA tool-calling loop) для Telegram / Email / Web — классификация intent, извлечение полей, авто-тикетинг; 3 прототипа → production-ready система, переданная команде клиента.
- Реализовал **мультимодальный ввод** (vision + Whisper STT) и контекстную память поверх PostgreSQL/pgvector.
- Внедрил **самоулучшающийся eval-loop** (45 тестовых сценариев, включая реальные обращения → LLM-правка промптов → регрессионная проверка с откатом, запуск из GitHub Actions) и production-инфру (Docker, Langfuse, retry-очереди, graceful shutdown).

**Аудируемая система корпоративной памяти** — Контракт · AI R&D · *B2B-компания (GPU-инфраструктура), под NDA* · 2026
- Спроектировал и прототипировал **аудируемую систему корпоративной памяти** — неизменяемый raw-слой + пересоздаваемый structured-слой, дающие сквозной provenance от любого AI-вывода к первоисточнику.
- Построил **LLM-извлечение knowledge-graph** (сущности / связи / факты) с подключаемыми доменными «призмами» и type-guard'ами поверх PostgreSQL/pgvector, отдача через MCP — передан как прототип для дальнейшей доработки.

**Viracle — AI-аналитика виральности видео** — Founder / Solo Engineer · 2025 – 2026
- Спроектировал **event-driven backend** (Fastify, Temporal.io, 4 микросервиса), который скрейпит, анализирует и оценивает короткие видео (TikTok / Reels / Shorts).
- Построил **мультимодальный анализ видео** на Gemini structured outputs (хук, пейсинг, CTA, ниша, sentiment) и **7-уровневый Python ML-пайплайн** (корреляции, кластеризация, детекция аномалий → контент-рекомендации).

**Noracle — AI-SaaS интерпретации снов** — Founder / Solo Engineer · [Живое демо ↗](https://t.me/NocturnalOracleBot) · 2026
- Запустил **живой монетизированный** Telegram-AI-продукт — интерпретация снов + развивающийся психо-портрет пользователя, оплата через Telegram Stars.
- Собрал **многоэтапный LLM-пайплайн** — агентный роутинг режимов, мультипровайдерная генерация картинок, per-tier cost-guards, structured outputs (~$0.02/сон).

## Опыт

**Независимый full-stack инженер и продуктовый консультант** — Upwork · 2015 – 2025
- **61 проект, средняя оценка клиентов 4.9/5**; пока активно работал на платформе — статус Top Rated; клиенты преимущественно US, Canada, Europe.
- 30+ MVP и proof-of-concept; глубокое участие в продуктовых решениях и техническом консультировании.

**Co-founder · продукт и full-stack инженер** — Empatika — App in the Air · 2011 – 2014
- Со-основал travel-ассистент и три года вёл продукт — пивот с гео-чата на помощь в аэропортах, рост **0 → 600K пользователей** при маркетинге меньше $15K.
- Featured by Apple — **Best New Apps в 120 странах**, Editors' Choice, предустановка в Apple Store; сегодня у приложения **7M+ установок**.

**Creative Technologist · Visual Programmer** — TNT Broadcast Network · INTY · 2008 – 2010 · 2015
- Интерактивные инсталляции и real-time визуальные системы (TouchDesigner, Ventuz, GLSL, Arduino).

## Навыки

- **AI / LLM:** Agentic systems (tool-calling, OODA), Vercel AI SDK, OpenAI · Anthropic · Gemini, RAG / pgvector, multimodal (vision, STT), structured outputs, cost-aware LLM engineering (cost ledgers, per-tier guards), LLM eval & observability (Langfuse), agent-driven dev.
- **Backend:** Node.js / TypeScript, Fastify / Express, Temporal.io, Redis / BullMQ, PostgreSQL (Drizzle, pgvector), MongoDB.
- **Frontend:** React, Vue / Nuxt, TypeScript, Tailwind, design systems, FSD.
- **Mobile:** React Native, Flutter, Electron.
- **Data / ML:** Python, PyTorch, scikit-learn, data pipelines, scraping.
- **Infra:** Docker, CI/CD, observability (Prometheus / Grafana / Jaeger / OTel), GCP / AWS.
- **ML-исследования:** Энтузиаст: самостоятельные эксперименты в PyTorch — архитектуры нейросетей, динамика обучения, интерпретируемость.
- **Ещё:** Solidity / Web3; creative tech (TouchDesigner, GLSL/HLSL).

## Как я работаю

- Превращаю размытое ТЗ в **готовые системы** — беру неопределённость на себя.
- **Сначала система**: карта пути и трейд-оффов до кода.
- **Неугомонный прототипировщик** — довожу идеи до рабочих экспериментов, быстро.
- Спокоен при меняющихся требованиях; **минимум оверхеда**, remote-friendly.

## Образование и языки

- **Магистратура, когнитивные науки** — НИУ ВШЭ (2018–2019, не окончена).
- **Бакалавр, прикладная информатика** — Российский университет кооперации (2000–2005).

English (professional) · Russian (native) · Spanish (B1, в процессе).

---

*Valentin Lapchevskiy · AI-Native Product Engineer · Открыт к контрактным и fractional-проектам — remote.*

*Онлайн-версия: https://gen4sp.github.io/cv/?lang=ru*
