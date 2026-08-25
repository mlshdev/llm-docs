import type { Expression, Program, Property } from "estree";
import type { Root } from "mdast";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import { isRecord } from "./config.ts";
import { normalizeSpacing, parseFrontmatter, titleCase } from "./markdown.ts";

type StaticValue =
  | null
  | boolean
  | number
  | string
  | StaticValue[]
  | StaticObject;

interface StaticObject {
  [key: string]: StaticValue;
}

interface AstNode {
  readonly type: string;
  readonly value?: string;
  readonly name?: string | null;
  readonly attributes?: readonly unknown[];
  readonly data?: unknown;
  readonly children?: readonly AstNode[];
  readonly [key: string]: unknown;
}

export interface ConvertedMdx {
  readonly body: string;
  readonly title?: string;
  readonly description?: string;
}

interface TransformContext {
  readonly sourcePath: string;
  readonly constants: Map<string, StaticValue>;
}

const parser = unified()
  .use(remarkParse)
  .use(remarkMdx, { addResult: true })
  .use(remarkGfm);
const writer = unified().use(remarkGfm).use(remarkStringify, {
  bullet: "-",
  fences: true,
  listItemIndent: "one",
});
const blockedKeys = new Set(["__proto__", "constructor", "prototype"]);
const transparentComponents = new Set(["Row", "Col", "Properties"]);
const structuredComponents = new Set([
  "Tiles",
  "TroubleshootingTiles",
  "TroubleshootingStart",
  "SupportBanner",
  "StillStuck",
  "PathFlow",
]);

export function convertMdx(source: string, sourcePath: string): ConvertedMdx {
  const frontmatter = parseFrontmatter(source);
  const parsed = parser.parse(frontmatter.body) as unknown as AstNode;
  const context: TransformContext = { sourcePath, constants: new Map() };
  const children = rewriteChildren(parsed.children ?? [], context, "flow");
  assertPlainMarkdown(children, sourcePath);
  const root: Root = { type: "root", children: children as Root["children"] };
  const body = normalizeSpacing(writer.stringify(root));
  const title =
    staticString(context.constants.get("title")) ??
    staticString(frontmatter.attributes.title);
  const description =
    staticString(context.constants.get("description")) ??
    staticString(frontmatter.attributes.description);
  return {
    body,
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
  };
}

function rewriteChildren(
  children: readonly AstNode[],
  context: TransformContext,
  mode: "flow" | "phrasing",
): AstNode[] {
  const result: AstNode[] = [];
  for (const child of children) {
    if (
      child.type === "mdxFlowExpression" ||
      child.type === "mdxTextExpression"
    ) {
      const value = evaluateExpressionNode(child, context.constants);
      if (isStaticObject(value)) {
        if (mode === "phrasing") {
          const tag = staticString(value.tag);
          const label = staticString(value.label);
          if (tag && label) {
            result.push(text(` (${tag} ${label})`));
          } else if (
            !Object.keys(value).every(
              (key) => key === "className" || key === "anchor",
            )
          ) {
            throw new Error(
              `Unsupported inline MDX annotation keys ${Object.keys(value).join(", ")} in ${context.sourcePath}`,
            );
          }
        } else {
          applyAnnotation(result, value, context.sourcePath);
        }
      } else if (typeof value === "string" || typeof value === "number") {
        result.push(
          mode === "phrasing"
            ? text(String(value))
            : paragraph([text(String(value))]),
        );
      } else if (value !== null && value !== false) {
        throw new Error(
          `Unsupported standalone MDX expression in ${context.sourcePath}`,
        );
      }
      continue;
    }
    result.push(...rewriteNode(child, context, mode));
  }
  return result;
}

function rewriteNode(
  node: AstNode,
  context: TransformContext,
  mode: "flow" | "phrasing",
): AstNode[] {
  if (node.type === "mdxjsEsm") {
    collectConstants(node, context);
    return [];
  }
  if (node.type === "yaml") {
    return [];
  }
  if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
    return rewriteJsx(node, context, mode);
  }
  if (node.type.startsWith("mdx")) {
    throw new Error(`Unhandled MDX node ${node.type} in ${context.sourcePath}`);
  }
  if (node.type === "code" && typeof node.meta === "string") {
    const title = codeTitle(node.meta);
    if (title) {
      return [
        paragraph([{ type: "strong", children: [text(title)] }]),
        { ...node, meta: undefined },
      ];
    }
  }
  if (!node.children) {
    return [node];
  }
  const childMode = isPhrasingParent(node.type) ? "phrasing" : "flow";
  return [
    { ...node, children: rewriteChildren(node.children, context, childMode) },
  ];
}

function rewriteJsx(
  node: AstNode,
  context: TransformContext,
  mode: "flow" | "phrasing",
): AstNode[] {
  const name = node.name;
  const children = rewriteChildren(
    node.children ?? [],
    context,
    node.type === "mdxJsxTextElement" || isInlineElement(name)
      ? "phrasing"
      : "flow",
  );
  if (name === null || name === undefined) {
    if ((node.attributes?.length ?? 0) > 0) {
      throw new Error(`MDX fragment has attributes in ${context.sourcePath}`);
    }
    return children;
  }
  const props = staticProps(node.attributes ?? [], context);
  if (transparentComponents.has(name)) {
    return children;
  }
  if (name === "Note" || name === "Warning" || name === "Success") {
    return [
      {
        type: "blockquote",
        children: [
          paragraph([{ type: "strong", children: [text(name)] }]),
          ...children,
        ],
      },
    ];
  }
  if (name === "Property") {
    return propertyNodes(props, children);
  }
  if (name === "CodeGroup") {
    const metadata = [
      staticString(props.tag),
      staticString(props.label),
      staticString(props.title),
    ]
      .filter((value): value is string => Boolean(value))
      .join(" ");
    return metadata
      ? [
          paragraph([{ type: "strong", children: [text(metadata)] }]),
          ...children,
        ]
      : children;
  }
  if (structuredComponents.has(name)) {
    return structuredNodes(name, props, children);
  }
  if (name === "Button") {
    const label =
      children.length > 0
        ? children
        : [text(staticString(props.children) ?? "Open link")];
    const target = staticString(props.href) ?? staticString(props.onClick);
    if (!target) {
      throw new Error(
        `Button without a static target in ${context.sourcePath}`,
      );
    }
    return phrasingForMode(
      [{ type: "link", url: target, children: label }],
      mode,
    );
  }
  if (name === "YouTube") {
    const videoId = requiredString(
      props.videoId,
      "YouTube.videoId",
      context.sourcePath,
    );
    const start = staticNumber(props.start);
    const url = `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}${start === undefined ? "" : `&t=${start}s`}`;
    return [
      paragraph([
        { type: "link", url, children: [text(`YouTube video ${videoId}`)] },
      ]),
    ];
  }
  if (name === "Badge") {
    const values = [
      staticString(props.text),
      staticString(props.status),
      staticString(props.hoverText),
    ].filter((value): value is string => Boolean(value));
    return phrasingForMode(
      [{ type: "strong", children: [text(values.join(" - "))] }],
      mode,
    );
  }
  if (name === "HashRedirect") {
    return [];
  }
  if (name === "Guides" || name === "Resources") {
    return name === "Guides" ? netbirdGuides() : netbirdResources();
  }
  if (name === "details") {
    return children;
  }
  if (name === "summary") {
    return [paragraph([{ type: "strong", children: children }])];
  }
  if (name === "img") {
    return phrasingForMode(
      [
        {
          type: "image",
          url: requiredString(props.src, "img.src", context.sourcePath),
          alt: staticString(props.alt) ?? "",
        },
      ],
      mode,
    );
  }
  if (name === "a") {
    return phrasingForMode(
      [
        {
          type: "link",
          url: requiredString(props.href, "a.href", context.sourcePath),
          children,
        },
      ],
      mode,
    );
  }
  if (name === "br") {
    return phrasingForMode([{ type: "break" }], mode);
  }
  if (name === "p") {
    return [paragraph(children)];
  }
  if (/^[a-z][a-z0-9-]*$/.test(name)) {
    if (name === "script" || name === "style" || /^on/i.test(name)) {
      throw new Error(`Unsafe HTML element <${name}> in ${context.sourcePath}`);
    }
    return children;
  }
  throw new Error(`Unhandled MDX component <${name}> in ${context.sourcePath}`);
}

function propertyNodes(
  props: StaticObject,
  children: readonly AstNode[],
): AstNode[] {
  const name = staticString(props.name) ?? "Property";
  const details: string[] = [];
  const type = staticString(props.type);
  if (type) {
    details.push(`type: ${type}`);
  }
  if (props.required === true) {
    details.push("required");
  } else if (props.required === false) {
    details.push("optional");
  }
  for (const key of ["min", "max", "minLen", "maxLen"] as const) {
    const value = props[key];
    if (typeof value === "string" || typeof value === "number") {
      details.push(`${key}: ${value}`);
    }
  }
  if (Array.isArray(props.enumList)) {
    details.push(`values: ${props.enumList.map(String).join(", ")}`);
  }
  const suffix = details.length > 0 ? ` (${details.join("; ")})` : "";
  return [
    paragraph([{ type: "strong", children: [text(`${name}${suffix}`)] }]),
    ...children,
  ];
}

function structuredNodes(
  name: string,
  props: StaticObject,
  children: readonly AstNode[],
): AstNode[] {
  const title = staticString(props.title) ?? titleCase(name);
  const entries = Object.entries(props).filter(([key]) => key !== "title");
  const nodes: AstNode[] = [
    { type: "heading", depth: 3, children: [text(title)] },
  ];
  if (entries.length > 0) {
    nodes.push({
      type: "list",
      ordered: false,
      spread: false,
      children: entries.map(([key, value]) => ({
        type: "listItem",
        spread: false,
        children: [
          paragraph([
            { type: "strong", children: [text(`${titleCase(key)}:`)] },
            text(` ${formatStatic(value)}`),
          ]),
        ],
      })),
    });
  }
  nodes.push(...children);
  return nodes;
}

function netbirdGuides(): AstNode[] {
  return staticLinkList("Guides", [
    [
      "Authentication",
      "/api/guides/authentication",
      "Learn how to authenticate your API requests.",
    ],
    ["Errors", "/api/guides/errors", "Read about the API error types."],
  ]);
}

function netbirdResources(): AstNode[] {
  return staticLinkList("Resources", [
    ["Accounts", "/api/resources/accounts", "List and update accounts."],
    [
      "Users",
      "/api/resources/users",
      "Create, update, delete, and list users.",
    ],
    [
      "Tokens",
      "/api/resources/tokens",
      "Create, retrieve, delete, and list tokens.",
    ],
    [
      "Peers",
      "/api/resources/peers",
      "Retrieve, update, delete, and list peers.",
    ],
    [
      "Setup Keys",
      "/api/resources/setup-keys",
      "Create, retrieve, update, and list setup keys.",
    ],
    [
      "Groups",
      "/api/resources/groups",
      "Create, retrieve, update, delete, and list groups.",
    ],
    [
      "Networks",
      "/api/resources/networks",
      "Create, retrieve, update, delete, and list networks.",
    ],
    [
      "Policies",
      "/api/resources/policies",
      "Create, retrieve, update, delete, and list policies.",
    ],
    [
      "Routes",
      "/api/resources/routes",
      "Create, retrieve, update, delete, and list routes.",
    ],
    ["DNS", "/api/resources/dns", "Manage nameserver groups and DNS settings."],
    ["Events", "/api/resources/events", "List events."],
  ]);
}

function staticLinkList(
  title: string,
  entries: readonly (readonly [string, string, string])[],
): AstNode[] {
  return [
    { type: "heading", depth: 2, children: [text(title)] },
    {
      type: "list",
      ordered: false,
      spread: false,
      children: entries.map(([label, url, description]) => ({
        type: "listItem",
        spread: false,
        children: [
          paragraph([
            { type: "link", url, children: [text(label)] },
            text(`: ${description}`),
          ]),
        ],
      })),
    },
  ];
}

function collectConstants(node: AstNode, context: TransformContext): void {
  const program = estreeProgram(node);
  for (const statement of program.body) {
    if (statement.type !== "ExportNamedDeclaration" || !statement.declaration) {
      continue;
    }
    if (
      statement.declaration.type !== "VariableDeclaration" ||
      statement.declaration.kind !== "const"
    ) {
      continue;
    }
    for (const declaration of statement.declaration.declarations) {
      if (declaration.id.type !== "Identifier" || !declaration.init) {
        continue;
      }
      context.constants.set(
        declaration.id.name,
        evaluateStatic(declaration.init, context.constants),
      );
    }
  }
}

function staticProps(
  attributes: readonly unknown[],
  context: TransformContext,
): StaticObject {
  const result: StaticObject = Object.create(null) as StaticObject;
  for (const attribute of attributes) {
    if (
      !isRecord(attribute) ||
      attribute.type !== "mdxJsxAttribute" ||
      typeof attribute.name !== "string"
    ) {
      throw new Error(
        `JSX spread or invalid attribute in ${context.sourcePath}`,
      );
    }
    if (
      blockedKeys.has(attribute.name) ||
      Object.hasOwn(result, attribute.name)
    ) {
      throw new Error(
        `Unsafe or duplicate JSX attribute ${attribute.name} in ${context.sourcePath}`,
      );
    }
    const value = attribute.value;
    if (value === null || value === undefined) {
      result[attribute.name] = true;
    } else if (typeof value === "string") {
      result[attribute.name] = value;
    } else if (
      isRecord(value) &&
      value.type === "mdxJsxAttributeValueExpression"
    ) {
      if (attribute.name === "onClick" && typeof value.value === "string") {
        const target = value.value.match(
          /window\.open\(["'](https:\/\/[^"']+)["']\)/,
        )?.[1];
        if (!target) {
          throw new Error(
            `Unsupported Button onClick in ${context.sourcePath}`,
          );
        }
        result[attribute.name] = target;
      } else {
        result[attribute.name] = evaluateExpressionNode(
          value as AstNode,
          context.constants,
        );
      }
    } else {
      throw new Error(
        `Unsupported JSX attribute ${attribute.name} in ${context.sourcePath}`,
      );
    }
  }
  return result;
}

function evaluateExpressionNode(
  node: AstNode,
  constants: ReadonlyMap<string, StaticValue>,
): StaticValue {
  const program = estreeProgram(node);
  const statement = program.body[0];
  if (program.body.length !== 1 || statement?.type !== "ExpressionStatement") {
    throw new Error("Expected one parsed MDX expression");
  }
  return evaluateStatic(statement.expression, constants);
}

function evaluateStatic(
  node: Expression,
  constants: ReadonlyMap<string, StaticValue>,
  depth = 0,
): StaticValue {
  if (depth > 32) {
    throw new Error("Static expression is too deeply nested");
  }
  switch (node.type) {
    case "Literal": {
      if ("regex" in node || "bigint" in node) {
        throw new Error("Regex and bigint literals are unsupported");
      }
      const value = node.value;
      if (
        value === null ||
        typeof value === "string" ||
        typeof value === "boolean" ||
        (typeof value === "number" && Number.isFinite(value))
      ) {
        return value;
      }
      throw new Error("Unsupported literal");
    }
    case "Identifier": {
      if (!constants.has(node.name)) {
        throw new Error(`Unknown static identifier: ${node.name}`);
      }
      return constants.get(node.name) ?? null;
    }
    case "ArrayExpression":
      return node.elements.map((element) => {
        if (element === null || element.type === "SpreadElement") {
          throw new Error("Sparse arrays and spreads are unsupported");
        }
        return evaluateStatic(element, constants, depth + 1);
      });
    case "ObjectExpression": {
      const result: StaticObject = Object.create(null) as StaticObject;
      for (const property of node.properties) {
        if (property.type === "SpreadElement") {
          throw new Error("Object spreads are unsupported");
        }
        const key = propertyKey(property);
        if (blockedKeys.has(key) || Object.hasOwn(result, key)) {
          throw new Error(`Unsafe or duplicate object key: ${key}`);
        }
        const value = property.value;
        if (
          value.type === "ArrayPattern" ||
          value.type === "ObjectPattern" ||
          value.type === "AssignmentPattern" ||
          value.type === "RestElement"
        ) {
          throw new Error("Object value is not an expression");
        }
        result[key] = evaluateStatic(value, constants, depth + 1);
      }
      return result;
    }
    case "TemplateLiteral": {
      let result = "";
      for (let index = 0; index < node.quasis.length; index += 1) {
        const cooked = node.quasis[index]?.value.cooked;
        if (cooked === null || cooked === undefined) {
          throw new Error("Invalid template literal escape");
        }
        result += cooked;
        const expression = node.expressions[index];
        if (expression) {
          const value = evaluateStatic(expression, constants, depth + 1);
          if (typeof value === "object" && value !== null) {
            throw new Error("Template substitutions must be primitive");
          }
          result += String(value);
        }
      }
      return result;
    }
    case "CallExpression": {
      const argument = node.arguments[0];
      if (
        node.callee.type !== "Identifier" ||
        node.callee.name !== "encodeURIComponent" ||
        node.arguments.length !== 1 ||
        !argument ||
        argument.type === "SpreadElement"
      ) {
        throw new Error("Only encodeURIComponent(staticValue) is supported");
      }
      const value = evaluateStatic(argument, constants, depth + 1);
      if (typeof value !== "string") {
        throw new Error("encodeURIComponent argument must be a string");
      }
      return encodeURIComponent(value);
    }
    default:
      throw new Error(`Unsupported expression type: ${node.type}`);
  }
}

function propertyKey(property: Property): string {
  if (
    property.computed ||
    property.kind !== "init" ||
    property.method ||
    property.shorthand
  ) {
    throw new Error(
      "Computed keys, methods, and shorthand properties are unsupported",
    );
  }
  if (property.key.type === "Identifier") {
    return property.key.name;
  }
  if (
    property.key.type === "Literal" &&
    (typeof property.key.value === "string" ||
      typeof property.key.value === "number")
  ) {
    return String(property.key.value);
  }
  throw new Error("Unsupported object key");
}

function estreeProgram(node: AstNode): Program {
  if (
    !isRecord(node.data) ||
    !isRecord(node.data.estree) ||
    node.data.estree.type !== "Program"
  ) {
    throw new Error("MDX node is missing parsed ESTree data");
  }
  return node.data.estree as unknown as Program;
}

function applyAnnotation(
  result: AstNode[],
  annotation: StaticObject,
  sourcePath: string,
): void {
  const keys = Object.keys(annotation);
  if (typeof annotation.title === "string") {
    const previous = result.at(-1);
    if (previous?.type !== "code") {
      throw new Error(
        `Code title annotation has no preceding code block in ${sourcePath}`,
      );
    }
    result.splice(
      -1,
      0,
      paragraph([{ type: "strong", children: [text(annotation.title)] }]),
    );
    return;
  }
  if (
    typeof annotation.tag === "string" &&
    typeof annotation.label === "string"
  ) {
    const previous = result.at(-1);
    if (!previous || previous.type !== "heading") {
      throw new Error(
        `Endpoint annotation has no preceding heading in ${sourcePath}`,
      );
    }
    const previousChildren = previous.children ?? [];
    result[result.length - 1] = {
      ...previous,
      children: [
        ...previousChildren,
        text(` (${annotation.tag} ${annotation.label})`),
      ],
    };
    return;
  }
  if (keys.every((key) => key === "className" || key === "anchor")) {
    return;
  }
  throw new Error(
    `Unsupported MDX annotation keys ${keys.join(", ")} in ${sourcePath}`,
  );
}

function codeTitle(meta: string): string | undefined {
  const match = meta.match(/^\s*\{\{\s*title\s*:\s*(['"])(.*?)\1\s*\}\}\s*$/);
  return match?.[2];
}

function assertPlainMarkdown(
  nodes: readonly AstNode[],
  sourcePath: string,
): void {
  for (const node of nodes) {
    if (node.type.startsWith("mdx")) {
      throw new Error(
        `MDX node ${node.type} survived conversion in ${sourcePath}`,
      );
    }
    if (node.children) {
      assertPlainMarkdown(node.children, sourcePath);
    }
  }
}

function isPhrasingParent(type: string): boolean {
  return [
    "paragraph",
    "heading",
    "emphasis",
    "strong",
    "delete",
    "link",
    "linkReference",
    "tableCell",
  ].includes(type);
}

function isInlineElement(name: string | null | undefined): boolean {
  return (
    name === "Button" ||
    name === "Badge" ||
    name === "a" ||
    name === "span" ||
    name === "p"
  );
}

function phrasingForMode(
  nodes: readonly AstNode[],
  mode: "flow" | "phrasing",
): AstNode[] {
  return mode === "flow" ? [paragraph(nodes)] : [...nodes];
}

function text(value: string): AstNode {
  return { type: "text", value };
}

function paragraph(children: readonly AstNode[]): AstNode {
  return { type: "paragraph", children };
}

function staticString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function staticNumber(value: StaticValue | undefined): number | undefined {
  return typeof value === "number" ? value : undefined;
}

function requiredString(
  value: StaticValue | undefined,
  name: string,
  sourcePath: string,
): string {
  const result = staticString(value);
  if (!result) {
    throw new Error(`${name} must be a non-empty string in ${sourcePath}`);
  }
  return result;
}

function isStaticObject(value: StaticValue): value is StaticObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function formatStatic(value: StaticValue): string {
  if (Array.isArray(value)) {
    return value.map(formatStatic).join("; ");
  }
  if (isStaticObject(value)) {
    const label =
      staticString(value.name) ??
      staticString(value.title) ??
      staticString(value.label);
    const target = staticString(value.href) ?? staticString(value.url);
    const description = staticString(value.description);
    const primary =
      label && target ? `[${label}](${target})` : (label ?? target);
    const remaining = Object.entries(value)
      .filter(
        ([key]) =>
          !["name", "title", "label", "href", "url", "description"].includes(
            key,
          ),
      )
      .map(([key, nested]) => `${titleCase(key)}: ${formatStatic(nested)}`);
    return [primary, description, ...remaining].filter(Boolean).join(" - ");
  }
  return String(value);
}
