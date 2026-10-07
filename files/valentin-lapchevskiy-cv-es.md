# Valentin Lapchevskiy
### AI-Native Product Engineer — full-stack + sistemas LLM / agentes, de extremo a extremo

📍 Argentina · UTC-3 · Remoto · horario de EE. UU.

🔗 [v.lapchevskiy@gmail.com](mailto:v.lapchevskiy@gmail.com) · [Telegram @gen4sp](https://t.me/gen4sp) · [Upwork ↗](https://www.upwork.com/fl/valentinel) · [App in the Air ↗](https://www.crunchbase.com/organization/app-in-the-air)

> Entrego productos completos de extremo a extremo — backend, frontend y la capa de agentes LLM — orquestando agentes de programación con el rendimiento de un equipo.

---

## Resumen

Ingeniero de producto AI-native que entrega sistemas completos de extremo a extremo — backend, frontend y la capa de agentes LLM — orquestando agentes de programación con el rendimiento de un equipo. 15 años construyendo productos: cofundador de **App in the Air** (**7M+ descargas**, destacada por Apple) e ingeniero independiente con **61 proyectos en Upwork y una valoración media de 4.9/5**. Enfoque reciente: sistemas con agentes en producción y pipelines LLM multimodales.

## Destacados

- **7M+** descargas · destacada por Apple
- **4.9/5** · 61 proyectos en Upwork
- **5** sistemas de IA (2024–26)
- Entrega agent-native

## Proyectos destacados

**Plataforma B2B de colaboración marca-creador** — Contrato · Ingeniero senior full-stack / IA · *bajo NDA* · 2026
- Diseñé un **motor de workflows basado en Temporal** y un **control plane de proveedores de IA** (cost ledger, rate limiting, circuit breakers, reintento de webhooks) para una plataforma multidominio.
- Establecí un **monorepo orientado a dominios** (núcleo de plataforma portable + dominios de negocio) con smoke gates P0–P5 y observabilidad completa (Grafana / Loki / Alloy).
- Construí un **sistema de generación con LLM basado en skills** (enriquecimiento de marca, generación de briefs/guiones, antifraude) con guardrails.

**Sistema de soporte con agentes LLM** — Contrato · Ingeniero de IA · *empresa de infraestructura GPU B2B, bajo NDA* · 2026
- Construí un **sistema de soporte de extremo a extremo con agentes LLM** (Vercel AI SDK, bucle OODA con tool-calling) en Telegram / Email / Web — clasificación de intención, extracción de campos y ticketing automatizado; 3 prototipos → un sistema listo para producción entregado al equipo del cliente.
- Desarrollé **entrada multimodal** (visión + Whisper STT) y memoria contextual sobre PostgreSQL/pgvector.
- Implementé un **bucle de evaluación auto-mejorable** (45 escenarios de prueba, incluidos casos reales de soporte → refinamiento de prompts con LLM → verificación de regresión con rollback, lanzada desde GitHub Actions) e infraestructura de producción (Docker, Langfuse, colas de reintento, apagado controlado).

**Sistema de memoria corporativa auditable** — Contrato · I+D de IA · *empresa de infraestructura GPU B2B, bajo NDA* · 2026
- Diseñé y prototipé un **sistema de memoria corporativa auditable** — capa raw inmutable + capa estructurada recreable, con procedencia de extremo a extremo desde cualquier salida de IA hasta su fuente.
- Construí **extracción de knowledge-graph con LLM** (entidades / relaciones / hechos) con lentes por dominio configurables y type guards sobre PostgreSQL/pgvector, expuesto vía MCP — entregado como prototipo para desarrollo posterior.

**Viracle — Analítica de viralidad de vídeo con IA** — Fundador / Ingeniero en solitario · 2025 – 2026
- Diseñé un **backend orientado a eventos** (Fastify, Temporal.io, 4 microservicios) que rastrea, analiza y puntúa vídeo corto (TikTok / Reels / Shorts).
- Construí **análisis multimodal de vídeo** sobre structured outputs de Gemini (hook, ritmo, CTA, nicho, sentimiento) y un **pipeline de ML en Python de 7 etapas** (correlación, clustering, detección de anomalías → directrices de contenido).

**Noracle — SaaS de interpretación de sueños con IA** — Fundador / Ingeniero en solitario · [Demo en vivo ↗](https://t.me/NocturnalOracleBot) · 2026
- Lancé un **producto de IA en vivo y monetizado** en Telegram — interpretación de sueños + un perfil de personalidad por usuario que evoluciona, con facturación vía Telegram Stars.
- Construí un **pipeline LLM multi-etapa** — enrutado agéntico de modos, generación de imágenes multi-proveedor, guardas de coste por tier, structured outputs (~$0.02/sueño).

## Experiencia

**Ingeniero full-stack independiente y consultor de producto** — Upwork · 2015 – 2025
- **61 proyectos, valoración media de 4.9/5**; estatus Top Rated mientras trabajaba activamente en la plataforma; clientes principalmente en EE. UU., Canadá y Europa.
- 30+ MVPs y pruebas de concepto; participación profunda en decisiones de producto y asesoría técnica.

**Cofundador · Ingeniero de producto y full-stack** — Empatika — App in the Air · 2011 – 2014
- Cofundé una app de asistente de viajes y dirigí el producto sus primeros tres años — pivote de un chat por geolocalización a la asistencia en aeropuertos y crecimiento de **0 → 600K usuarios** con menos de $15K de marketing.
- Destacada por Apple — **Best New Apps en 120 países**, Editors' Choice, preinstalada en las Apple Store; hoy supera los **7M+ de descargas**.

**Creative Technologist · Visual Programmer** — TNT Broadcast Network · INTY · 2008 – 2010 · 2015
- Instalaciones interactivas y sistemas visuales en tiempo real (TouchDesigner, Ventuz, GLSL, Arduino).

## Habilidades

- **IA / LLM:** Agentic systems (tool-calling, OODA), Vercel AI SDK, OpenAI · Anthropic · Gemini, RAG / pgvector, multimodal (vision, STT), structured outputs, cost-aware LLM engineering (cost ledgers, per-tier guards), LLM eval & observability (Langfuse), agent-driven dev.
- **Backend:** Node.js / TypeScript, Fastify / Express, Temporal.io, Redis / BullMQ, PostgreSQL (Drizzle, pgvector), MongoDB.
- **Frontend:** React, Vue / Nuxt, TypeScript, Tailwind, design systems, FSD.
- **Mobile:** React Native, Flutter, Electron.
- **Datos / ML:** Python, PyTorch, scikit-learn, data pipelines, scraping.
- **Infra:** Docker, CI/CD, observability (Prometheus / Grafana / Jaeger / OTel), GCP / AWS.
- **Investigación ML:** Entusiasta: experimentos propios en PyTorch — arquitecturas de redes neuronales, dinámica de entrenamiento, interpretabilidad.
- **Además:** Solidity / Web3; creative tech (TouchDesigner, GLSL/HLSL).

## Cómo trabajo

- Convierto un alcance difuso en **sistemas entregados** — asumo la ambigüedad de principio a fin.
- **Primero el sistema**: trazo el camino y los trade-offs antes de escribir código.
- **Prototipador incansable** — convierto ideas en experimentos que funcionan, rápido.
- Calma ante requisitos cambiantes; **bajo overhead**, colaboración remota.

## Educación e idiomas

- **Estudios de posgrado en Ciencias Cognitivas** — Higher School of Economics (2018–2019, no finalizados).
- **Licenciatura en Informática Aplicada** — Russian University of Cooperation (2000–2005).

Inglés (profesional) · Ruso (nativo) · Español (B1, en progreso).

---

*Valentin Lapchevskiy · AI-Native Product Engineer · Disponible para contratos y proyectos fractional — remoto.*

*CV en línea: https://gen4sp.github.io/cv/?lang=es*
