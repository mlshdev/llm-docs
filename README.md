# Source-pinned LLM documentation

This repository converts documentation from immutable upstream commits into deterministic, LLM-friendly Markdown. Projects track stable releases unless explicitly documented otherwise. Each upstream has its own directory with normalized pages, `llms.txt`, `llms-full.txt`, a provenance manifest, and its upstream license.

## Included projects

- [Traefik Proxy](https://github.com/traefik/traefik)
- [NetBird](https://github.com/netbirdio/netbird)
- [Podman](https://github.com/podman-container-tools/podman)
- [Docker](https://github.com/docker/docs)
- [n8n](https://github.com/n8n-io/n8n-docs)
- [Grafana](https://github.com/grafana/grafana)
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics)
- [VictoriaLogs](https://github.com/VictoriaMetrics/VictoriaLogs)
- [VictoriaMetrics datasource for Grafana](https://github.com/VictoriaMetrics/victoriametrics-datasource)
- [VictoriaLogs datasource for Grafana](https://github.com/VictoriaMetrics/victorialogs-datasource)
- [vmestimator](https://github.com/VictoriaMetrics/vmestimator)
- [ZITADEL](https://github.com/zitadel/zitadel)
- [FFmpeg](https://github.com/FFmpeg/FFmpeg)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)
- [SearXNG](https://github.com/searxng/searxng)
- [Bun](https://github.com/oven-sh/bun)
- [Trigger.dev](https://github.com/triggerdotdev/trigger.dev)

## Release policy

- Drafts and prereleases are ignored.
- The GitHub Actions workflow polls public GitHub releases every 15 minutes because GitHub cannot subscribe one repository directly to release events from unrelated repositories.
- Release source is downloaded from immutable tags and recorded with the resolved commit SHA in `sources.lock.json`.
- Docker tracks the latest `docker/docs` `main` commit because that repository does not publish current GitHub releases or release tags.
- n8n tracks the latest `n8n-io/n8n-docs` `main` commit because that repository does not publish releases or tags.
- FFmpeg and SearXNG track their latest `master` commits because they do not publish stable GitHub releases.
- NetBird public documentation is maintained in the separate, untagged `netbirdio/docs` repository. A NetBird update is accepted only after that repository contains the exact `Update API pages with <tag>` commit. Until then, the previous complete product/docs pair remains published.
- Generated files are committed so GitHub, raw-content clients, and local tools all expose the same corpus. The same files are published through GitHub Pages.

## Upstream drift policy

Upstream projects change their documentation source continuously, so the
generator treats an unconvertible construct as an expected event rather than an
outage. Conversion stays fail-closed — nothing unconverted is ever passed
through into the corpus — but failure is contained to the smallest possible
scope and always reported.

- **A page the generator cannot convert is quarantined.** It is omitted from the
  project, recorded with its reason in `manifest.json`, and counted in the
  project `llms.txt`. Quarantine is deterministic, so a rebuild from the same
  pins reproduces the same corpus and the same quarantine list.
- **Systemic drift fails the project instead.** Once quarantine exceeds 5% of a
  project's pages, or it would publish an empty corpus, the project build fails
  as a whole; publishing a gutted manual is worse than publishing yesterday's.
- **A project that fails keeps its previous pin and snapshot.** `bun run update`
  retains the last pin it successfully converted, continues with every other
  project, and publishes them. The corpus never regresses and never goes stale
  everywhere because one upstream changed.
- **A source that cannot be reconciled keeps its previous pin.** Unreachable
  repositories, retired releases, and moved tags are isolated per project.
- **Transport faults are retried.** GitHub API reads and archive downloads retry
  with backoff and honor primary and secondary rate-limit headers.
- **Everything held back is escalated.** `bun run update` writes
  `build-report.json`; the scheduled workflow turns it into a single tracking
  issue labelled `pipeline-health`, rewrites it only when the set of problems
  changes, and closes it once every source converts cleanly again.

The result is that upstream drift never breaks publication and never requires a
manual repair to restore the schedule. Adding the missing handler is normal
follow-up work, driven by the tracking issue, and the affected project rejoins
the current pin on the next scheduled run.

## Output layout

```text
llms.txt
llms-full.txt
<project>/
  llms.txt
  llms-full.txt
  manifest.json
  LICENSE.upstream
  pages/
```

Project directories are named after the identifiers in `config/sources.json`: `traefik`, `netbird`, `podman`, `docker`, `n8n`, `grafana`, `victoriametrics`, `victorialogs`, `victoriametrics-datasource`, `victorialogs-datasource`, `vmestimator`, `zitadel`, `ffmpeg`, `yt-dlp`, `searxng`, and `bun`.

## Source-specific conversion

- Traefik follows `docs/mkdocs.yml` navigation from the release tag and expands MkDocs include fragments.
- NetBird converts MDX through a fail-closed AST transform with explicit handling for its documentation components. It includes public docs from the release-matched docs commit and technical architecture Markdown from the product tag.
- Podman templates are expanded by a non-executing TypeScript implementation of the tagged repository's preprocessing rules before collecting command/man-page Markdown, tutorials, bindings, and operational documentation.
- Docker follows the Hugo content tree and vendored module mounts at the pinned `docker/docs` commit, expands its documentation shortcodes, and generates CLI, OpenAPI, glossary, and sample reference pages from checked-in data without executing Hugo or upstream code.
- n8n follows the `SUMMARY.md` navigation for each published GitBook space, expands commit-pinned reusable blocks, normalizes GitBook presentation blocks to plain Markdown, and rewrites cross-space links without executing upstream code.
- Grafana walks the Hugo documentation tree under `docs/sources`, resolves `relref`, `ref:`, and shared-snippet references against the pages it publishes, expands the shortcodes the manual uses, and rewrites version placeholders to the release being generated.
- VictoriaMetrics, VictoriaLogs, and vmestimator follow the Hugo `menu.docs` navigation declared in `docs/`, inline the fragments that pages pull in with `{{% content %}}`, and expand the remaining shortcodes (`available_from`, `deprecated_from`, `collapse`, `section`) into plain Markdown.
- The VictoriaMetrics and VictoriaLogs Grafana datasources publish their documentation as repository Markdown; their pages keep the release README and `docs/` guides with Hugo front matter and site-relative links resolved.
- ZITADEL converts the Fumadocs MDX tree under `apps/docs/content` with the same fail-closed AST transform, inlining imported partials and sample files, turning documentation components into Markdown, and resolving cross-references to `https://zitadel.com/docs`.
- FFmpeg expands the primary Texinfo manuals and converts their structural and inline markup to Markdown without executing Make or Texinfo tooling.
- yt-dlp publishes its release-authored Markdown manuals, supported-site catalog, changelog, and contributor documentation.
- SearXNG expands checked-in Sphinx includes and converts its RST documentation tree to Markdown without executing Sphinx or imported Python modules.
- Bun follows the checked-in Mintlify MDX documentation tree, inlines documentation partials, converts presentation components to Markdown, and resolves published links to `https://bun.com/docs`.
- Trigger.dev publishes the pages its `docs/docs.json` navigation declares, renders each API reference page from the OpenAPI operation the page names in front matter, inlines snippets with the attributes they are rendered with, and resolves published links to `https://trigger.dev/docs`.

## Local commands

```sh
bun ci
bun run update
bun run check
bun run site
```

`bun run update` contacts the GitHub API and downloads source archives only when stable pins change, and writes `build-report.json` describing anything it had to hold back. `bun run build` rebuilds every project from `sources.lock.json`. `bun run src/cli.ts report` renders the last report as the tracking-issue body.

## Adding a project

Add project metadata to `config/sources.json`, extend the `ProjectId` type, and implement a source-specific adapter under `src/projects/`. Adapters must select authoritative source files, exclude generated duplicates and assets, preserve upstream licensing, and fail rather than silently discard unsupported source constructs. Collect documents through `DocumentCollector` so that a page the adapter cannot convert is quarantined and reported instead of failing the whole project, and add the project's expected-to-be-resolved source syntax to `unresolvedSyntax` in `src/quarantine.ts`.

## License

The generator is MIT licensed. Generated project directories include the corresponding upstream license in `LICENSE.upstream`; upstream documentation remains governed by its original project license.
