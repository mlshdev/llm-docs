import { cp, lstat, mkdir, readdir, readFile, rm } from "node:fs/promises";
import path from "node:path";
import { rootDirectory } from "./config.ts";
import { exists, listFiles, writeUtf8 } from "./files.ts";
import { normalizeSpacing } from "./markdown.ts";
import { mergeRedactions, redactCredentials } from "./redact.ts";
import type { Redaction, RedactionResult } from "./redact.ts";
import { projectIds } from "./types.ts";
import type {
  CompleteSourcesLock,
  Document,
  LockedSource,
  ProjectBuild,
  ProjectId,
  SourceProject,
} from "./types.ts";

const hugoShortcode = /\{\{[<%]\s*\/?\s*[a-zA-Z_]|^\{(?:width|class|style)="/m;
// The plugin README carries Hugo build directives for the site that renders it.
const hugoFrontmatterBlock = /^(?:build|sitemap):\s*$/m;

interface ProjectManifest {
  readonly schemaVersion: 1;
  readonly project: string;
  readonly title: string;
  readonly repository: string;
  readonly tag: string;
  readonly releaseId: number;
  readonly releasePublishedAt: string;
  readonly sourceCommit: string;
  readonly docsCommit?: string;
  readonly documentCount: number;
  readonly notes: readonly string[];
  readonly redactions?: readonly Redaction[];
}

export async function writeProject(
  build: ProjectBuild,
): Promise<readonly Redaction[]> {
  const results: RedactionResult[] = [];
  const redacted: ProjectBuild = {
    ...build,
    documents: build.documents.map((document) => {
      const result = redactCredentials(document.body);
      results.push(result);
      return { ...document, body: result.text };
    }),
  };
  const redactions = mergeRedactions(results);
  const destination = path.join(rootDirectory, redacted.project.id);
  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  const outputPaths = new Set<string>();
  for (const document of redacted.documents) {
    validateDocument(redacted.project.id, document);
    if (outputPaths.has(document.outputPath)) {
      throw new Error(
        `Duplicate generated path for ${redacted.project.id}: ${document.outputPath}`,
      );
    }
    outputPaths.add(document.outputPath);
    await writeUtf8(
      path.join(destination, document.outputPath),
      renderDocument(redacted.project, redacted.lock.tag, document),
    );
  }
  await writeUtf8(
    path.join(destination, "llms.txt"),
    renderProjectIndex(redacted),
  );
  await writeUtf8(
    path.join(destination, "llms-full.txt"),
    renderProjectFull(redacted),
  );
  await writeUtf8(
    path.join(destination, "LICENSE.upstream"),
    redacted.licenseText,
  );
  const manifest: ProjectManifest = {
    schemaVersion: 1,
    project: redacted.project.id,
    title: redacted.project.title,
    repository: redacted.project.repository,
    tag: redacted.lock.tag,
    releaseId: redacted.lock.releaseId,
    releasePublishedAt: redacted.lock.releasePublishedAt,
    sourceCommit: redacted.lock.sourceCommit,
    ...(redacted.lock.docsCommit
      ? { docsCommit: redacted.lock.docsCommit }
      : {}),
    documentCount: redacted.documents.length,
    notes: redacted.notes,
    ...(redactions.length > 0 ? { redactions } : {}),
  };
  await writeUtf8(
    path.join(destination, "manifest.json"),
    JSON.stringify(manifest, null, 2),
  );
  return redactions;
}

export async function writeRootIndexes(
  projects: readonly SourceProject[],
  lock: CompleteSourcesLock,
): Promise<void> {
  const summary = [
    "# Release-pinned LLM documentation",
    "",
    "> LLM-friendly documentation generated from immutable stable release tags. Each project includes provenance, normalized pages, an index, and a full concatenated corpus.",
    "",
    "## Projects",
    "",
    ...projects.map((project) => {
      const source = lock.projects[project.id];
      return `- [${project.title} ${source.tag}](${project.id}/llms.txt): [full corpus](${project.id}/llms-full.txt), [manifest](${project.id}/manifest.json)`;
    }),
    "",
    "## Update policy",
    "",
    "- Drafts and prereleases are ignored.",
    "- Stable releases are discovered by scheduled GitHub API reconciliation.",
    "- NetBird updates only after the separate documentation repository contains the API-generation commit for the same product tag.",
  ];
  await writeUtf8(path.join(rootDirectory, "llms.txt"), summary.join("\n"));

  const full: string[] = [
    "# Release-pinned LLM documentation",
    "",
    "This file combines the complete project corpora listed below.",
  ];
  for (const project of projects) {
    full.push(
      "",
      `# ${project.title} ${lock.projects[project.id].tag}`,
      "",
      await readFile(
        path.join(rootDirectory, project.id, "llms-full.txt"),
        "utf8",
      ),
    );
  }
  await writeUtf8(path.join(rootDirectory, "llms-full.txt"), full.join("\n"));
}

export async function buildSite(
  projects: readonly SourceProject[],
): Promise<void> {
  const destination = path.join(rootDirectory, "_site");
  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  for (const fileName of ["llms.txt", "llms-full.txt"] as const) {
    await cp(
      path.join(rootDirectory, fileName),
      path.join(destination, fileName),
    );
  }
  await writeUtf8(
    path.join(destination, "index.html"),
    renderHtmlIndex(projects),
  );
  for (const project of projects) {
    const source = path.join(rootDirectory, project.id);
    await assertNoSymlinks(source);
    await cp(source, path.join(destination, project.id), { recursive: true });
    await writeUtf8(
      path.join(destination, project.id, "index.html"),
      await renderProjectHtmlIndex(project),
    );
    await writeUtf8(
      path.join(destination, project.id, "pages/index.html"),
      await renderPagesHtmlIndex(project),
    );
  }
  await writeUtf8(path.join(destination, ".nojekyll"), "");
}

export async function verifyOutputs(
  projects: readonly SourceProject[],
  lock: CompleteSourcesLock,
): Promise<void> {
  for (const project of projects) {
    const directory = path.join(rootDirectory, project.id);
    for (const fileName of [
      "llms.txt",
      "llms-full.txt",
      "manifest.json",
      "LICENSE.upstream",
    ]) {
      if (!(await exists(path.join(directory, fileName)))) {
        throw new Error(`Missing generated file: ${project.id}/${fileName}`);
      }
    }
    const manifest = JSON.parse(
      await readFile(path.join(directory, "manifest.json"), "utf8"),
    ) as Partial<ProjectManifest>;
    const expected = lock.projects[project.id];
    if (
      manifest.tag !== expected.tag ||
      manifest.sourceCommit !== expected.sourceCommit ||
      manifest.docsCommit !== expected.docsCommit
    ) {
      throw new Error(
        `${project.id}/manifest.json does not match sources.lock.json`,
      );
    }
    if (
      typeof manifest.documentCount !== "number" ||
      manifest.documentCount < 1
    ) {
      throw new Error(`${project.id} generated no documents`);
    }
    const pageCount = (await listFiles(path.join(directory, "pages"))).filter(
      (file) => file.endsWith(".md"),
    ).length;
    if (pageCount !== manifest.documentCount) {
      throw new Error(
        `${project.id} manifest declares ${manifest.documentCount} documents but ${pageCount} pages exist`,
      );
    }
  }
  for (const fileName of ["llms.txt", "llms-full.txt"]) {
    if (!(await exists(path.join(rootDirectory, fileName)))) {
      throw new Error(`Missing generated root file: ${fileName}`);
    }
  }
}

function renderDocument(
  project: SourceProject,
  tag: string,
  document: Document,
): string {
  return normalizeSpacing(
    [
      `> Release-pinned source for ${project.title} ${tag}: [${document.sourcePath}](${document.canonicalUrl})`,
      "",
      document.body,
    ].join("\n"),
  );
}

function validateDocument(
  projectId: SourceProject["id"],
  document: Document,
): void {
  if (
    path.posix.isAbsolute(document.outputPath) ||
    document.outputPath.split("/").includes("..") ||
    !document.outputPath.startsWith("pages/") ||
    !document.outputPath.endsWith(".md")
  ) {
    throw new Error(
      `Unsafe generated path for ${projectId}: ${document.outputPath}`,
    );
  }
  const unresolved: Record<SourceProject["id"], RegExp> = {
    traefik:
      /{%\s*include-markdown|--8<--|\{:[^{}]+\}|(?:^|\n)\s*(?:>\s*)*(?:!!!|\?\?\?\+?)|```[^\n]*\btab=["']/m,
    netbird:
      /<\/?(?:Note|Warning|Success|Property|Properties|CodeGroup|Tiles|Button|YouTube|Badge|Guides|Resources)\b|\{\{\s*(?:title|tag|className|anchor)\s*:/,
    podman:
      /@@(?:option|include)|<<(?:subcommand|fullsubcommand|pod|container| if )/,
    grafana: /\{\{[<%]\s*\/?\s*[a-zA-Z_]|\]\(ref:|<GRAFANA[_ ]VERSION>/,
    victoriametrics: hugoShortcode,
    victorialogs: hugoShortcode,
    "victoriametrics-datasource": hugoFrontmatterBlock,
    "victorialogs-datasource": hugoFrontmatterBlock,
    vmestimator: hugoShortcode,
    zitadel:
      /<\/?(?:Admonition|ApiCard|Callout|Cards?|Column|DocCardList|DynamicCodeBlock|FrameworkSelector|GithubCodeBlock|Steps?|Tabs?)\b/,
  };
  if (unresolved[projectId].test(document.body)) {
    throw new Error(
      `Unresolved ${projectId} source syntax in ${document.sourcePath}`,
    );
  }
}

function renderProjectIndex(build: ProjectBuild): string {
  const lines = [
    `# ${build.project.title} ${build.lock.tag}`,
    "",
    `> Documentation generated from the latest stable release of [${build.project.repository}](https://github.com/${build.project.repository}) and pinned to immutable source commit \`${build.lock.sourceCommit}\`.`,
    "",
    `- [Full documentation](llms-full.txt): Complete normalized corpus for ${build.project.title} ${build.lock.tag}.`,
    "- [Provenance manifest](manifest.json): Release, commit, document count, and generation notes.",
  ];
  for (const note of build.notes) {
    lines.push(`- ${note}`);
  }
  const sections = groupBySection(build.documents);
  for (const [section, documents] of sections) {
    lines.push("", `## ${section}`, "");
    for (const document of documents) {
      lines.push(
        `- [${document.title}](${document.outputPath}): Source \`${document.sourcePath}\`.`,
      );
    }
  }
  return lines.join("\n");
}

function renderProjectFull(build: ProjectBuild): string {
  const lines = [
    `# ${build.project.title} ${build.lock.tag}: full documentation`,
    "",
    `Source repository: https://github.com/${build.project.repository}`,
    `Release tag: ${build.lock.tag}`,
    `Source commit: ${build.lock.sourceCommit}`,
    ...(build.lock.docsCommit
      ? [`Documentation commit: ${build.lock.docsCommit}`]
      : []),
    "",
  ];
  for (const document of build.documents) {
    lines.push(
      `# Document: ${document.title}`,
      "",
      `Source path: ${document.sourcePath}`,
      `Canonical source: ${document.canonicalUrl}`,
      "",
      document.body,
      "",
    );
  }
  return lines.join("\n");
}

function groupBySection(
  documents: readonly Document[],
): ReadonlyMap<string, readonly Document[]> {
  const result = new Map<string, Document[]>();
  for (const document of documents) {
    const section = document.section ?? "Documentation";
    const group = result.get(section) ?? [];
    group.push(document);
    result.set(section, group);
  }
  return result;
}

function renderHtmlIndex(projects: readonly SourceProject[]): string {
  const items = projects
    .map(
      (project) =>
        `<li><a href="./${project.id}/">${escapeHtml(project.title)}</a> <a href="./${project.id}/llms.txt">llms.txt</a> <a href="./${project.id}/llms-full.txt">llms-full.txt</a></li>`,
    )
    .join("\n");
  return htmlPage(
    "Release-pinned LLM documentation",
    `<p>Normalized documentation from immutable stable upstream releases.</p><ul>${items}</ul><p><a href="./llms.txt">Root llms.txt</a> <a href="./llms-full.txt">Root llms-full.txt</a></p>`,
  );
}

async function renderProjectHtmlIndex(project: SourceProject): Promise<string> {
  const manifest = JSON.parse(
    await readFile(
      path.join(rootDirectory, project.id, "manifest.json"),
      "utf8",
    ),
  ) as ProjectManifest;
  return htmlPage(
    `${project.title} ${manifest.tag}`,
    `<p>Release-pinned documentation from <a href="https://github.com/${escapeHtml(project.repository)}">${escapeHtml(project.repository)}</a>.</p><ul><li><a href="./llms.txt">llms.txt</a></li><li><a href="./llms-full.txt">llms-full.txt</a></li><li><a href="./manifest.json">manifest.json</a></li><li><a href="./pages/">Normalized pages</a></li></ul><p><a href="../">All projects</a></p>`,
  );
}

async function renderPagesHtmlIndex(project: SourceProject): Promise<string> {
  const pages = (await listFiles(path.join(rootDirectory, project.id, "pages")))
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const href = file.split("/").map(encodeURIComponent).join("/");
      return `<li><a href="./${href}">${escapeHtml(file)}</a></li>`;
    })
    .join("\n");
  return htmlPage(
    `${project.title} normalized pages`,
    `<p><a href="../">${escapeHtml(project.title)} index</a></p><ul>${pages}</ul>`,
  );
}

function htmlPage(title: string, body: string): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <style>body{font:18px/1.55 system-ui,sans-serif;max-width:60rem;margin:4rem auto;padding:0 1.25rem;color:#17202a;background:#f8fafc}a{color:#075985}li{margin:.55rem 0}</style>
</head>
<body><h1>${escapeHtml(title)}</h1>${body}</body>
</html>`;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const replacements: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return replacements[character] ?? character;
  });
}

async function assertNoSymlinks(directory: string): Promise<void> {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    const details = await lstat(entryPath);
    if (details.isSymbolicLink()) {
      throw new Error(`Refusing to publish symlink: ${entryPath}`);
    }
    if (details.isDirectory()) {
      await assertNoSymlinks(entryPath);
    }
  }
}

export function orderedLock(
  projects: Readonly<Record<ProjectId, LockedSource>>,
): CompleteSourcesLock {
  return {
    schemaVersion: 1,
    projects: Object.fromEntries(
      projectIds.map((id) => [id, projects[id]]),
    ) as Record<ProjectId, LockedSource>,
  };
}
