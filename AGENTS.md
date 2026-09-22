# AGENTS.md

Guidance for coding agents working in this repository.

## What is source and what is generated

- Source: `src/`, `.github/`, `config/`, root-level `*.json`/`*.md`/`*.yml`.
- Generated (never hand-edit): every per-project directory (`docker/`,
  `apple-swift/`, `traefik/`, …), `llms.txt`, `llms-full.txt`,
  `sources.lock.json`, `build-report.json`.
- Generated corpora reproduce upstream docs verbatim, including example
  credentials; do not flag or "fix" credentials inside project directories.

## Commands

- Install: `bun ci` (Bun 1.4.x, bun.lock is committed)
- Tests: `bun test` (single file: `bun test src/projects/aria2.test.ts`)
- Typecheck: `bun run typecheck` (strict TS)
- Format: `bun run format` / check with `bun run format:check` (Biome)
- Full gate: `bun run check`
- Rebuild github-scoped corpora: `bun run build` (needs network + `GITHUB_TOKEN`)
- Rebuild Apple corpora: `bun run build:apple` (needs network; cached under
  `DOCC_CACHE_DIR`)

## Rules

1. Never edit files under a project directory; change the adapter and rebuild.
2. After changing anything under `src/`, `config/`, `package.json`, `bun.lock`,
   or `tsconfig.json`, the committed manifests become stale by design — run
   `bun run build` to regenerate before relying on `bun run verify`.
3. Determinism matters: no dates, random values, or map-iteration-order output
   may reach generated files. Sort with `src/compare.ts` `compareCodePoints`,
   never `<`/`>` on strings.
4. Errors thrown inside adapter page rendering quarantine that page; path and
   integrity violations must keep failing the whole project.
5. No comments unless a "why" is non-obvious; no multi-line docstrings.
6. Match the existing per-adapter patterns; do not merge adapter behavior into
   shared code without reading TECHNICAL.md's known-debt section first.
7. `bun run check` must pass before finishing any task.