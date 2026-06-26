# Marché Freshco

Website for **Marché Freshco** — a fresh produce, halal & international grocery market in Pierrefonds, Québec (West Island, Montréal).

> *Fresh, every day. / Frais, chaque jour.*

## What's here

```
index.html            Homepage — animated hero, categories, story, testimonials
products.html         "What's in store" product catalogue
css/style.css         Styles & design tokens
js/main.js            GSAP + Lenis scroll animations
js/i18n.js            Bilingual FR / EN toggle
assets/img/           Imagery (hero, category & product photography)
brandkit/             Brand kit — logo direction, palette, typography (+ boards)
RESEARCH.md           Store research compiled from the Google 360° tour
```

Static site — no build step. Vercel serves `index.html` from the repo root with zero config.

## The site

- **Bilingual FR / EN** — language toggle in the nav, choice persists across pages.
- **Animated** — GSAP ScrollTrigger reveals, Lenis smooth scroll, kinetic editorial type.
- **Responsive** — desktop layout plus a dedicated mobile slide-in menu.
- **Product catalogue** — fresh produce, rice & pantry, spices & tea, dairy & drinks, bakery.
- **Testimonials** — real customer reviews from the Google listing.

## Brand

| | |
|---|---|
| Forest Green | `#1F5C3D` |
| Market Green | `#3E8E5A` |
| Warm Orange | `#E8852B` |
| Tomato Red | `#D1422E` |
| Warm Cream | `#F6F1E7` |

Display type: **Anton** · Headings: **Archivo** · Body: **Inter**

## Run locally

```bash
python3 -m http.server 8180
# open http://localhost:8180
```

## Location

9549 Boul Gouin O, Pierrefonds, QC H8Y 1R2 — open every day until 10 p.m.
