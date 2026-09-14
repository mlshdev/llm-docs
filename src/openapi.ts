import { isRecord } from "./config.ts";
import { normalizeSpacing } from "./markdown.ts";

const httpMethods = [
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options",
] as const;
const maximumSchemaDepth = 10;
const maximumRenderedNodes = 10_000;
const maximumOperationCharacters = 500_000;
// A versioned engine reference intentionally collects hundreds of operations
// into one document. Keep a hard ceiling, but size it for that legitimate
// whole-specification use case rather than silently dropping the page.
const maximumDocumentCharacters = 8_000_000;

interface RenderState {
  readonly budget: { nodes: number };
  readonly references: ReadonlySet<string>;
}

export function renderOpenApiOperationBody(
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
  method: string,
  route: string,
  includeSummary = true,
): string {
  const item = resolveReference(spec, spec.paths, specPath);
  const pathItem = isRecord(item)
    ? resolveReference(spec, item[route], specPath)
    : undefined;
  if (!isRecord(pathItem)) {
    throw new Error(`OpenAPI specification ${specPath} has no path ${route}`);
  }
  const operation = resolveReference(
    spec,
    pathItem[method.toLowerCase()],
    specPath,
  );
  if (!isRecord(operation)) {
    throw new Error(
      `OpenAPI specification ${specPath} has no ${method} operation for ${route}`,
    );
  }
  const lines = [`\`${method.toUpperCase()} ${route}\``];
  appendOperation(lines, spec, specPath, pathItem, operation, includeSummary);
  return bounded(lines, specPath, maximumOperationCharacters);
}

export function renderOpenApiDocument(
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
): string {
  const lines = ["## API specification"];
  const info = resolveRecord(spec, spec.info, specPath);
  if (typeof info?.title === "string" && info.title.trim()) {
    lines.push("", `**${info.title.trim()}**`);
  }
  if (typeof info?.version === "string") {
    lines.push("", `- Version: \`${info.version}\``);
  }
  if (typeof info?.description === "string" && info.description.trim()) {
    lines.push("", info.description.trim());
  }
  appendServers(lines, spec);
  appendSecuritySchemes(lines, spec, specPath);

  const paths = resolveRecord(spec, spec.paths, specPath);
  if (!paths) {
    throw new Error(`OpenAPI specification ${specPath} has no paths`);
  }
  lines.push("", "## Endpoints");
  for (const [route, rawItem] of Object.entries(paths)) {
    const item = resolveRecord(spec, rawItem, specPath);
    if (!item) continue;
    for (const method of httpMethods) {
      const operation = resolveRecord(spec, item[method], specPath);
      if (!operation) continue;
      lines.push("", `### \`${method.toUpperCase()} ${route}\``);
      appendOperation(lines, spec, specPath, item, operation, true);
    }
  }
  const webhooks = resolveRecord(spec, spec.webhooks, specPath);
  if (webhooks && Object.keys(webhooks).length > 0) {
    lines.push("", "## Webhooks", "");
    for (const name of Object.keys(webhooks)) lines.push(`- \`${name}\``);
  }
  return bounded(lines, specPath, maximumDocumentCharacters);
}

function appendOperation(
  lines: string[],
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
  pathItem: Readonly<Record<string, unknown>>,
  operation: Readonly<Record<string, unknown>>,
  includeSummary: boolean,
): void {
  if (includeSummary && typeof operation.summary === "string") {
    pushText(lines, `**${operation.summary.trim()}**`);
  }
  if (typeof operation.description === "string") {
    pushText(lines, operation.description.trim());
  }
  if (operation.deprecated === true) {
    lines.push("", "**Deprecated.**");
  }
  appendSecurity(lines, spec, operation);
  appendParameters(lines, spec, specPath, [
    ...(Array.isArray(pathItem.parameters) ? pathItem.parameters : []),
    ...(Array.isArray(operation.parameters) ? operation.parameters : []),
  ]);
  appendRequestBody(lines, spec, specPath, operation);
  appendResponses(lines, spec, specPath, operation.responses);
  appendNamedKeys(lines, "Callbacks", operation.callbacks);
}

function appendParameters(
  lines: string[],
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
  parameters: readonly unknown[],
): void {
  if (parameters.length === 0) return;
  const regular: Record<string, unknown>[] = [];
  const body: Record<string, unknown>[] = [];
  for (const raw of parameters) {
    const parameter = resolveRecord(spec, raw, specPath);
    if (!parameter || typeof parameter.name !== "string") continue;
    (parameter.in === "body" ? body : regular).push(parameter);
  }
  if (regular.length > 0) {
    lines.push("", "**Parameters**", "");
    for (const parameter of regular) {
      const location =
        typeof parameter.in === "string" ? parameter.in : "parameter";
      const schema =
        resolveRecord(spec, parameter.schema, specPath) ?? parameter;
      const details = schemaDetails(schema);
      const required = parameter.required === true ? "required" : undefined;
      const suffix = [location, required, details]
        .filter((value): value is string => Boolean(value))
        .join("; ");
      lines.push(
        `- \`${parameter.name}\` (${suffix})${descriptionSuffix(parameter)}`,
      );
      appendContentSchemas(lines, spec, specPath, parameter.content, "  ");
      appendExamples(lines, parameter, "  ");
    }
  }
  for (const parameter of body) {
    lines.push(
      "",
      `**Request body**${parameter.required ? " (required)" : ""}${descriptionSuffix(parameter)}`,
    );
    if (Array.isArray(spec.consumes) && spec.consumes.length > 0) {
      lines.push(
        `- Media types: ${spec.consumes.map((value) => `\`${String(value)}\``).join(", ")}`,
      );
    }
    appendSchema(lines, spec, specPath, parameter.schema, "", newState(), 0);
  }
}

function appendRequestBody(
  lines: string[],
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
  operation: Readonly<Record<string, unknown>>,
): void {
  const request = resolveRecord(spec, operation.requestBody, specPath);
  if (!request) return;
  lines.push(
    "",
    `**Request body**${request.required ? " (required)" : ""}${descriptionSuffix(request)}`,
  );
  appendContentSchemas(lines, spec, specPath, request.content, "");
  appendExamples(lines, request, "");
}

function appendResponses(
  lines: string[],
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
  rawResponses: unknown,
): void {
  const responses = resolveRecord(spec, rawResponses, specPath);
  if (!responses) return;
  lines.push("", "**Responses**", "");
  for (const [status, rawResponse] of Object.entries(responses)) {
    const response = resolveRecord(spec, rawResponse, specPath);
    lines.push(`- \`${status}\`${response ? descriptionSuffix(response) : ""}`);
    if (!response) continue;
    appendHeaders(lines, spec, specPath, response.headers);
    appendContentSchemas(lines, spec, specPath, response.content, "  ");
    // Swagger 2 responses put the schema directly on the response.
    if (response.schema !== undefined) {
      if (Array.isArray(spec.produces) && spec.produces.length > 0) {
        lines.push(
          `  - Media types: ${spec.produces.map((value) => `\`${String(value)}\``).join(", ")}`,
        );
      }
      appendSchema(lines, spec, specPath, response.schema, "  ", newState(), 0);
    }
    appendExamples(lines, response, "  ");
  }
}

function appendContentSchemas(
  lines: string[],
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
  rawContent: unknown,
  indent: string,
): void {
  const content = resolveRecord(spec, rawContent, specPath);
  if (!content) return;
  for (const [mediaType, rawMedia] of Object.entries(content)) {
    const media = resolveRecord(spec, rawMedia, specPath);
    lines.push(`${indent}- Media type: \`${mediaType}\``);
    if (!media) continue;
    appendSchema(
      lines,
      spec,
      specPath,
      media.schema,
      `${indent}  `,
      newState(),
      0,
    );
    appendExamples(lines, media, `${indent}  `);
  }
}

function appendSchema(
  lines: string[],
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
  rawSchema: unknown,
  indent: string,
  state: RenderState,
  depth: number,
  label?: string,
  required = false,
): void {
  if (rawSchema === undefined) return;
  state.budget.nodes += 1;
  if (state.budget.nodes > maximumRenderedNodes) {
    throw new Error(`OpenAPI specification ${specPath} exceeds schema budget`);
  }
  if (depth > maximumSchemaDepth) {
    lines.push(
      `${indent}- ${label ? `\`${label}\`: ` : ""}Further nesting omitted (depth limit).`,
    );
    return;
  }
  const ref =
    isRecord(rawSchema) && typeof rawSchema.$ref === "string"
      ? rawSchema.$ref
      : undefined;
  if (ref && state.references.has(ref)) {
    lines.push(
      `${indent}- ${label ? `\`${label}\` ` : ""}(recursive reference \`${ref}\`)`,
    );
    return;
  }
  const schema = resolveRecord(spec, rawSchema, specPath);
  if (!schema) return;
  const references = ref
    ? new Set([...state.references, ref])
    : state.references;
  const heading = label ? `\`${label}\`` : "Schema";
  const details = [required ? "required" : "", schemaDetails(schema)]
    .filter(Boolean)
    .join("; ");
  lines.push(
    `${indent}- ${heading}${details ? ` (${details})` : ""}${descriptionSuffix(schema)}`,
  );
  appendExamples(lines, schema, `${indent}  `);

  for (const keyword of ["allOf", "oneOf", "anyOf"] as const) {
    const variants = schema[keyword];
    if (!Array.isArray(variants)) continue;
    lines.push(`${indent}  - ${keyword}:`);
    variants.forEach((variant, index) =>
      appendSchema(
        lines,
        spec,
        specPath,
        variant,
        `${indent}    `,
        { budget: state.budget, references },
        depth + 1,
        `variant ${index + 1}`,
      ),
    );
  }
  if (schema.items !== undefined) {
    appendSchema(
      lines,
      spec,
      specPath,
      schema.items,
      `${indent}  `,
      { budget: state.budget, references },
      depth + 1,
      "items",
    );
  }
  const properties = resolveRecord(spec, schema.properties, specPath);
  const requiredProperties = new Set(
    Array.isArray(schema.required)
      ? schema.required.filter(
          (value): value is string => typeof value === "string",
        )
      : [],
  );
  if (properties) {
    for (const [name, property] of Object.entries(properties)) {
      appendSchema(
        lines,
        spec,
        specPath,
        property,
        `${indent}  `,
        { budget: state.budget, references },
        depth + 1,
        name,
        requiredProperties.has(name),
      );
    }
  }
  if (isRecord(schema.additionalProperties)) {
    appendSchema(
      lines,
      spec,
      specPath,
      schema.additionalProperties,
      `${indent}  `,
      { budget: state.budget, references },
      depth + 1,
      "additional properties",
    );
  }
}

function schemaDetails(schema: Readonly<Record<string, unknown>>): string {
  const details: string[] = [];
  let type = typeof schema.type === "string" ? schema.type : undefined;
  if (!type && isRecord(schema.properties)) type = "object";
  if (type) details.push(type);
  if (typeof schema.format === "string")
    details.push(`format: ${schema.format}`);
  if (
    schema.nullable === true ||
    (Array.isArray(schema.type) && schema.type.includes("null"))
  ) {
    details.push("nullable");
  }
  if (Array.isArray(schema.enum))
    details.push(`enum: ${schema.enum.map(renderValue).join(", ")}`);
  if (schema.default !== undefined)
    details.push(`default: ${renderValue(schema.default)}`);
  for (const [key, label] of [
    ["minimum", "minimum"],
    ["maximum", "maximum"],
    ["exclusiveMinimum", "exclusive minimum"],
    ["exclusiveMaximum", "exclusive maximum"],
    ["minLength", "minimum length"],
    ["maxLength", "maximum length"],
    ["minItems", "minimum items"],
    ["maxItems", "maximum items"],
    ["pattern", "pattern"],
    ["multipleOf", "multiple of"],
  ] as const) {
    const value = schema[key];
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      details.push(`${label}: ${renderValue(value)}`);
    }
  }
  if (schema.uniqueItems === true) details.push("unique items");
  if (schema.readOnly === true) details.push("read-only");
  if (schema.writeOnly === true) details.push("write-only");
  return details.join("; ");
}

function appendExamples(
  lines: string[],
  value: Readonly<Record<string, unknown>>,
  indent: string,
): void {
  if (value.example !== undefined)
    lines.push(`${indent}- Example: ${renderValue(value.example)}`);
  const examples = isRecord(value.examples) ? value.examples : undefined;
  if (examples) {
    for (const [name, rawExample] of Object.entries(examples)) {
      const example =
        isRecord(rawExample) && "value" in rawExample
          ? rawExample.value
          : rawExample;
      lines.push(`${indent}- Example \`${name}\`: ${renderValue(example)}`);
    }
  }
}

function appendSecurity(
  lines: string[],
  spec: Readonly<Record<string, unknown>>,
  operation: Readonly<Record<string, unknown>>,
): void {
  const security = "security" in operation ? operation.security : spec.security;
  if (!Array.isArray(security)) return;
  if (security.length === 0) {
    lines.push("", "**Authentication:** none");
    return;
  }
  const alternatives = security.map((entry) => {
    if (!isRecord(entry)) return "unknown";
    return Object.entries(entry)
      .map(([name, scopes]) =>
        Array.isArray(scopes) && scopes.length > 0
          ? `\`${name}\` (${scopes.map(String).join(", ")})`
          : `\`${name}\``,
      )
      .join(" and ");
  });
  lines.push("", `**Authentication:** ${alternatives.join(" or ")}`);
}

function appendServers(
  lines: string[],
  spec: Readonly<Record<string, unknown>>,
): void {
  if (typeof spec.host === "string") {
    const scheme = Array.isArray(spec.schemes) ? spec.schemes[0] : "https";
    lines.push(
      "",
      `- Base URL: \`${String(scheme)}://${spec.host}${typeof spec.basePath === "string" ? spec.basePath : ""}\``,
    );
  }
  if (Array.isArray(spec.servers)) {
    for (const rawServer of spec.servers) {
      if (isRecord(rawServer) && typeof rawServer.url === "string")
        lines.push("", `- Base URL: \`${rawServer.url}\``);
    }
  }
}

function appendSecuritySchemes(
  lines: string[],
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
): void {
  const components = resolveRecord(spec, spec.components, specPath);
  const schemes = resolveRecord(
    spec,
    components?.securitySchemes ?? spec.securityDefinitions,
    specPath,
  );
  if (!schemes) return;
  lines.push("", "## Authentication");
  for (const [name, raw] of Object.entries(schemes)) {
    const scheme = resolveRecord(spec, raw, specPath);
    if (!scheme) continue;
    const details = [
      scheme.type,
      scheme.scheme,
      scheme.in && scheme.name ? `${scheme.in}: ${scheme.name}` : undefined,
    ]
      .filter((value): value is string => typeof value === "string")
      .join(", ");
    lines.push(
      "",
      `### \`${name}\`${details ? ` (${details})` : ""}${descriptionSuffix(scheme)}`,
    );
    const flows = resolveRecord(spec, scheme.flows, specPath);
    if (flows)
      for (const flow of Object.keys(flows))
        lines.push(`- OAuth flow: \`${flow}\``);
  }
}

function appendHeaders(
  lines: string[],
  spec: Readonly<Record<string, unknown>>,
  specPath: string,
  rawHeaders: unknown,
): void {
  const headers = resolveRecord(spec, rawHeaders, specPath);
  if (!headers) return;
  for (const [name, raw] of Object.entries(headers)) {
    const header = resolveRecord(spec, raw, specPath);
    lines.push(
      `  - Header \`${name}\`${header ? ` (${schemaDetails(resolveRecord(spec, header.schema, specPath) ?? header)})${descriptionSuffix(header)}` : ""}`,
    );
  }
}

function appendNamedKeys(
  lines: string[],
  heading: string,
  value: unknown,
): void {
  if (!isRecord(value) || Object.keys(value).length === 0) return;
  lines.push("", `**${heading}**`, "");
  for (const name of Object.keys(value)) lines.push(`- \`${name}\``);
}

function resolveRecord(
  spec: Readonly<Record<string, unknown>>,
  value: unknown,
  specPath: string,
): Readonly<Record<string, unknown>> | undefined {
  const resolved = resolveReference(spec, value, specPath);
  return isRecord(resolved) ? resolved : undefined;
}

export function resolveOpenApiReference(
  spec: Readonly<Record<string, unknown>>,
  value: unknown,
  specPath: string,
): unknown {
  return resolveReference(spec, value, specPath);
}

function resolveReference(
  spec: Readonly<Record<string, unknown>>,
  value: unknown,
  specPath: string,
): unknown {
  if (!isRecord(value) || typeof value.$ref !== "string") return value;
  if (!value.$ref.startsWith("#/"))
    throw new Error(
      `OpenAPI specification ${specPath} uses external reference ${value.$ref}`,
    );
  let current: unknown = spec;
  for (const encoded of value.$ref.slice(2).split("/")) {
    const key = encoded.replaceAll("~1", "/").replaceAll("~0", "~");
    if (!isRecord(current) || !(key in current))
      throw new Error(
        `OpenAPI specification ${specPath} has unresolved reference ${value.$ref}`,
      );
    current = current[key];
  }
  return current;
}

function descriptionSuffix(value: Readonly<Record<string, unknown>>): string {
  return typeof value.description === "string" && value.description.trim()
    ? `: ${singleLine(value.description)}`
    : "";
}

function pushText(lines: string[], value: string): void {
  if (value) lines.push("", value);
}

function renderValue(value: unknown): string {
  const rendered = typeof value === "string" ? value : JSON.stringify(value);
  return `\`${singleLine(rendered ?? String(value)).replaceAll("`", "\\`")}\``;
}

function singleLine(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function newState(): RenderState {
  return { budget: { nodes: 0 }, references: new Set() };
}

function bounded(
  lines: string[],
  specPath: string,
  maximumCharacters: number,
): string {
  const rendered = normalizeSpacing(lines.join("\n"));
  if (rendered.length > maximumCharacters) {
    throw new Error(`OpenAPI specification ${specPath} exceeds output budget`);
  }
  return rendered;
}
