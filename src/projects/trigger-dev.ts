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
  mintlifyOpenApiSpecs,
  mintlifySections,
  normalizeMintlifyComponents,
  parseMintlifyOpenApiOperation,
  parseOpenApiSpec,
  renderOpenApiOperationBody,
  resolveMintlifyImport,
  resolveMintlifyLink,
} from "./mintlify.ts";

const docsRoot = "docs/";
const siteBase = "https://trigger.dev/docs";
const pageExtensions = [".mdx", ".md"] as const;

export async function buildTriggerDev(
  project: GithubSourceProject,
  lock: GithubLockedSource,
): Promise<ProjectBuild> {
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      // Membership comes from the archive listing rather than the extracted
      // tree, so a link to an image or a sample file the corpus does not
      // publish still resolves to the file it names upstream.
      const docsFiles = new Set(
        [...archiveFiles]
          .filter((file) => file.startsWith(docsRoot))
          .map((file) => file.slice(docsRoot.length))
          .sort(),
      );
      const sources = new Map<string, string>();
      for (const file of docsFiles) {
        if (isReadableSource(file)) {
          sources.set(file, await readUtf8(root, `${docsRoot}${file}`));
        }
      }
      const config: unknown = JSON.parse(
        await readUtf8(root, `${docsRoot}docs.json`),
      );
      const sections = mintlifySections(navigationOf(config));
      const specs = mintlifyOpenApiSpecs(config);
      const documents = new DocumentCollector(project.id);
      // Navigation is the published page list: the tree also carries working
      // notes and agent instructions the site never serves.
      for (const route of sections.keys()) {
        await documents.collect(sourceFor(route, sources) ?? route, () =>
          renderPage({
            route,
            sources,
            docsFiles,
            sections,
            specs,
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
          "Pages follow the navigation declared in docs/docs.json at the immutable release tag; snippets are inlined into the pages that import them rather than published separately.",
          "API reference pages are rendered from the OpenAPI specification the page names in its `openapi` frontmatter, since the upstream page carries no prose of its own.",
          "Static MDX cards, tabs, accordions, steps, callouts, and parameter fields are normalized to Markdown without executing JavaScript.",
          "Published page links resolve to https://trigger.dev/docs; source assets point at the immutable release commit.",
        ],
        licenseText: await readUtf8(root, "LICENSE"),
      };
    },
    (sourcePath) =>
      sourcePath === "LICENSE" ||
      /^docs\/.*\.(?:mdx|md|json|ya?ml)$/.test(sourcePath),
  );
}

interface PageContext {
  readonly route: string;
  readonly sources: ReadonlyMap<string, string>;
  readonly docsFiles: ReadonlySet<string>;
  readonly sections: ReadonlyMap<string, string>;
  readonly specs: ReadonlyMap<string, string>;
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
    throw new Error(`Unread Trigger.dev page ${sourcePath}`);
  }
  const frontmatter = parseFrontmatter(source);
  const converted = convertPage(source, sourcePath, context);
  const specBody = await renderSpecOperation(frontmatter.attributes, context);
  const title = documentTitle(
    converted.body,
    frontmatter.attributes,
    sourcePath,
  );
  const body = rewriteMarkdownLinks(
    normalizeSpacing(
      [`# ${title}`, describe(frontmatter.attributes), specBody, converted.body]
        .filter((part) => part && part.trim())
        .join("\n\n"),
    ),
    (url, kind) =>
      resolveMintlifyLink(url, kind, {
        sourcePath,
        docsFiles: context.docsFiles,
        repository: context.repository,
        ref: context.ref,
        siteBase,
        docsRoot,
      }),
  );
  return {
    sourcePath: `${docsRoot}${sourcePath}`,
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
    return convertMdx(
      normalizeTriggerComponents(source, sourcePath, context.sources),
      sourcePath,
      {
        resolveImport: (specifier, fromPath) =>
          resolveImport(specifier, fromPath, context.sources),
      },
    );
  } catch (error) {
    throw new Error(`Unable to convert Trigger.dev page ${sourcePath}`, {
      cause: error,
    });
  }
}

export function normalizeTriggerComponents(
  source: string,
  sourcePath: string,
  sources: ReadonlyMap<string, string>,
): string {
  let normalized = source;
  for (const [name, snippetPath] of [
    ["ScrapingWarning", "snippets/web-scraping-warning.mdx"],
    ["UsefulNextSteps", "snippets/useful-next-steps.mdx"],
  ] as const) {
    if (!new RegExp(`<${name}\\s*/>`).test(normalized)) {
      continue;
    }
    const snippet = sources.get(snippetPath);
    if (snippet === undefined) {
      throw new Error(
        `Trigger.dev ${sourcePath} uses <${name}> but ${snippetPath} is missing`,
      );
    }
    normalized = normalized.replace(new RegExp(`<${name}\\s*/>`, "g"), snippet);
  }
  // Mintlify's site-level SoftLimit component is a visual marker between the
  // hard batch-size limit and the following soft rate limits. It contributes
  // no text to the rendered page.
  normalized = normalized.replace(/<SoftLimit\s*\/>/g, "");
  return normalizeMintlifyComponents(normalized);
}

// The reference pages carry only frontmatter: their whole body is the
// operation the site renders from the specification it names.
async function renderSpecOperation(
  attributes: Readonly<Record<string, unknown>>,
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
  const specPath =
    operation.spec === undefined
      ? context.specs.values().next().value
      : context.specs.get(operation.spec);
  if (specPath === undefined) {
    throw new Error(`Undeclared OpenAPI specification for "${directive}"`);
  }
  const spec = parseOpenApiSpec(
    await readUtf8(context.root, `${docsRoot}${specPath}`),
    specPath,
  );
  return renderOpenApiOperationBody(
    spec,
    specPath,
    operation.method,
    operation.route,
  );
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

function resolveImport(
  specifier: string,
  fromPath: string,
  sources: ReadonlyMap<string, string>,
): MdxImport | undefined {
  const resolved = resolveMintlifyImport(specifier, fromPath, sources);
  return resolved
    ? {
        ...resolved,
        source: normalizeTriggerComponents(
          resolved.source,
          resolved.sourcePath,
          sources,
        ),
      }
    : undefined;
}
