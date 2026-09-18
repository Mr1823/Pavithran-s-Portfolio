# Pavithran S — 3D Portfolio

An interactive 3D developer portfolio with a Spline-powered keyboard where every keycap is a skill. Built with Next.js 16, React 19 and TypeScript.

**Live:** _not deployed yet_ · **By:** [Pavithran S](https://www.linkedin.com/in/paviofficial) — Full Stack & Android Developer, Founder of [BuildWithUs](https://buildwithus.co.in)

---

## ✨ Features

- **Interactive 3D keyboard** — a Spline scene where each keycap maps to a skill, revealing its label and description on hover or keypress
- **Scroll choreography** — the keyboard scales, rotates and repositions as you move between sections (GSAP ScrollTrigger)
- **Graceful degradation** — on low-end devices or with `prefers-reduced-motion`, the 3D scene is replaced by a real HTML skills grid, so no content is lost
- **Light & dark mode** with themed disclaimer toasts
- **Contact form** — email delivery via Resend, with per-IP rate limiting
- **Blog** — MDX-backed, with reading-time estimates
- **Résumé route** — inline PDF viewer at `/resume`
- **Realtime _(optional)_** — live cursors, presence and chat when a WebSocket server is configured

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16.2.2 (App Router, Turbopack, Cache Components), React 19.2, TypeScript 5 |
| **Styling** | Tailwind CSS 3.4, shadcn/ui, Aceternity UI, SCSS modules |
| **Animation** | GSAP, Motion (Framer Motion), Lenis smooth scroll |
| **3D** | Spline runtime |
| **Data** | Resend (email), MDX + gray-matter (blog), Zod (validation) |
| **Realtime** | Socket.io client (optional) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or newer
- npm (see the install note below)

### Installation

```bash
git clone https://github.com/Mr1823/Pavithran-s-Portfolio.git
cd Pavithran-s-Portfolio
npm install --legacy-peer-deps
```

> [!IMPORTANT]
> `--legacy-peer-deps` is required. `next-themes@0.3.0` declares a peer range of React 16–18, but this project runs React 19. The dependency works fine in practice — the range is simply stale. pnpm resolves peers leniently by default, which is why the upstream lockfile works without the flag.
>
> To avoid typing it every time, create an `.npmrc`:
> ```
> legacy-peer-deps=true
> ```

### Environment

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | **Yes** | API key from [Resend](https://resend.com). Required even to build — see note below |
| `NEXT_PUBLIC_WS_URL` | No | WebSocket server for realtime features. Leave empty to disable |
| `UMAMI_DOMAIN` | No | Umami analytics script URL (self-hosted) |
| `UMAMI_SITE_ID` | No | Umami website ID. Nothing loads unless this is set |
| `NEXT_PUBLIC_LEGACY_HOST` | No | Old domain, for a one-time "we moved" notice |

> [!WARNING]
> `RESEND_API_KEY` must be set for `next build` to succeed, not just at runtime. The Resend client is constructed at module scope in `src/app/api/send/route.ts`, so page-data collection fails without it. Set it in your deployment environment before the first deploy.

### Run

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the build
```

---

## 🎨 Customizing

Personal data is centralized — you rarely need to touch components.

| File | What lives there |
|---|---|
| `src/data/config.ts` | Name, title, SEO descriptions, keywords, email, site URL, social links |
| `src/data/constants.ts` | `SKILLS` (keyboard + fallback grid) and `EXPERIENCE` timeline |
| `src/data/projects.tsx` | Projects, screenshots, tech chips, and the long-form detail modals |
| `src/components/header/config.ts` | Nav links and hover thumbnails |
| `src/components/footer/config.ts` | Footer links |
| `src/content/blogs/*.mdx` | Blog posts |
| `public/assets/` | Screenshots, backgrounds, OG image, résumé PDF |

**Design tokens** live in `src/app/globals.css` (the `:root` / `.dark` HSL blocks) and `tailwind.config.ts`. Changing `--brand` and `--accent-solid` recolors the site without touching layout.

### Project cards

Each project in `src/data/projects.tsx` expects:

```
public/assets/projects-screenshots/<id>/landing.png   # required
public/assets/backgrounds/<id>.jpg                    # optional wallpaper
```

The wallpaper is optional — `ScrollingPreview` falls back to a neutral gradient. Tall screenshots pan top-to-bottom automatically; landscape ones are shown centered.

### GitHub stars button

The header shows a live star count when **both** `githubUsername` and `githubRepo` are set in `config.ts`. The repo must actually exist — a wrong name makes the GitHub API return 404 and the server action throw. Leave `githubRepo` empty to hide the button.

---

## ⌨️ The 3D Keyboard

Keycap labels are baked into `public/assets/skills-keyboard.spline` as object names. The contract: **each keycap's object name must match a `name` field in `SKILLS`**.

Lookups are guarded, so a mismatch is never fatal — the key simply goes inert. Likewise, a skill with no matching keycap still appears in the HTML fallback grid; it just won't light up a key.

To change which skills appear:

1. Import `skills-keyboard.spline` into [Spline](https://spline.design/)
2. Unhide the keycaps you want to edit
3. Replace the logo image on each keycap
4. Rename each keycap object to match its `name` in `src/data/constants.ts`
5. Re-hide the keycaps and export, overwriting the `.spline` file

---

## 🔌 Realtime (Optional)

Live cursors, online presence and visitor chat activate automatically when `NEXT_PUBLIC_WS_URL` is set. Without it the site runs as a fully static build with no backend dependency.

> [!NOTE]
> The realtime backend is **not open source** — that's a decision of the original template author, not a missing piece of this repo.

---

## 🚀 Deployment

Deployed on Vercel. Before your first deploy:

1. **Pick one lockfile.** This repo may contain `package-lock.json`, `pnpm-lock.yaml` and `yarn.lock`. Vercel's package-manager detection is ambiguous with more than one — delete the ones you don't use.
2. **If you deploy with npm, commit an `.npmrc`** containing `legacy-peer-deps=true`, or the install step fails on the `next-themes` peer range.
3. **Set `RESEND_API_KEY`** in the Vercel environment, or the build fails during page-data collection.
4. **Set `config.site`** to your real domain — canonical URLs, Open Graph tags, `sitemap.xml` and `robots.txt` all derive from it.

---
All content — projects, copy, skills, experience and the data layer — is mine.

