import path from "node:path";
import { parse as parseYaml } from "yaml";
import { isRecord } from "../config.ts";
import { githubBlobUrl, githubRawUrl } from "../markdown.ts";
import type { MdxImport } from "../mdx.ts";
export { renderOpenApiOperationBody } from "../openapi.ts";

// Both sites publish a page at exactly its file path relative to the
// repository root, minus extension; Mintlify performs no directory-index
// collapsing, so `guides/serverless/index.mdx` really is served at
// `.../guides/serverless/index`.
export function mintlifyRoute(sourcePath: string): string {
  return sourcePath.replace(/\.mdx?$/, "");
}

// Imports are written either root-relative (`/snippets/foo.mdx`) or relative
// to the importing file (`./foo.mdx`); only MDX/MD partials are resolved
// here; a caller layers project-specific extensions, such as label snippets
// re-exported from a `.jsx` file, in front of this generic fallback.
export function resolveMintlifyImport(
  specifier: string,
  fromPath: string,
  sources: ReadonlyMap<string, string>,
): MdxImport | undefined {
  const resolved = specifier.startsWith("/")
    ? specifier.slice(1)
    : path.posix.normalize(
        path.posix.join(path.posix.dirname(fromPath), specifier),
      );
  if (!/\.mdx?$/.test(resolved)) {
    return undefined;
  }
  const source = sources.get(resolved);
  return source === undefined
    ? undefined
    : { kind: "mdx", sourcePath: resolved, source };
}

const navigationChildKeys = [
  "tabs",
  "anchors",
  "dropdowns",
  "versions",
  "languages",
  "groups",
  "pages",
] as const;

// Mintlify names a nesting level with `group`, and the levels enclosing it
// with `tab`, `dropdown`, or `anchor`. The outermost group is the section a
// reader recognizes, since nested groups only subdivide it, so an enclosing
// container label names just the pages that sit outside every group.
const navigationContainerKeys = ["tab", "dropdown", "anchor"] as const;

// Maps each page path in `docs.json` navigation to its section title; pages
// absent from navigation are left for the caller to fall back to a default.
export function mintlifySections(
  navigation: unknown,
): ReadonlyMap<string, string> {
  const result = new Map<string, string>();
  walk(navigation, undefined, undefined);
  return result;

  function walk(
    node: unknown,
    group: string | undefined,
    container: string | undefined,
  ): void {
    if (typeof node === "string") {
      const section = group ?? container;
      if (section) {
        result.set(node, section);
      }
      return;
    }
    if (Array.isArray(node)) {
      for (const child of node) {
        walk(child, group, container);
      }
      return;
    }
    if (!isRecord(node)) {
      return;
    }
    const nextGroup =
      group ?? (typeof node.group === "string" ? node.group : undefined);
    let nextContainer = container;
    for (const key of navigationContainerKeys) {
      const value = node[key];
      if (typeof value === "string") {
        nextContainer = value;
      }
    }
    for (const key of navigationChildKeys) {
      if (Array.isArray(node[key])) {
        walk(node[key], nextGroup, nextContainer);
      }
    }
  }
}

// A link or image written as a root-relative or relative path is resolved
// against archive membership: a real file becomes a pinned GitHub URL, and
// everything else is assumed to be a page the site serves at that route,
// since Mintlify pages carry no extension and are not all necessarily
// present in navigation. Paths are documentation-root relative, so a site
// kept in a subdirectory of its repository still points assets at the
// repository path they live under.
export interface MintlifyLinkContext {
  readonly sourcePath: string;
  readonly docsFiles: ReadonlySet<string>;
  readonly repository: string;
  readonly ref: string;
  readonly siteBase: string;
  readonly docsRoot: string;
}

export function resolveMintlifyLink(
  url: string,
  kind: "link" | "image",
  context: MintlifyLinkContext,
): string | undefined {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) {
    return url;
  }
  const match = url.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? url;
  const suffix = match?.[2] ?? "";
  if (!pathname) {
    return `${context.siteBase}/${mintlifyRoute(context.sourcePath)}${suffix}`;
  }
  const resolved = pathname.startsWith("/")
    ? pathname.slice(1)
    : path.posix.normalize(
        path.posix.join(path.posix.dirname(context.sourcePath), pathname),
      );
  const cleaned = resolved.replace(/\/$/, "");
  if (context.docsFiles.has(cleaned)) {
    const repositoryPath = `${context.docsRoot}${cleaned}`;
    const asset =
      kind === "image"
        ? githubRawUrl(context.repository, context.ref, repositoryPath)
        : githubBlobUrl(context.repository, context.ref, repositoryPath);
    return `${asset}${suffix}`;
  }
  if (kind === "image") {
    return undefined;
  }
  return `${context.siteBase}/${cleaned}${suffix}`;
}

// `docs.json` declares the specs a site serves, either as one path or as a
// list; a page names the one it renders by the file's base name.
export function mintlifyOpenApiSpecs(
  config: unknown,
): ReadonlyMap<string, string> {
  const specs = new Map<string, string>();
  const api = isRecord(config) ? config.api : undefined;
  const declared = isRecord(api) ? api.openapi : undefined;
  for (const entry of Array.isArray(declared) ? declared : [declared]) {
    const specPath =
      typeof entry === "string"
        ? entry
        : isRecord(entry) && typeof entry.source === "string"
          ? entry.source
          : undefined;
    if (specPath) {
      specs.set(
        path.posix.basename(specPath).replace(/\.(?:json|ya?ml)$/, ""),
        specPath,
      );
    }
  }
  return specs;
}

export interface MintlifyOpenApiOperation {
  readonly spec?: string;
  readonly method: string;
  readonly route: string;
}

const httpMethods = ["get", "post", "put", "patch", "delete", "head"] as const;

// An `openapi:` frontmatter directive is `[spec] METHOD /route`, where the
// spec name is omitted when the site declares exactly one.
export function parseMintlifyOpenApiOperation(
  directive: string,
): MintlifyOpenApiOperation | undefined {
  const parts = directive.trim().split(/\s+/);
  const route = parts.at(-1);
  const method = parts.at(-2);
  if (
    parts.length < 2 ||
    parts.length > 3 ||
    !route?.startsWith("/") ||
    !method ||
    !httpMethods.includes(method.toLowerCase() as (typeof httpMethods)[number])
  ) {
    return undefined;
  }
  const spec = parts.length === 3 ? parts[0] : undefined;
  return spec === undefined
    ? { method: method.toLowerCase(), route }
    : { spec, method: method.toLowerCase(), route };
}

export function parseOpenApiSpec(
  source: string,
  specPath: string,
): Record<string, unknown> {
  const parsed: unknown = parseYaml(source);
  if (!isRecord(parsed)) {
    throw new Error(`OpenAPI specification ${specPath} is invalid`);
  }
  return parsed;
}

// Maps the Mintlify component library onto the small set of components the
// MDX converter renders as prose.
export function normalizeMintlifyComponents(source: string): string {
  return (
    source
      // Search engines read the JSON-LD a page embeds for them; a reader of the
      // prose never sees it. Only this one metadata form is dropped, so a page
      // carrying executable script still fails conversion rather than passing
      // silently into the corpus.
      .replace(
        /<script\s+type="application\/ld\+json"[\s\S]*?(?:\/>|<\/script>)/g,
        "",
      )
      .replace(/<Icon\b[^>]*\/>/g, "")
      .replace(/<Icon\b[^>]*>[\s\S]*?<\/Icon>/g, "")
      .replace(/<Danger(?:\s+[^>]*)?>/g, '<Callout type="danger">')
      .replace(/<\/Danger>/g, "</Callout>")
      .replace(/<Important(?:\s+[^>]*)?>/g, '<Callout type="important">')
      .replace(/<\/Important>/g, "</Callout>")
      .replace(/<Warn\b/g, "<Warning")
      .replace(/<\/Warn>/g, "</Warning>")
      .replace(/<Check\b/g, "<Success")
      .replace(/<\/Check>/g, "</Success>")
      .replace(/<(?:Request|Response)Example(?:\s+[^>]*)?>/g, "<Column>")
      .replace(/<\/(?:Request|Response)Example>/g, "</Column>")
      .replace(/<CardGroup(?:\s+[^>]*)?>/g, "<Cards>")
      .replace(/<\/CardGroup>/g, "</Cards>")
      .replace(/<AccordionGroup(?:\s+[^>]*)?>/g, "<Tabs>")
      .replace(/<\/AccordionGroup>/g, "</Tabs>")
      .replace(/<Accordion\b/g, "<Tab")
      .replace(/<\/Accordion>/g, "</Tab>")
      .replace(/<Expandable\b/g, "<Tab")
      .replace(/<\/Expandable>/g, "</Tab>")
      .replace(/<Update\b/g, "<Tab")
      .replace(/<\/Update>/g, "</Tab>")
      .replace(/<Frame(?:\s+[^>]*)?>/g, "<div>")
      .replace(/<\/Frame>/g, "</div>")
      .replace(/<Tip(?:\s+[^>]*)?>/g, '<Callout type="tip">')
      .replace(/<\/Tip>/g, "</Callout>")
      .replace(/<Info(?:\s+[^>]*)?>/g, '<Callout type="info">')
      .replace(/<\/Info>/g, "</Callout>")
      .replace(/<Columns(?:\s+[^>]*)?>/g, "<Column>")
      .replace(/<\/Columns>/g, "</Column>")
      .replace(/<Image\b/g, "<img")
      .replace(/<\/Image>/g, "</img>")
      .replace(/<(?:ParamField|ResponseField)\b/g, "<Property")
      .replace(/<\/(?:ParamField|ResponseField)>/g, "</Property>")
  );
}

// The slug Mintlify gives a path segment it derives from spec text: word
// boundaries inside an identifier become separators before every run of
// non-alphanumerics collapses to a single hyphen.
export function mintlifySlug(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

// A navigation group that names a specification and lists no pages publishes
// one page per operation instead, which only the specification enumerates.
export interface MintlifyGeneratedGroup {
  readonly specPath: string;
  readonly section: string;
}

export function mintlifyGeneratedGroups(
  navigation: unknown,
): readonly MintlifyGeneratedGroup[] {
  const groups: MintlifyGeneratedGroup[] = [];
  walk(navigation, undefined);
  return groups;

  function walk(node: unknown, container: string | undefined): void {
    if (Array.isArray(node)) {
      for (const child of node) {
        walk(child, container);
      }
      return;
    }
    if (!isRecord(node)) {
      return;
    }
    let nextContainer = container;
    for (const key of navigationContainerKeys) {
      const value = node[key];
      if (typeof value === "string") {
        nextContainer = value;
      }
    }
    const group = typeof node.group === "string" ? node.group : undefined;
    if (typeof node.openapi === "string" && !Array.isArray(node.pages)) {
      groups.push({
        specPath: node.openapi,
        section: group ?? nextContainer ?? "API reference",
      });
    }
    for (const key of navigationChildKeys) {
      if (Array.isArray(node[key])) {
        walk(node[key], group ?? nextContainer);
      }
    }
  }
}

export interface OpenApiOperation {
  readonly method: string;
  readonly route: string;
  readonly operationId: string;
  readonly summary?: string;
  readonly tag?: string;
}

// Every operation a specification declares, in document order, so a site that
// generates its endpoint pages publishes them in the order the spec lists.
export function openApiOperations(
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
): readonly OpenApiOperation[] {
  const paths = spec.paths;
  if (!isRecord(paths)) {
    throw new Error(`OpenAPI specification ${specPath} declares no paths`);
  }
  const operations: OpenApiOperation[] = [];
  for (const [route, item] of Object.entries(paths)) {
    if (!isRecord(item)) {
      continue;
    }
    for (const method of httpMethods) {
      const operation = item[method];
      if (!isRecord(operation)) {
        continue;
      }
      const operationId = operation.operationId;
      if (typeof operationId !== "string" || !operationId.trim()) {
        throw new Error(
          `OpenAPI specification ${specPath} has no operationId for ${method.toUpperCase()} ${route}`,
        );
      }
      const summary = operation.summary;
      const tag = Array.isArray(operation.tags) ? operation.tags[0] : undefined;
      operations.push({
        method,
        route,
        operationId,
        ...(typeof summary === "string" && summary.trim()
          ? { summary: summary.trim() }
          : {}),
        ...(typeof tag === "string" && tag.trim() ? { tag: tag.trim() } : {}),
      });
    }
  }
  return operations;
}

// Mintlify roots generated endpoint pages at the directory holding the
// specification and names each one after the operation's summary, falling back
// to its identifier; the operation's first tag groups them underneath.
export function generatedOperationRoute(
  operation: OpenApiOperation,
  specPath: string,
): string {
  const segments = [path.posix.dirname(specPath)];
  if (operation.tag) {
    segments.push(mintlifySlug(operation.tag));
  }
  segments.push(mintlifySlug(operation.summary ?? operation.operationId));
  return segments.filter((segment) => segment && segment !== ".").join("/");
}
