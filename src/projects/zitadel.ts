import path from "node:path";
import { listFiles, readUtf8, withRepositoryArchive } from "../files.ts";
import {
  documentTitle,
  githubBlobUrl,
  githubRawUrl,
  parseFrontmatter,
  rewriteMarkdownLinks,
} from "../markdown.ts";
import { convertMdx } from "../mdx.ts";
import type { MdxImport } from "../mdx.ts";
import type {
  Document,
  LockedSource,
  ProjectBuild,
  SourceProject,
} from "../types.ts";

const contentRoot = "apps/docs/content";
const siteBase = "https://zitadel.com/docs";
const pageExtensions = [".mdx", ".md"] as const;
// Files the documentation imports to render code samples inside a page.
const sampleExtensions = /\.(?:Caddyfile|conf|go|json|ya?ml)$/;

const sections: Record<string, string> = {
  apis: "API reference",
  concepts: "Concepts",
  examples: "Examples",
  guides: "Guides",
  legal: "Legal",
  product: "Product",
  "sdk-examples": "SDK examples",
  "self-hosting": "Self-hosting",
  support: "Support",
};

export async function buildZitadel(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const files = await listFiles(root);
      const sources = new Map<string, string>();
      for (const file of files.filter(isReadableSource)) {
        const source = await readUtf8(root, file);
        sources.set(
          file,
          pageExtensions.some((extension) => file.endsWith(extension))
            ? repairFrontmatter(source)
            : source,
        );
      }
      const pages = files.filter(isPage);
      const routes = new Set(pages.map(pageRoute));
      const documents: Document[] = [];
      for (const sourcePath of pages) {
        const source = sources.get(sourcePath);
        if (source === undefined) {
          throw new Error(`Unread ZITADEL page ${sourcePath}`);
        }
        const converted = convertMdx(source, sourcePath, {
          resolveImport: (specifier, fromPath) =>
            resolveImport(specifier, fromPath, sources),
        });
        const body = rewriteMarkdownLinks(converted.body, (url, kind) =>
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
        documents.push({
          sourcePath,
          outputPath: `pages/${pageRoute(sourcePath) || "index"}.md`,
          title: converted.title ?? documentTitle(body, {}, sourcePath),
          body,
          canonicalUrl: `${siteBase}/${pageRoute(sourcePath)}`,
          section: pageSection(sourcePath),
        });
      }
      return {
        project,
        lock,
        documents,
        notes: [
          "Pages come from the Fumadocs content tree in apps/docs/content; underscore-prefixed partials are inlined into the pages that import them.",
          "Interactive elements the site renders from JavaScript - framework pickers, benchmark charts, permission and PII tables, and React partials such as the quick start console walkthroughs - are omitted because they carry no static prose.",
          "Cross-references keep their published form on https://zitadel.com/docs; images and imported sample files point at the pinned commit on GitHub.",
        ],
        licenseText: await readUtf8(root, "LICENSE"),
      };
    },
    isArchivePath,
  );
}

// An upstream page wraps a quoted frontmatter value onto a second line without
// indenting it, which YAML only accepts as a continuation once it is indented.
function repairFrontmatter(source: string): string {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match?.[1]) {
    return source;
  }
  try {
    parseFrontmatter(source);
    return source;
  } catch {
    const block = match[1]
      .split("\n")
      .map((line) =>
        /^(?:\s|-\s|#)|^[A-Za-z_][\w.-]*\s*:|^$/.test(line)
          ? line
          : `  ${line}`,
      )
      .join("\n");
    const repaired = source.replace(match[1], block);
    parseFrontmatter(repaired);
    return repaired;
  }
}

function isArchivePath(sourcePath: string): boolean {
  return (
    sourcePath === "LICENSE" ||
    sourcePath === "cmd/defaults.yaml" ||
    sourcePath === "cmd/setup/steps.yaml" ||
    (sourcePath.startsWith(`${contentRoot}/`) && isReadableSource(sourcePath))
  );
}

function isReadableSource(sourcePath: string): boolean {
  return (
    pageExtensions.some((extension) => sourcePath.endsWith(extension)) ||
    sampleExtensions.test(sourcePath)
  );
}

function isPage(sourcePath: string): boolean {
  if (
    !sourcePath.startsWith(`${contentRoot}/`) ||
    !pageExtensions.some((extension) => sourcePath.endsWith(extension))
  ) {
    return false;
  }
  const relative = sourcePath.slice(contentRoot.length + 1);
  // The site publishes neither the archived version trees at the content root
  // nor the underscore-prefixed partials pages import.
  return (
    !/^v[^/]*\//.test(relative) &&
    !relative.split("/").some((segment) => segment.startsWith("_"))
  );
}

function pageRoute(sourcePath: string): string {
  return sourcePath
    .slice(contentRoot.length + 1)
    .replace(/\.mdx?$/, "")
    .replace(/(^|\/)index$/, "");
}

function pageSection(sourcePath: string): string {
  const first = pageRoute(sourcePath).split("/")[0] ?? "";
  return sections[first] ?? "Overview";
}

function resolveImport(
  specifier: string,
  fromPath: string,
  sources: ReadonlyMap<string, string>,
): MdxImport | undefined {
  if (specifier === "lucide-react") {
    return { kind: "omitted", sourcePath: specifier, source: "" };
  }
  if (!specifier.startsWith(".")) {
    return undefined;
  }
  const resolved = path.posix.normalize(
    path.posix.join(path.posix.dirname(fromPath), specifier),
  );
  for (const candidate of [
    resolved,
    ...pageExtensions.map((extension) => `${resolved}${extension}`),
    ...pageExtensions.map((extension) => `${resolved}/index${extension}`),
  ]) {
    const source = sources.get(candidate);
    if (source !== undefined) {
      return {
        kind: pageExtensions.some((extension) => candidate.endsWith(extension))
          ? "mdx"
          : "text",
        sourcePath: candidate,
        source,
      };
    }
  }
  return undefined;
}

function resolveLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  routes: ReadonlySet<string>,
  archiveFiles: ReadonlySet<string>,
  repository: string,
  ref: string,
): string | undefined {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) {
    return url;
  }
  const match = url.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? url;
  const suffix = match?.[2] ?? "";
  if (!pathname) {
    return `${siteBase}/${pageRoute(sourcePath)}${suffix}`;
  }
  if (pathname.startsWith("/")) {
    // Site-absolute paths are written with and without the documentation base
    // path; both address the same published page or public asset.
    const published = pathname.replace(/^\/docs(?=\/|$)/, "");
    const asset = assetUrl(
      `apps/docs/public${published}`,
      kind,
      archiveFiles,
      repository,
      ref,
    );
    // Paths that no file backs address the published site, which also serves the
    // API reference generated outside this repository.
    return `${asset ?? `${siteBase}${published.replace(/\/$/, "")}`}${suffix}`;
  }
  const resolved = path.posix.normalize(
    path.posix.join(path.posix.dirname(sourcePath), pathname),
  );
  const route = resolved.startsWith(`${contentRoot}/`)
    ? resolved.slice(contentRoot.length + 1).replace(/\/$/, "")
    : undefined;
  if (route !== undefined && kind === "link" && routes.has(route)) {
    return `${siteBase}/${route}${suffix}`;
  }
  const asset = assetUrl(resolved, kind, archiveFiles, repository, ref);
  return asset === undefined ? undefined : `${asset}${suffix}`;
}

function assetUrl(
  sourcePath: string,
  kind: "link" | "image",
  archiveFiles: ReadonlySet<string>,
  repository: string,
  ref: string,
): string | undefined {
  if (!archiveFiles.has(sourcePath)) {
    return undefined;
  }
  return kind === "image"
    ? githubRawUrl(repository, ref, sourcePath)
    : githubBlobUrl(repository, ref, sourcePath);
}
