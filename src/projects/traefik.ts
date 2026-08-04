import path from "node:path";
import { parse as parseYaml } from "yaml";
import {
  exists,
  readUtf8,
  resolveWithin,
  withRepositoryArchive,
} from "../files.ts";
import {
  cleanMarkdown,
  documentTitle,
  githubBlobUrl,
  githubRawUrl,
  normalizeSpacing,
  parseFrontmatter,
  rewriteMarkdownLinks,
} from "../markdown.ts";
import type {
  Document,
  LockedSource,
  ProjectBuild,
  SourceProject,
} from "../types.ts";

interface NavPage {
  readonly label: string;
  readonly sourcePath: string;
  readonly section?: string;
}

export async function buildTraefik(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const mkdocs = parseYaml(await readUtf8(root, "docs/mkdocs.yml")) as {
        nav?: unknown;
      };
      const pages = uniquePages(flattenNav(mkdocs.nav));
      const documents: Document[] = [];
      for (const page of pages) {
        const sourcePath = `docs/content/${page.sourcePath}`;
        if (!(await exists(path.join(root, sourcePath)))) {
          throw new Error(`Traefik nav references missing page: ${sourcePath}`);
        }
        const raw = await readUtf8(root, sourcePath);
        const frontmatter = parseFrontmatter(raw);
        const expanded = await expandIncludes(
          root,
          sourcePath,
          frontmatter.body,
          new Set([sourcePath]),
        );
        const body = rewriteMarkdownLinks(
          cleanMarkdown(expanded),
          (url, kind) =>
            resolveTraefikLink(
              url,
              kind,
              sourcePath,
              project.repository,
              lock,
              archiveFiles,
            ),
        );
        documents.push({
          sourcePath,
          outputPath: `pages/${page.sourcePath}`,
          title:
            documentTitle(body, frontmatter.attributes, sourcePath) ||
            page.label,
          body,
          canonicalUrl: githubBlobUrl(
            project.repository,
            lock.sourceCommit,
            sourcePath,
          ),
          ...(page.section ? { section: page.section } : {}),
        });
      }
      return {
        project,
        lock,
        documents,
        notes: [
          "Pages follow docs/mkdocs.yml navigation order from the immutable release tag.",
          "MkDocs include fragments are expanded; repeated commercial callouts and non-text assets are omitted.",
        ],
        licenseText: await readUtf8(root, "LICENSE.md"),
      };
    },
    (sourcePath) =>
      sourcePath === "docs/mkdocs.yml" ||
      sourcePath === "LICENSE.md" ||
      /^docs\/content\/.*\.md$/.test(sourcePath),
  );
}

function uniquePages(pages: readonly NavPage[]): NavPage[] {
  const seen = new Set<string>();
  return pages.filter((page) => {
    if (seen.has(page.sourcePath)) {
      return false;
    }
    seen.add(page.sourcePath);
    return true;
  });
}

function flattenNav(
  value: unknown,
  sections: readonly string[] = [],
): NavPage[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const pages: NavPage[] = [];
  for (const entry of value) {
    if (typeof entry === "string") {
      pages.push({
        label: path.basename(entry, path.extname(entry)),
        sourcePath: entry,
        ...(sections[0] ? { section: sections[0] } : {}),
      });
      continue;
    }
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      continue;
    }
    for (const [label, target] of Object.entries(entry)) {
      if (typeof target === "string") {
        pages.push({
          label: label.replace(/<[^>]+>/g, "").trim(),
          sourcePath: target,
          ...(sections[0] ? { section: sections[0] } : {}),
        });
      } else {
        pages.push(
          ...flattenNav(target, [
            ...sections,
            label.replace(/<[^>]+>/g, "").trim(),
          ]),
        );
      }
    }
  }
  return pages;
}

async function expandIncludes(
  root: string,
  sourcePath: string,
  source: string,
  stack: ReadonlySet<string>,
): Promise<string> {
  const pattern =
    /{%\s*include-markdown\s+["']([^"']+)["'][^%]*%}|--8<--\s+["']([^"']+)["']/g;
  let cursor = 0;
  let result = "";
  for (const match of source.matchAll(pattern)) {
    const index = match.index;
    const include = match[1] ?? match[2];
    if (index === undefined || !include) {
      continue;
    }
    result += source.slice(cursor, index);
    cursor = index + match[0].length;
    if (include.endsWith("traefik-for-business-applications.md")) {
      continue;
    }
    const candidates = [
      path.posix.normalize(
        path.posix.join(path.posix.dirname(sourcePath), include),
      ),
      path.posix.normalize(path.posix.join("docs/content", include)),
      path.posix.normalize(path.posix.join("docs", include)),
    ];
    const includePath = await firstExisting(root, candidates);
    if (!includePath) {
      throw new Error(
        `Unable to resolve Traefik include ${include} from ${sourcePath}`,
      );
    }
    if (stack.has(includePath)) {
      throw new Error(`Circular Traefik include detected: ${includePath}`);
    }
    const content = parseFrontmatter(await readUtf8(root, includePath)).body;
    result += await expandIncludes(
      root,
      includePath,
      content,
      new Set([...stack, includePath]),
    );
  }
  return normalizeSpacing(result + source.slice(cursor));
}

async function firstExisting(
  root: string,
  candidates: readonly string[],
): Promise<string | undefined> {
  for (const candidate of candidates) {
    if (await exists(resolveWithin(root, candidate))) {
      return candidate;
    }
  }
  return undefined;
}

function resolveTraefikLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  repository: string,
  lock: LockedSource,
  archiveFiles: ReadonlySet<string>,
): string | undefined {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) {
    if (!url.startsWith("/")) {
      return url;
    }
  }
  const match = url.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? url;
  const suffix = match?.[2] ?? "";
  let resolved = pathname.startsWith("/")
    ? path.posix.join("docs/content", pathname)
    : path.posix.normalize(
        path.posix.join(path.posix.dirname(sourcePath), pathname),
      );
  if (resolved.startsWith("docs/assets/")) {
    resolved = resolved.replace(/^docs\/assets\//, "docs/content/assets/");
  }
  if (
    kind === "image" ||
    (path.posix.extname(resolved) && !resolved.endsWith(".md"))
  ) {
    if (!archiveFiles.has(resolved)) {
      return undefined;
    }
    return `${githubRawUrl(repository, lock.sourceCommit, resolved)}${suffix}`;
  }
  if (resolved.startsWith("docs/content/")) {
    const version =
      lock.tag.match(/^v(\d+\.\d+)/)?.[1] ?? lock.tag.replace(/^v/, "");
    let route = resolved.replace(/^docs\/content\//, "").replace(/\.md$/, "");
    route = route.replace(/(^|\/)index$/, "$1");
    return `https://doc.traefik.io/traefik/v${version}/${route}${suffix}`;
  }
  return `${githubBlobUrl(repository, lock.sourceCommit, resolved)}${suffix}`;
}
