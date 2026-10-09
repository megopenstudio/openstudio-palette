# Open Studio — Megan Etherton

The public website for Open Studio, Megan Etherton's strategic design practice: research, co-design and visual communication for strategy, policy, governance and culture.

Live site: https://openstudio.ie · Writing: https://promptsforhumans.substack.com

## What's on the page

One editorial page with anchored sections: About Me, Experience (filterable, with a show-more list), Prompts for Humans (three selected Substack essays), The approach, Visual design (portfolio previews), and Contact.

## Tech

- [TanStack Start](https://tanstack.com/start) (React 19 + Vite) — single route in `src/routes/index.tsx`, shared shell in `src/routes/__root.tsx`
- TypeScript, Tailwind CSS v4 (theme tokens live in `src/styles.css`)
- shadcn/ui primitives in `src/components/ui`, icons from `lucide-react`
- Portfolio and portrait photography is served from Lovable's asset CDN; the pointers sit in `src/assets/*.asset.json`

## Run it locally

Requires Node.js 22+ (or [Bun](https://bun.sh)).

```sh
git clone <this-repository-url>
cd openstudio
bun install
bun run dev
```

Open http://localhost:8080.

## Scripts

| Command           | What it does                                                          |
| ----------------- | --------------------------------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload                                  |
| `bun run build`   | Production build (prerendered static site in `dist/client/`) |
| `npm run preview` | Serve the production build locally                                    |
| `npm run test`    | Run the test suite (`vitest`)                                         |
| `npm run lint`    | ESLint over the whole project                                         |
| `npm run format`  | Prettier write                                                        |

## Where things live

```text
src/routes/index.tsx    page sections and the content lists (projects, portfolio, articles, approach)
src/routes/__root.tsx   document shell, fonts, favicon
src/styles.css          colour/type tokens and all section styling
src/assets/            image pointer files (CDN) and generated artwork
src/test/               vitest tests
```

Editing copy is usually a matter of changing an entry in one of the arrays near the top of `src/routes/index.tsx`.

## Deploying

`bun run build` prerenders the site to plain static HTML in `dist/client/` — upload that folder's contents to any static host. It already includes `CNAME` (openstudio.ie) and `.nojekyll` for GitHub Pages. The included `deploy.yml` workflow publishes it to GitHub Pages on every push to `main` (set Pages source to "GitHub Actions"). At your domain registrar, point openstudio.ie at GitHub Pages (A records 185.199.108.153, .109.153, .110.153, .111.153).

## Editing the site with Lovable

This repository is kept in sync with the [Lovable](https://lovable.dev) project it was built in. Connect the repo to Lovable and describe the change you want — edits made there are committed here, and commits pushed here sync back.

## Notes

- Contact details, approved wording and the experience categories are the studio's own; change them deliberately rather than regenerating them.
- No license is granted by making this repository public: © Megan Etherton t/a Open Studio.
