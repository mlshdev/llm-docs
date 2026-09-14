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
  generatedOperationRoute,
  mintlifyGeneratedGroups,
  mintlifySections,
  normalizeMintlifyComponents,
  openApiOperations,
  parseOpenApiSpec,
  renderOpenApiOperationBody,
  resolveMintlifyImport,
  resolveMintlifyLink,
} from "./mintlify.ts";
import type { OpenApiOperation } from "./mintlify.ts";

const docsRoot = "";
const siteBase = "https://docs.vast.ai";
const pageExtensions = [".mdx", ".md"] as const;

export async function buildVastai(
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
      const navigation = navigationOf(config);
      const sections = mintlifySections(navigation);
      const documents = new DocumentCollector(project.id);
      // Navigation is the published page list: the tree also carries READMEs,
      // analysis notes, and snippet partials the site never serves on their own.
      for (const route of sections.keys()) {
        await documents.collect(sourceFor(route, sources) ?? route, () =>
          renderPage({
            route,
            sources,
            docsFiles,
            sections,
            repository: project.repository,
            ref: lock.sourceCommit,
          }),
        );
      }
      // The endpoint pages exist only in the specification: the navigation
      // group that publishes them lists no pages of its own.
      for (const group of mintlifyGeneratedGroups(navigation)) {
        const spec = parseOpenApiSpec(
          await readUtf8(root, group.specPath),
          group.specPath,
        );
        for (const operation of openApiOperations(spec, group.specPath)) {
          await documents.collect(
            `${group.specPath}#${operation.method} ${operation.route}`,
            () =>
              renderOperationPage(
                spec,
                group.specPath,
                group.section,
                operation,
                docsFiles,
                project.repository,
                lock.sourceCommit,
              ),
          );
        }
      }
      return {
        project,
        lock,
        documents: documents.documents,
        quarantined: documents.quarantined,
        notes: [
          "Pages follow the navigation declared in docs.json at the pinned commit; snippets are inlined into the pages that import them rather than published separately.",
          "Endpoint pages are generated from api-reference/openapi.yaml, which is how the site itself publishes them: the navigation group naming the specification lists no pages.",
          "Static MDX cards, tabs, accordions, steps, callouts, and parameter fields are normalized to Markdown without executing JavaScript.",
          "Published page links resolve to https://docs.vast.ai; source assets point at the pinned commit.",
        ],
        licenseText: upstreamNotice,
      };
    },
    (sourcePath) =>
      sourcePath === "docs.json" || /\.(?:mdx|md|ya?ml)$/.test(sourcePath),
  );
}

// Vast.ai publishes its documentation repository without a licence file, so
// there is no upstream grant to reproduce alongside the corpus.
const upstreamNotice = `Vast.ai documentation snapshot

The pages in this directory are a normalized rendering of the documentation
Vast.ai publishes at https://docs.vast.ai from the public repository
https://github.com/vast-ai/docs.

Vast.ai has not released that repository under an open-source licence: it
carries no LICENSE file, and the documentation remains Vast.ai's copyrighted
material, reproduced here as a machine-readable reference only.

Terms of service: https://vast.ai/terms
Privacy policy: https://vast.ai/privacy

Vast.ai is a trademark of Vast.ai, Inc. This snapshot is not affiliated with or
endorsed by Vast.ai, Inc.
`;

interface PageContext {
  readonly route: string;
  readonly sources: ReadonlyMap<string, string>;
  readonly docsFiles: ReadonlySet<string>;
  readonly sections: ReadonlyMap<string, string>;
  readonly repository: string;
  readonly ref: string;
}

function renderPage(context: PageContext) {
  const sourcePath = sourceFor(context.route, context.sources);
  if (sourcePath === undefined) {
    throw new Error(`Navigation names a missing page ${context.route}`);
  }
  const source = context.sources.get(sourcePath);
  if (source === undefined) {
    throw new Error(`Unread Vast.ai page ${sourcePath}`);
  }
  const frontmatter = parseFrontmatter(source);
  const converted = convertPage(source, sourcePath, context);
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
    [`# ${title}`, describe(frontmatter.attributes), prose]
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

function renderOperationPage(
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
  section: string,
  operation: OpenApiOperation,
  docsFiles: ReadonlySet<string>,
  repository: string,
  ref: string,
) {
  const route = generatedOperationRoute(operation, specPath);
  const title = operation.summary ?? operation.operationId;
  const rendered = normalizeSpacing(
    [
      `# ${title}`,
      renderOpenApiOperationBody(
        spec,
        specPath,
        operation.method,
        operation.route,
        false,
      ),
    ].join("\n\n"),
  );
  const body = rewriteMarkdownLinks(rendered, (url, kind) =>
    resolveMintlifyLink(url, kind, {
      sourcePath: specPath,
      docsFiles,
      repository,
      ref,
      siteBase,
      docsRoot,
    }),
  );
  return {
    sourcePath: `${specPath}#${operation.method} ${operation.route}`,
    outputPath: `pages/${route}.md`,
    title,
    body,
    canonicalUrl: `${siteBase}/${route}`,
    section,
  };
}

function convertPage(
  source: string,
  sourcePath: string,
  context: PageContext,
): ReturnType<typeof convertMdx> {
  try {
    return convertMdx(normalizeVastMdx(source), sourcePath, {
      resolveImport: (specifier, fromPath) =>
        resolveImport(specifier, fromPath, context.sources),
    });
  } catch (error) {
    throw new Error(`Unable to convert Vast.ai page ${sourcePath}`, {
      cause: error,
    });
  }
}

export function normalizeVastMdx(source: string): string {
  // The generated Python reference uses braces as prose punctuation for enum
  // choices. MDX otherwise interprets them as JavaScript expressions.
  return normalizeMintlifyComponents(
    source.replace(
      /:\s*\{([^{}\n]+)\}(?=\s*(?:\n|<))/g,
      (_match, choices: string) => `: \`{${choices}}\``,
    ),
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
    ? { ...resolved, source: normalizeVastMdx(resolved.source) }
    : undefined;
}
