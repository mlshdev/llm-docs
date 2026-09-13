import path from "node:path";
import { readUtf8, withRepositoryArchive } from "../files.ts";
import {
  documentTitle,
  normalizeSpacing,
  parseFrontmatter,
  rewriteMarkdownLinks,
} from "../markdown.ts";
import { convertMdx } from "../mdx.ts";
import type { MdxImport } from "../mdx.ts";
import { DocumentCollector } from "../quarantine.ts";
import type {
  GithubLockedSource,
  GithubSourceProject,
  ProjectBuild,
} from "../types.ts";
import {
  mintlifySections,
  normalizeMintlifyComponents,
  parseMintlifyOpenApiOperation,
  parseOpenApiSpec,
  renderOpenApiOperationBody,
  resolveMintlifyImport,
  resolveMintlifyLink,
} from "./mintlify.ts";

const docsRoot = "";
const siteBase = "https://docs.runpod.io";
const pageExtensions = [".mdx", ".md"] as const;
const tooltipsPath = "snippets/tooltips.jsx";

// The site declares no specification in `docs.json`: a reference page resolves
// against the specification sitting in the top-level directory it lives under,
// which is how the two API versions keep separate specifications.
const specFileName = "openapi.json";

export async function buildRunpod(
  project: GithubSourceProject,
  lock: GithubLockedSource,
): Promise<ProjectBuild> {
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const docsFiles = new Set([...archiveFiles].sort());
      const sources = new Map<string, string>();
      for (const file of docsFiles) {
        if (isReadableSource(file)) {
          sources.set(file, await readUtf8(root, file));
        }
      }
      const config: unknown = JSON.parse(await readUtf8(root, "docs.json"));
      const sections = mintlifySections(navigationOf(config));
      const tooltips = docsFiles.has(tooltipsPath)
        ? tooltipLabels(await readUtf8(root, tooltipsPath))
        : new Map<string, string>();
      const documents = new DocumentCollector(project.id);
      // Navigation is the published page list: the tree also carries a README,
      // agent instructions, and test fixtures the site never serves.
      for (const route of sections.keys()) {
        await documents.collect(sourceFor(route, sources) ?? route, () =>
          renderPage({
            route,
            sources,
            docsFiles,
            sections,
            tooltips,
            root,
            repository: project.repository,
            ref: lock.sourceCommit,
          }),
        );
      }
      return {
        project,
        lock,
        documents: documents.documents,
        quarantined: documents.quarantined,
        notes: [
          "Pages follow the navigation declared in docs.json at the pinned commit; snippets are inlined into the pages that import them rather than published separately.",
          "API reference pages are rendered from the OpenAPI specification in the directory the page lives under, since the upstream page carries no prose of its own.",
          "Glossary tooltips are replaced by the term they label, and static MDX cards, tabs, accordions, steps, file trees, callouts, and parameter fields are normalized to Markdown without executing JavaScript.",
          "Published page links resolve to https://docs.runpod.io; source assets point at the pinned commit.",
        ],
        licenseText: upstreamNotice,
      };
    },
    (sourcePath) =>
      sourcePath === tooltipsPath ||
      sourcePath === "docs.json" ||
      sourcePath.endsWith(`/${specFileName}`) ||
      /\.(?:mdx|md)$/.test(sourcePath),
  );
}

// Runpod publishes its documentation repository without a licence file, so
// there is no upstream grant to reproduce alongside the corpus.
const upstreamNotice = `Runpod documentation snapshot

The pages in this directory are a normalized rendering of the documentation
Runpod publishes at https://docs.runpod.io from the public repository
https://github.com/runpod/docs.

Runpod has not released that repository under an open-source licence: it
carries no LICENSE file, and the documentation remains Runpod's copyrighted
material, reproduced here as a machine-readable reference only.

Terms of service: https://www.runpod.io/legal/terms-of-service
Privacy policy: https://www.runpod.io/legal/privacy-policy

Runpod is a trademark of Runpod, Inc. This snapshot is not affiliated with or
endorsed by Runpod, Inc.
`;

interface PageContext {
  readonly route: string;
  readonly sources: ReadonlyMap<string, string>;
  readonly docsFiles: ReadonlySet<string>;
  readonly sections: ReadonlyMap<string, string>;
  readonly tooltips: ReadonlyMap<string, string>;
  readonly root: string;
  readonly repository: string;
  readonly ref: string;
}

async function renderPage(context: PageContext) {
  const sourcePath = sourceFor(context.route, context.sources);
  if (sourcePath === undefined) {
    throw new Error(`Navigation names a missing page ${context.route}`);
  }
  const source = context.sources.get(sourcePath);
  if (source === undefined) {
    throw new Error(`Unread Runpod page ${sourcePath}`);
  }
  const frontmatter = parseFrontmatter(source);
  const converted = convertPage(source, sourcePath, context);
  const specBody = await renderSpecOperation(
    frontmatter.attributes,
    sourcePath,
    context,
  );
  const prose = rewriteMarkdownLinks(converted.body, (url, kind) =>
    resolveMintlifyLink(url, kind, {
      sourcePath,
      docsFiles: context.docsFiles,
      repository: context.repository,
      ref: context.ref,
      siteBase,
      docsRoot,
    }),
  );
  const title = documentTitle(prose, frontmatter.attributes, sourcePath);
  const body = normalizeSpacing(
    [`# ${title}`, describe(frontmatter.attributes), specBody, prose]
      .filter((part) => part && part.trim())
      .join("\n\n"),
  );
  return {
    sourcePath,
    outputPath: `pages/${context.route}.md`,
    title,
    body,
    canonicalUrl: `${siteBase}/${context.route}`,
    section: context.sections.get(context.route) ?? "Documentation",
  };
}

function convertPage(
  source: string,
  sourcePath: string,
  context: PageContext,
): ReturnType<typeof convertMdx> {
  try {
    return convertMdx(normalizeSource(source, context.tooltips), sourcePath, {
      resolveImport: (specifier, fromPath) =>
        resolveImport(specifier, fromPath, context),
    });
  } catch (error) {
    throw new Error(`Unable to convert Runpod page ${sourcePath}`, {
      cause: error,
    });
  }
}

// The reference pages carry only frontmatter: their whole body is the
// operation the site renders from the specification its directory holds.
async function renderSpecOperation(
  attributes: Readonly<Record<string, unknown>>,
  sourcePath: string,
  context: PageContext,
): Promise<string | undefined> {
  const directive = attributes.openapi;
  if (typeof directive !== "string") {
    return undefined;
  }
  const operation = parseMintlifyOpenApiOperation(directive);
  if (!operation) {
    throw new Error(`Unsupported openapi directive "${directive}"`);
  }
  if (operation.spec !== undefined) {
    throw new Error(
      `Runpod page ${sourcePath} names specification "${operation.spec}", which docs.json does not declare`,
    );
  }
  const specPath = `${sourcePath.split("/")[0]}/${specFileName}`;
  if (!context.docsFiles.has(specPath)) {
    throw new Error(
      `Runpod page ${sourcePath} has no OpenAPI specification at ${specPath}`,
    );
  }
  const spec = parseOpenApiSpec(
    await readUtf8(context.root, specPath),
    specPath,
  );
  return renderOpenApiOperationBody(
    spec,
    specPath,
    operation.method,
    operation.route,
  );
}

// Each glossary tooltip is a component wrapping the term it defines; the term
// is the only part of it a reader of the prose sees.
export function tooltipLabels(source: string): ReadonlyMap<string, string> {
  const labels = new Map<string, string>();
  const declaration =
    /export\s+const\s+([A-Za-z_$][\w$]*)\s*=[\s\S]*?<Tooltip\b[^>]*>([\s\S]*?)<\/Tooltip>/g;
  for (const match of source.matchAll(declaration)) {
    const name = match[1];
    const label = match[2]?.replace(/\s+/g, " ").trim();
    if (name && label) {
      labels.set(name, label);
    }
  }
  return labels;
}

function normalizeSource(
  source: string,
  tooltips: ReadonlyMap<string, string>,
): string {
  let normalized = normalizeMintlifyComponents(source);
  for (const [name, label] of tooltips) {
    normalized = normalized.replaceAll(
      new RegExp(`<${name}\\s*/>|<${name}\\s*>\\s*</${name}>`, "g"),
      label,
    );
  }
  return normalized;
}

function describe(attributes: Readonly<Record<string, unknown>>): string {
  const description = attributes.description;
  return typeof description === "string" && description.trim()
    ? description.trim()
    : "";
}

function sourceFor(
  route: string,
  sources: ReadonlyMap<string, string>,
): string | undefined {
  return pageExtensions
    .map((extension) => `${route}${extension}`)
    .find((candidate) => sources.has(candidate));
}

function isReadableSource(sourcePath: string): boolean {
  return pageExtensions.some((extension) => sourcePath.endsWith(extension));
}

function navigationOf(config: unknown): unknown {
  return config && typeof config === "object" && "navigation" in config
    ? (config as { readonly navigation: unknown }).navigation
    : undefined;
}

// The glossary module is JavaScript rather than a partial, and its components
// are substituted before conversion, so its import contributes no prose.
function resolveImport(
  specifier: string,
  fromPath: string,
  context: PageContext,
): MdxImport | undefined {
  const resolved = specifier.startsWith("/")
    ? specifier.slice(1)
    : path.posix.normalize(
        path.posix.join(path.posix.dirname(fromPath), specifier),
      );
  if (resolved === tooltipsPath) {
    return { kind: "omitted", sourcePath: resolved, source: "" };
  }
  const partial = resolveMintlifyImport(specifier, fromPath, context.sources);
  return partial
    ? { ...partial, source: normalizeSource(partial.source, context.tooltips) }
    : undefined;
}
