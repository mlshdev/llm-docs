import { createHash } from "node:crypto";
import path from "node:path";
import {
  canonicalUrlFor,
  collectIndexEntries,
  digestOf,
  doccConcurrency,
  fetchDoccDocument,
  fetchDoccIndex,
  fetchDoccJson,
  mapWithConcurrency,
  renderJsonUrl,
} from "../docc.ts";
import type { DoccIndexEntry } from "../docc.ts";
import { DocumentCollector } from "../quarantine.ts";
import { isSnapshotLockedSource } from "../types.ts";
import type {
  Document,
  DoccCatalogId,
  DoccSourceProject,
  LockedSource,
  ProjectBuild,
  SnapshotLockedSource,
} from "../types.ts";

const technologiesPath = "/documentation/technologies";
const pageFetchBatch = 512;

// Slugs whose catalog cannot be derived from Apple's own grouping: the Swift
// standard library ships as several modules, and the language, SwiftUI, WebKit
// and Xcode projects exist because they were asked for by name.
const explicitCatalogs: Readonly<Record<string, DoccCatalogId>> = {
  swift: "swift",
  observation: "swift",
  synchronization: "swift",
  distributed: "swift",
  regexbuilder: "swift",
  packagedescription: "swift",
  swiftui: "swiftui",
  webkit: "webkit",
  webkitjs: "webkit",
  "safari-release-notes": "webkit",
  "safari-developer-tools": "webkit",
  xcode: "xcode",
  "xcode-release-notes": "xcode",
  xctest: "xcode",
  docc: "xcode",
  "swift-playgrounds": "xcode",
  "ios-ipados-release-notes": "ios",
  "macos-release-notes": "macos",
  "watchos-release-notes": "watchos",
  "watchos-apps": "watchos",
};

const catalogByGroup: Readonly<Record<string, DoccCatalogId>> = {
  Web: "webkit",
  "Developer Tools": "xcode",
};

const platformCatalogs: readonly (readonly [string, DoccCatalogId])[] = [
  ["iOS", "ios"],
  ["macOS", "macos"],
  ["watchOS", "watchos"],
];

// Platforms that never make a framework exclusive to another one: a framework
// on iOS and iPadOS is still an iOS framework.
const derivedPlatforms = new Set(["iPadOS", "Mac Catalyst"]);

export interface FrameworkEntry {
  readonly slug: string;
  readonly title: string;
  readonly platforms: readonly string[];
  readonly catalog: DoccCatalogId;
  readonly landingPath: string;
  readonly pages: readonly string[];
  readonly indexDigest: string;
}

export interface DoccCatalog {
  readonly frameworks: readonly FrameworkEntry[];
  readonly entries: ReadonlyMap<string, DoccIndexEntry>;
  readonly outputPaths: ReadonlyMap<string, string>;
  readonly catalogOf: ReadonlyMap<string, DoccCatalogId>;
}

let catalogPromise: Promise<DoccCatalog> | undefined;

export function loadDoccCatalog(): Promise<DoccCatalog> {
  catalogPromise ??= discoverCatalog();
  return catalogPromise;
}

export async function resolveDoccSnapshot(
  project: DoccSourceProject,
  previous: LockedSource | undefined,
): Promise<SnapshotLockedSource> {
  if (
    process.env.DOCC_RECONCILE === "false" &&
    previous &&
    isSnapshotLockedSource(previous)
  ) {
    return previous;
  }
  const frameworks = await catalogFrameworks(project.catalog);
  const snapshotDigest = catalogDigest(frameworks);
  // A pin predating content addressing names the same inventory but says
  // nothing about the bytes that inventory was rendered from, so it is resolved
  // as a change and rebuilt once to earn its content digest.
  if (
    previous &&
    isSnapshotLockedSource(previous) &&
    previous.snapshotDigest === snapshotDigest &&
    previous.contentDigest !== undefined
  ) {
    return previous;
  }
  return {
    tag: `snapshot-${snapshotDigest.slice(0, 12)}`,
    snapshotDigest,
    capturedAt: new Date().toISOString(),
  };
}

export async function buildApple(
  project: DoccSourceProject,
  lock: SnapshotLockedSource,
): Promise<ProjectBuild> {
  const catalog = await loadDoccCatalog();
  const frameworks = catalog.frameworks.filter(
    (framework) => framework.catalog === project.catalog,
  );
  const currentDigest = catalogDigest(frameworks);
  if (currentDigest !== lock.snapshotDigest) {
    throw new Error(
      `Apple catalog ${project.catalog} changed from ${lock.snapshotDigest} to ${currentDigest}; run bun run update`,
    );
  }
  const paths = frameworks.flatMap((framework) => [...framework.pages]).sort();
  const owned = new Set(paths);
  const documents = new DocumentCollector(project.id);
  const bodyDigests: string[] = [];
  for (let offset = 0; offset < paths.length; offset += pageFetchBatch) {
    const batch = paths.slice(offset, offset + pageFetchBatch);
    const fetched = await mapWithConcurrency(
      batch,
      doccConcurrency(),
      async (documentationPath) => ({
        documentationPath,
        document: await fetchDoccDocument(renderJsonUrl(documentationPath)),
      }),
    );
    for (const { documentationPath, document } of fetched) {
      if (document === undefined) {
        throw new Error(
          `Apple index lists ${documentationPath}, but its render endpoint returned 404 or 410`,
        );
      }
      bodyDigests.push(`${documentationPath}\t${document.bodyDigest}`);
      await documents.collect(documentationPath, () =>
        convertPage(document.payload, {
          documentationPath,
          owned,
          outputPaths: catalog.outputPaths,
          entries: catalog.entries,
        }),
      );
    }
    const completed = Math.min(offset + batch.length, paths.length);
    if (paths.length > pageFetchBatch && completed % 8_192 < batch.length) {
      console.log(
        `Fetched ${completed}/${paths.length} pages for ${project.id}`,
      );
    }
  }
  const contentDigest = digestOf(bodyDigests);
  if (
    lock.contentDigest !== undefined &&
    lock.contentDigest !== contentDigest
  ) {
    throw new Error(
      `Apple catalog ${project.catalog} no longer renders the pinned content: expected ${lock.contentDigest} but rebuilt ${contentDigest}`,
    );
  }
  return {
    project,
    lock: { ...lock, contentDigest },
    documents: documents.documents,
    quarantined: documents.quarantined,
    notes: [
      `Generated from Apple's public DocC endpoints: the framework index under /tutorials/data/index and the render JSON under /tutorials/data/documentation.`,
      `${frameworks.length} ${frameworks.length === 1 ? "framework" : "frameworks"} in this catalog, captured at ${lock.capturedAt}.`,
      "Apple publishes continuously and exposes no release tag, so the pin is a digest of the catalog inventory plus a digest of every render payload this snapshot was converted from, rather than a source commit; a rebuild reproduces this snapshot only while Apple still serves those bytes.",
      "Documentation content remains Apple Inc.'s copyrighted material, redistributed here under the developer.apple.com terms of use recorded in LICENSE.upstream.",
    ],
    licenseText: licenseNotice(project),
    indexOverride: renderCatalogIndex(project, frameworks, catalog),
  };
}

// The inventory this catalog publishes: every framework index Apple serves for
// it, plus the pages those indexes list. Deriving it from a few hundred index
// documents is what keeps the daily reconciliation cheap; the bytes each page
// renders from are pinned separately by the content digest a build computes.
export function catalogDigest(frameworks: readonly FrameworkEntry[]): string {
  const paths = [
    ...new Set(frameworks.flatMap((framework) => framework.pages)),
  ];
  return digestOf([
    ...frameworks.map(
      (framework) => `index:${framework.slug}\t${framework.indexDigest}`,
    ),
    ...paths.map((documentationPath) => `page:${documentationPath}`),
  ]);
}

async function catalogFrameworks(
  catalogId: DoccCatalogId,
): Promise<readonly FrameworkEntry[]> {
  const catalog = await loadDoccCatalog();
  const frameworks = catalog.frameworks.filter(
    (framework) => framework.catalog === catalogId,
  );
  if (frameworks.length === 0) {
    throw new Error(`Apple catalog ${catalogId} resolved no frameworks`);
  }
  return frameworks;
}

async function discoverCatalog(): Promise<DoccCatalog> {
  const groups = await fetchTechnologyGroups();
  const seeds = [...groups.keys()].sort();
  const indexes = new Map<string, { digest: string; pages: string[] }>();
  const entries = new Map<string, DoccIndexEntry>();
  let pending = seeds;
  const visited = new Set<string>();
  while (pending.length > 0) {
    const batch = pending.filter((slug) => !visited.has(slug));
    for (const slug of batch) {
      visited.add(slug);
    }
    const fetched = await mapWithConcurrency(batch, doccConcurrency(), (slug) =>
      fetchDoccIndex(slug),
    );
    for (const index of fetched) {
      if (!index) {
        continue;
      }
      const found = collectIndexEntries(index.nodes);
      for (const [documentationPath, entry] of found) {
        if (!entries.has(documentationPath)) {
          entries.set(documentationPath, entry);
        }
      }
      indexes.set(index.slug, {
        digest: createHash("sha256").update(index.body).digest("hex"),
        pages: [...found.keys()],
      });
    }
    // A framework index lists pages belonging to frameworks the technologies
    // catalog never names, so discovery repeats until no new prefix appears.
    pending = [...new Set([...entries.keys()].map(prefixOf))].filter(
      (slug) => slug.length > 0 && !visited.has(slug),
    );
  }

  const pagesBySlug = new Map<string, string[]>();
  for (const documentationPath of entries.keys()) {
    const slug = prefixOf(documentationPath);
    const pages = pagesBySlug.get(slug) ?? [];
    pages.push(documentationPath);
    pagesBySlug.set(slug, pages);
  }

  const slugs = [...pagesBySlug.keys()].sort();
  const landings = await mapWithConcurrency(
    slugs,
    doccConcurrency(),
    async (slug) => ({
      slug,
      payload: await fetchDoccJson(renderJsonUrl(`/documentation/${slug}`)),
    }),
  );
  const metadata = new Map<
    string,
    { title: string; platforms: readonly string[] }
  >();
  for (const { slug, payload } of landings) {
    const page = asRecord(payload);
    const meta = asRecord(page?.metadata);
    metadata.set(slug, {
      title: typeof meta?.title === "string" ? meta.title : titleFromSlug(slug),
      platforms: readPlatformNames(meta?.platforms),
    });
  }

  const frameworks: FrameworkEntry[] = slugs.map((slug) => {
    const details = metadata.get(slug);
    const pages = (pagesBySlug.get(slug) ?? []).sort();
    return {
      slug,
      title: details?.title ?? titleFromSlug(slug),
      platforms: details?.platforms ?? [],
      catalog: assignCatalog(slug, groups.get(slug), details?.platforms ?? []),
      landingPath: `/documentation/${slug}`,
      pages,
      indexDigest: indexes.get(slug)?.digest ?? digestOf(pages),
    };
  });

  const catalogOf = new Map<string, DoccCatalogId>();
  for (const framework of frameworks) {
    for (const page of framework.pages) {
      catalogOf.set(page, framework.catalog);
    }
  }
  return {
    frameworks,
    entries,
    outputPaths: assignOutputPaths([...entries.keys()].sort()),
    catalogOf,
  };
}

async function fetchTechnologyGroups(): Promise<ReadonlyMap<string, string>> {
  const payload = await fetchDoccJson(renderJsonUrl(technologiesPath));
  const sections = asArray(asRecord(payload)?.sections);
  const groups = new Map<string, string>();
  for (const section of sections) {
    for (const group of asArray(asRecord(section)?.groups)) {
      const groupRecord = asRecord(group);
      const name =
        typeof groupRecord?.name === "string" ? groupRecord.name : "";
      for (const technology of asArray(groupRecord?.technologies)) {
        const destination = asRecord(asRecord(technology)?.destination);
        const identifier = destination?.identifier;
        if (
          typeof identifier !== "string" ||
          !identifier.startsWith("doc://")
        ) {
          continue;
        }
        const match = identifier.match(/\/documentation\/([^/]+)$/i);
        const slug = match?.[1]?.toLowerCase();
        if (slug && !slug.includes("/") && !groups.has(slug)) {
          groups.set(slug, name);
        }
      }
    }
  }
  if (groups.size === 0) {
    throw new Error("Apple technologies catalog listed no frameworks");
  }
  return groups;
}

function assignCatalog(
  slug: string,
  group: string | undefined,
  platforms: readonly string[],
): DoccCatalogId {
  const explicit = explicitCatalogs[slug];
  if (explicit) {
    return explicit;
  }
  const byGroup = group ? catalogByGroup[group] : undefined;
  if (byGroup) {
    return byGroup;
  }
  const effective = platforms.filter(
    (platform) => !derivedPlatforms.has(platform),
  );
  for (const [platform, catalog] of platformCatalogs) {
    if (effective.length > 0 && effective.every((name) => name === platform)) {
      return catalog;
    }
  }
  return "shared";
}

function readPlatformNames(value: unknown): readonly string[] {
  const names: string[] = [];
  for (const platform of asArray(value)) {
    const record = asRecord(platform);
    if (typeof record?.name === "string" && record.unavailable !== true) {
      names.push(record.name);
    }
  }
  return names;
}

function prefixOf(documentationPath: string): string {
  return documentationPath.split("/")[2] ?? "";
}

function titleFromSlug(slug: string): string {
  return slug
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

// Apple's paths carry characters Git cannot check out on every platform, so a
// sanitized name is used; the rare collision it creates is broken with a digest
// of the original path, which keeps the mapping stable across runs.
export function assignOutputPaths(
  documentationPaths: readonly string[],
): ReadonlyMap<string, string> {
  const taken = new Set<string>();
  const result = new Map<string, string>();
  for (const documentationPath of documentationPaths) {
    const segments = documentationPath
      .slice("/documentation/".length)
      .split("/")
      .map(sanitizeSegment);
    let candidate = `pages/${segments.join("/")}.md`;
    if (taken.has(candidate.toLowerCase())) {
      const suffix = createHash("sha256")
        .update(documentationPath)
        .digest("hex")
        .slice(0, 8);
      candidate = `pages/${segments.join("/")}~${suffix}.md`;
    }
    taken.add(candidate.toLowerCase());
    result.set(documentationPath, candidate);
  }
  return result;
}

function sanitizeSegment(segment: string): string {
  let replaced = segment.replace(/[:*?"<>|\\]/g, "_").replace(/[. ]+$/g, "_");
  if (/^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(replaced)) {
    replaced = `_${replaced}`;
  }
  if (replaced.length <= 180) {
    return replaced === "" ? "_" : replaced;
  }
  const suffix = createHash("sha256").update(segment).digest("hex").slice(0, 8);
  return `${replaced.slice(0, 180)}~${suffix}`;
}

function licenseNotice(project: DoccSourceProject): string {
  return [
    `${project.title} documentation snapshot`,
    "",
    "Copyright © Apple Inc. All rights reserved.",
    "",
    "The pages in this directory are a normalized rendering of documentation Apple publishes at https://developer.apple.com/documentation through the public DocC endpoints under https://developer.apple.com/tutorials/data. Apple has not released this documentation under an open-source licence: it remains Apple's copyrighted material and is reproduced here for machine-readable reference only.",
    "",
    "Terms of use: https://www.apple.com/legal/internet-services/terms/site.html",
    "Privacy policy: https://www.apple.com/privacy/privacy-policy",
    "",
    "Apple, iOS, iPadOS, macOS, watchOS, tvOS, visionOS, Safari, Swift, SwiftUI, WebKit, and Xcode are trademarks of Apple Inc. This snapshot is not affiliated with or endorsed by Apple Inc.",
  ].join("\n");
}

function renderCatalogIndex(
  project: DoccSourceProject,
  frameworks: readonly FrameworkEntry[],
  catalog: DoccCatalog,
): readonly string[] {
  const lines: string[] = ["## Frameworks", ""];
  const sorted = [...frameworks].sort((left, right) =>
    left.title < right.title ? -1 : left.title > right.title ? 1 : 0,
  );
  for (const framework of sorted) {
    const landing =
      catalog.outputPaths.get(framework.landingPath) ??
      catalog.outputPaths.get(framework.pages[0] ?? "");
    const platforms =
      framework.platforms.length > 0
        ? ` Platforms: ${framework.platforms.join(", ")}.`
        : "";
    lines.push(
      `- [${framework.title}](${landing ?? canonicalUrlFor(framework.landingPath)}): ${framework.pages.length} pages.${platforms}`,
    );
  }
  const platform = platformCatalogs.find(
    ([, catalogId]) => catalogId === project.catalog,
  )?.[0];
  if (platform) {
    const shared = catalog.frameworks
      .filter(
        (framework) =>
          framework.catalog !== project.catalog &&
          framework.platforms.includes(platform),
      )
      .sort((left, right) => (left.title < right.title ? -1 : 1));
    if (shared.length > 0) {
      lines.push(
        "",
        `## Frameworks shared with other platforms`,
        "",
        `These frameworks are available on ${platform} but are published by another project in this repository, so their pages are stored once rather than duplicated per platform.`,
        "",
        ...shared.map(
          (framework) =>
            `- [${framework.title}](../${projectDirectoryFor(framework.catalog)}/${catalog.outputPaths.get(framework.landingPath) ?? "llms.txt"}): ${framework.pages.length} pages.`,
        ),
      );
    }
  }
  return lines;
}

function projectDirectoryFor(catalogId: DoccCatalogId): string {
  return `apple-${catalogId === "shared" ? "frameworks" : catalogId}`;
}

interface PageContext {
  readonly documentationPath: string;
  readonly owned: ReadonlySet<string>;
  readonly outputPaths: ReadonlyMap<string, string>;
  readonly entries: ReadonlyMap<string, DoccIndexEntry>;
}

export function convertPage(payload: unknown, context: PageContext): Document {
  const page = asRecord(payload);
  if (!page) {
    throw new Error("Render node is not an object");
  }
  const metadata = asRecord(page.metadata) ?? {};
  const title =
    typeof metadata.title === "string" && metadata.title.trim()
      ? metadata.title.trim()
      : (context.entries.get(context.documentationPath)?.title ??
        context.documentationPath);
  const body = renderPageVariants(page, context, title);
  const outputPath = context.outputPaths.get(context.documentationPath);
  if (!outputPath) {
    throw new Error(`No output path for ${context.documentationPath}`);
  }
  return {
    sourcePath: context.documentationPath.slice(1),
    outputPath,
    title,
    body,
    canonicalUrl: canonicalUrlFor(context.documentationPath),
    section: prefixOf(context.documentationPath),
  };
}

function renderPageVariants(
  page: Record<string, unknown>,
  context: PageContext,
  fallbackTitle: string,
): string {
  const languages = interfaceLanguagesAtPath(page, context.documentationPath);
  const rendered = languages.map((language) => {
    const variant = materializeVariant(page, language);
    const metadata = asRecord(variant.metadata) ?? {};
    const title =
      typeof metadata.title === "string" && metadata.title.trim()
        ? metadata.title.trim()
        : fallbackTitle;
    const renderer = new PageRenderer(
      asRecord(variant.references) ?? {},
      context,
    );
    return {
      language,
      body: renderer.render(variant, metadata, title),
    };
  });
  const groups = new Map<string, string[]>();
  for (const variant of rendered) {
    const labels = groups.get(variant.body) ?? [];
    labels.push(interfaceLanguageLabel(variant.language));
    groups.set(variant.body, labels);
  }
  if (groups.size === 1) {
    const [body, labels] = groups.entries().next().value ?? ["", []];
    if (labels.length > 1) {
      return insertAfterTitle(
        body,
        `**Interface languages:** ${labels.join(", ")}`,
      );
    }
    if (languages[0] !== "swift") {
      return insertAfterTitle(
        body,
        `**Interface language:** ${labels[0] ?? interfaceLanguageLabel(languages[0] ?? "data")}`,
      );
    }
    return body;
  }
  return [...groups]
    .map(([body, labels]) => labelPageTitle(body, labels.join(", ")))
    .join("\n\n");
}

function interfaceLanguagesAtPath(
  page: Record<string, unknown>,
  documentationPath: string,
): readonly string[] {
  const found = new Set<string>();
  for (const variant of asArray(page.variants)) {
    const record = asRecord(variant);
    const language = interfaceLanguageFromTraits(record?.traits);
    if (!language) {
      continue;
    }
    const paths = asArray(record?.paths).filter(
      (entry): entry is string => typeof entry === "string",
    );
    if (
      paths.length === 0 ||
      paths.some(
        (entry) =>
          normalizeDocumentationPath(entry).toLowerCase() ===
          documentationPath.toLowerCase(),
      )
    ) {
      found.add(language);
    }
  }
  if (found.size === 0) {
    const identifier = asRecord(page.identifier);
    found.add(
      typeof identifier?.interfaceLanguage === "string"
        ? identifier.interfaceLanguage
        : "swift",
    );
  }
  return [...found].sort(
    (left, right) =>
      interfaceLanguageRank(left) - interfaceLanguageRank(right) ||
      (left < right ? -1 : left > right ? 1 : 0),
  );
}

function materializeVariant(
  page: Record<string, unknown>,
  language: string,
): Record<string, unknown> {
  let variant: unknown = structuredClone(page);
  for (const override of asArray(page.variantOverrides)) {
    const record = asRecord(override);
    if (interfaceLanguageFromTraits(record?.traits) !== language) {
      continue;
    }
    for (const operation of asArray(record?.patch)) {
      variant = applyJsonPatch(variant, operation);
    }
  }
  const result = asRecord(variant);
  if (!result) {
    throw new Error(`DocC ${language} variant is not an object`);
  }
  return result;
}

function interfaceLanguageFromTraits(value: unknown): string | undefined {
  let language: string | undefined;
  for (const trait of asArray(value)) {
    const record = asRecord(trait);
    if (!record) {
      throw new Error("DocC variant trait is not an object");
    }
    const keys = Object.keys(record);
    if (
      keys.length !== 1 ||
      keys[0] !== "interfaceLanguage" ||
      typeof record.interfaceLanguage !== "string"
    ) {
      throw new Error(
        `Unsupported DocC variant traits ${JSON.stringify(value)}`,
      );
    }
    if (language && language !== record.interfaceLanguage) {
      throw new Error("DocC variant declares conflicting interface languages");
    }
    language = record.interfaceLanguage;
  }
  return language;
}

function applyJsonPatch(document: unknown, value: unknown): unknown {
  const operation = asRecord(value);
  const kind = operation?.op;
  const pointer = operation?.path;
  if (
    !operation ||
    (kind !== "add" && kind !== "replace") ||
    typeof pointer !== "string" ||
    !Object.hasOwn(operation, "value")
  ) {
    throw new Error(`Unsupported DocC JSON patch ${JSON.stringify(value)}`);
  }
  const replacement = structuredClone(operation.value);
  if (pointer === "") {
    return replacement;
  }
  if (!pointer.startsWith("/")) {
    throw new Error(`Invalid DocC JSON pointer ${JSON.stringify(pointer)}`);
  }
  const tokens = pointer
    .slice(1)
    .split("/")
    .map((token) => {
      if (/~(?:[^01]|$)/.test(token)) {
        throw new Error(`Invalid DocC JSON pointer ${JSON.stringify(pointer)}`);
      }
      return token.replace(/~1/g, "/").replace(/~0/g, "~");
    });
  const final = tokens.pop();
  if (final === undefined) {
    throw new Error(`Invalid DocC JSON pointer ${JSON.stringify(pointer)}`);
  }
  let parent = document;
  for (const token of tokens) {
    parent = valueAtPointer(parent, token, pointer);
  }
  if (Array.isArray(parent)) {
    if (kind === "add" && final === "-") {
      parent.push(replacement);
      return document;
    }
    const index = arrayIndex(final, parent.length, kind === "add", pointer);
    if (kind === "add") {
      parent.splice(index, 0, replacement);
    } else {
      parent[index] = replacement;
    }
    return document;
  }
  const record = asRecord(parent);
  if (!record || (kind === "replace" && !Object.hasOwn(record, final))) {
    throw new Error(`DocC JSON patch target does not exist at ${pointer}`);
  }
  Object.defineProperty(record, final, {
    configurable: true,
    enumerable: true,
    writable: true,
    value: replacement,
  });
  return document;
}

function valueAtPointer(
  parent: unknown,
  token: string,
  pointer: string,
): unknown {
  if (Array.isArray(parent)) {
    return parent[arrayIndex(token, parent.length, false, pointer)];
  }
  const record = asRecord(parent);
  if (!record || !Object.hasOwn(record, token)) {
    throw new Error(`DocC JSON patch target does not exist at ${pointer}`);
  }
  return record[token];
}

function arrayIndex(
  token: string,
  length: number,
  allowEnd: boolean,
  pointer: string,
): number {
  if (!/^(?:0|[1-9]\d*)$/.test(token)) {
    throw new Error(`Invalid DocC array index in ${pointer}`);
  }
  const index = Number(token);
  if (
    !Number.isSafeInteger(index) ||
    index > length ||
    (!allowEnd && index === length)
  ) {
    throw new Error(
      `DocC JSON patch array index is out of bounds at ${pointer}`,
    );
  }
  return index;
}

function normalizeDocumentationPath(value: string): string {
  return value.startsWith("/") ? value : `/${value}`;
}

function interfaceLanguageRank(value: string): number {
  return value === "swift" ? 0 : value === "occ" ? 1 : value === "data" ? 2 : 3;
}

function interfaceLanguageLabel(value: string): string {
  return value === "swift"
    ? "Swift"
    : value === "occ"
      ? "Objective-C"
      : value === "data"
        ? "Data"
        : value;
}

function insertAfterTitle(body: string, line: string): string {
  const end = body.indexOf("\n");
  return end < 0
    ? `${body}\n\n${line}`
    : `${body.slice(0, end)}\n\n${line}${body.slice(end)}`;
}

function labelPageTitle(body: string, label: string): string {
  const end = body.indexOf("\n");
  return end < 0
    ? `${body} (${label})`
    : `${body.slice(0, end)} (${label})${body.slice(end)}`;
}

class PageRenderer {
  readonly #references: Record<string, unknown>;
  readonly #context: PageContext;

  constructor(references: Record<string, unknown>, context: PageContext) {
    this.#references = references;
    this.#context = context;
  }

  render(
    page: Record<string, unknown>,
    metadata: Record<string, unknown>,
    title: string,
  ): string {
    const blocks: string[] = [`# ${escapeInline(title)}`];
    const facts = this.#facts(metadata);
    if (facts.length > 0) {
      blocks.push(facts.join("  \n"));
    }
    const abstract = this.#inline(page.abstract);
    if (abstract.trim()) {
      blocks.push(abstract);
    }
    const deprecation = this.#blocks(page.deprecationSummary);
    if (deprecation.trim()) {
      blocks.push(
        deprecation
          .split("\n")
          .map((line) => (line ? `> ${line}` : ">"))
          .join("\n"),
      );
    }
    for (const section of asArray(page.primaryContentSections)) {
      blocks.push(this.#primarySection(section));
    }
    blocks.push(this.#topicGroups("Topics", page.topicSections));
    blocks.push(this.#relationships(page.relationshipsSections));
    blocks.push(
      this.#topicGroups(
        "Default Implementations",
        page.defaultImplementationsSections,
      ),
    );
    blocks.push(this.#topicGroups("See Also", page.seeAlsoSections));
    return blocks
      .map((block) => block.trim())
      .filter((block) => block !== "")
      .join("\n\n");
  }

  #facts(metadata: Record<string, unknown>): readonly string[] {
    const facts: string[] = [];
    const modules = asArray(metadata.modules)
      .map((entry) => asRecord(entry)?.name)
      .filter((name): name is string => typeof name === "string");
    if (modules.length > 0) {
      facts.push(`**Framework:** ${modules.map(escapeInline).join(", ")}`);
    }
    const roleHeading = metadata.roleHeading;
    if (typeof roleHeading === "string" && roleHeading.trim()) {
      facts.push(`**Kind:** ${escapeInline(roleHeading.trim())}`);
    }
    const availability = this.#availability(metadata.platforms);
    if (availability) {
      facts.push(`**Availability:** ${availability}`);
    }
    return facts;
  }

  #availability(value: unknown): string {
    const parts: string[] = [];
    for (const platform of asArray(value)) {
      const record = asRecord(platform);
      const name = record?.name;
      if (typeof name !== "string") {
        continue;
      }
      if (record?.unavailable === true) {
        parts.push(`${name} unavailable`);
        continue;
      }
      const introduced =
        typeof record?.introducedAt === "string" ? record.introducedAt : "";
      const deprecated =
        typeof record?.deprecatedAt === "string" ? record.deprecatedAt : "";
      const beta = record?.beta === true ? " beta" : "";
      parts.push(
        `${name} ${introduced}${introduced ? "+" : ""}${deprecated ? ` (deprecated in ${deprecated})` : ""}${beta}`.trim(),
      );
    }
    return parts.map(escapeInline).join(" · ");
  }

  #primarySection(value: unknown): string {
    const section = asRecord(value);
    const kind = section?.kind;
    if (typeof kind !== "string") {
      throw new Error("Primary content section without a kind");
    }
    switch (kind) {
      case "declarations":
        return this.#declarations(section?.declarations);
      case "content":
        return this.#blocks(section?.content);
      case "parameters":
        return this.#parameters(section?.parameters);
      case "properties":
      case "restParameters":
        return this.#itemList(
          typeof section?.title === "string" ? section.title : "Properties",
          section?.items,
        );
      case "restEndpoint":
        return this.#restEndpoint(section);
      case "restBody":
        return this.#restBody(section);
      case "restResponses":
        return this.#restResponses(section);
      case "possibleValues":
        return this.#possibleValues(section);
      case "attributes":
        return this.#attributes(section?.attributes);
      case "mentions":
        return this.#mentions(section?.mentions);
      case "details":
        return this.#details(section);
      default:
        throw new Error(`Unsupported DocC primary section "${kind}"`);
    }
  }

  #declarations(value: unknown): string {
    const blocks: string[] = [];
    for (const declaration of asArray(value)) {
      const record = asRecord(declaration);
      const code = asArray(record?.tokens)
        .map((token) => {
          const tokenRecord = asRecord(token);
          return typeof tokenRecord?.text === "string" ? tokenRecord.text : "";
        })
        .join("");
      if (!code.trim()) {
        continue;
      }
      const languages = asArray(record?.languages)
        .filter((language): language is string => typeof language === "string")
        .join(", ");
      const syntax = languages.includes("occ")
        ? "objectivec"
        : languages.includes("swift")
          ? "swift"
          : "";
      blocks.push(fencedCode(code, syntax));
    }
    return blocks.length > 0 ? `## Declaration\n\n${blocks.join("\n\n")}` : "";
  }

  #parameters(value: unknown): string {
    const items: string[] = [];
    for (const parameter of asArray(value)) {
      const record = asRecord(parameter);
      const name = typeof record?.name === "string" ? record.name : "";
      items.push(
        bulletItem(
          `\`${name}\``,
          this.#blocks(record?.content ?? record?.description),
        ),
      );
    }
    return items.length > 0 ? `## Parameters\n\n${items.join("\n")}` : "";
  }

  #itemList(title: string, value: unknown): string {
    const items: string[] = [];
    for (const item of asArray(value)) {
      const record = asRecord(item);
      const name = typeof record?.name === "string" ? record.name : "";
      const type = tokenText(record?.type);
      const required = record?.required === true ? " (required)" : "";
      const label = `\`${name}\`${type ? ` — \`${type}\`` : ""}${required}`;
      const details = [
        this.#blocks(record?.content),
        ...asArray(record?.attributes).map((attribute) =>
          this.#itemAttribute(attribute),
        ),
      ].filter((part) => part.trim());
      items.push(bulletItem(label, details.join("  \n")));
    }
    return items.length > 0
      ? `## ${escapeInline(title)}\n\n${items.join("\n")}`
      : "";
  }

  #restEndpoint(section: Record<string, unknown> | undefined): string {
    const endpoint = tokenText(section?.tokens);
    if (!endpoint.trim()) {
      return "";
    }
    const title = typeof section?.title === "string" ? section.title : "URL";
    return `## ${escapeInline(title)}\n\n${fencedCode(endpoint, "http")}`;
  }

  #restBody(section: Record<string, unknown> | undefined): string {
    const title =
      typeof section?.title === "string" ? section.title : "HTTP Body";
    const mime =
      typeof section?.mimeType === "string"
        ? `Content type: \`${section.mimeType}\``
        : "";
    const type = tokenText(section?.bodyContentType);
    const parts = [
      `## ${escapeInline(title)}`,
      mime,
      type ? `Type: \`${type}\`` : "",
      this.#blocks(section?.content),
      this.#itemList("Body parameters", section?.parameters),
    ];
    return parts.filter((part) => part.trim()).join("\n\n");
  }

  #restResponses(section: Record<string, unknown> | undefined): string {
    const items: string[] = [];
    for (const response of asArray(section?.items)) {
      const record = asRecord(response);
      const status = record?.status;
      const reason = typeof record?.reason === "string" ? record.reason : "";
      const type = tokenText(record?.type);
      const label = `\`${typeof status === "number" ? status : "?"}\`${reason ? ` ${escapeInline(reason)}` : ""}${type ? ` — \`${type}\`` : ""}`;
      items.push(bulletItem(label, this.#blocks(record?.content)));
    }
    if (items.length === 0) {
      return "";
    }
    const title =
      typeof section?.title === "string" ? section.title : "Response Codes";
    return `## ${escapeInline(title)}\n\n${items.join("\n")}`;
  }

  #possibleValues(section: Record<string, unknown> | undefined): string {
    const items: string[] = [];
    for (const value of asArray(section?.values)) {
      const record = asRecord(value);
      const name = typeof record?.name === "string" ? record.name : "";
      items.push(bulletItem(`\`${name}\``, this.#blocks(record?.content)));
    }
    if (items.length === 0) {
      return "";
    }
    const title =
      typeof section?.title === "string" ? section.title : "Possible Values";
    return `## ${escapeInline(title)}\n\n${items.join("\n")}`;
  }

  #attributes(value: unknown): string {
    const items: string[] = [];
    for (const attribute of asArray(value)) {
      const record = asRecord(attribute);
      const title = typeof record?.title === "string" ? record.title : "";
      const rendered = this.#attributeValue(record);
      if (title && rendered) {
        items.push(`- **${escapeInline(title)}:** ${rendered}`);
      }
    }
    return items.length > 0 ? `## Attributes\n\n${items.join("\n")}` : "";
  }

  #attributeValue(record: Record<string, unknown> | undefined): string {
    const value = scalarText(record?.value);
    if (value !== undefined) {
      return `\`${value}\``;
    }
    const values = asArray(record?.values)
      .map((entry) => {
        const valueRecord = asRecord(entry);
        return scalarText(valueRecord?.value ?? entry) ?? tokenText(entry);
      })
      .filter((entry) => entry !== "");
    if (values.length > 0) {
      return values.map((entry) => `\`${entry}\``).join(", ");
    }
    const tokens = tokenText(record?.valueType ?? record?.type);
    return tokens ? `\`${tokens}\`` : "";
  }

  #itemAttribute(value: unknown): string {
    const attribute = asRecord(value);
    const kind = attribute?.kind;
    if (typeof kind !== "string") {
      throw new Error("DocC item attribute has no kind");
    }
    const rendered = this.#attributeValue(attribute);
    if (!rendered) {
      return "";
    }
    const labels: Readonly<Record<string, string>> = {
      allowedTypes: "Allowed types",
      allowedValues: "Allowed values",
      default: "Default",
      maximum: "Maximum",
      maximumLength: "Maximum length",
      minimum: "Minimum",
      minimumLength: "Minimum length",
    };
    const label = labels[kind];
    if (!label) {
      throw new Error(`Unsupported DocC item attribute "${kind}"`);
    }
    return `**${label}:** ${rendered}`;
  }

  #mentions(value: unknown): string {
    const links = asArray(value)
      .map((identifier) =>
        typeof identifier === "string" ? this.#link(identifier) : undefined,
      )
      .filter((link): link is string => link !== undefined);
    return links.length > 0
      ? `## Mentioned In\n\n${links.map((link) => `- ${link}`).join("\n")}`
      : "";
  }

  #details(section: Record<string, unknown> | undefined): string {
    const details = asRecord(section?.details);
    const name = typeof details?.name === "string" ? details.name : "";
    const value = this.#blocks(details?.content);
    const title =
      typeof section?.title === "string" ? section.title : "Details";
    const body = [name ? `\`${name}\`` : "", value]
      .filter((part) => part.trim())
      .join("\n\n");
    return body ? `## ${escapeInline(title)}\n\n${body}` : "";
  }

  #topicGroups(heading: string, value: unknown): string {
    const sections = asArray(value);
    if (sections.length === 0) {
      return "";
    }
    const parts: string[] = [];
    for (const section of sections) {
      const record = asRecord(section);
      const title = typeof record?.title === "string" ? record.title : "";
      const identifiers = asArray(record?.identifiers)
        .filter(
          (identifier): identifier is string => typeof identifier === "string",
        )
        .map((identifier) => this.#topicLine(identifier))
        .filter((line): line is string => line !== undefined);
      const abstract = this.#inline(record?.abstract);
      if (identifiers.length === 0 && !abstract) {
        continue;
      }
      parts.push(
        [
          title ? `### ${escapeInline(title)}` : "",
          abstract,
          identifiers.join("\n"),
        ]
          .filter((part) => part.trim())
          .join("\n\n"),
      );
    }
    return parts.length > 0 ? `## ${heading}\n\n${parts.join("\n\n")}` : "";
  }

  #relationships(value: unknown): string {
    const parts: string[] = [];
    for (const section of asArray(value)) {
      const record = asRecord(section);
      const title = typeof record?.title === "string" ? record.title : "";
      const links = asArray(record?.identifiers)
        .filter(
          (identifier): identifier is string => typeof identifier === "string",
        )
        .map((identifier) => this.#link(identifier))
        .filter((link): link is string => link !== undefined);
      if (links.length === 0) {
        continue;
      }
      parts.push(
        [
          title ? `### ${escapeInline(title)}` : "",
          links.map((link) => `- ${link}`).join("\n"),
        ]
          .filter((part) => part.trim())
          .join("\n\n"),
      );
    }
    return parts.length > 0 ? `## Relationships\n\n${parts.join("\n\n")}` : "";
  }

  #topicLine(identifier: string): string | undefined {
    const link = this.#link(identifier);
    if (!link) {
      return undefined;
    }
    const reference = asRecord(this.#references[identifier]);
    const abstract = this.#inline(reference?.abstract)
      .replace(/\s+/g, " ")
      .trim();
    const conformance = asRecord(reference?.conformance);
    const condition = [
      this.#inline(conformance?.conformancePrefix),
      this.#inline(conformance?.constraints),
    ]
      .filter((part) => part.trim())
      .join(" ");
    const target =
      typeof reference?.url === "string"
        ? reference.url.split("#")[0]
        : undefined;
    const indexed = target ? this.#context.entries.get(target) : undefined;
    const status =
      reference?.deprecated === true || indexed?.deprecated
        ? "Deprecated."
        : indexed?.beta
          ? "Beta."
          : "";
    const details = [status, condition, abstract]
      .filter((part) => part.trim())
      .join(" ");
    return details ? `- ${link}: ${details}` : `- ${link}`;
  }

  #link(identifier: string): string | undefined {
    const reference = asRecord(this.#references[identifier]);
    if (!reference) {
      return undefined;
    }
    const title =
      typeof reference.title === "string" && reference.title.trim()
        ? reference.title.trim()
        : identifier;
    const href = this.#href(reference);
    return href
      ? `[${escapeInline(title)}](${encodeLinkTarget(href)})`
      : escapeInline(title);
  }

  #href(reference: Record<string, unknown>): string | undefined {
    const url = reference.url;
    if (typeof url !== "string" || url === "") {
      return undefined;
    }
    if (/^[a-z][a-z0-9+.-]*:/i.test(url)) {
      return url;
    }
    if (!url.startsWith("/documentation/")) {
      return `${canonicalUrlFor(url)}`;
    }
    const [target = "", fragment] = url.split("#");
    if (!this.#context.owned.has(target)) {
      return canonicalUrlFor(url);
    }
    const output = this.#context.outputPaths.get(target);
    const here = this.#context.outputPaths.get(this.#context.documentationPath);
    if (!output || !here) {
      return canonicalUrlFor(url);
    }
    const relative = path.posix.relative(path.posix.dirname(here), output);
    return `${relative}${fragment ? `#${fragment}` : ""}`;
  }

  #blocks(value: unknown): string {
    const parts: string[] = [];
    for (const block of asArray(value)) {
      const rendered = this.#block(block);
      if (rendered.trim()) {
        parts.push(rendered);
      }
    }
    return parts.join("\n\n");
  }

  #block(value: unknown): string {
    const block = asRecord(value);
    if (!block) {
      return "";
    }
    const type = block.type;
    if (typeof type !== "string") {
      return this.#blocks(block.content);
    }
    switch (type) {
      case "paragraph":
        return this.#inline(block.inlineContent);
      case "heading": {
        const level = typeof block.level === "number" ? block.level : 2;
        const text = typeof block.text === "string" ? block.text : "";
        const anchor = typeof block.anchor === "string" ? block.anchor : "";
        const heading = `${"#".repeat(Math.min(Math.max(level, 2), 6))} ${escapeInline(text)}`;
        return anchor
          ? `<a id="${escapeHtmlAttribute(anchor)}"></a>\n\n${heading}`
          : heading;
      }
      case "codeListing": {
        const code = asArray(block.code)
          .filter((line): line is string => typeof line === "string")
          .join("\n");
        const syntax = typeof block.syntax === "string" ? block.syntax : "";
        const metadata = asRecord(block.metadata);
        const anchor =
          typeof metadata?.anchor === "string" ? metadata.anchor : "";
        const title = typeof metadata?.title === "string" ? metadata.title : "";
        const abstract = this.#inline(metadata?.abstract);
        return [
          anchor ? `<a id="${escapeHtmlAttribute(anchor)}"></a>` : "",
          title ? `**${escapeInline(title)}**` : "",
          abstract,
          fencedCode(code, syntax),
        ]
          .filter((part) => part.trim())
          .join("\n\n");
      }
      case "aside": {
        const style =
          typeof block.style === "string"
            ? block.style
            : typeof block.name === "string"
              ? block.name
              : "note";
        const name = typeof block.name === "string" ? block.name : style;
        const content = this.#blocks(block.content);
        return [`> **${escapeInline(titleCase(name))}**`, ""]
          .concat(content.split("\n").map((line) => (line ? `> ${line}` : ">")))
          .join("\n");
      }
      case "unorderedList":
      case "orderedList": {
        const ordered = type === "orderedList";
        const start =
          ordered && typeof block.start === "number" ? block.start : 1;
        const items = asArray(block.items).map((item, index) => {
          const content = this.#blocks(asRecord(item)?.content);
          return bulletItem(
            undefined,
            content,
            ordered ? start + index : undefined,
          );
        });
        return items.join("\n");
      }
      case "termList": {
        const items = asArray(block.items).map((item) => {
          const record = asRecord(item);
          const term = this.#inline(asRecord(record?.term)?.inlineContent);
          const definition = this.#blocks(
            asRecord(record?.definition)?.content,
          );
          return bulletItem(`**${term}**`, definition);
        });
        return items.join("\n");
      }
      case "table":
        return this.#table(block);
      case "thematicBreak":
        return "---";
      case "links": {
        const items = asArray(block.items)
          .map((identifier) =>
            typeof identifier === "string"
              ? this.#topicLine(identifier)
              : undefined,
          )
          .filter((line): line is string => line !== undefined);
        return items.join("\n");
      }
      case "row":
        return asArray(block.columns)
          .map((column) => this.#blocks(asRecord(column)?.content))
          .filter((part) => part.trim())
          .join("\n\n");
      case "tabNavigator":
        return asArray(block.tabs)
          .map((tab) => {
            const record = asRecord(tab);
            const title = typeof record?.title === "string" ? record.title : "";
            const content = this.#blocks(record?.content);
            return [`**${escapeInline(title)}**`, content]
              .filter((part) => part.trim())
              .join("\n\n");
          })
          .filter((part) => part.trim())
          .join("\n\n");
      case "overviewCard":
        return [this.#blocks(block.head), this.#blocks(block.content)]
          .filter((part) => part.trim())
          .join("\n\n");
      case "small":
        return this.#inline(block.inlineContent);
      case "video": {
        const link = this.#link(
          typeof block.identifier === "string" ? block.identifier : "",
        );
        const caption = this.#blocks(block.caption);
        return [link ? `Video: ${link}` : "", caption]
          .filter((part) => part.trim())
          .join("\n\n");
      }
      case "image":
        return this.#image(block);
      case "dictionaryExample": {
        const summary = this.#blocks(block.summary);
        const example = asRecord(block.example);
        const code = asArray(example?.content)
          .map((entry) => this.#block(entry))
          .filter((part) => part.trim())
          .join("\n\n");
        return [summary, code].filter((part) => part.trim()).join("\n\n");
      }
      case "endpointExample": {
        const summary = this.#blocks(block.summary);
        const request = this.#exampleBody(block.request, "Request");
        const response = this.#exampleBody(block.response, "Response");
        return [summary, request, response]
          .filter((part) => part.trim())
          .join("\n\n");
      }
      default:
        throw new Error(`Unsupported DocC block "${type}"`);
    }
  }

  #exampleBody(value: unknown, label: string): string {
    const record = asRecord(value);
    const code = asArray(record?.content)
      .map((entry) => {
        const entryRecord = asRecord(entry);
        return asArray(entryRecord?.code)
          .filter((line): line is string => typeof line === "string")
          .join("\n");
      })
      .filter((part) => part.trim())
      .join("\n");
    return code ? `**${label}**\n\n${fencedCode(code, "http")}` : "";
  }

  #table(block: Record<string, unknown>): string {
    const rows = asArray(block.rows).map((row) =>
      asArray(row).map((cell) =>
        this.#blocks(cell)
          .replace(/\s*\n+\s*/g, " ")
          .replace(/\|/g, "\\|")
          .trim(),
      ),
    );
    if (rows.length === 0) {
      return "";
    }
    const width = Math.max(...rows.map((row) => row.length));
    const padded = rows.map((row) => [
      ...row,
      ...Array.from({ length: width - row.length }, () => ""),
    ]);
    const hasHeader = block.header !== "none";
    const header = hasHeader
      ? (padded[0] ?? [])
      : Array.from({ length: width }, () => "");
    const body = hasHeader ? padded.slice(1) : padded;
    return [
      `| ${header.join(" | ")} |`,
      `| ${Array.from({ length: width }, () => "---").join(" | ")} |`,
      ...body.map((row) => `| ${row.join(" | ")} |`),
    ].join("\n");
  }

  #image(block: Record<string, unknown>): string {
    const identifier =
      typeof block.identifier === "string" ? block.identifier : "";
    const reference = asRecord(this.#references[identifier]);
    const alt =
      typeof reference?.alt === "string"
        ? reference.alt
        : this.#inline(asRecord(block.metadata)?.abstract).trim();
    const variants = asArray(reference?.variants);
    const url = variants
      .map((variant) => asRecord(variant))
      .find((variant) => typeof variant?.url === "string")?.url;
    if (typeof url !== "string") {
      return alt ? `[Image unavailable: ${escapeInline(alt)}]` : "";
    }
    return `![${escapeInline(alt)}](${encodeLinkTarget(absoluteAssetUrl(url))})`;
  }

  #inline(value: unknown): string {
    const parts: string[] = [];
    for (const node of asArray(value)) {
      parts.push(this.#inlineNode(node));
    }
    return parts.join("");
  }

  #inlineNode(value: unknown): string {
    const node = asRecord(value);
    if (!node) {
      return "";
    }
    const type = node.type;
    switch (type) {
      case "text":
        return escapeInline(typeof node.text === "string" ? node.text : "");
      case "codeVoice":
        return inlineCode(typeof node.code === "string" ? node.code : "");
      case "emphasis":
      case "newTerm":
        return wrap(this.#inline(node.inlineContent), "*");
      case "strong":
      case "inlineHead":
        return wrap(this.#inline(node.inlineContent), "**");
      case "strikethrough":
        return wrap(this.#inline(node.inlineContent), "~~");
      case "superscript":
      case "subscript":
        return this.#inline(node.inlineContent);
      case "reference": {
        const identifier =
          typeof node.identifier === "string" ? node.identifier : "";
        const override = this.#inline(node.overridingTitleInlineContent);
        const link = this.#link(identifier);
        if (!link) {
          return override || escapeInline(identifier);
        }
        if (override) {
          const href = this.#href(asRecord(this.#references[identifier]) ?? {});
          return href ? `[${override}](${encodeLinkTarget(href)})` : override;
        }
        return link;
      }
      case "link": {
        const destination =
          typeof node.destination === "string" ? node.destination : "";
        const title = typeof node.title === "string" ? node.title : destination;
        return destination
          ? `[${escapeInline(title)}](${encodeLinkTarget(destination)})`
          : escapeInline(title);
      }
      case "image":
        return this.#image(node);
      default:
        throw new Error(`Unsupported DocC inline "${String(type)}"`);
    }
  }
}

function absoluteAssetUrl(url: string): string {
  return url.startsWith("/") ? canonicalUrlFor(url) : url;
}

function escapeHtmlAttribute(value: string): string {
  return value.replace(/[&"<>]/g, (character) => {
    const replacements: Readonly<Record<string, string>> = {
      "&": "&amp;",
      '"': "&quot;",
      "<": "&lt;",
      ">": "&gt;",
    };
    return replacements[character] ?? character;
  });
}

function encodeLinkTarget(url: string): string {
  return url.replace(/[()\s]/g, (character) =>
    character === "(" ? "%28" : character === ")" ? "%29" : "%20",
  );
}

function tokenText(value: unknown): string {
  return asArray(value)
    .map((token) => {
      const record = asRecord(token);
      return typeof record?.text === "string" ? record.text : "";
    })
    .join("");
}

function scalarText(value: unknown): string | undefined {
  return typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
    ? String(value)
    : undefined;
}

function bulletItem(
  label: string | undefined,
  content: string,
  ordered?: number,
): string {
  const marker = ordered === undefined ? "-" : `${ordered}.`;
  const indent = " ".repeat(marker.length + 1);
  const lines = content.split("\n");
  if (label === undefined) {
    const [first = "", ...rest] = lines;
    return [
      `${marker} ${first}`,
      ...rest.map((line) => (line ? `${indent}${line}` : "")),
    ].join("\n");
  }
  const body = lines
    .filter((line, index) => index > 0 || line !== "")
    .map((line) => (line ? `${indent}${line}` : ""));
  const [first = "", ...rest] = body;
  return [`${marker} ${label}: ${first.trim()}`, ...rest].join("\n").trimEnd();
}

function fencedCode(code: string, syntax: string): string {
  const longest = [...code.matchAll(/`+/g)].reduce(
    (max, match) => Math.max(max, match[0].length),
    0,
  );
  const fence = "`".repeat(Math.max(3, longest + 1));
  return `${fence}${syntax}\n${code}\n${fence}`;
}

function inlineCode(code: string): string {
  const longest = [...code.matchAll(/`+/g)].reduce(
    (max, match) => Math.max(max, match[0].length),
    0,
  );
  const fence = "`".repeat(longest + 1);
  const padding = code.startsWith("`") || code.endsWith("`") ? " " : "";
  return `${fence}${padding}${code}${padding}${fence}`;
}

function wrap(content: string, marker: string): string {
  return content.trim() ? `${marker}${content}${marker}` : "";
}

function titleCase(value: string): string {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^\w/, (character) => character.toUpperCase());
}

// Apple's prose carries Markdown-significant punctuation constantly: symbol
// names with underscores and asterisks, selectors in brackets, generics in
// angle brackets. Escaping is targeted so the rendered text stays readable.
export function escapeInline(value: string): string {
  return value
    .replace(/([\\`*\[\]<>])/g, "\\$1")
    .replace(/(^|[^A-Za-z0-9])_|_(?=[^A-Za-z0-9]|$)/g, (match) =>
      match.replace("_", "\\_"),
    )
    .replace(/^(\s*)([#>+-]|\d+[.)])(\s)/, "$1\\$2$3");
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
}

function asArray(value: unknown): readonly unknown[] {
  return Array.isArray(value) ? (value as readonly unknown[]) : [];
}
