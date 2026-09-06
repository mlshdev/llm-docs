import path from "node:path";
import { listFiles, readUtf8, withRepositoryArchive } from "../files.ts";
import {
  documentTitle,
  githubBlobUrl,
  githubRawUrl,
  normalizeSpacing,
  rewriteMarkdownLinks,
} from "../markdown.ts";
import { convertMdx } from "../mdx.ts";
import type { MdxImport } from "../mdx.ts";
import { DocumentCollector } from "../quarantine.ts";
import type { LockedSource, ProjectBuild, SourceProject } from "../types.ts";

const siteBase = "https://bun.com/docs";

export async function buildBun(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const files = await listFiles(root);
      const sources = new Map<string, string>();
      for (const sourcePath of files.filter(isReadableSource)) {
        sources.set(sourcePath, await readUtf8(root, sourcePath));
      }
      const pages = files.filter(isPage).sort(compareCodePoints);
      const routes = new Set(pages.map(pageRoute));
      const documents = new DocumentCollector(project.id);
      for (const sourcePath of pages) {
        await documents.collect(sourcePath, async () => {
          const source = sources.get(sourcePath);
          if (source === undefined) {
            throw new Error(`Unread Bun page ${sourcePath}`);
          }
          let converted: ReturnType<typeof convertMdx>;
          try {
            converted = convertMdx(normalizeBunMdx(source), sourcePath, {
              resolveImport: (specifier, fromPath) =>
                resolveImport(specifier, fromPath, sources),
            });
          } catch (error) {
            throw new Error(`Unable to convert Bun MDX page ${sourcePath}`, {
              cause: error,
            });
          }
          let body = rewriteMarkdownLinks(converted.body, (url, kind) =>
            resolveLink(
              url,
              kind,
              sourcePath,
              routes,
              archiveFiles,
              project.repository,
              lock.sourceCommit,
            ),
          );
          const title = converted.title ?? documentTitle(body, {}, sourcePath);
          if (!/^#\s+/m.test(body)) {
            body = normalizeSpacing(`# ${title}\n\n${body}`);
          }
          return {
            sourcePath,
            outputPath: `pages/${pageRoute(sourcePath) || "index"}.md`,
            title,
            body,
            canonicalUrl: `${siteBase}/${pageRoute(sourcePath)}`,
            section: sectionFor(sourcePath),
          };
        });
      }
      return {
        project,
        lock,
        documents: documents.documents,
        quarantined: documents.quarantined,
        notes: [
          "Pages come from the release-tagged Mintlify documentation tree under docs; snippets are inlined rather than published as duplicate pages.",
          "Static MDX cards, tabs, accordions, steps, callouts, and media frames are normalized to Markdown without executing JavaScript.",
          "Published page links resolve to https://bun.com/docs; source assets point at the immutable release commit.",
        ],
        licenseText: await readUtf8(root, "LICENSE.md"),
      };
    },
    (sourcePath) =>
      sourcePath === "LICENSE.md" ||
      /^docs\/.*\.(?:mdx|md|jsx)$/.test(sourcePath),
  );
}

function isReadableSource(sourcePath: string): boolean {
  return /^docs\/.*\.(?:mdx|md|jsx)$/.test(sourcePath);
}

function isPage(sourcePath: string): boolean {
  return (
    /^docs\/.*\.mdx?$/.test(sourcePath) &&
    !sourcePath.startsWith("docs/snippets/") &&
    sourcePath !== "docs/README.md"
  );
}

function pageRoute(sourcePath: string): string {
  return sourcePath
    .slice("docs/".length)
    .replace(/\.mdx?$/, "")
    .replace(/(^|\/)index$/, "$1")
    .replace(/\/$/, "");
}

function normalizeBunMdx(source: string): string {
  return source
    .replace(/^(#{1,6}\s+.+?)\s+\{#[A-Za-z0-9_-]+\}\s*$/gm, "$1")
    .replace(/<code>\{`([^`]*)`\}<\/code>/g, "`$1`")
    .replace(/<code>([\s\S]*?)<\/code>/g, "`$1`")
    .replace(/<CardGroup(?:\s+[^>]*)?>/g, "<Cards>")
    .replace(/<\/CardGroup>/g, "</Cards>")
    .replace(/<AccordionGroup(?:\s+[^>]*)?>/g, "<Tabs>")
    .replace(/<\/AccordionGroup>/g, "</Tabs>")
    .replace(/<Accordion\b/g, "<Tab")
    .replace(/<\/Accordion>/g, "</Tab>")
    .replace(/<Frame(?:\s+[^>]*)?>/g, "<div>")
    .replace(/<\/Frame>/g, "</div>")
    .replace(/<Tip(?:\s+[^>]*)?>/g, '<Callout type="tip">')
    .replace(/<\/Tip>/g, "</Callout>")
    .replace(/<Info(?:\s+[^>]*)?>/g, '<Callout type="info">')
    .replace(/<\/Info>/g, "</Callout>")
    .replace(/<Columns(?:\s+[^>]*)?>/g, "<Column>")
    .replace(/<\/Columns>/g, "</Column>")
    .replace(/<Image\b/g, "<img")
    .replace(/<\/Image>/g, "</img>")
    .replace(/<(?:ParamField|ResponseField)\b/g, "<Property")
    .replace(/<\/(?:ParamField|ResponseField)>/g, "</Property>");
}

function resolveImport(
  specifier: string,
  fromPath: string,
  sources: ReadonlyMap<string, string>,
): MdxImport | undefined {
  const resolved = specifier.startsWith("/")
    ? path.posix.join("docs", specifier)
    : path.posix.normalize(
        path.posix.join(path.posix.dirname(fromPath), specifier),
      );
  for (const candidate of [resolved, `${resolved}.mdx`, `${resolved}.md`]) {
    const source = sources.get(candidate);
    if (source !== undefined) {
      return {
        kind: candidate.endsWith(".jsx") ? "omitted" : "mdx",
        sourcePath: candidate,
        source: candidate.endsWith(".jsx") ? source : normalizeBunMdx(source),
      };
    }
  }
  return specifier.endsWith(".jsx")
    ? { kind: "omitted", sourcePath: specifier, source: "" }
    : undefined;
}

function resolveLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  routes: ReadonlySet<string>,
  files: ReadonlySet<string>,
  repository: string,
  ref: string,
): string | undefined {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) {
    return url;
  }
  const match = url.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? url;
  const suffix = match?.[2] ?? "";
  if (pathname.startsWith("/")) {
    const route = pathname.replace(/^\/(?:docs\/)?/, "").replace(/\/$/, "");
    if (kind === "link" && routes.has(route)) {
      return `${siteBase}/${route}${suffix}`;
    }
    const assetPath = `docs/${route}`;
    if (files.has(assetPath)) {
      return `${githubRawUrl(repository, ref, assetPath)}${suffix}`;
    }
    return `${siteBase}/${route}${suffix}`;
  }
  const resolved = path.posix.normalize(
    path.posix.join(path.posix.dirname(sourcePath), pathname),
  );
  const route = resolved.startsWith("docs/")
    ? resolved
        .slice("docs/".length)
        .replace(/\.mdx?$/, "")
        .replace(/\/$/, "")
    : undefined;
  if (kind === "link" && route && routes.has(route)) {
    return `${siteBase}/${route}${suffix}`;
  }
  if (!files.has(resolved)) {
    return undefined;
  }
  const base =
    kind === "image"
      ? githubRawUrl(repository, ref, resolved)
      : githubBlobUrl(repository, ref, resolved);
  return `${base}${suffix}`;
}

function sectionFor(sourcePath: string): string {
  const first = pageRoute(sourcePath).split("/")[0];
  const names: Readonly<Record<string, string>> = {
    runtime: "Runtime",
    pm: "Package manager",
    bundler: "Bundler",
    test: "Test runner",
    guides: "Guides",
    project: "Project",
  };
  return first ? (names[first] ?? "Getting started") : "Getting started";
}

function compareCodePoints(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}
