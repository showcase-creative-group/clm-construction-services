# CLM Construction Services Website

This is the official website for CLM Construction Services, a premier earthwork and utility contractor serving the Brazos Valley. The site is built using **Astro** for high performance and deployed to the edge using **Cloudflare Workers**.

## 🚀 Project Overview

* **Type:** Static Site / Server-Side Rendered (SSR) Hybrid
* **Framework:** [Astro v5](https://astro.build)
* **Deployment:** Cloudflare Pages / Workers
* **Styling:** Scoped CSS with CSS Variables for theming
* **Fonts:** [Barlow](https://fonts.google.com/specimen/Barlow) (Google Fonts)
* **Icons:** Flaticon Uicons (CDN)

## 🛠️ Tech Stack

* **Core:** Astro, TypeScript
* **Adapter:** `@astrojs/cloudflare`
* **Runtime:** Node.js (Development), Cloudflare workerd (Production)
* **Package Manager:** npm

## 📂 Project Structure

```text
/
├── public/
│   └── favicon.svg          # Site Favicon
├── src/
│   ├── assets/              # Local static assets (logos, etc.)
│   ├── components/
│   │   ├── common/          # Global components (Header, Footer, TopBar)
│   │   ├── home/            # Homepage-specific components (Hero, Mission, Stats)
│   │   ├── projects/        # Project portfolio components (Grid, FullWidthHero)
│   │   └── services/        # Service listing components
│   ├── layouts/
│   │   └── Layout.astro     # Main HTML wrapper & global styles
│   └── pages/
│       ├── index.astro      # Home Page
│       ├── projects.astro   # Projects Portfolio
│       └── services.astro   # Services Overview
├── astro.config.mjs         # Astro configuration (Cloudflare adapter)
├── wrangler.jsonc           # Cloudflare Wrangler configuration
└── package.json             # Project dependencies and scripts
