import type { Expression, ImportDeclaration, Program, Property } from "estree";
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

// `omitted` marks an import that renders no prose, such as an icon, so the page
// that uses it converts without the binding being mistaken for a component.
export interface MdxImport {
  readonly kind: "mdx" | "text" | "omitted";
  readonly sourcePath: string;
  readonly source: string;
}

export interface MdxOptions {
  // Resolves an import to repository content so partials and sample files are
  // inlined into the page that renders them.
  readonly resolveImport?: (
    specifier: string,
    sourcePath: string,
  ) => MdxImport | undefined;
}

interface TransformContext {
  readonly sourcePath: string;
  readonly constants: Map<string, StaticValue>;
  readonly partials: Map<string, MdxImport>;
  // Names bound to JavaScript this converter cannot evaluate: page-local
  // components and element-valued bindings that only exist while rendering.
  readonly computed: Set<string>;
  readonly options: MdxOptions;
  readonly stack: ReadonlySet<string>;
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
const transparentComponents = new Set([
  "Row",
  "Col",
  "Properties",
  "Cards",
  "Column",
  "FrameworkSelector",
  "Tabs",
]);

// Views a site renders from data or JavaScript rather than from page prose.
const omittedComponents = new Set([
  "B2B",
  "BenchmarkChart",
  "DocCardList",
  "Frameworks",
  "PermissionTable",
  "PiiTable",
]);

const calloutTitles = new Map([
  ["caution", "Caution"],
  ["danger", "Danger"],
  ["error", "Error"],
  ["info", "Note"],
  ["note", "Note"],
  ["success", "Success"],
  ["tip", "Tip"],
  ["warn", "Warning"],
  ["warning", "Warning"],
]);
const structuredComponents = new Set([
  "Tiles",
  "TroubleshootingTiles",
  "TroubleshootingStart",
  "SupportBanner",
  "StillStuck",
  "PathFlow",
]);

export function convertMdx(
  source: string,
  sourcePath: string,
  options: MdxOptions = {},
): ConvertedMdx {
  const frontmatter = parseFrontmatter(source);
  const context = createContext(sourcePath, options, new Set([sourcePath]));
  const children = groupListItems(
    rewriteChildren(parseBody(frontmatter.body), context, "flow"),
  );
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

function createContext(
  sourcePath: string,
  options: MdxOptions,
  stack: ReadonlySet<string>,
): TransformContext {
  return {
    sourcePath,
    constants: new Map<string, StaticValue>([
      ["props", Object.create(null) as StaticObject],
    ]),
    partials: new Map(),
    computed: new Set(),
    options,
    stack,
  };
}

function parseBody(body: string): readonly AstNode[] {
  return (parser.parse(body) as unknown as AstNode).children ?? [];
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
      const value = evaluateExpressionNode(child, context);
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

// Card and step components each render one entry of a list their wrapper draws,
// so consecutive entries are collected back into a single Markdown list.
function groupListItems(nodes: readonly AstNode[]): AstNode[] {
  if (!nodes.some((node) => node.type === "listItem")) {
    return [...nodes];
  }
  const result: AstNode[] = [];
  let items: AstNode[] = [];
  const flush = (): void => {
    if (items.length > 0) {
      result.push({
        type: "list",
        ordered: false,
        spread: false,
        children: items,
      });
      items = [];
    }
  };
  for (const node of nodes) {
    if (node.type === "listItem") {
      items.push(node);
      continue;
    }
    flush();
    result.push(node);
  }
  flush();
  return result;
}

function rewriteNode(
  node: AstNode,
  context: TransformContext,
  mode: "flow" | "phrasing",
): AstNode[] {
  if (node.type === "mdxjsEsm") {
    collectEsm(node, context);
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
  if (name === "table") {
    return tableNodes(node, context);
  }
  if (typeof name === "string") {
    const partial = context.partials.get(name);
    if (partial) {
      return inlinePartial(partial, node, context);
    }
    if (context.computed.has(name) || omittedComponents.has(name)) {
      return [];
    }
  }
  const children = groupListItems(
    rewriteChildren(
      node.children ?? [],
      context,
      node.type === "mdxJsxTextElement" || isInlineElement(name)
        ? "phrasing"
        : "flow",
    ),
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
  if (name === "Callout" || name === "Admonition") {
    const type = staticString(props.type) ?? "info";
    const heading = calloutTitles.get(type);
    if (!heading) {
      throw new Error(
        `Unsupported callout type ${type} in ${context.sourcePath}`,
      );
    }
    return [blockquoteWith(staticString(props.title) ?? heading, children)];
  }
  if (name === "PreventLockout") {
    return [
      blockquoteWith("Warning: prevent settings misconfiguration lockouts", [
        paragraph([
          text(
            "Login policy misconfiguration can lock you out of the instance. Create a service account personal access token with the IAM_OWNER role to revert login changes through the API, and always designate a second instance administrator.",
          ),
        ]),
      ]),
    ];
  }
  if (name === "TerminologyUpdate") {
    const term = requiredString(
      props.newTerm,
      "TerminologyUpdate.newTerm",
      context.sourcePath,
    );
    const previous = Array.isArray(props.oldTerms)
      ? props.oldTerms.map(String)
      : [];
    return [
      blockquoteWith("Terminology update", [
        paragraph([
          text(
            `The term ${term} replaces ${previous.join(", ")}; they all refer to the same functionality.`,
          ),
        ]),
      ]),
    ];
  }
  if (name === "Tab") {
    const label = staticString(props.value) ?? staticString(props.label);
    return label
      ? [paragraph([{ type: "strong", children: [text(label)] }]), ...children]
      : children;
  }
  if (name === "Card") {
    const title = staticString(props.title);
    const href = staticString(props.href);
    const label: AstNode[] = title
      ? href
        ? [{ type: "link", url: href, children: [text(title)] }]
        : [{ type: "strong", children: [text(title)] }]
      : href
        ? [{ type: "link", url: href, children: [text(href)] }]
        : [];
    return [
      {
        type: "listItem",
        spread: false,
        children: [
          ...(label.length > 0 ? [paragraph(label)] : []),
          ...children,
        ],
      },
    ];
  }
  if (name === "Step") {
    return [{ type: "listItem", spread: true, children }];
  }
  if (name === "Steps") {
    return children.map((child) =>
      child.type === "list" ? { ...child, ordered: true } : child,
    );
  }
  if (name === "GithubCodeBlock") {
    const url = requiredString(
      props.url,
      "GithubCodeBlock.url",
      context.sourcePath,
    );
    return [
      paragraph([
        { type: "link", url, children: [text("Code example on GitHub")] },
      ]),
    ];
  }
  if (name === "DynamicCodeBlock") {
    const code = staticString(props.code);
    if (code === undefined) {
      return [];
    }
    return [
      { type: "code", lang: staticString(props.lang) ?? null, value: code },
    ];
  }
  if (name === "ApiCard") {
    const heading = [staticString(props.title), staticString(props.type)]
      .filter((value): value is string => Boolean(value))
      .join(" - ");
    return heading
      ? [
          paragraph([{ type: "strong", children: [text(heading)] }]),
          ...children,
        ]
      : children;
  }
  if (name === "ThemedImage") {
    const sources = props.sources;
    const source = isStaticObject(sources)
      ? (staticString(sources.light) ?? staticString(sources.dark))
      : undefined;
    if (!source) {
      throw new Error(
        `ThemedImage without a static source in ${context.sourcePath}`,
      );
    }
    return phrasingForMode(
      [
        {
          type: "image",
          url: source,
          alt: staticString(props.alt) ?? "",
        },
      ],
      mode,
    );
  }
  if (name === "ResponsivePlayer" || name === "iframe") {
    const url = staticString(props.url) ?? staticString(props.src);
    if (!url) {
      throw new Error(
        `Embedded player without a static source in ${context.sourcePath}`,
      );
    }
    return [
      paragraph([
        { type: "link", url, children: [text("Open the embedded media")] },
      ]),
    ];
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

function blockquoteWith(
  heading: string,
  children: readonly AstNode[],
): AstNode {
  return {
    type: "blockquote",
    children: [
      paragraph([{ type: "strong", children: [text(heading)] }]),
      ...children,
    ],
  };
}

function inlinePartial(
  partial: MdxImport,
  node: AstNode,
  context: TransformContext,
): AstNode[] {
  if (partial.kind !== "mdx") {
    throw new Error(
      `Imported file ${partial.sourcePath} is rendered as a component in ${context.sourcePath}`,
    );
  }
  if (context.stack.has(partial.sourcePath)) {
    throw new Error(
      `Partial ${partial.sourcePath} includes itself from ${context.sourcePath}`,
    );
  }
  const nested = createContext(
    partial.sourcePath,
    context.options,
    new Set([...context.stack, partial.sourcePath]),
  );
  nested.constants.set("props", staticProps(node.attributes ?? [], context));
  return groupListItems(
    rewriteChildren(
      parseBody(parseFrontmatter(partial.source).body),
      nested,
      "flow",
    ),
  );
}

interface TableCell {
  readonly node: AstNode;
  readonly header: boolean;
}

function tableNodes(node: AstNode, context: TransformContext): AstNode[] {
  const rows = tableRows(node);
  const cellNodes = (cell: TableCell, mode: "flow" | "phrasing"): AstNode[] =>
    rewriteChildren(cell.node.children ?? [], context, mode);
  if (!rows.some((row) => row.some((cell) => cell.header))) {
    // Without header cells the table only positions content on the page, so its
    // cells are kept as the blocks they contain.
    return rows.flatMap((row) =>
      row.flatMap((cell) => cellNodes(cell, "flow")),
    );
  }
  const width = Math.max(...rows.map((row) => row.length));
  return [
    {
      type: "table",
      align: Array.from({ length: width }, () => null),
      children: rows.map((row) => ({
        type: "tableRow",
        children: Array.from({ length: width }, (_, index) => {
          const cell = row[index];
          return {
            type: "tableCell",
            children: cell ? flattenPhrasing(cellNodes(cell, "phrasing")) : [],
          };
        }),
      })),
    },
  ];
}

function tableRows(node: AstNode): TableCell[][] {
  const rows: TableCell[][] = [];
  // Rows and cells are nested in section elements, and MDX wraps inline-only
  // cells in a paragraph, so both are collected by descending until the next
  // table starts.
  const collect = (current: AstNode, cells: TableCell[]): void => {
    for (const child of current.children ?? []) {
      if (child.name === "td" || child.name === "th") {
        cells.push({ node: child, header: child.name === "th" });
        continue;
      }
      if (child.name !== "table") {
        collect(child, cells);
      }
    }
  };
  const visit = (current: AstNode): void => {
    for (const child of current.children ?? []) {
      if (child.name === "tr") {
        const cells: TableCell[] = [];
        collect(child, cells);
        rows.push(cells);
        continue;
      }
      if (child.name !== "table") {
        visit(child);
      }
    }
  };
  visit(node);
  return rows;
}

const phrasingTypes = new Set([
  "break",
  "delete",
  "emphasis",
  "image",
  "inlineCode",
  "link",
  "strong",
  "text",
]);

// Table cells hold a single line of Markdown, so nested blocks collapse into
// the phrasing content they carry.
function flattenPhrasing(nodes: readonly AstNode[]): AstNode[] {
  const result: AstNode[] = [];
  for (const node of nodes) {
    if (node.type === "break") {
      result.push(text(" "));
      continue;
    }
    if (typeof node.value === "string" && phrasingTypes.has(node.type)) {
      result.push({ ...node, value: node.value.replace(/\s+/g, " ") });
      continue;
    }
    if (phrasingTypes.has(node.type)) {
      result.push({
        ...node,
        ...(node.children ? { children: flattenPhrasing(node.children) } : {}),
      });
      continue;
    }
    const inner =
      node.type === "code"
        ? [{ type: "inlineCode", value: node.value ?? "" }]
        : flattenPhrasing(node.children ?? []);
    if (inner.length === 0) {
      continue;
    }
    if (result.length > 0) {
      result.push(text(" "));
    }
    result.push(...inner);
  }
  return result;
}

function collectEsm(node: AstNode, context: TransformContext): void {
  const program = estreeProgram(node);
  for (const statement of program.body) {
    if (statement.type === "ImportDeclaration") {
      collectImport(statement, context);
      continue;
    }
    if (statement.type === "ExportDefaultDeclaration") {
      context.computed.add("default");
      continue;
    }
    if (statement.type !== "ExportNamedDeclaration" || !statement.declaration) {
      continue;
    }
    if (statement.declaration.type === "FunctionDeclaration") {
      const name = statement.declaration.id?.name;
      if (name) {
        context.computed.add(name);
      }
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
      const value = staticOrComputed(declaration.init, context);
      if (value === computed) {
        context.computed.add(declaration.id.name);
      } else {
        context.constants.set(declaration.id.name, value);
      }
    }
  }
}

function collectImport(
  statement: ImportDeclaration,
  context: TransformContext,
): void {
  const specifier = statement.source.value;
  if (typeof specifier !== "string") {
    throw new Error(`Dynamic MDX import in ${context.sourcePath}`);
  }
  for (const binding of statement.specifiers) {
    if (binding.type === "ImportNamespaceSpecifier") {
      context.computed.add(binding.local.name);
      continue;
    }
    const resolved = context.options.resolveImport?.(
      specifier,
      context.sourcePath,
    );
    if (!resolved) {
      continue;
    }
    if (resolved.kind === "mdx") {
      context.partials.set(binding.local.name, resolved);
    } else if (resolved.kind === "text") {
      context.constants.set(binding.local.name, resolved.source);
    } else {
      context.computed.add(binding.local.name);
    }
  }
}

// Bindings that only exist while React renders: functions, elements, and
// anything built from them. Pages that show them keep their prose either way.
const computed = Symbol("computed");

function staticOrComputed(
  node: Expression,
  context: TransformContext,
): StaticValue | typeof computed {
  if (
    node.type === "ArrowFunctionExpression" ||
    node.type === "FunctionExpression" ||
    node.type === "ClassExpression" ||
    node.type.startsWith("JSX")
  ) {
    return computed;
  }
  const root = rootIdentifier(node);
  if (root !== undefined && context.computed.has(root)) {
    return computed;
  }
  return evaluateStatic(node, context.constants);
}

function rootIdentifier(node: Expression): string | undefined {
  if (node.type === "Identifier") {
    return node.name;
  }
  if (node.type === "MemberExpression" && node.object.type !== "Super") {
    return rootIdentifier(node.object);
  }
  if (node.type === "CallExpression" && node.callee.type !== "Super") {
    return rootIdentifier(node.callee);
  }
  return undefined;
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
          context,
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
  context: TransformContext,
): StaticValue {
  const program = estreeProgram(node);
  if (program.body.length === 0) {
    return null;
  }
  const statement = program.body[0];
  if (program.body.length !== 1 || statement?.type !== "ExpressionStatement") {
    throw new Error("Expected one parsed MDX expression");
  }
  const value = staticOrComputed(statement.expression, context);
  return value === computed ? null : value;
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
      if (node.name === "undefined") {
        return null;
      }
      if (!constants.has(node.name)) {
        throw new Error(`Unknown static identifier: ${node.name}`);
      }
      return constants.get(node.name) ?? null;
    }
    case "MemberExpression": {
      if (
        node.computed ||
        node.object.type === "Super" ||
        node.property.type !== "Identifier"
      ) {
        throw new Error("Only static property access is supported");
      }
      const object = evaluateStatic(node.object, constants, depth + 1);
      if (!isStaticObject(object)) {
        throw new Error("Property access on a non-object");
      }
      return object[node.property.name] ?? null;
    }
    case "BinaryExpression": {
      if (node.left.type === "PrivateIdentifier") {
        throw new Error("Private fields are unsupported");
      }
      const left = evaluateStatic(node.left, constants, depth + 1);
      const right = evaluateStatic(node.right, constants, depth + 1);
      switch (node.operator) {
        case "+":
          return typeof left === "string" || typeof right === "string"
            ? `${formatStatic(left)}${formatStatic(right)}`
            : Number(left) + Number(right);
        case "===":
        case "==":
          return left === right;
        case "!==":
        case "!=":
          return left !== right;
        default:
          throw new Error(`Unsupported operator: ${node.operator}`);
      }
    }
    case "ConditionalExpression":
      return evaluateStatic(
        evaluateStatic(node.test, constants, depth + 1)
          ? node.consequent
          : node.alternate,
        constants,
        depth + 1,
      );
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

function isStaticObject(value: StaticValue | undefined): value is StaticObject {
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
