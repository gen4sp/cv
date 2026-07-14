# Valentin Lapchevskiy
### AI-Native Product Engineer — full-stack + LLM / агентные системы, end-to-end

📍 Аргентина · UTC-3 · Remote · оверлап с US-часами

🔗 [v.lapchevskiy@gmail.com](mailto:v.lapchevskiy@gmail.com) · [Telegram @gen4sp](https://t.me/gen4sp) · [Upwork — Top Rated](https://www.upwork.com/fl/valentinel) · [App in the Air ↗](https://www.crunchbase.com/organization/app-in-the-air)

> Собираю продукты целиком — backend, frontend и LLM-слой — оркестрируя кодинг-агентов с производительностью команды.

---

## Кратко

AI-native продуктовый инженер: собираю системы целиком — backend, frontend и LLM/агентный слой — оркестрируя кодинг-агентов с производительностью команды. 15 лет строю продукты: co-founder **App in the Air** (7M пользователей, **Apple App of the Year**) и **Top-Rated** фрилансер с **$300K+ за 61 проект** (~100% success). Текущий фокус: production-системы на LLM-агентах, мультимодальные LLM-пайплайны, интерпретируемость ИИ.

## Главное

- **7M** юзеров · Apple App of the Year
- **$300K+** · 61 проект · Top Rated
- **5** AI-систем + research (2024–26)
- Agent-native подход

## Избранные проекты

**B2B-платформа для коллабораций брендов и креаторов** — Контракт · senior full-stack / AI-инженер · *под NDA* · 2026 – наст.
- Проектирую **workflow-движок на Temporal** и **control plane для AI-провайдеров** (cost ledger, rate-limiting, circuit breakers, webhook-replay) для мультидоменной платформы.
- Выстроил **domain-driven монорепо** (переносимое platform-ядро + бизнес-домены) с P0–P5 smoke-гейтами и полным observability (Grafana / Loki / Alloy).
- Строю **skills-based LLM-генерацию** (18+ доменных skill'ов — обогащение бренда, генерация брифов/сценариев, антифрод) с guardrails и quality-eval.

**Agentic-система поддержки** — Контракт · AI-инженер · *B2B-компания (GPU-инфраструктура), под NDA* · 2026
- Построил end-to-end **систему поддержки на LLM-агентах** (Vercel AI SDK, OODA tool-calling loop) для Telegram / Email / Web — классификация intent, извлечение полей, авто-тикетинг; собрано за < 2 месяцев (3 прототипа → production).
- Реализовал **мультимодальный ввод** (vision + Whisper STT) и контекстную память поверх PostgreSQL/pgvector + Redis.
- Внедрил **самоулучшающийся eval-loop** (45+ реальных кейсов → LLM-правка промптов → regression-гейтинг в CI) и production-инфру (Docker, Langfuse, retry-очереди, graceful shutdown).

**Аудируемая система корпоративной памяти** — Контракт · AI R&D · *B2B-компания (GPU-инфраструктура), под NDA* · 2026
- Спроектировал и прототипировал **аудируемую систему корпоративной памяти** — неизменяемый raw-слой + пересоздаваемый structured-слой, дающие сквозной provenance от любого AI-вывода к первоисточнику.
- Построил **LLM-извлечение knowledge-graph** (сущности / связи / факты) с подключаемыми доменными «призмами» и type-guard'ами поверх PostgreSQL/pgvector, отдача через MCP — передан как прототип для дальнейшей доработки.

**Viracle — AI-аналитика виральности видео** — Founder / Solo Engineer · 2025 – 2026
- Спроектировал **event-driven backend** (Fastify, Temporal.io, 4 микросервиса), который скрейпит, анализирует и оценивает короткие видео (TikTok / Reels / Shorts).
- Построил **мультимодальный анализ видео** на Gemini structured outputs (хук, пейсинг, CTA, ниша, sentiment) и **7-уровневый Python ML-пайплайн** (корреляции, кластеризация, детекция аномалий → контент-рекомендации).
- Построил production-grade инфру: PostgreSQL/Drizzle (20+ таблиц), Redis Streams, полный observability (Prometheus / Grafana / Jaeger), биллинг и auth.

**Noracle — AI-SaaS интерпретации снов** — Founder / Solo Engineer · [Живое демо ↗](https://t.me/NocturnalOracleBot) · 2026
- Запустил **живой монетизированный** Telegram-AI-продукт — интерпретация снов + развивающийся психо-портрет пользователя (оплата Telegram Stars; **D30-retention 38%** среди платящих).
- Собрал **многоэтапный LLM-пайплайн** — агентный роутинг режимов, мультипровайдерная генерация картинок, per-tier cost-guards, structured outputs (~$0.02/сон).
- Выполнил **zero-downtime идемпотентную миграцию** 3 485 пользователей / 6 340 записей с cold-backup.

**Независимое AI-исследование — интерпретируемость и эффективные архитектуры** — Самостоятельно · 2025 – 2026
- 200+ экспериментов по извлечению **точной, верифицируемой логики** из обученных сетей (lossless NN → формула → Verilog), в отличие от приближённых методов (SHAP/LIME).
- Результаты: parity-128 на **40 параметрах**; адаптер-копроцессор для GPT-2, поднимающий 8-битную арифметику с **0%→97% при 0.08% параметров**; ускорение инференса **FHE 131×**.
- Строгая методология (multi-seed, поправка Бонферрони, 3 раунда верификации) с задокументированным логом опровергнутых гипотез.

**GRAB-A-WORD-II — real-time мультиплеер, словесная игра** — Founder / Solo Engineer · 2024
- Построил соло **full-stack real-time мультиплеер** (Nuxt/Vue, Socket.io, Redis/BullMQ) с локализацией RU/EN и Telegram-интеграцией.
- Создал модульную дизайн-систему (Storybook, 26 компонентов) и словарный пайплайн (Apify + OpenAI) в монорепо из 10 модулей.

## Опыт

**Независимый full-stack инженер и продуктовый консультант** — Upwork · Top Rated · 2015 – наст.
- **$300K+ заработано за 61 проект / 4 446 часов, ~100% success**; клиенты преимущественно US, Canada, Europe.
- 30+ MVP и proof-of-concept; глубокое участие в продуктовых решениях и техническом консультировании.

**Co-founder · продукт и full-stack инженер** — Empatika — App in the Air · 2011 – 2014
- Со-основал travel-ассистент: **7M пользователей, Apple App of the Year**, Editors' Choice, предустановка во всех Apple Store мира.

**Creative Technologist · Visual Programmer** — INTY · TNT Broadcast Network · 2008 – 2015
- Интерактивные инсталляции и real-time визуальные системы (TouchDesigner, Ventuz, GLSL, Arduino).

## Навыки

- **AI / LLM:** Agentic systems (tool-calling, OODA), Vercel AI SDK, OpenAI · Anthropic · Gemini, RAG / pgvector, multimodal (vision, STT), structured outputs, cost-aware LLM engineering (cost ledgers, per-tier guards), LLM eval & observability (Langfuse), agent-driven dev; interpretability, tensor networks.
- **Backend:** Node.js / TypeScript, Fastify / Express, Temporal.io, Redis / BullMQ, PostgreSQL (Drizzle, pgvector), MongoDB.
- **Frontend:** React, Vue / Nuxt, TypeScript, Tailwind, design systems, FSD.
- **Mobile:** React Native, Flutter, Electron.
- **Data / ML:** Python, PyTorch, scikit-learn, data pipelines, scraping.
- **Infra:** Docker, CI/CD, observability (Prometheus / Grafana / Jaeger / OTel), GCP / AWS.
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
