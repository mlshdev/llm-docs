import path from "node:path";
import { compareCodePoints } from "../compare.ts";
import { listFiles, readUtf8, withRepositoryArchive } from "../files.ts";
import {
  cleanMarkdown,
  documentTitle,
  githubBlobUrl,
  githubRawUrl,
  rewriteMarkdownLinks,
} from "../markdown.ts";
import { DocumentCollector } from "../quarantine.ts";
import type {
  GithubLockedSource,
  GithubSourceProject,
  ProjectBuild,
} from "../types.ts";

const rootDocumentation = new Set([
  "README.md",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
]);

export async function buildUnsloth(
  project: GithubSourceProject,
  lock: GithubLockedSource,
): Promise<ProjectBuild> {
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    (root, files) => buildUnslothFromDirectory(project, lock, root, files),
    (sourcePath) =>
      sourcePath === "LICENSE" ||
      sourcePath === "COPYING" ||
      isDocumentation(sourcePath),
  );
}

export async function buildUnslothFromDirectory(
  project: GithubSourceProject,
  lock: GithubLockedSource,
  root: string,
  files: ReadonlySet<string>,
): Promise<ProjectBuild> {
  const pages = (await listFiles(root))
    .filter(isDocumentation)
    .sort(compareCodePoints);
  if (!pages.includes("README.md")) {
    throw new Error("Unsloth repository guide is missing");
  }
  const documents = new DocumentCollector(project.id);
  for (const sourcePath of pages) {
    await documents.collect(sourcePath, async () => {
      const source = await readUtf8(root, sourcePath);
      const body = rewriteMarkdownLinks(
        cleanMarkdown(
          sourcePath === "README.md"
            ? source.replace(/^<h1\b[\s\S]*?<\/h1>/i, "# Unsloth\n")
            : source,
        ),
        (url, kind) =>
          resolveUnslothLink(
            url,
            kind,
            sourcePath,
            files,
            project.repository,
            lock.sourceCommit,
          ),
      );
      return {
        sourcePath,
        outputPath: `pages/${sourcePath === "README.md" ? "index.md" : sourcePath}`,
        title: documentTitle(body, {}, sourcePath),
        body,
        canonicalUrl: githubBlobUrl(
          project.repository,
          lock.sourceCommit,
          sourcePath,
        ),
        section: sourcePath.startsWith("docker/")
          ? "Docker"
          : sourcePath.startsWith("studio/")
            ? "Unsloth Studio"
            : sourcePath.startsWith("unsloth/")
              ? "Unsloth Core"
              : sourcePath.startsWith("scripts/")
                ? "Development"
                : "Getting started",
      };
    });
  }
  return {
    project,
    lock,
    documents: documents.documents,
    quarantined: documents.quarantined,
    notes: [
      "Release-pinned repository Markdown covers installation, Docker, Studio, Core, and contributor guides; test fixtures, bundled agent skills, and vendored documentation are excluded.",
      "The separately published GitBook documentation at https://unsloth.ai/docs is linked but is not part of this repository snapshot.",
      "Unsloth publishes beta-suffixed desktop tags as non-prerelease GitHub Releases; pins follow GitHub's published latest-release classification.",
      "LICENSE.upstream retains both LICENSE (Apache-2.0) and COPYING (AGPL-3.0), including upstream's per-directory licensing notices.",
    ],
    licenseText: [
      "===== LICENSE =====",
      await readUtf8(root, "LICENSE"),
      "===== COPYING =====",
      await readUtf8(root, "COPYING"),
    ].join("\n\n"),
  };
}

function isDocumentation(sourcePath: string): boolean {
  return (
    rootDocumentation.has(sourcePath) ||
    (/^(?:docker|studio|unsloth|scripts)\/.*\.md$/.test(sourcePath) &&
      !/^studio\/backend\/(?:assets|vendor)\//.test(sourcePath) &&
      !sourcePath.includes("/bundled_skills/"))
  );
}

export function resolveUnslothLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  files: ReadonlySet<string>,
  repository: string,
  ref: string,
): string {
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
  const pathname = repositoryUrl?.[1] ?? relative?.[1] ?? "";
  const decoded = decodeURIComponent(pathname);
  const targetPath = path.posix.normalize(
    repositoryUrl || decoded.startsWith("/")
      ? decoded.replace(/^\/+/, "")
      : path.posix.join(path.posix.dirname(sourcePath), decoded),
  );
  const suffix = repositoryUrl?.[2] ?? relative?.[2] ?? "";
  if (
    targetPath === ".." ||
    targetPath.startsWith("../") ||
    targetPath.includes("\\") ||
    targetPath.includes("\0")
  ) {
    throw new Error(`Unsafe Unsloth link ${url} from ${sourcePath}`);
  }
  const directory = [...files].some((file) =>
    file.startsWith(`${targetPath}/`),
  );
  if (!files.has(targetPath) && !directory) {
    throw new Error(`Missing Unsloth ${kind} ${url} from ${sourcePath}`);
  }
  return `${kind === "image" ? githubRawUrl(repository, ref, targetPath) : githubBlobUrl(repository, ref, targetPath)}${suffix}`;
}
