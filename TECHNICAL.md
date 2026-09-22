# Technical guide

Internal architecture and maintenance notes for the documentation generator.
User-facing introduction, quickstart, and corpus usage live in `README.md`.

## What this repository is

A generator (`src/`) that converts pinned upstream documentation into an
LLM-readable corpus committed to this repository: per-project directories with
`llms.txt` (index), `llms-full.txt` (or numbered volumes), `manifest.json`
(provenance + integrity), `LICENSE.upstream`, and `pages/*.md`.

Everything under a project directory (e.g. `docker/`, `apple-swift/`) is
**generated data** — never hand-edit it. Everything under `src/` and
`.github/` is source.

## Pipeline

```
config/sources.json          what to track (one entry per corpus, 32 projects)
        │
        ▼
bun run src/cli.ts update     resolve the latest stable pin per project
        │                     (GitHub releases/tags/branches or Apple DocC
        │                      inventory digests); unconvertible upstreams
        │                      retain their previous pin and are reported
        ▼
bun run src/cli.ts build      convert the pinned bytes into the corpus
        │                     (quarantine per page for unconvertible syntax)
        ▼
bun run src/cli.ts verify     manifests, digests, indexes, path safety
        ▼
CI publishes (update-docs.yml) via an artifact-mediated, write-isolated job
```

## Source layout (`src/`)

| Module | Responsibility |
| --- | --- |
| `cli.ts` | Commands: `build`, `update`, `verify`, `report`, `paths`; update transaction recovery |
| `config.ts` | `config/sources.json` and `sources.lock.json` schemas and validation |
| `github.ts` | Pin resolution (releases / semantic tags / tag series / branches), retry + rate-limit handling, archive download, safe-redirect fetch |
| `files.ts` | Archive extraction with hard size limits, sparse git checkouts with a shared cache, atomic directory transactions |
| `docc.ts` | Apple DocC index/render client with disk cache |
| `projects/` | One adapter per upstream; each owns its conversion protocol |
| `markdown.ts`, `mdx.ts` | Shared normalization and component rewriters |
| `output.ts` | Corpus writing, volume sharding (8 MiB), manifest/digest verification |
| `manifest.ts` | Manifest schema; binds each snapshot to `generatorVersion` + `generatorDigest` |
| `quarantine.ts` | Per-page quarantine policy and the 5% per-project quarantine budget |
| `report.ts` | Pipeline health report, fingerprinted drift tracking issue body |
| `generator.ts` | Digest of every converter input (`src/**/*.ts`, `package.json`, `bun.lock`, `tsconfig.json`, `config/sources.json`) |
| `compare.ts` | Shared code-point comparator used for deterministic ordering |

## Invariants worth knowing before changing things

- **Determinism.** A rebuild from the same pin must produce byte-identical
  output. CI diffs the working tree after a full rebuild against the commit.
- **Generator digest staleness.** Every non-Apple manifest records the
  `generatorDigest` that produced it. Changing any generator input makes
  committed manifests stale, so `bun run verify` fails until the corpus is
  rebuilt (`bun run build`). This is intentional: it keeps published snapshots
  tied to the converter that produced them.
- **Path safety is fatal, source syntax is quarantined.** Unsafe paths,
  oversized outputs, and duplicate paths fail the build; unconvertible upstream
  markup quarantines one page and is recorded in the manifest.
- **Transactions.** `update` stages whole project directories (`<project>.staging`),
  commits them (`<project>.backup` siblings), writes lock + indexes, verifies,
  and rolls everything back in reverse order on failure. A journal file
  (`.generated-update-transaction.json`) recovers interrupted runs.
- **Write isolation.** The scheduled workflow never pushes with `github.token`;
  a separate `commit` job receives an artifact containing exactly the paths
  `bun run src/cli.ts paths` listed, and pushes with `PUBLISH_TOKEN`.

## Development workflow

```zsh
bun ci                 # install exactly from bun.lock
bun test               # unit tests
bun run typecheck      # tsc --noEmit (strict, noUncheckedIndexedAccess, exactOptionalPropertyTypes)
bun run format         # biome format --write .
bun run check          # typecheck + tests + format + verify
bun run build          # rebuild github-scoped corpora from pinned sources
bun run update         # reconcile pins against upstream, rebuild changed projects
```

Adding a project: add an adapter in `src/projects/`, register it in
`src/projects/index.ts`, add the id to `src/types.ts` `projectIds`, add config
in `config/sources.json`, and a scanner entry in `src/quarantine.ts`
`unresolvedSyntax` if the upstream uses raw markup that must never survive.

## Conventions

- No comments unless a "why" is non-obvious. No multi-line docstrings.
- Sorting is code-point based via `src/compare.ts` — never `<`/`>` on strings
  (UTF-16 misorders astral characters).
- Errors thrown from adapter rendering quarantine exactly the page under
  construction; errors thrown from path/validation logic fail the project.
- Generated bytes are only ever written through `src/output.ts` / `src/files.ts`
  atomic helpers.

## Known debt (deliberate, revisit when adapters gain tests)

- **Link-resolver duplication.** Eight adapters re-implement relative-link
  resolution with subtly different route tables, asset strategies, and prefix
  rules. A shared `resolveRelativeDocLink` core was evaluated and deferred:
  the resolvers are behaviorally divergent (extension mapping, `_index.md`
  handling, fragment suffixes) and fourteen adapters lack direct tests, so a
  merge would be a high-risk behavioral change, not a refactor.
- **Fence-scanner duplication.** `markdown.ts` removes fenced segments; n8n's
  scanner preserves line positions (blank-line substitution) because its
  transforms are line-indexed. These are *not* the same operation.
- **`mdx.ts` `rewriteJsx`** is a ~330-line branch chain over component names;
  a dispatch table would make the component list auditable, but it is only
  lightly tested today.
- Adapters with no dedicated test file yet: `container`, `datasource-plugin`,
  `netbird`, `podman`, `postgres-tables`, `runpod`, `traefik`, `trigger-dev`,
  `vastai`, `victoriametrics`, `yt-dlp`, `zitadel`. `docker` and `grafana`
  (the two largest) gained direct tests in 2026-09.

## Contribution guide

1. `bun run check` must pass; CI additionally rebuilds every pinned corpus and
   fails on any diff.
2. Never edit generated project directories by hand; fix the adapter and
   rebuild.
3. Behavior changes to rendering or conversion require a test fixture in the
   affected adapter's `.test.ts`.
4. Dependency updates go through Dependabot (bun ecosystem + GitHub Actions,
   Mon/Thu cron); PRs auto-queue for merge only after the required `check`.