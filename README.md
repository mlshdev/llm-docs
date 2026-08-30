# Release-pinned LLM documentation

This repository converts documentation from stable upstream releases into deterministic, LLM-friendly Markdown. Each upstream has its own directory with normalized pages, `llms.txt`, `llms-full.txt`, a provenance manifest, and its upstream license.

## Included projects

- [Traefik Proxy](https://github.com/traefik/traefik)
- [NetBird](https://github.com/netbirdio/netbird)
- [Podman](https://github.com/podman-container-tools/podman)
- [Grafana](https://github.com/grafana/grafana)
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics)
- [VictoriaLogs](https://github.com/VictoriaMetrics/VictoriaLogs)
- [VictoriaMetrics datasource for Grafana](https://github.com/VictoriaMetrics/victoriametrics-datasource)
- [VictoriaLogs datasource for Grafana](https://github.com/VictoriaMetrics/victorialogs-datasource)
- [vmestimator](https://github.com/VictoriaMetrics/vmestimator)
- [ZITADEL](https://github.com/zitadel/zitadel)

## Release policy

- Drafts and prereleases are ignored.
- The GitHub Actions workflow polls public GitHub releases every 15 minutes because GitHub cannot subscribe one repository directly to release events from unrelated repositories.
- Release source is downloaded from immutable tags and recorded with the resolved commit SHA in `sources.lock.json`.
- NetBird public documentation is maintained in the separate, untagged `netbirdio/docs` repository. A NetBird update is accepted only after that repository contains the exact `Update API pages with <tag>` commit. Until then, the previous complete product/docs pair remains published.
- Generated files are committed so GitHub, raw-content clients, and local tools all expose the same corpus. The same files are published through GitHub Pages.

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

Project directories are named after the identifiers in `config/sources.json`: `traefik`, `netbird`, `podman`, `grafana`, `victoriametrics`, `victorialogs`, `victoriametrics-datasource`, `victorialogs-datasource`, `vmestimator`, and `zitadel`.

## Source-specific conversion

- Traefik follows `docs/mkdocs.yml` navigation from the release tag and expands MkDocs include fragments.
- NetBird converts MDX through a fail-closed AST transform with explicit handling for its documentation components. It includes public docs from the release-matched docs commit and technical architecture Markdown from the product tag.
- Podman templates are expanded by a non-executing TypeScript implementation of the tagged repository's preprocessing rules before collecting command/man-page Markdown, tutorials, bindings, and operational documentation.
- Grafana walks the Hugo documentation tree under `docs/sources`, resolves `relref`, `ref:`, and shared-snippet references against the pages it publishes, expands the shortcodes the manual uses, and rewrites version placeholders to the release being generated.
- VictoriaMetrics, VictoriaLogs, and vmestimator follow the Hugo `menu.docs` navigation declared in `docs/`, inline the fragments that pages pull in with `{{% content %}}`, and expand the remaining shortcodes (`available_from`, `deprecated_from`, `collapse`, `section`) into plain Markdown.
- The VictoriaMetrics and VictoriaLogs Grafana datasources publish their documentation as repository Markdown; their pages keep the release README and `docs/` guides with Hugo front matter and site-relative links resolved.
- ZITADEL converts the Fumadocs MDX tree under `apps/docs/content` with the same fail-closed AST transform, inlining imported partials and sample files, turning documentation components into Markdown, and resolving cross-references to `https://zitadel.com/docs`.

## Local commands

```sh
bun ci
bun run update
bun run check
bun run site
```

`bun run update` contacts the GitHub API and downloads source archives only when stable pins change. `bun run build` rebuilds every project from `sources.lock.json`.

## Adding a project

Add project metadata to `config/sources.json`, extend the `ProjectId` type, and implement a source-specific adapter under `src/projects/`. Adapters must select authoritative source files, exclude generated duplicates and assets, preserve upstream licensing, and fail rather than silently discard unsupported source constructs.

## License

The generator is MIT licensed. Generated project directories include the corresponding upstream license in `LICENSE.upstream`; upstream documentation remains governed by its original project license.
