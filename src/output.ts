import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { link, mkdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import type { FileSink } from "bun";
import { isRecord, rootDirectory } from "./config.ts";
import {
  exists,
  listFiles,
  replaceDirectoryAtomically,
  stageDirectoryReplacement,
  writeUtf8,
  writeUtf8Atomic,
} from "./files.ts";
import { currentGeneratorDigest } from "./generator.ts";
import {
  documentLinks,
  githubBlobUrl,
  markdownLinks,
  normalizeSpacing,
  withoutFencedCode,
} from "./markdown.ts";
import {
  generatorVersion,
  manifestSchemaVersion,
  parseProjectManifest,
  serializeProjectManifest,
} from "./manifest.ts";
import type { CorpusVolumeManifest, ProjectManifest } from "./manifest.ts";
import {
  isBranchLockedSource,
  isSnapshotLockedSource,
  isTagLockedSource,
  projectIds,
} from "./types.ts";
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
export const maximumCorpusVolumeBytes = 8 * 1024 * 1024;

// Generated into a staging directory and swapped in only once complete, so a
// failure part-way through leaves the previously published snapshot intact for
// the caller to keep serving.
export async function writeProject(build: ProjectBuild): Promise<void> {
  const destination = path.join(rootDirectory, build.project.id);
  await replaceDirectoryAtomically(destination, (staging) =>
    stageProject(build, staging),
  );
}

export async function stageProjectReplacement(
  build: ProjectBuild,
): Promise<string> {
  const destination = path.join(rootDirectory, build.project.id);
  await stageDirectoryReplacement(destination, (staging) =>
    stageProject(build, staging),
  );
  return destination;
}

export async function stageProject(
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
  }
  for (const document of build.documents) {
    validateDocumentLinks(build.project.id, document, outputPaths);
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
  const outputDigest = await computeOutputDigest(
    destination,
    corpusVolumes.map((volume) => volume.name),
  );
  const manifest: ProjectManifest = {
    schemaVersion: manifestSchemaVersion,
    generatorVersion,
    generatorDigest: await currentGeneratorDigest(),
    project: build.project.id,
    title: build.project.title,
    homepage: build.project.homepage,
    ...(build.project.kind === "github"
      ? { repository: build.project.repository }
      : { catalog: build.project.catalog }),
    tag: build.lock.tag,
    ...lockDetails(build.lock),
    documentCount: build.documents.length,
    indexComplete: build.indexOverride === undefined,
    corpusVolumes,
    outputDigest,
    ...(build.quarantined.length > 0 ? { quarantined: build.quarantined } : {}),
    notes: build.notes,
  };
  await writeUtf8(
    path.join(destination, "manifest.json"),
    serializeProjectManifest(manifest),
  );
}

export function validateDocumentLinks(
  projectId: ProjectId,
  document: Document,
  outputPaths: ReadonlySet<string>,
): void {
  for (const link of documentLinks(document.body)) {
    const url = link.url.trim();
    if (!url || url.startsWith("#") || url.startsWith("?")) {
      continue;
    }
    if (url.startsWith("//") || url.startsWith("/")) {
      throw new Error(
        `${projectId} ${document.sourcePath} has a root-relative ${link.kind}: ${url}`,
      );
    }
    const scheme = url.match(/^([a-z][a-z0-9+.-]*):/i)?.[1]?.toLowerCase();
    if (scheme) {
      const allowed =
        scheme === "http" ||
        scheme === "https" ||
        (link.kind === "link" && (scheme === "mailto" || scheme === "tel")) ||
        (link.kind === "image" && scheme === "data");
      if (!allowed) {
        throw new Error(
          `${projectId} ${document.sourcePath} has an unsupported ${link.kind} scheme: ${url}`,
        );
      }
      continue;
    }
    const pathname = url.replace(/[?#].*$/, "");
    let decoded: string;
    try {
      decoded = decodeURIComponent(pathname);
    } catch {
      throw new Error(
        `${projectId} ${document.sourcePath} has an invalid encoded link: ${url}`,
      );
    }
    const resolved = path.posix.normalize(
      path.posix.join(path.posix.dirname(document.outputPath), decoded),
    );
    if (link.kind === "image" || !outputPaths.has(resolved)) {
      throw new Error(
        `${projectId} ${document.sourcePath} has a missing local ${link.kind}: ${url}`,
      );
    }
  }
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
    "- discord.py tracks the latest final semantic-version tag because the repository publishes tags but no GitHub Releases.",
    "- Qdrant documentation tracks the latest `qdrant/landing_page` `master` commit because the site publishes continuously from that branch.",
    "- NetBird updates only after the separate documentation repository contains the API-generation commit for the same product tag.",
    "- Apple documentation is captured from public DocC index and render endpoints. Each catalog is pinned by an inventory digest and a full-build render-payload digest; daily inventory reconciliation cannot detect prose-only edits, so those require an explicit fresh full rebuild.",
  ];
  await writeUtf8Atomic(
    path.join(rootDirectory, "llms.txt"),
    summary.join("\n"),
  );

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
  await writeUtf8Atomic(
    path.join(rootDirectory, "llms-full.txt"),
    full.join("\n"),
  );
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
  let manifest: ProjectManifest;
  try {
    manifest = parseProjectManifest(
      JSON.parse(await readFile(manifestPath, "utf8")),
    );
  } catch {
    return false;
  }
  return (
    manifest.tag === expected.tag &&
    manifest.sourceCommit === expected.sourceCommit &&
    manifest.docsCommit === expected.docsCommit &&
    manifest.snapshotDigest === expected.snapshotDigest &&
    manifest.contentDigest === expected.contentDigest &&
    manifest.documentationDigest === documentationDigestOf(expected) &&
    manifest.capturedAt === expected.capturedAt
  );
}

// Every path the pipeline writes, so the publishing workflow does not keep its
// own copy of the project list. A hand-maintained allowlist that misses a new
// project publishes root indexes describing it while its directory is managed
// by nobody, which is how a merged project once lost its pin.
export function generatedPaths(
  projects: readonly { readonly id: ProjectId }[],
): readonly string[] {
  return [
    "sources.lock.json",
    "llms.txt",
    "llms-full.txt",
    ...projects.map((project) => project.id),
  ];
}

export async function verifyOutputs(
  projects: readonly SourceProject[],
  lock: CompleteSourcesLock,
): Promise<void> {
  const generatorDigest = await currentGeneratorDigest();
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
    let manifest: ProjectManifest;
    try {
      manifest = parseProjectManifest(
        JSON.parse(
          await readFile(path.join(directory, "manifest.json"), "utf8"),
        ),
      );
    } catch (error) {
      throw new Error(`${project.id}/manifest.json is invalid`, {
        cause: error,
      });
    }
    if (
      manifest.project !== project.id ||
      manifest.title !== project.title ||
      manifest.homepage !== project.homepage ||
      manifest.repository !==
        (project.kind === "github" ? project.repository : undefined) ||
      manifest.catalog !==
        (project.kind === "docc" ? project.catalog : undefined)
    ) {
      throw new Error(
        `${project.id}/manifest.json does not match project configuration`,
      );
    }
    if (manifest.generatorDigest !== generatorDigest) {
      throw new Error(
        `${project.id}/manifest.json was produced by a different generator revision`,
      );
    }
    const expected = lock.projects[project.id];
    if (
      manifest.tag !== expected.tag ||
      manifest.sourceCommit !== expected.sourceCommit ||
      manifest.docsCommit !== expected.docsCommit ||
      manifest.releaseId !== expected.releaseId ||
      manifest.releasePublishedAt !== expected.releasePublishedAt ||
      manifest.branch !== expected.branch ||
      manifest.sourceCommittedAt !== expected.sourceCommittedAt ||
      manifest.taggedAt !== expected.taggedAt ||
      manifest.snapshotDigest !== expected.snapshotDigest ||
      manifest.contentDigest !== expected.contentDigest ||
      manifest.documentationDigest !== documentationDigestOf(expected) ||
      manifest.capturedAt !== expected.capturedAt
    ) {
      throw new Error(
        `${project.id}/manifest.json does not match sources.lock.json`,
      );
    }
    const pagePaths = (await listFiles(path.join(directory, "pages")))
      .filter((file) => file.endsWith(".md"))
      .map((file) => `pages/${file}`);
    for (const pagePath of pagePaths) {
      validateOutputPath(project.id, pagePath);
    }
    if (pagePaths.length !== manifest.documentCount) {
      throw new Error(
        `${project.id} manifest declares ${manifest.documentCount} documents but ${pagePaths.length} pages exist`,
      );
    }
    const index = await readFile(path.join(directory, "llms.txt"), "utf8");
    const indexPageLinks = markdownLinks(index)
      .filter((link) => link.kind === "link" && link.url.startsWith("pages/"))
      .map((link) => link.url.replace(/[?#].*$/, ""));
    const indexPages = new Set(indexPageLinks);
    if (
      indexPages.size !== indexPageLinks.length ||
      indexPageLinks.some((page) => !pagePaths.includes(page)) ||
      (manifest.indexComplete &&
        (indexPages.size !== pagePaths.length ||
          pagePaths.some((page) => !indexPages.has(page))))
    ) {
      throw new Error(
        `${project.id}/llms.txt has invalid, duplicate, or incomplete page links`,
      );
    }

    const declaredVolumeNames = manifest.corpusVolumes.map(
      (volume) => volume.name,
    );
    const projectFiles = await listFiles(directory);
    const actualVolumeNames = projectFiles
      .filter((file) => /^llms-full(?:\.\d{3})?\.txt$/.test(file))
      .sort(compareVolumeNames);
    if (
      JSON.stringify(actualVolumeNames) !== JSON.stringify(declaredVolumeNames)
    ) {
      throw new Error(
        `${project.id} corpus files do not match the manifest volume declaration`,
      );
    }
    const allowedFiles = new Set([
      ...pagePaths,
      "llms.txt",
      "manifest.json",
      "LICENSE.upstream",
      ...declaredVolumeNames,
    ]);
    const unexpectedFiles = projectFiles.filter(
      (file) => !allowedFiles.has(file),
    );
    if (unexpectedFiles.length > 0) {
      throw new Error(
        `${project.id} contains undeclared generated files: ${unexpectedFiles.slice(0, 5).join(", ")}`,
      );
    }
    for (const volume of manifest.corpusVolumes) {
      if (volume.byteLength > maximumCorpusVolumeBytes) {
        throw new Error(
          `${project.id}/${volume.name} exceeds the corpus volume limit`,
        );
      }
      const actual = await corpusVolumeManifest(
        path.join(directory, volume.name),
        volume.name,
      );
      if (
        actual.byteLength !== volume.byteLength ||
        actual.documentCount !== volume.documentCount ||
        actual.sha256 !== volume.sha256
      ) {
        throw new Error(
          `${project.id}/${volume.name} does not match its manifest metadata`,
        );
      }
    }
    const corpusDocumentCount =
      manifest.corpusVolumes.length === 1
        ? manifest.corpusVolumes[0]?.documentCount
        : manifest.corpusVolumes
            .slice(1)
            .reduce((sum, volume) => sum + volume.documentCount, 0);
    if (corpusDocumentCount !== manifest.documentCount) {
      throw new Error(
        `${project.id} corpus contains ${corpusDocumentCount} documents but the manifest declares ${manifest.documentCount}`,
      );
    }
    const outputDigest = await computeOutputDigest(
      directory,
      declaredVolumeNames,
    );
    if (outputDigest !== manifest.outputDigest) {
      throw new Error(`${project.id} generated output digest does not match`);
    }
  }
  for (const fileName of ["llms.txt", "llms-full.txt"]) {
    if (!(await exists(path.join(rootDirectory, fileName)))) {
      throw new Error(`Missing generated root file: ${fileName}`);
    }
  }
  const rootIndex = await readFile(
    path.join(rootDirectory, "llms.txt"),
    "utf8",
  );
  for (const project of projects) {
    if (!rootIndex.includes(`](${project.id}/llms.txt)`)) {
      throw new Error(`Root llms.txt does not index ${project.id}`);
    }
  }
}

function renderDocument(
  project: SourceProject,
  source: LockedSource,
  document: Document,
): string {
  const sourceUrl = pinnedSourceUrl(project, source, document);
  const provenance = sourceUrl
    ? [
        `> Pinned source for ${project.title} ${source.tag}: [${document.sourcePath}](${sourceUrl})`,
        ...(sourceUrl === document.canonicalUrl
          ? []
          : [`> Canonical documentation: ${document.canonicalUrl}`]),
      ]
    : [
        `> ${pinKind(source)} source payload for ${project.title} ${source.tag}; integrity is recorded in the provenance manifest.`,
        `> Canonical documentation: ${document.canonicalUrl}`,
      ];
  return normalizeSpacing([...provenance, "", document.body].join("\n"));
}

// Path safety is an invariant of this generator rather than a property of the
// upstream source, so it stays fatal. Source-syntax rejection is handled while
// documents are collected, where it can quarantine a single page.
function validateDocument(
  projectId: SourceProject["id"],
  document: Document,
): void {
  validateOutputPath(projectId, document.outputPath);
  if (!document.sourcePath.trim() || /[\0\r\n]/.test(document.sourcePath)) {
    throw new Error(`Invalid source path for ${projectId}`);
  }
  if (!document.title.trim() || /[\0\r\n]/.test(document.title)) {
    throw new Error(`Invalid document title for ${projectId}`);
  }
  if (!document.body.trim()) {
    throw new Error(
      `Empty document body for ${projectId}: ${document.sourcePath}`,
    );
  }
  assertHttpUrl(document.canonicalUrl, `${projectId} canonical URL`);
  if (document.sourceUrl) {
    assertHttpUrl(document.sourceUrl, `${projectId} source URL`);
  }
}

export function validateOutputPath(
  projectId: SourceProject["id"],
  outputPath: string,
): void {
  const segments = outputPath.split("/");
  if (
    path.posix.isAbsolute(outputPath) ||
    path.win32.isAbsolute(outputPath) ||
    outputPath.includes("\\") ||
    /[\0-\x1f\x7f]/.test(outputPath) ||
    segments.some(
      (segment) =>
        !segment ||
        segment === "." ||
        segment === ".." ||
        /[. ]$/.test(segment) ||
        /^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(segment),
    ) ||
    !outputPath.startsWith("pages/") ||
    !outputPath.endsWith(".md")
  ) {
    throw new Error(`Unsafe generated path for ${projectId}: ${outputPath}`);
  }
}

function assertHttpUrl(value: string, description: string): void {
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error(`${description} is invalid: ${value}`);
  }
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new Error(`${description} must use HTTP(S): ${value}`);
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
      const metadata = [
        document.documentType,
        document.beta ? "beta" : undefined,
        document.deprecated ? "deprecated" : undefined,
        `${Buffer.byteLength(document.body)} bytes`,
      ].filter(Boolean);
      lines.push(
        `- [${document.title}](${document.outputPath}): ${documentDescription(document)} (${metadata.join(", ")})`,
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
      : isTagLockedSource(lock)
        ? `Maintenance release tag: ${lock.tag}`
        : `Release tag: ${lock.tag}`,
    `Source commit: ${lock.sourceCommit}`,
    ...(lock.docsCommit ? [`Documentation commit: ${lock.docsCommit}`] : []),
    "",
  ];
}

function pinnedSourceUrl(
  project: SourceProject,
  source: LockedSource,
  document: Document,
): string | undefined {
  if (document.sourceUrl) {
    return document.sourceUrl;
  }
  if (project.kind === "docc" || isSnapshotLockedSource(source)) {
    return undefined;
  }
  if (
    /^https:\/\/github\.com\/[^/]+\/[^/]+\/blob\/[0-9a-f]{40}\//.test(
      document.canonicalUrl,
    ) ||
    /^https:\/\/raw\.githubusercontent\.com\/[^/]+\/[^/]+\/[0-9a-f]{40}\//.test(
      document.canonicalUrl,
    )
  ) {
    return document.canonicalUrl;
  }
  return githubBlobUrl(
    project.repository,
    source.sourceCommit,
    document.sourcePath,
  );
}

function documentDescription(document: Document): string {
  if (document.description?.trim()) {
    return compactDescription(document.description);
  }
  const paragraphs = withoutFencedCode(document.body).split(/\n\s*\n/);
  for (const paragraph of paragraphs) {
    const trimmed = paragraph.trim();
    if (
      !trimmed ||
      /^(?:#{1,6}\s|[-*+]\s|\d+[.)]\s|>|\||<a\s|!\[)/.test(trimmed)
    ) {
      continue;
    }
    const plain = trimmed
      .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
      .replace(/<[^>]+>/g, "")
      .replace(/[*_`~]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (plain) {
      return compactDescription(plain);
    }
  }
  return `Normalized source from ${document.sourcePath}.`;
}

function compactDescription(value: string): string {
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized.length <= 220
    ? normalized
    : `${normalized.slice(0, 219).trimEnd()}…`;
}

function renderCorpusDocument(
  project: SourceProject,
  source: LockedSource,
  document: Document,
): string {
  const sourceUrl = pinnedSourceUrl(project, source, document);
  return [
    `# Document: ${document.title}`,
    "",
    `Source path: ${document.sourcePath}`,
    ...(sourceUrl ? [`Pinned source: ${sourceUrl}`] : []),
    `Canonical documentation: ${document.canonicalUrl}`,
    `Description: ${documentDescription(document)}`,
    ...(document.documentType
      ? [`Document type: ${document.documentType}`]
      : []),
    ...(document.beta ? ["Status: beta"] : []),
    ...(document.deprecated ? ["Status: deprecated"] : []),
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
): Promise<readonly CorpusVolumeManifest[]> {
  const header = corpusHeader(build).join("\n");
  let total = Buffer.byteLength(header);
  for (const document of build.documents) {
    total +=
      Buffer.byteLength(
        renderCorpusDocument(build.project, build.lock, document),
      ) + 1;
  }
  if (total <= maximumCorpusVolumeBytes) {
    const filePath = path.join(destination, "llms-full.txt");
    await writeFreshChunks(filePath, corpusChunks(header, build));
    return [await corpusVolumeManifest(filePath, "llms-full.txt")];
  }
  const volumes: CorpusVolumeManifest[] = [];
  let volume: OpenCorpusVolume | undefined;
  for (const document of build.documents) {
    const entry = renderCorpusDocument(build.project, build.lock, document);
    const firstVolumeHeader = volumeHeader(header, volumes.length + 1);
    if (
      Buffer.byteLength(entry) + Buffer.byteLength(firstVolumeHeader) >
      maximumCorpusVolumeBytes
    ) {
      throw new Error(
        `${build.project.id} document exceeds the ${maximumCorpusVolumeBytes}-byte corpus volume limit`,
      );
    }
    if (
      volume &&
      volume.documentCount > 0 &&
      volume.byteLength + 1 + Buffer.byteLength(entry) >
        maximumCorpusVolumeBytes
    ) {
      volumes.push(await closeVolume(volume));
      volume = undefined;
    }
    volume ??= await openVolume(volumes.length + 1);
    if (volume.documentCount > 0) {
      await volume.sink.write("\n");
      volume.byteLength += 1;
    }
    await volume.sink.write(entry);
    volume.byteLength += Buffer.byteLength(entry);
    volume.documentCount += 1;
  }
  if (volume) {
    volumes.push(await closeVolume(volume));
  }
  await writeUtf8(
    path.join(destination, "llms-full.txt"),
    [
      header,
      `This corpus is published as ${volumes.length} retrieval-sized volumes. Read the volumes in order for the complete corpus.`,
      "",
      ...volumes.map(
        (volume, index) =>
          `- [Volume ${index + 1}](${volume.name}): ${volume.documentCount} documents, ${volume.byteLength} bytes, SHA-256 \`${volume.sha256}\`.`,
      ),
      "",
    ].join("\n"),
  );
  return [
    await corpusVolumeManifest(
      path.join(destination, "llms-full.txt"),
      "llms-full.txt",
    ),
    ...volumes,
  ];

  async function openVolume(index: number): Promise<OpenCorpusVolume> {
    const name = `llms-full.${String(index).padStart(3, "0")}.txt`;
    const filePath = path.join(destination, name);
    await mkdir(path.dirname(filePath), { recursive: true });
    // Staging paths are freshly created. FileSink does not truncate existing
    // files, which is why this helper is deliberately local to staged output.
    const sink = Bun.file(filePath).writer();
    const prefix = volumeHeader(header, index);
    await sink.write(prefix);
    return {
      name,
      filePath,
      sink,
      byteLength: Buffer.byteLength(prefix),
      documentCount: 0,
    };
  }

  async function closeVolume(
    open: OpenCorpusVolume,
  ): Promise<CorpusVolumeManifest> {
    await open.sink.end();
    const manifest = await corpusVolumeManifest(open.filePath, open.name);
    if (
      manifest.documentCount !== open.documentCount ||
      manifest.byteLength !== open.byteLength
    ) {
      throw new Error(
        `${build.project.id}/${open.name} did not flush completely`,
      );
    }
    return manifest;
  }
}

interface OpenCorpusVolume {
  readonly name: string;
  readonly filePath: string;
  readonly sink: FileSink;
  byteLength: number;
  documentCount: number;
}

function volumeHeader(header: string, index: number): string {
  return `${header.trimEnd()}\nVolume ${index}\n\n`;
}

function* corpusChunks(header: string, build: ProjectBuild): Generator<string> {
  yield header;
  for (const document of build.documents) {
    yield "\n";
    yield renderCorpusDocument(build.project, build.lock, document);
  }
}

async function writeFreshChunks(
  filePath: string,
  chunks: Iterable<string>,
): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  const sink = Bun.file(filePath).writer();
  for (const chunk of chunks) {
    await sink.write(chunk);
  }
  await sink.end();
}

async function corpusVolumeManifest(
  filePath: string,
  name: string,
): Promise<CorpusVolumeManifest> {
  const details = await stat(filePath);
  if (!details.isFile()) {
    throw new Error(`Corpus volume is not a regular file: ${filePath}`);
  }
  const body = await readFile(filePath, "utf8");
  return {
    name,
    byteLength: details.size,
    // The renderer emits this boundary exactly once per document. Count the
    // raw boundary rather than parsing fences: verification must still work
    // when detecting a malformed page whose fence incorrectly spans into the
    // following corpus document.
    documentCount: (body.match(/^# Document: /gm) ?? []).length,
    sha256: await sha256File(filePath),
  };
}

export async function computeOutputDigest(
  directory: string,
  volumeNames: readonly string[],
): Promise<string> {
  const pages = (await listFiles(path.join(directory, "pages")))
    .filter((file) => file.endsWith(".md"))
    .map((file) => `pages/${file}`);
  const relativePaths = [
    ...pages,
    "llms.txt",
    "LICENSE.upstream",
    ...volumeNames,
  ].sort(compareCodePoints);
  const digest = createHash("sha256");
  for (const relativePath of relativePaths) {
    const filePath = path.join(directory, relativePath);
    const details = await stat(filePath);
    if (!details.isFile()) {
      throw new Error(`Output is not a regular file: ${relativePath}`);
    }
    digest.update(relativePath);
    digest.update("\0");
    digest.update(String(details.size));
    digest.update("\0");
    digest.update(await sha256File(filePath));
    digest.update("\n");
  }
  return digest.digest("hex");
}

export function computeDocumentationDigest(build: ProjectBuild): string {
  const commit = isBranchLockedSource(build.lock)
    ? build.lock.sourceCommit
    : undefined;
  const stable = (value: string): string =>
    commit ? value.replaceAll(commit, "<source-commit>") : value;
  const digest = createHash("sha256");
  for (const document of build.documents) {
    digest.update(document.outputPath);
    digest.update("\0");
    digest.update(stable(document.title));
    digest.update("\0");
    digest.update(stable(document.body));
    digest.update("\0");
    digest.update(stable(document.canonicalUrl));
    digest.update("\0");
    digest.update(stable(document.sourceUrl ?? ""));
    digest.update("\n");
  }
  digest.update(stable(build.licenseText));
  digest.update("\0");
  digest.update(stable(build.indexOverride?.join("\n") ?? ""));
  return digest.digest("hex");
}

function documentationDigestOf(source: LockedSource): string | undefined {
  return isBranchLockedSource(source) ? source.documentationDigest : undefined;
}

export async function upgradeProjectManifest(
  projectId: ProjectId,
): Promise<ProjectManifest> {
  const directory = path.join(rootDirectory, projectId);
  const manifestPath = path.join(directory, "manifest.json");
  const legacy = JSON.parse(await readFile(manifestPath, "utf8")) as unknown;
  if (!isRecord(legacy)) {
    throw new Error(`${projectId}/manifest.json is not an object`);
  }
  const legacyVolumes = legacy.corpusVolumes;
  const volumeNames =
    Array.isArray(legacyVolumes) &&
    legacyVolumes.length > 0 &&
    legacyVolumes.every((entry) => typeof entry === "string")
      ? (legacyVolumes as string[])
      : Array.isArray(legacyVolumes) &&
          legacyVolumes.length > 0 &&
          legacyVolumes.every(
            (entry) => isRecord(entry) && typeof entry.name === "string",
          )
        ? legacyVolumes.map((entry) => (entry as { name: string }).name)
        : ["llms-full.txt"];
  const corpusVolumes = await Promise.all(
    volumeNames.map((name) =>
      corpusVolumeManifest(path.join(directory, name), name),
    ),
  );
  const pages = (await listFiles(path.join(directory, "pages")))
    .filter((file) => file.endsWith(".md"))
    .map((file) => `pages/${file}`);
  const index = await readFile(path.join(directory, "llms.txt"), "utf8");
  const indexedPages = new Set(
    markdownLinks(index)
      .filter((link) => link.kind === "link" && link.url.startsWith("pages/"))
      .map((link) => link.url.replace(/[?#].*$/, "")),
  );
  const upgraded = parseProjectManifest({
    ...legacy,
    schemaVersion: manifestSchemaVersion,
    generatorVersion,
    generatorDigest: await currentGeneratorDigest(),
    notes: upgradedManifestNotes(legacy),
    indexComplete:
      indexedPages.size === pages.length &&
      pages.every((page) => indexedPages.has(page)),
    corpusVolumes,
    outputDigest: await computeOutputDigest(directory, volumeNames),
  });
  if (upgraded.project !== projectId) {
    throw new Error(
      `${projectId}/manifest.json identifies project ${upgraded.project}`,
    );
  }
  await writeUtf8Atomic(manifestPath, serializeProjectManifest(upgraded));
  return upgraded;
}

// Re-shard an already verified snapshot without asking an upstream that may no
// longer serve the captured bytes. Every non-corpus file is hard-linked into a
// staged sibling directory, so the existing project remains intact until the
// replacement corpus and manifest are complete and the directory swap commits.
export async function repackageProjectCorpus(
  projectId: ProjectId,
): Promise<ProjectManifest> {
  const directory = path.join(rootDirectory, projectId);
  const legacy = JSON.parse(
    await readFile(path.join(directory, "manifest.json"), "utf8"),
  ) as unknown;
  if (!isRecord(legacy)) {
    throw new Error(`${projectId}/manifest.json is not an object`);
  }
  const oldVolumeNames = legacyVolumeNames(legacy);
  const requiresRepack = await Promise.all(
    oldVolumeNames.map(
      async (name) =>
        (await stat(path.join(directory, name))).size >
        maximumCorpusVolumeBytes,
    ),
  );
  if (!requiresRepack.some(Boolean)) return upgradeProjectManifest(projectId);

  await replaceDirectoryAtomically(directory, async (staging) => {
    const files = await listFiles(directory);
    for (const relativePath of files) {
      if (
        relativePath === "manifest.json" ||
        /^llms-full(?:\.\d{3})?\.txt$/.test(relativePath)
      ) {
        continue;
      }
      const destination = path.join(staging, relativePath);
      await mkdir(path.dirname(destination), { recursive: true });
      await link(path.join(directory, relativePath), destination);
    }
    const corpusVolumes = await repackageExistingCorpus(
      directory,
      staging,
      oldVolumeNames,
      Number(legacy.documentCount),
    );
    const volumeNames = corpusVolumes.map((volume) => volume.name);
    const manifest = parseProjectManifest({
      ...legacy,
      schemaVersion: manifestSchemaVersion,
      generatorVersion,
      generatorDigest: await currentGeneratorDigest(),
      notes: upgradedManifestNotes(legacy),
      corpusVolumes,
      outputDigest: await computeOutputDigest(staging, volumeNames),
    });
    if (manifest.project !== projectId) {
      throw new Error(
        `${projectId}/manifest.json identifies project ${manifest.project}`,
      );
    }
    await writeUtf8(
      path.join(staging, "manifest.json"),
      serializeProjectManifest(manifest),
    );
  });
  return parseProjectManifest(
    JSON.parse(await readFile(path.join(directory, "manifest.json"), "utf8")),
  );
}

function legacyVolumeNames(
  legacy: Readonly<Record<string, unknown>>,
): readonly string[] {
  const volumes = legacy.corpusVolumes;
  if (
    Array.isArray(volumes) &&
    volumes.length > 0 &&
    volumes.every((entry) => typeof entry === "string")
  ) {
    return volumes as string[];
  }
  if (
    Array.isArray(volumes) &&
    volumes.length > 0 &&
    volumes.every((entry) => isRecord(entry) && typeof entry.name === "string")
  ) {
    return volumes.map((entry) => (entry as { name: string }).name);
  }
  return ["llms-full.txt"];
}

async function repackageExistingCorpus(
  source: string,
  destination: string,
  oldVolumeNames: readonly string[],
  expectedDocuments: number,
): Promise<readonly CorpusVolumeManifest[]> {
  const dataNames =
    oldVolumeNames.length === 1 ? oldVolumeNames : oldVolumeNames.slice(1);
  const first = await readFile(path.join(source, dataNames[0]!), "utf8");
  const firstBoundary = first.search(/^# Document: /m);
  if (firstBoundary < 0) throw new Error("Existing corpus has no documents");
  const header = first
    .slice(0, firstBoundary)
    .trimEnd()
    .replace(/\nVolume \d+$/, "");
  const volumes: CorpusVolumeManifest[] = [];
  let volume: OpenCorpusVolume | undefined;
  let documentCount = 0;

  for (const name of dataNames) {
    const body = await readFile(path.join(source, name), "utf8");
    const boundaries = [...body.matchAll(/^# Document: /gm)].map(
      (match) => match.index ?? 0,
    );
    for (let index = 0; index < boundaries.length; index += 1) {
      const entry = body
        .slice(boundaries[index], boundaries[index + 1] ?? body.length)
        .trimEnd();
      const entryBytes = Buffer.byteLength(entry);
      const nextHeader = volumeHeader(header, volumes.length + 1);
      if (
        entryBytes + Buffer.byteLength(nextHeader) >
        maximumCorpusVolumeBytes
      ) {
        throw new Error(
          `Existing corpus document exceeds the ${maximumCorpusVolumeBytes}-byte volume limit`,
        );
      }
      if (
        volume &&
        volume.documentCount > 0 &&
        volume.byteLength + 1 + entryBytes > maximumCorpusVolumeBytes
      ) {
        volumes.push(await closeRepackedVolume(volume));
        volume = undefined;
      }
      volume ??= await openRepackedVolume(
        destination,
        header,
        volumes.length + 1,
      );
      if (volume.documentCount > 0) {
        await volume.sink.write("\n");
        volume.byteLength += 1;
      }
      await volume.sink.write(entry);
      volume.byteLength += entryBytes;
      volume.documentCount += 1;
      documentCount += 1;
    }
  }
  if (volume) volumes.push(await closeRepackedVolume(volume));
  if (documentCount !== expectedDocuments) {
    throw new Error(
      `Existing corpus contains ${documentCount} documents, expected ${expectedDocuments}`,
    );
  }
  await writeUtf8(
    path.join(destination, "llms-full.txt"),
    [
      header,
      `This corpus is published as ${volumes.length} retrieval-sized volumes. Read the volumes in order for the complete corpus.`,
      "",
      ...volumes.map(
        (item, index) =>
          `- [Volume ${index + 1}](${item.name}): ${item.documentCount} documents, ${item.byteLength} bytes, SHA-256 \`${item.sha256}\`.`,
      ),
      "",
    ].join("\n"),
  );
  return [
    await corpusVolumeManifest(
      path.join(destination, "llms-full.txt"),
      "llms-full.txt",
    ),
    ...volumes,
  ];
}

async function openRepackedVolume(
  destination: string,
  header: string,
  index: number,
): Promise<OpenCorpusVolume> {
  const name = `llms-full.${String(index).padStart(3, "0")}.txt`;
  const filePath = path.join(destination, name);
  const sink = Bun.file(filePath).writer();
  const prefix = volumeHeader(header, index);
  await sink.write(prefix);
  return {
    name,
    filePath,
    sink,
    byteLength: Buffer.byteLength(prefix),
    documentCount: 0,
  };
}

async function closeRepackedVolume(
  volume: OpenCorpusVolume,
): Promise<CorpusVolumeManifest> {
  await volume.sink.end();
  const manifest = await corpusVolumeManifest(volume.filePath, volume.name);
  if (
    manifest.byteLength !== volume.byteLength ||
    manifest.documentCount !== volume.documentCount
  ) {
    throw new Error(
      `Repacked corpus volume ${volume.name} did not flush completely`,
    );
  }
  return manifest;
}

function upgradedManifestNotes(
  legacy: Readonly<Record<string, unknown>>,
): readonly string[] {
  const notes = Array.isArray(legacy.notes)
    ? legacy.notes.filter((note): note is string => typeof note === "string")
    : [];
  if (typeof legacy.catalog !== "string") return notes;
  const limitation =
    "Daily reconciliation rechecks the catalog inventory only. A prose-only edit that leaves the inventory unchanged is detected by an explicit full rebuild, not by the inexpensive daily check.";
  if (notes.includes(limitation)) return notes;
  const copyrightIndex = notes.findIndex((note) =>
    note.startsWith("Documentation content remains Apple Inc."),
  );
  const insertion = copyrightIndex < 0 ? notes.length : copyrightIndex;
  return [...notes.slice(0, insertion), limitation, ...notes.slice(insertion)];
}

async function sha256File(filePath: string): Promise<string> {
  const digest = createHash("sha256");
  for await (const chunk of createReadStream(filePath)) {
    digest.update(chunk as Buffer);
  }
  return digest.digest("hex");
}

function pinKind(source: LockedSource): string {
  return isSnapshotLockedSource(source)
    ? "Snapshot-pinned"
    : isBranchLockedSource(source)
      ? "Commit-pinned"
      : isTagLockedSource(source)
        ? "Tag-pinned"
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
      ...(source.documentationDigest
        ? { documentationDigest: source.documentationDigest }
        : {}),
    };
  }
  if (isTagLockedSource(source)) {
    return { taggedAt: source.taggedAt, sourceCommit: source.sourceCommit };
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
  const origin = isBranchLockedSource(lock)
    ? `the latest \`${lock.branch}\` branch commit of`
    : isTagLockedSource(lock)
      ? `the \`${lock.tag}\` maintenance-release tag of`
      : "the latest stable release of";
  return `Documentation generated from ${origin} [${repository}](https://github.com/${repository}) and pinned to immutable source commit \`${lock.sourceCommit}\`.`;
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

async function corpusVolumesOf(
  projectId: ProjectId,
): Promise<readonly string[]> {
  const manifest = parseProjectManifest(
    JSON.parse(
      await readFile(
        path.join(rootDirectory, projectId, "manifest.json"),
        "utf8",
      ),
    ),
  );
  return manifest.corpusVolumes.map((volume) => volume.name);
}

function compareCodePoints(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}

function compareVolumeNames(left: string, right: string): number {
  if (left === "llms-full.txt") return -1;
  if (right === "llms-full.txt") return 1;
  return compareCodePoints(left, right);
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
