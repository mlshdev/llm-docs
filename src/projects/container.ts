import path from "node:path";
import { listFiles, readUtf8, withRepositoryArchive } from "../files.ts";
import {
  cleanMarkdown,
  documentTitle,
  githubBlobUrl,
  githubRawUrl,
  rewriteMarkdownLinks,
} from "../markdown.ts";
import { DocumentCollector } from "../quarantine.ts";
import type { LockedSource, ProjectBuild, SourceProject } from "../types.ts";

const topLevelDocumentation = new Set(["README.md", "BUILDING.md"]);

export async function buildContainer(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const files = await listFiles(root);
      const pages = files.filter(isDocumentation).sort(compareCodePoints);
      const documents = new DocumentCollector(project.id);
      for (const sourcePath of pages) {
        await documents.collect(sourcePath, async () => {
          const source = await readUtf8(root, sourcePath);
          const body = rewriteMarkdownLinks(
            cleanMarkdown(
              sourcePath === "README.md"
                ? source.replace(/^<h1\b[\s\S]*?<\/h1>/i, "# container")
                : source,
            ),
            (url, kind) =>
              resolveLink(
                url,
                kind,
                sourcePath,
                archiveFiles,
                project.repository,
                lock.sourceCommit,
              ),
          );
          return {
            sourcePath,
            outputPath: outputPathFor(sourcePath),
            title: documentTitle(body, {}, sourcePath),
            body,
            canonicalUrl: githubBlobUrl(
              project.repository,
              lock.sourceCommit,
              sourcePath,
            ),
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
          "Release-authored Markdown includes the repository guide, build instructions, user guides, tutorials, and checked-in CLI command reference.",
          "Relative links, source references, and assets resolve against the immutable release commit.",
        ],
        licenseText: await readUtf8(root, "LICENSE"),
      };
    },
    (sourcePath) =>
      sourcePath === "LICENSE" ||
      topLevelDocumentation.has(sourcePath) ||
      /^docs\/.*\.md$/.test(sourcePath),
  );
}

function isDocumentation(sourcePath: string): boolean {
  return (
    topLevelDocumentation.has(sourcePath) || /^docs\/.*\.md$/.test(sourcePath)
  );
}

function outputPathFor(sourcePath: string): string {
  if (sourcePath === "README.md") {
    return "pages/index.md";
  }
  if (sourcePath === "BUILDING.md") {
    return "pages/building.md";
  }
  return `pages/${sourcePath.slice("docs/".length)}`;
}

function sectionFor(sourcePath: string): string {
  if (sourcePath === "README.md") {
    return "Getting started";
  }
  if (sourcePath === "BUILDING.md") {
    return "Development";
  }
  if (sourcePath.startsWith("docs/tutorials/")) {
    return "Tutorials";
  }
  if (sourcePath === "docs/command-reference.md") {
    return "Command reference";
  }
  if (sourcePath === "docs/technical-overview.md") {
    return "Architecture";
  }
  if (sourcePath === "docs/bug-report-how-to.md") {
    return "Support";
  }
  return "Guides";
}

function resolveLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  files: ReadonlySet<string>,
  repository: string,
  ref: string,
): string | undefined {
  const escaped = repository.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const repositoryUrl = url.match(
    new RegExp(
      `^https://(?:github\\.com/${escaped}/(?:blob|tree)|raw\\.githubusercontent\\.com/${escaped})/[^/]+/([^?#]+)(.*)$`,
    ),
  );
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url) && !repositoryUrl) {
    return url;
  }
  const relative = url.match(/^([^?#]*)(.*)$/);
  const targetPath = repositoryUrl
    ? (repositoryUrl[1] ?? "")
    : path.posix.normalize(
        path.posix.join(path.posix.dirname(sourcePath), relative?.[1] ?? ""),
      );
  const suffix = repositoryUrl?.[2] ?? relative?.[2] ?? "";
  if (!files.has(targetPath)) {
    return undefined;
  }
  const target =
    kind === "image"
      ? githubRawUrl(repository, ref, targetPath)
      : githubBlobUrl(repository, ref, targetPath);
  return `${target}${suffix}`;
}

function compareCodePoints(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}
