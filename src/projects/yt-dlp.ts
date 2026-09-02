import path from "node:path";
import { readUtf8, withRepositoryArchive } from "../files.ts";
import {
  cleanMarkdown,
  documentTitle,
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

const documentationFiles = [
  "README.md",
  "CONTRIBUTING.md",
  "Maintainers.md",
  "Changelog.md",
  "supportedsites.md",
] as const;

export async function buildYtDlp(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const documents: Document[] = [];
      for (const sourcePath of documentationFiles) {
        const body = rewriteMarkdownLinks(
          cleanMarkdown(await readUtf8(root, sourcePath)),
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
        documents.push({
          sourcePath,
          outputPath: `pages/${sourcePath}`,
          title: documentTitle(body, {}, sourcePath),
          body,
          canonicalUrl: githubBlobUrl(
            project.repository,
            lock.sourceCommit,
            sourcePath,
          ),
          section: sourcePath === "README.md" ? "Manual" : "Reference",
        });
      }
      return {
        project,
        lock,
        documents,
        notes: [
          "Release-authored Markdown is normalized directly; generated binaries, man pages, and shell completions are omitted.",
          "The supported-site catalog is retained as a separate reference page.",
        ],
        licenseText: await readUtf8(root, "LICENSE"),
      };
    },
    (sourcePath) =>
      sourcePath === "LICENSE" ||
      documentationFiles.includes(
        sourcePath as (typeof documentationFiles)[number],
      ),
  );
}

function resolveLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
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
  const resolved = path.posix.normalize(
    path.posix.join(path.posix.dirname(sourcePath), pathname),
  );
  if (!files.has(resolved)) {
    return undefined;
  }
  const base =
    kind === "image"
      ? githubRawUrl(repository, ref, resolved)
      : githubBlobUrl(repository, ref, resolved);
  return `${base}${suffix}`;
}
