import {
  cp,
  lstat,
  mkdir,
  readdir,
  readFile,
  rename,
  rm,
} from "node:fs/promises";
import path from "node:path";
import { rootDirectory } from "./config.ts";
import { exists, listFiles, writeUtf8 } from "./files.ts";
import { normalizeSpacing } from "./markdown.ts";
import {
  isBranchLockedSource,
  isSnapshotLockedSource,
  projectIds,
} from "./types.ts";
import type { QuarantinedDocument } from "./quarantine.ts";
import type {
  CompleteSourcesLock,
  Document,
  LockedSource,
  ProjectBuild,
  ProjectId,
  SourceProject,
} from "./types.ts";

// GitHub rejects any file above 100 MiB, and a corpus that cannot be pushed is
// not published at all. Corpora past this size are written as numbered volumes
// behind an index file that keeps the documented `llms-full.txt` entry point.
const maximumCorpusVolumeBytes = 45 * 1024 * 1024;
const maximumPagesSiteBytes = 1024 * 1024 * 1024;

// A directory listing is a navigation aid; past this many entries it is a
// megabytes-large page nobody can use, and llms.txt is the better entry point.
const maximumHtmlIndexEntries = 2_000;

interface ProjectManifest {
  readonly schemaVersion: 1;
  readonly project: string;
  readonly title: string;
  readonly homepage: string;
  readonly repository?: string;
  readonly catalog?: string;
  readonly tag: string;
  readonly releaseId?: number;
  readonly releasePublishedAt?: string;
  readonly branch?: string;
  readonly sourceCommittedAt?: string;
  readonly sourceCommit?: string;
  readonly docsCommit?: string;
  readonly snapshotDigest?: string;
  readonly contentDigest?: string;
  readonly capturedAt?: string;
  readonly documentCount: number;
  readonly corpusVolumes?: readonly string[];
  readonly quarantined?: readonly QuarantinedDocument[];
  readonly notes: readonly string[];
}

// Generated into a staging directory and swapped in only once complete, so a
// failure part-way through leaves the previously published snapshot intact for
// the caller to keep serving.
export async function writeProject(build: ProjectBuild): Promise<void> {
  const destination = path.join(rootDirectory, build.project.id);
  const staging = `${destination}.staging`;
  await rm(staging, { recursive: true, force: true });
  await mkdir(staging, { recursive: true });
  try {
    await stageProject(build, staging);
  } catch (error) {
    await rm(staging, { recursive: true, force: true });
    throw error;
  }
  await rm(destination, { recursive: true, force: true });
  await rename(staging, destination);
}

async function stageProject(
  build: ProjectBuild,
  destination: string,
): Promise<void> {
  const outputPaths = new Set<string>();
  for (const document of build.documents) {
    validateDocument(build.project.id, document);
    if (outputPaths.has(document.outputPath)) {
      throw new Error(
        `Duplicate generated path for ${build.project.id}: ${document.outputPath}`,
      );
    }
    outputPaths.add(document.outputPath);
    await writeUtf8(
      path.join(destination, document.outputPath),
      renderDocument(build.project, build.lock, document),
    );
  }
  await writeUtf8(
    path.join(destination, "llms.txt"),
    renderProjectIndex(build),
  );
  const corpusVolumes = await writeProjectCorpus(build, destination);
  await writeUtf8(
    path.join(destination, "LICENSE.upstream"),
    build.licenseText,
  );
  const manifest: ProjectManifest = {
    schemaVersion: 1,
    project: build.project.id,
    title: build.project.title,
    homepage: build.project.homepage,
    ...(build.project.kind === "github"
      ? { repository: build.project.repository }
      : { catalog: build.project.catalog }),
    tag: build.lock.tag,
    ...lockDetails(build.lock),
    documentCount: build.documents.length,
    ...(corpusVolumes.length > 1 ? { corpusVolumes } : {}),
    ...(build.quarantined.length > 0 ? { quarantined: build.quarantined } : {}),
    notes: build.notes,
  };
  await writeUtf8(
    path.join(destination, "manifest.json"),
    JSON.stringify(manifest, null, 2),
  );
}

export async function writeRootIndexes(
  projects: readonly SourceProject[],
  lock: CompleteSourcesLock,
): Promise<void> {
  const summary = [
    "# Source-pinned LLM documentation",
    "",
    "> LLM-friendly documentation generated from immutable upstream commits or content-addressed public documentation catalogs. GitHub projects track stable releases unless explicitly branch-pinned. Each project includes provenance, normalized pages, an index, and a complete corpus.",
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
    "- Docker documentation tracks the latest `main` commit because docker/docs does not publish current GitHub releases.",
    "- n8n documentation tracks the latest `main` commit because n8n-docs does not publish releases or tags.",
    "- NetBird updates only after the separate documentation repository contains the API-generation commit for the same product tag.",
    "- Apple documentation is captured from the public DocC index and render endpoints. Its live catalog has no release identifier, so each catalog is pinned by a SHA-256 digest of its index inventory and HTTP publication validators.",
  ];
  await writeUtf8(path.join(rootDirectory, "llms.txt"), summary.join("\n"));

  const full: string[] = [
    "# Source-pinned LLM documentation",
    "",
    "This file combines the commit-backed project corpora listed below. DocC catalogs and corpora published as numbered volumes are referenced rather than inlined, because a combined file above 100 MiB cannot be pushed to GitHub.",
  ];
  for (const project of projects) {
    const volumes = await corpusVolumesOf(project.id);
    full.push("", `# ${project.title} ${lock.projects[project.id].tag}`, "");
    if (project.kind === "docc" || volumes.length > 1) {
      full.push(
        volumes.length > 1
          ? `Published as ${volumes.length - 1} volumes:`
          : "Complete corpus:",
        "",
        ...(volumes.length > 1 ? volumes.slice(1) : volumes).map(
          (volume) => `- ${project.id}/${volume}`,
        ),
      );
      continue;
    }
    full.push(
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
    const projectDestination = path.join(destination, project.id);
    if (project.kind === "docc") {
      await copyDoccCorporaToSite(project.id, source, projectDestination);
    } else {
      await assertNoSymlinks(source);
      await cp(source, projectDestination, { recursive: true });
    }
    await writeUtf8(
      path.join(projectDestination, "index.html"),
      await renderProjectHtmlIndex(project),
    );
    if (project.kind === "github") {
      await writeUtf8(
        path.join(projectDestination, "pages/index.html"),
        await renderPagesHtmlIndex(project),
      );
    }
  }
  await writeUtf8(path.join(destination, ".nojekyll"), "");
  const siteBytes = await directorySize(destination);
  if (siteBytes > maximumPagesSiteBytes) {
    throw new Error(
      `GitHub Pages artifact is ${siteBytes} bytes, above the GitHub-supported 1 GiB limit`,
    );
  }
}

async function copyDoccCorporaToSite(
  projectId: ProjectId,
  source: string,
  destination: string,
): Promise<void> {
  await mkdir(destination, { recursive: true });
  const files = new Set([
    "llms.txt",
    "manifest.json",
    "LICENSE.upstream",
    ...(await corpusVolumesOf(projectId)),
  ]);
  for (const fileName of files) {
    const sourceFile = path.join(source, fileName);
    const details = await lstat(sourceFile);
    if (!details.isFile()) {
      throw new Error(`Refusing to publish non-file: ${sourceFile}`);
    }
    await cp(sourceFile, path.join(destination, fileName));
  }
}

// Whether the snapshot currently on disk is the one this pin describes. The
// fallback path uses it to tell "the previous snapshot is still published" from
// "this run already overwrote it", which decides whether retaining the previous
// pin needs a rebuild.
export async function snapshotMatchesPin(
  projectId: ProjectId,
  expected: LockedSource,
): Promise<boolean> {
  const manifestPath = path.join(rootDirectory, projectId, "manifest.json");
  if (!(await exists(manifestPath))) {
    return false;
  }
  const manifest = JSON.parse(
    await readFile(manifestPath, "utf8"),
  ) as Partial<ProjectManifest>;
  return (
    manifest.tag === expected.tag &&
    manifest.sourceCommit === expected.sourceCommit &&
    manifest.docsCommit === expected.docsCommit &&
    manifest.snapshotDigest === expected.snapshotDigest &&
    manifest.contentDigest === expected.contentDigest &&
    manifest.capturedAt === expected.capturedAt
  );
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
      manifest.docsCommit !== expected.docsCommit ||
      manifest.releaseId !== expected.releaseId ||
      manifest.releasePublishedAt !== expected.releasePublishedAt ||
      manifest.branch !== expected.branch ||
      manifest.sourceCommittedAt !== expected.sourceCommittedAt ||
      manifest.snapshotDigest !== expected.snapshotDigest ||
      manifest.contentDigest !== expected.contentDigest ||
      manifest.capturedAt !== expected.capturedAt
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
  source: LockedSource,
  document: Document,
): string {
  return normalizeSpacing(
    [
      `> ${pinKind(source)} source for ${project.title} ${source.tag}: [${document.sourcePath}](${document.canonicalUrl})`,
      "",
      document.body,
    ].join("\n"),
  );
}

// Path safety is an invariant of this generator rather than a property of the
// upstream source, so it stays fatal. Source-syntax rejection is handled while
// documents are collected, where it can quarantine a single page.
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
}

function renderProjectIndex(build: ProjectBuild): string {
  const lines = [
    `# ${build.project.title} ${build.lock.tag}`,
    "",
    `> ${describeSource(build)}`,
    "",
    `- [Full documentation](llms-full.txt): Complete normalized corpus for ${build.project.title} ${build.lock.tag}.`,
    `- [Provenance manifest](manifest.json): ${isSnapshotLockedSource(build.lock) ? "Snapshot digest, capture time" : isBranchLockedSource(build.lock) ? "Source ref, commit" : "Release, commit"}, document count, and generation notes.`,
  ];
  for (const note of build.notes) {
    lines.push(`- ${note}`);
  }
  if (build.quarantined.length > 0) {
    lines.push(
      `- Quarantined sources (${build.quarantined.length}): upstream pages using constructs this generator cannot convert yet are omitted and listed in \`manifest.json\`.`,
    );
  }
  if (build.indexOverride) {
    return [...lines, "", ...build.indexOverride].join("\n");
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

function corpusHeader(build: ProjectBuild): readonly string[] {
  const lock = build.lock;
  if (isSnapshotLockedSource(lock)) {
    return [
      `# ${build.project.title} ${lock.tag}: full documentation`,
      "",
      `Source: ${build.project.homepage}`,
      `Catalog snapshot: ${lock.snapshotDigest}`,
      ...(lock.contentDigest ? [`Content digest: ${lock.contentDigest}`] : []),
      `Captured at: ${lock.capturedAt}`,
      "",
    ];
  }
  return [
    `# ${build.project.title} ${lock.tag}: full documentation`,
    "",
    ...(build.project.kind === "github"
      ? [`Source repository: https://github.com/${build.project.repository}`]
      : []),
    isBranchLockedSource(lock)
      ? `Tracked branch: ${lock.branch}`
      : `Release tag: ${lock.tag}`,
    `Source commit: ${lock.sourceCommit}`,
    ...(lock.docsCommit ? [`Documentation commit: ${lock.docsCommit}`] : []),
    "",
  ];
}

function renderCorpusDocument(document: Document): string {
  return [
    `# Document: ${document.title}`,
    "",
    `Source path: ${document.sourcePath}`,
    `Canonical source: ${document.canonicalUrl}`,
    "",
    document.body,
    "",
  ].join("\n");
}

// Returns the corpus files written, in order. A corpus that fits in one file
// keeps the single `llms-full.txt`; a larger one turns that path into an index
// of the numbered volumes that carry it.
async function writeProjectCorpus(
  build: ProjectBuild,
  destination: string,
): Promise<readonly string[]> {
  const header = corpusHeader(build).join("\n");
  const rendered = build.documents.map(renderCorpusDocument);
  const total =
    Buffer.byteLength(header) +
    rendered.reduce((sum, entry) => sum + Buffer.byteLength(entry) + 1, 0);
  if (total <= maximumCorpusVolumeBytes) {
    await writeUtf8(
      path.join(destination, "llms-full.txt"),
      [header, ...rendered].join("\n"),
    );
    return ["llms-full.txt"];
  }
  const volumes: { readonly name: string; readonly documents: number }[] = [];
  let buffer: string[] = [];
  let bufferBytes = 0;
  let documents = 0;
  const volumeHeaderBytes = Buffer.byteLength(header) + 64;
  for (const entry of rendered) {
    const entryBytes = Buffer.byteLength(entry) + 1;
    if (entryBytes + volumeHeaderBytes > maximumCorpusVolumeBytes) {
      throw new Error(
        `${build.project.id} document exceeds the ${maximumCorpusVolumeBytes}-byte corpus volume limit`,
      );
    }
    if (
      bufferBytes > 0 &&
      volumeHeaderBytes + bufferBytes + entryBytes > maximumCorpusVolumeBytes
    ) {
      volumes.push(await flush(buffer, documents));
      buffer = [];
      bufferBytes = 0;
      documents = 0;
    }
    buffer.push(entry);
    bufferBytes += entryBytes;
    documents += 1;
  }
  if (buffer.length > 0) {
    volumes.push(await flush(buffer, documents));
  }
  await writeUtf8(
    path.join(destination, "llms-full.txt"),
    [
      header,
      `This corpus is published as ${volumes.length} volumes because a single file would exceed the 100 MiB GitHub file limit. Read the volumes in order for the complete corpus.`,
      "",
      ...volumes.map(
        (volume, index) =>
          `- [Volume ${index + 1}](${volume.name}): ${volume.documents} documents.`,
      ),
      "",
    ].join("\n"),
  );
  return ["llms-full.txt", ...volumes.map((volume) => volume.name)];

  async function flush(
    entries: readonly string[],
    count: number,
  ): Promise<{ name: string; documents: number }> {
    const name = `llms-full.${String(volumes.length + 1).padStart(3, "0")}.txt`;
    await writeUtf8(
      path.join(destination, name),
      [
        `${header.trimEnd()}`,
        `Volume ${volumes.length + 1}`,
        "",
        ...entries,
      ].join("\n"),
    );
    return { name, documents: count };
  }
}

function pinKind(source: LockedSource): string {
  return isSnapshotLockedSource(source)
    ? "Snapshot-pinned"
    : isBranchLockedSource(source)
      ? "Commit-pinned"
      : "Release-pinned";
}

function lockDetails(source: LockedSource): Partial<ProjectManifest> {
  if (isSnapshotLockedSource(source)) {
    return {
      snapshotDigest: source.snapshotDigest,
      ...(source.contentDigest ? { contentDigest: source.contentDigest } : {}),
      capturedAt: source.capturedAt,
    };
  }
  if (isBranchLockedSource(source)) {
    return {
      branch: source.branch,
      sourceCommittedAt: source.sourceCommittedAt,
      sourceCommit: source.sourceCommit,
    };
  }
  return {
    releaseId: source.releaseId,
    releasePublishedAt: source.releasePublishedAt,
    sourceCommit: source.sourceCommit,
    ...(source.docsCommit ? { docsCommit: source.docsCommit } : {}),
  };
}

function describeSource(build: ProjectBuild): string {
  const lock = build.lock;
  if (isSnapshotLockedSource(lock)) {
    return `Documentation generated from Apple's public DocC endpoints at [${build.project.homepage}](${build.project.homepage}) and pinned to catalog snapshot \`${lock.snapshotDigest}\` captured at ${lock.capturedAt}.`;
  }
  const repository =
    build.project.kind === "github" ? build.project.repository : "";
  return `Documentation generated from ${isBranchLockedSource(lock) ? `the latest \`${lock.branch}\` branch commit of` : "the latest stable release of"} [${repository}](https://github.com/${repository}) and pinned to immutable source commit \`${lock.sourceCommit}\`.`;
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
    "Source-pinned LLM documentation",
    `<p>Normalized documentation from immutable upstream commits and content-addressed public catalogs.</p><ul>${items}</ul><p><a href="./llms.txt">Root llms.txt</a> <a href="./llms-full.txt">Root llms-full.txt</a></p>`,
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
    `<p>${project.kind === "github" ? `${manifest.branch ? "Commit" : "Release"}-pinned documentation from <a href="https://github.com/${escapeHtml(project.repository)}">${escapeHtml(project.repository)}</a>` : `Snapshot-pinned documentation from <a href="${escapeHtml(project.homepage)}">${escapeHtml(project.homepage)}</a>`}.</p><ul><li><a href="./llms.txt">llms.txt</a></li><li><a href="./llms-full.txt">llms-full.txt</a></li><li><a href="./manifest.json">manifest.json</a></li>${project.kind === "github" ? '<li><a href="./pages/">Normalized pages</a></li>' : ""}</ul><p><a href="../">All projects</a></p>`,
  );
}

async function corpusVolumesOf(
  projectId: ProjectId,
): Promise<readonly string[]> {
  const manifest = JSON.parse(
    await readFile(
      path.join(rootDirectory, projectId, "manifest.json"),
      "utf8",
    ),
  ) as Partial<ProjectManifest>;
  return manifest.corpusVolumes ?? ["llms-full.txt"];
}

async function renderPagesHtmlIndex(project: SourceProject): Promise<string> {
  const files = (
    await listFiles(path.join(rootDirectory, project.id, "pages"))
  ).filter((file) => file.endsWith(".md"));
  if (files.length > maximumHtmlIndexEntries) {
    return htmlPage(
      `${project.title} normalized pages`,
      `<p><a href="../">${escapeHtml(project.title)} index</a></p><p>${files.length} pages are published under this directory. Browsing them one by one is not useful at this size: use <a href="../llms.txt">llms.txt</a> for the catalog index, or the corpus volumes listed in <a href="../manifest.json">manifest.json</a>.</p>`,
    );
  }
  const pages = files
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

async function directorySize(directory: string): Promise<number> {
  let total = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    const details = await lstat(entryPath);
    if (details.isSymbolicLink()) {
      throw new Error(`Refusing to size symlink: ${entryPath}`);
    }
    total += details.isDirectory()
      ? await directorySize(entryPath)
      : details.size;
  }
  return total;
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
