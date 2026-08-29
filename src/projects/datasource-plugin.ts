import path from "node:path";
import { readUtf8, withRepositoryArchive } from "../files.ts";
import {
  cleanMarkdown,
  githubBlobUrl,
  githubRawUrl,
  rewriteMarkdownLinks,
} from "../markdown.ts";
import type {
  Document,
  LockedSource,
  ProjectBuild,
  SourceProject,
} from "../types.ts";

interface PageSpec {
  readonly sourcePath: string;
  readonly outputPath: string;
  readonly section: string;
  readonly title: (project: SourceProject) => string;
}

// The Grafana datasource plugins keep their published documentation in the
// plugin catalog README, with the repository README and changelog alongside it.
const pages: readonly PageSpec[] = [
  {
    sourcePath: "src/README.md",
    outputPath: "pages/plugin.md",
    section: "Plugin documentation",
    title: (project) => project.title,
  },
  {
    sourcePath: "README.md",
    outputPath: "pages/repository.md",
    section: "Repository",
    title: (project) => `${project.title}: repository guide`,
  },
  {
    sourcePath: "CHANGELOG.md",
    outputPath: "pages/changelog.md",
    section: "Release history",
    title: (project) => `${project.title}: changelog`,
  },
];

export function buildDatasourcePlugin(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const documents: Document[] = [];
      for (const page of pages) {
        const body = rewriteMarkdownLinks(
          cleanMarkdown(await readUtf8(root, page.sourcePath)),
          (url, kind) =>
            resolvePluginLink(
              url,
              kind,
              page.sourcePath,
              project.repository,
              lock.sourceCommit,
              archiveFiles,
            ),
        );
        documents.push({
          sourcePath: page.sourcePath,
          outputPath: page.outputPath,
          title: page.title(project),
          body,
          canonicalUrl: githubBlobUrl(
            project.repository,
            lock.sourceCommit,
            page.sourcePath,
          ),
          section: page.section,
        });
      }
      return {
        project,
        lock,
        documents,
        notes: [
          "Pages are the plugin catalog documentation, the repository guide, and the changelog at the immutable release tag.",
          "Links and screenshots that upstream pins to a branch are rewritten to the released commit.",
        ],
        licenseText: await readUtf8(root, "LICENSE"),
      };
    },
    (sourcePath) =>
      sourcePath === "LICENSE" ||
      pages.some((page) => page.sourcePath === sourcePath),
  );
}

function resolvePluginLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  repository: string,
  ref: string,
  archiveFiles: ReadonlySet<string>,
): string | undefined {
  const escaped = repository.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const branchUrl = url.match(
    new RegExp(
      `^https://(github\\.com/${escaped}/(?:blob|raw)|raw\\.githubusercontent\\.com/${escaped})/[^/]+/([^?#]+)(.*)$`,
    ),
  );
  const relative = /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)
    ? undefined
    : url.match(/^([^?#]*)(.*)$/);
  const target = branchUrl
    ? { pathname: branchUrl[2] ?? "", suffix: branchUrl[3] ?? "" }
    : relative
      ? {
          pathname: path.posix.normalize(
            path.posix.join(path.posix.dirname(sourcePath), relative[1] ?? ""),
          ),
          suffix: relative[2] ?? "",
        }
      : undefined;
  if (!target) {
    return url;
  }
  if (!target.pathname || !archiveFiles.has(target.pathname)) {
    return branchUrl ? undefined : url;
  }
  // An image has to keep rendering, so it points at the raw file rather than at
  // the page that displays it.
  return kind === "image"
    ? githubRawUrl(repository, ref, target.pathname)
    : `${githubBlobUrl(repository, ref, target.pathname)}${target.suffix}`;
}
