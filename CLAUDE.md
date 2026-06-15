# CLAUDE.md

Guidance for working in this repository.

## Project

Magic Portfolio — an MDX-driven portfolio template (projects, blog, about/CV, gallery) built on [Once UI](https://once-ui.com) and Next.js. Content and theming are config-driven: most "edits" mean changing data files or adding MDX, not writing new components.

- **Next.js 16** App Router + **React 19**, **TypeScript** (strict)
- **Once UI** (`@once-ui-system/core`) for all layout, components, and design tokens
- **MDX** content via `@next/mdx` and `next-mdx-remote`
- **SCSS modules** + Sass for the rare standalone style override
- Requires **Node.js 18.17+**

## Commands

```bash
npm run dev          # start dev server
npm run build        # production build
npm run start        # serve production build
npm run lint         # next lint
npm run biome-write  # format the whole repo with Biome
```

There is no test suite. `lint-staged` runs `biome check --write` + `biome format --write` on staged JS/TS files at commit time.

## Formatting

Biome is the formatter and linter (`biome.json`): 2-space indent, double quotes, 100-char line width. Run `npm run biome-write` (or let lint-staged handle it) rather than hand-formatting.

## Architecture

Path alias: `@/*` → `./src/*`.

- **`src/resources/`** — the control center.
  - `once-ui.config.ts` — `baseURL`, enabled `routes`, `protectedRoutes`, fonts, theme `style`, `effects`, schema/SEO, social links. Re-exported via `src/resources/index.ts`.
  - `content.tsx` — `person`, `social`, `home`, `about`, `work`, `blog`, `gallery`, `newsletter` data objects that drive what every page renders.
  - `custom.css` — project-level CSS overrides.
- **`src/app/`** — App Router pages. Each section (`work`, `blog`, `gallery`, `about`) has a list page; `work` and `blog` have a `[slug]/page.tsx` that renders MDX.
- **`src/app/api/og/`** — dynamic Open Graph / X image generation (`next/og`); also `rss`, `authenticate`, `check-auth` routes.
- **`src/components/`** — product-specific components, grouped by feature (`work/`, `blog/`, `about/`, `gallery/`). Barrel-exported from `src/components/index.ts`. `mdx.tsx` (`CustomMDX`) maps Markdown elements to Once UI components.
- **`src/utils/`** — `utils.ts` (`getPosts`) and `formatDate.ts`.
- **`src/types/`** — config and content type definitions (custom `typeRoots`).

### Content system

Blog posts and projects are `.mdx` files with gray-matter frontmatter:
- Blog: `src/app/blog/posts/*.mdx`
- Work: `src/app/work/projects/*.mdx`

`getPosts(["src","app","work","projects"])` ([src/utils/utils.ts](src/utils/utils.ts)) reads a directory, parses frontmatter into a typed `Metadata` object (`title`, `publishedAt`, `summary`, `image`, `images`, `tag`, `team`, `link`), and uses the filename as the slug. `[slug]` pages call `generateStaticParams` from this, so **adding a new post = adding an MDX file** (no routing changes needed).

### Routing & access control

- A page only renders if its path is `true` in `routes` (`once-ui.config.ts`). `RouteGuard` ([src/components/RouteGuard.tsx](src/components/RouteGuard.tsx)) enforces this client-side and shows `NotFound` otherwise.
- Password-protect a page by setting its path `true` in `protectedRoutes` and setting `PAGE_ACCESS_PASSWORD` in `.env` (see `.env.example`). Auth is a cookie set by `/api/authenticate`.

### SEO

Pages generate metadata with `Meta.generate(...)` and structured data with the `<Schema>` component, both keyed off `baseURL` and content data. Update `baseURL` in `once-ui.config.ts` before deploying.

## Once UI conventions (important)

This project follows strict Once UI design rules — **read [.agents](.agents) before building or editing UI.** The essentials:

- **Never use `<div>`.** Use `<Column>` (vertical), `<Row>` (horizontal), `<Grid>` for layout; `<Heading>`/`<Text>` with a `variant` for type.
- **No hex codes, no Tailwind.** Use Once UI props and design tokens (`background`/`onBackground`, `gap`, `padding`, `maxWidth`, `fillWidth`, etc.). Reach for inline styles only when props don't cover a case; add a SCSS module only for heavy overrides or stateful selectors.
- **Scan for an existing Once UI component before creating one.** New components should be product-specific, built from Once UI primitives, placed in a feature folder, and barrel-exported via `index.ts`.
- Prefer functional components; keep things accessible (ARIA, semantic tags, tooltips on icon-only buttons).
