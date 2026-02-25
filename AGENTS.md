# Dation Campus — Agent Guide

## Project Overview
Static website for **Dation Campus**, an AI courses company targeting high school students preparing for university. Built with Vite + vanilla HTML/CSS/JS. All content in **Spanish (LATAM)**.

## Repository Structure
```
├── AGENTS.md               ← This file (agent map)
├── ARCHITECTURE.md          ← Architecture overview
├── docs/
│   ├── design-docs/
│   │   └── core-beliefs.md  ← Mission, values, audience
│   └── product-specs/
│       └── index.md         ← Pages, features, form specs
├── index.html               ← Homepage (Vite entry point, SPA)
├── team.html                ← Team page (static HTML)
├── cursos.html              ← Courses page (static HTML)
├── contact.html             ← Contact page with lead form (static HTML)
├── src/
│   ├── main.js              ← Homepage JS (renders into #app)
│   └── styles/
│       ├── index.css         ← Design system variables + base styles
│       ├── homepage.css      ← Homepage-specific styles
│       └── pages.css         ← About, Team, Contact, Courses styles
├── vite.config.js            ← Vite config with multi-page support
└── package.json              ← Project metadata
```

## Key Conventions
1. **Language**: All user-facing text must be in Spanish (LATAM)
2. **Branding**: "Dation Campus" — logo placeholder is acceptable
3. **Design System**: Defined in `src/styles/index.css` via CSS custom properties
4. **Pages**: `index.html` is a Vite SPA. Other pages are static multi-page HTML linking CSS directly
5. **No Backend**: All forms are UI-only (no server-side processing)
6. **Course Details**: Placeholder content — real data will be inserted later

## Design Tokens (see `src/styles/index.css`)
- Font: Barlow Condensed
- Primary colors: Red accent (#D93232) + Navy (#111D24)
- Sharp corners (border-radius: 0)
- Responsive breakpoints: 1200px, 992px, 768px, 480px
