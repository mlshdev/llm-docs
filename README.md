# Source-pinned LLM documentation

This repository converts documentation from immutable upstream commits or content-addressed public catalogs into LLM-friendly Markdown. GitHub projects track stable releases unless explicitly documented otherwise. Each upstream has its own directory with normalized pages, `llms.txt`, `llms-full.txt`, a provenance manifest, and its upstream license or copyright notice.

## Included projects

- [Traefik Proxy](https://github.com/traefik/traefik)
- [NetBird](https://github.com/netbirdio/netbird)
- [Podman](https://github.com/podman-container-tools/podman)
- [Docker](https://github.com/docker/docs)
- [Apple container](https://github.com/apple/container)
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
- [aria2](https://github.com/aria2/aria2)
- [PostgreSQL 18](https://github.com/postgres/postgres)
- [discord.py-self](https://github.com/dolfies/discord.py-self)
- [discord.py](https://github.com/Rapptz/discord.py)
- [Apple Swift](https://developer.apple.com/documentation/swift)
- [Apple SwiftUI](https://developer.apple.com/documentation/swiftui)
- [Apple WebKit and Safari](https://developer.apple.com/documentation/webkit)
- [Apple Xcode and developer tools](https://developer.apple.com/documentation/xcode)
- [Apple iOS and iPadOS](https://developer.apple.com/ios/)
- [Apple macOS](https://developer.apple.com/macos/)
- [Apple watchOS](https://developer.apple.com/watchos/)
- [Apple cross-platform frameworks](https://developer.apple.com/documentation/technologies)

## Release policy

- Drafts and prereleases are ignored.
- The GitHub Actions workflow polls public GitHub releases once daily at 20:00 Europe/Warsaw because GitHub cannot subscribe one repository directly to release events from unrelated repositories.
- Release source is downloaded from immutable tags and recorded with the resolved commit SHA in `sources.lock.json`.
- Docker tracks the latest `docker/docs` `main` commit because that repository does not publish current GitHub releases or release tags.
- n8n tracks the latest `n8n-io/n8n-docs` `main` commit because that repository does not publish releases or tags.
- FFmpeg and SearXNG track their latest `master` commits because they do not publish stable GitHub releases.
- Branch-tracked projects record both the immutable commit that produced the published snapshot and a normalized `documentationDigest`. The latest inspected branch head is recorded separately; when a new head produces the same digest after commit tokens are removed, only that observation advances and the generated corpus does not churn. Immutable source archives are cached by commit SHA, so a resumed build does not download the same repository again.
- PostgreSQL 18 tracks the highest `REL_18_<minor>` tag in `postgres/postgres`, which publishes no GitHub releases. The series pin follows that major version's own maintenance releases and nothing else: beta and release-candidate tags do not match, a pin never moves backwards, and a tag that is repointed at a different commit fails the update rather than silently changing the corpus.
- discord.py tracks the highest final `vX.Y.Z` tag because the repository publishes stable tags but does not create GitHub Releases. Prerelease and unrelated tags are ignored, a pin never moves backwards, and a moved tag fails reconciliation.
- NetBird public documentation is maintained in the separate, untagged `netbirdio/docs` repository. A NetBird update is accepted only after that repository contains the exact `Update API pages with <tag>` commit. Until then, the previous complete product/docs pair remains published.
- Apple exposes a live DocC catalog rather than release tags or an immutable repository. The generator checks the public index daily, partitions every indexed page into one non-overlapping catalog, and pins each catalog with two SHA-256 digests: a `snapshotDigest` over the catalog inventory, which the daily run re-derives from a few hundred index documents, and a `contentDigest` over the exact render payload bytes every published page was converted from, which a full build computes. The inexpensive daily inventory check cannot detect a prose-only edit that leaves every index unchanged; such edits are detected only by an explicit full rebuild (`DOCC_REBUILD=1`, normally with a fresh cache). A captured Apple snapshot remains committed when the live endpoint changes, and Apple does not provide historical render JSON from which an old snapshot can be regenerated.
- Generated files are committed so repository clones, GitHub's file browser,
  raw GitHub URLs, and local tools all expose the same corpus. `llms.txt` links
  to each project index, while `llms-full.txt` and the volume names recorded in
  each manifest provide complete-corpus access without a separate deployment.

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
  llms-full.001.txt  # present when the corpus requires volumes
  manifest.json
  LICENSE.upstream
  pages/
```

Project directories are named after the identifiers in `config/sources.json`: `traefik`, `netbird`, `podman`, `docker`, `container`, `n8n`, `grafana`, `victoriametrics`, `victorialogs`, `victoriametrics-datasource`, `victorialogs-datasource`, `vmestimator`, `zitadel`, `ffmpeg`, `yt-dlp`, `searxng`, `bun`, `trigger-dev`, `aria2`, `postgres-18`, `vastai`, `runpod`, `discord-py-self`, `discord-py`, `apple-swift`, `apple-swiftui`, `apple-webkit`, `apple-xcode`, `apple-ios`, `apple-macos`, `apple-watchos`, and `apple-frameworks`.

Corpora below the retrieval-shard threshold use one `llms-full.txt`. Larger corpora keep `llms-full.txt` as a checksum-bearing ordered index and store the complete text in deterministic numbered volumes capped at 8 MiB. This is comfortably below GitHub's 100 MiB hard limit and lets retrieval clients fetch a useful slice without downloading a tens-of-megabytes archival chunk; standalone pages remain the most selective interface.

Every manifest records a schema version, a generator behavior version, a SHA-256 digest over the runtime converter source and locked dependency graph, complete volume metadata, and an output digest covering pages, indexes, corpora, and the upstream license. A snapshot therefore identifies both the upstream bytes and the exact converter revision that transformed them.

## Generated-artifact retention

The main repository intentionally retains the generator, lock file, manifests,
indexes, normalized pages, and corpus volumes together so a commit is a complete
auditable snapshot. Git history is therefore part of the storage cost, not an
accidental cache. Maintainers should review `git count-objects -vH`, total
checkout size, and per-project manifest size deltas before large imports and at
least quarterly. If ordinary clones become impractical, new large immutable
corpus volumes move to GitHub Release assets or object storage while source,
locks, checksums, and retrieval indexes remain here; existing history is not
rewritten as part of a routine update. A separate snapshot repository with an
explicit retention window is the fallback when raw access to every generated
page and a small generator repository can no longer coexist. GitHub Pages is
not a storage or serving fallback.

## Source-specific conversion

- Traefik follows `docs/mkdocs.yml` navigation from the release tag and expands MkDocs include fragments.
- NetBird converts MDX through a fail-closed AST transform with explicit handling for its documentation components. It includes public docs from the release-matched docs commit and technical architecture Markdown from the product tag.
- Podman templates are expanded by a non-executing TypeScript implementation of the tagged repository's preprocessing rules before collecting command/man-page Markdown, tutorials, bindings, and operational documentation.
- Docker follows the Hugo content tree and vendored module mounts at the pinned `docker/docs` commit, expands its documentation shortcodes, and generates CLI, OpenAPI, glossary, and sample reference pages from checked-in data without executing Hugo or upstream code.
- Apple container publishes the release-tagged repository guide, build instructions, user guides, tutorials, and checked-in CLI command reference, with relative links and assets pinned to the immutable release commit.
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
- aria2 converts the release-pinned English Sphinx sources for the aria2c manual, project guide, libaria2 reference, and technical notes without executing Sphinx or upstream Python. The libaria2 API is generated deterministically from the pinned public C++ header.
- PostgreSQL assembles the DocBook book from the entities `doc/src/sgml/postgres.sgml` declares and converts it to Markdown without executing the upstream Make, Meson, Perl, or XSLT toolchain. Pages are split the way the manual is published — one per part, chapter, top-level section, and reference entry — and cross references, links, and footnote references resolve against the whole book. The error-code, wait-event, SQL-conformance, key-word, and Meson-target tables that the upstream build generates are reproduced from the same checked-in data files outside `doc/`.
- Vast.ai publishes the pages its `docs.json` navigation declares and, for the navigation group that names a specification without listing pages, generates one page per endpoint the way the site itself does — routed by tag and operation summary from `api-reference/openapi.yaml`.
- Runpod publishes the pages its `docs.json` navigation declares, renders each API reference page from the OpenAPI operation the page names in front matter, and substitutes each glossary tooltip with the term it labels, parsed from the checked-in module rather than executed.
- discord.py-self and discord.py convert their release-pinned Sphinx RST guides and API-reference layout directly. Autodoc descriptions and public members are reproduced by statically extracting checked-in Python signatures and docstrings; Sphinx, extension modules, and library code are never executed.
- Neither Vast.ai nor Runpod publishes its documentation repository under a license; both snapshots carry a copyright notice in `LICENSE.upstream` instead of a grant.
- Apple walks every internal page in the public DocC framework indexes and converts render JSON directly to Markdown without a browser. The eight catalogs cover Swift, SwiftUI, WebKit and Safari, Xcode and developer tools, platform-exclusive iOS/macOS/watchOS frameworks, and every remaining cross-platform, tvOS, visionOS, DriverKit, and hardware framework without duplicating pages between catalogs. Same-path Swift, Objective-C, and data variants are materialized from DocC JSON patches and combined in one page. Declarations, availability, prose, lists, tables, asides, REST schemas, relationships, topic groups, media, samples, and stable anchors are preserved; internal links stay local within a catalog and cross-catalog links resolve to Apple.

## Local commands

```sh
bun ci
bun run update
bun run check
```

`bun run update` contacts the GitHub API, checks Apple's DocC catalogs, downloads source archives only when stable pins change, and writes `build-report.json` describing anything it had to hold back plus per-project request counts and elapsed time. Immutable GitHub archives are cached by commit SHA under the operating system's temporary directory; set `GITHUB_ARCHIVE_CACHE_DIR` to retain them at a deliberate location. `bun run build` rebuilds commit-backed projects from `sources.lock.json` and retains already-captured DocC projects because Apple does not serve historical snapshots. `bun run src/cli.ts report` renders the last report as the tracking-issue body. Set `SOURCE_CONCURRENCY` to bound simultaneous source resolution, `DOCC_CONCURRENCY` to control concurrent Apple reads, `DOCC_CACHE_DIR` to retain render JSON between interrupted runs, `DOCC_CACHE_TTL` to control cache freshness in seconds, `DOCC_REFRESH=1` to bypass the cache, or `DOCC_REBUILD=1` to rebuild a captured catalog when its exact render JSON remains cached.

## Adding a project

Add project metadata to `config/sources.json`, extend the `ProjectId` type, and implement a source-specific adapter under `src/projects/`. Adapters must select authoritative source files, exclude generated duplicates and assets, preserve upstream licensing, and fail rather than silently discard unsupported source constructs. Collect documents through `DocumentCollector` so that a page the adapter cannot convert is quarantined and reported instead of failing the whole project, and add the project's expected-to-be-resolved source syntax to `unresolvedSyntax` in `src/quarantine.ts`.

## License

The generator is MIT licensed. Generated project directories carry the upstream terms in `LICENSE.upstream`: the project's own license where one is published, and otherwise a copyright notice naming the source and stating that no license was granted. Upstream documentation remains governed by its original terms, and a snapshot taken without a license grant is reproduced as a machine-readable reference only.
