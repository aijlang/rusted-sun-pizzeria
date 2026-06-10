# Rusted Sun Pizzeria — Website

Single-page marketing site for Rusted Sun Pizzeria, a real pizza restaurant at 2010 S State St, Salt Lake City, UT 84115. Founded 1998 by Wally Stephens.

## Stack

Plain HTML/CSS/JS — no framework, no build step, no package.json.

- `index.html` — full page structure (nav, hero, about, menu, reviews, hours, contact, footer, BYO modal)
- `styles.css` — all styles; CSS custom properties in `:root` for the design system
- `script.js` — sticky nav, mobile hamburger, menu tab switching, BYO pizza modal, scroll fade-in
- `images/` — `.webp` photos used in the hero, about section, and menu cards

## Design system (CSS variables)

| Variable | Value | Use |
|---|---|---|
| `--color-accent` | `#D4682A` | Primary orange |
| `--color-accent-gold` | `#F4A940` | Tags, labels, prices |
| `--color-bg` | `#141414` | Page background |
| `--color-bg-card` | `#252525` | Card backgrounds |
| `--font-serif` | Playfair Display | Headings, prices, logo |
| `--font-sans` | Inter | Body, nav, buttons |

## Running locally

Serve the folder root with any static server. The `.claude/launch.json` is configured to use Python's built-in server on port 5173:

```
python -m http.server 5173
```

Then open `http://localhost:5173`.

## Business info (real — do not change without confirmation)

- **Phone:** (801) 483-2120
- **Email:** rustedsunpizzeriainc@gmail.com
- **Address:** 2010 S State St, Salt Lake City, UT 84115 (Granary/Ballpark neighborhood)
- **Hours:** Mon closed · Tue–Sat 11:30am–9pm · Sun 4–8pm

## Key features

- **Menu tabs** — Starters, Salads, Pizzas, Calzones, Pasta, Desserts, Beverages
- **BYO Pizza modal** — size / sauce / cheese / meats / vegetables / specialty pickers with live summary; CTA calls the phone number
- **Specialty pizzas** — each listed with Calzone / 12" / 16" pricing
- **Reviews section** — 4 real Google reviews hardcoded; links to full Google listing
- **Google Maps embed** — hours section; lazy-loads (note: blocks preview screenshotter)
- **Mobile nav** — hamburger toggles full-screen overlay at ≤768px
