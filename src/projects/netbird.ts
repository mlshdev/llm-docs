import path from "node:path";
import { listFiles, readUtf8, withRepositoryArchive } from "../files.ts";
import {
  cleanMarkdown,
  documentTitle,
  githubBlobUrl,
  githubRawUrl,
  parseFrontmatter,
  rewriteMarkdownLinks,
} from "../markdown.ts";
import { convertMdx } from "../mdx.ts";
import type {
  Document,
  LockedSource,
  ProjectBuild,
  SourceProject,
} from "../types.ts";

export async function buildNetbird(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  if (!project.docsRepository || !lock.docsCommit) {
    throw new Error(
      "NetBird requires a pinned documentation repository commit",
    );
  }
  const docsRepository = project.docsRepository;
  const docsCommit = lock.docsCommit;
  const product = await withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const files = await listFiles(root);
      const documents: Document[] = [];
      for (const sourcePath of files.filter(
        (file) =>
          file === "agent-network/README.md" ||
          /^docs\/agent-networks\/.*\.md$/.test(file),
      )) {
        const raw = await readUtf8(root, sourcePath);
        const frontmatter = parseFrontmatter(raw);
        const body = rewriteMarkdownLinks(cleanMarkdown(raw), (url, kind) =>
          resolveRepositoryLink(
            url,
            kind,
            sourcePath,
            project.repository,
            lock.sourceCommit,
            archiveFiles,
          ),
        );
        documents.push({
          sourcePath,
          outputPath: `pages/release/${sourcePath}`,
          title: documentTitle(body, frontmatter.attributes, sourcePath),
          body,
          canonicalUrl: githubBlobUrl(
            project.repository,
            lock.sourceCommit,
            sourcePath,
          ),
          section: "Release technical architecture",
        });
      }
      return {
        documents,
        licenseText: await readUtf8(root, "LICENSE"),
      };
    },
    (sourcePath) =>
      sourcePath === "LICENSE" ||
      sourcePath === "agent-network/README.md" ||
      /^docs\/agent-networks\/.*\.md$/.test(sourcePath),
  );

  const publicDocuments = await withRepositoryArchive(
    docsRepository,
    docsCommit,
    async (root, archiveFiles) => {
      const files = await listFiles(root);
      const documents: Document[] = [];
      for (const sourcePath of files.filter(
        (file) =>
          /^src\/pages\/.*\.mdx$/.test(file) &&
          !/^src\/pages\/(?:_app|_document|404)\.mdx$/.test(file),
      )) {
        const converted = convertMdx(
          await readUtf8(root, sourcePath),
          sourcePath,
        );
        const body = rewriteMarkdownLinks(converted.body, (url, kind) =>
          resolveNetbirdPublicLink(
            url,
            kind,
            sourcePath,
            docsRepository,
            docsCommit,
            archiveFiles,
          ),
        );
        documents.push({
          sourcePath: `${docsRepository}@${docsCommit}:${sourcePath}`,
          outputPath: netbirdOutputPath(sourcePath),
          title: converted.title ?? documentTitle(body, {}, sourcePath),
          body,
          canonicalUrl: githubBlobUrl(docsRepository, docsCommit, sourcePath),
          section: netbirdSection(sourcePath),
        });
      }
      return documents;
    },
    (sourcePath) => /^src\/pages\/.*\.mdx$/.test(sourcePath),
  );

  return {
    project,
    lock,
    documents: [...publicDocuments, ...product.documents],
    notes: [
      `Public docs are pinned to netbirdio/docs commit ${docsCommit}; its commit message matches ${lock.tag} and it changes generated API resource pages.`,
      "NetBird does not tag its public docs repository; non-API pages are an evergreen snapshot at that exact commit, not a formally versioned manual.",
      "Release-tagged technical architecture documents are included separately from the public documentation snapshot.",
    ],
    licenseText: product.licenseText,
  };
}

function netbirdOutputPath(sourcePath: string): string {
  const relative = sourcePath
    .replace(/^src\/pages\//, "")
    .replace(/\.mdx$/, ".md");
  return `pages/public/${relative}`;
}

function netbirdRoute(sourcePath: string): string {
  let route = sourcePath.replace(/^src\/pages\//, "").replace(/\.mdx$/, "");
  route = route.replace(/^ipa(?:\/|$)/, "api/").replace(/(^|\/)index$/, "$1");
  return route;
}

function resolveNetbirdPublicLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  repository: string,
  ref: string,
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
  if (/^[^/@\s]+@[^/\s]+\.[^/\s]+$/.test(pathname)) {
    return `mailto:${pathname}`;
  }
  if (/^www\.[^/\s]+/.test(pathname)) {
    return `https://${pathname}${suffix}`;
  }
  if (kind === "image") {
    const assetPath = pathname.startsWith("/docs-static/")
      ? `public${pathname}`
      : path.posix.normalize(
          path.posix.join(path.posix.dirname(sourcePath), pathname),
        );
    if (!archiveFiles.has(assetPath)) {
      return undefined;
    }
    return `${githubRawUrl(repository, ref, assetPath)}${suffix}`;
  }
  if (pathname.startsWith("/")) {
    const route = pathname.slice(1);
    return netbirdRouteExists(route, archiveFiles)
      ? `https://docs.netbird.io${pathname}${suffix}`
      : undefined;
  }
  const route = path.posix.normalize(
    path.posix.join(path.posix.dirname(netbirdRoute(sourcePath)), pathname),
  );
  return netbirdRouteExists(route, archiveFiles)
    ? `https://docs.netbird.io/${route}${suffix}`
    : undefined;
}

function netbirdRouteExists(
  route: string,
  archiveFiles: ReadonlySet<string>,
): boolean {
  const normalized = route.replace(/^api(?:\/|$)/, "ipa/").replace(/\/$/, "");
  if (!normalized) {
    return archiveFiles.has("src/pages/index.mdx");
  }
  return [
    `src/pages/${normalized}.mdx`,
    `src/pages/${normalized}/index.mdx`,
  ].some((candidate) => archiveFiles.has(candidate));
}

function resolveRepositoryLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  repository: string,
  ref: string,
  archiveFiles: ReadonlySet<string>,
): string | undefined {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) {
    return url;
  }
  const match = url.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? url;
  const suffix = match?.[2] ?? "";
  const resolved = pathname.startsWith("/")
    ? pathname.slice(1)
    : path.posix.normalize(
        path.posix.join(path.posix.dirname(sourcePath), pathname),
      );
  if (!archiveFiles.has(resolved)) {
    return undefined;
  }
  const sourceUrl =
    kind === "image"
      ? githubRawUrl(repository, ref, resolved)
      : githubBlobUrl(repository, ref, resolved);
  return `${sourceUrl}${suffix}`;
}

function netbirdSection(sourcePath: string): string {
  const first =
    sourcePath.replace(/^src\/pages\//, "").split("/")[0] ?? "Documentation";
  const sections: Record<string, string> = {
    "about-netbird": "About NetBird",
    "agent-network": "Agent network",
    client: "Client",
    "get-started": "Getting started",
    help: "Help and troubleshooting",
    ipa: "API reference",
    manage: "Management",
    selfhosted: "Self-hosting",
    "use-cases": "Use cases",
  };
  return sections[first] ?? "Documentation";
}
