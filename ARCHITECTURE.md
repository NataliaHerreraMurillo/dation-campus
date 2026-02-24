# Dation Campus — Architecture

## Overview
Static multi-page website built with Vite as the dev server and bundler.

## Page Architecture
- **`index.html`**: Vite entry point. Content is rendered dynamically via `src/main.js` (SPA pattern).
- **Other pages** (`about.html`, `team.html`, `cursos.html`, `contact.html`): Static HTML files that link CSS directly via `<link>` tags. These are configured as additional entries in `vite.config.js`.

## CSS Architecture
Three-layer CSS system:
1. **`index.css`** — Design system: CSS custom properties (colors, typography, spacing), reset, base styles, header, footer, hero, buttons, responsive breakpoints
2. **`homepage.css`** — Homepage-only sections: hero, intro, tailor, process steps, CTA, footer enhancements, illustrations
3. **`pages.css`** — Subpage sections: about hero/pillars/stats/values, team grid/filters/modal, contact hero/info/remote, responsive adjustments

## Component Patterns
- **BEM naming**: `.block__element` and `.block__element--modifier`
- **Shared header/footer**: Duplicated in each static HTML file (no templating engine)
- **Illustrations**: CSS-only placeholder shapes with floating animation (`illustration-placeholder`)
- **Responsive**: Mobile-first adjustments via media queries at 1200px, 992px, 768px, 480px

## Navigation
```
Header: [Logo] ── Nosotros | Equipo | Cursos | Contacto
```
All nav links point to respective `.html` files. Active state via `.active` class.
