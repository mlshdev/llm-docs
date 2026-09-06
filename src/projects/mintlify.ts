import path from "node:path";
import { parse as parseYaml } from "yaml";
import { isRecord } from "../config.ts";
import { githubBlobUrl, githubRawUrl, normalizeSpacing } from "../markdown.ts";
import type { MdxImport } from "../mdx.ts";

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

// Renders the fields of one operation for a page whose frontmatter names it
// directly, so the page's own title already identifies it.
export function renderOpenApiOperationBody(
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
  method: string,
  route: string,
): string {
  const item = resolveOpenApiRef(
    spec,
    isRecord(spec.paths) ? spec.paths[route] : undefined,
    specPath,
  );
  if (!isRecord(item)) {
    throw new Error(`OpenAPI specification ${specPath} has no path ${route}`);
  }
  const operation = resolveOpenApiRef(
    spec,
    item[method.toLowerCase()],
    specPath,
  );
  if (!isRecord(operation)) {
    throw new Error(
      `OpenAPI specification ${specPath} has no ${method} operation for ${route}`,
    );
  }
  const lines = [`\`${method.toUpperCase()} ${route}\``];
  const sharedParameters = Array.isArray(item.parameters)
    ? item.parameters
    : [];
  renderOperationBody(lines, spec, specPath, operation, sharedParameters);
  return normalizeSpacing(lines.join("\n"));
}

function renderOperationBody(
  lines: string[],
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
  operation: Readonly<Record<string, unknown>>,
  sharedParameters: readonly unknown[],
): void {
  if (typeof operation.summary === "string" && operation.summary.trim()) {
    lines.push("", `**${operation.summary.trim()}**`);
  }
  if (
    typeof operation.description === "string" &&
    operation.description.trim()
  ) {
    lines.push("", operation.description.trim());
  }
  const parameters = [
    ...sharedParameters,
    ...(Array.isArray(operation.parameters) ? operation.parameters : []),
  ];
  if (parameters.length > 0) {
    lines.push("", "**Parameters**", "");
    for (const rawParameter of parameters) {
      const parameter = resolveOpenApiRef(spec, rawParameter, specPath);
      if (!isRecord(parameter) || typeof parameter.name !== "string") {
        continue;
      }
      const location =
        typeof parameter.in === "string" ? parameter.in : "parameter";
      lines.push(
        `- \`${parameter.name}\` (${location}${parameter.required ? ", required" : ""})${typeof parameter.description === "string" ? `: ${singleLine(parameter.description)}` : ""}`,
      );
    }
  }
  const requestBody = resolveOpenApiRef(spec, operation.requestBody, specPath);
  if (isRecord(requestBody)) {
    lines.push(
      "",
      `**Request body**${typeof requestBody.description === "string" ? `: ${singleLine(requestBody.description)}` : ""}`,
    );
  }
  if (isRecord(operation.responses)) {
    lines.push("", "**Responses**", "");
    for (const [status, rawResponse] of Object.entries(operation.responses)) {
      const response = resolveOpenApiRef(spec, rawResponse, specPath);
      lines.push(
        `- \`${status}\`${isRecord(response) && typeof response.description === "string" ? `: ${singleLine(response.description)}` : ""}`,
      );
    }
  }
}

function resolveOpenApiRef(
  spec: Readonly<Record<string, unknown>>,
  value: unknown,
  specPath: string,
): unknown {
  if (!isRecord(value) || typeof value.$ref !== "string") {
    return value;
  }
  if (!value.$ref.startsWith("#/")) {
    throw new Error(
      `OpenAPI specification ${specPath} uses external reference ${value.$ref}`,
    );
  }
  let current: unknown = spec;
  for (const encoded of value.$ref.slice(2).split("/")) {
    const key = encoded.replaceAll("~1", "/").replaceAll("~0", "~");
    if (!isRecord(current) || !(key in current)) {
      throw new Error(
        `OpenAPI specification ${specPath} has unresolved reference ${value.$ref}`,
      );
    }
    current = current[key];
  }
  return current;
}

function singleLine(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}
