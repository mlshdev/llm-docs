import { describe, expect, test } from "bun:test";
import {
  assignOutputPaths,
  catalogDigest,
  convertPage,
  escapeInline,
} from "./apple.ts";
import type { FrameworkEntry } from "./apple.ts";
import type { DoccIndexEntry } from "../docc.ts";

const rootPath = "/documentation/swift/root";
const childPath = "/documentation/swift/child";

function entry(
  path: string,
  overrides: Partial<DoccIndexEntry> = {},
): DoccIndexEntry {
  return {
    path,
    title: path,
    type: "article",
    beta: false,
    deprecated: false,
    ...overrides,
  };
}

describe("Apple DocC rendering", () => {
  test("renders declarations, prose, anchors, topics, conditions, and assets", () => {
    const document = convertPage(
      {
        metadata: {
          title: "Root<Value>",
          roleHeading: "Structure",
          modules: [{ name: "Swift" }],
          platforms: [{ name: "iOS", introducedAt: "26.0" }],
        },
        abstract: [{ type: "text", text: "A root value." }],
        primaryContentSections: [
          {
            kind: "declarations",
            declarations: [
              {
                languages: ["swift"],
                tokens: [
                  { kind: "keyword", text: "struct" },
                  { kind: "text", text: " " },
                  { kind: "identifier", text: "Root" },
                ],
              },
            ],
          },
          {
            kind: "content",
            content: [
              {
                type: "heading",
                level: 2,
                anchor: "Overview",
                text: "Overview",
              },
              {
                type: "paragraph",
                inlineContent: [
                  { type: "text", text: "Open " },
                  { type: "reference", identifier: "child" },
                  { type: "text", text: "." },
                ],
              },
              {
                type: "codeListing",
                syntax: "swift",
                code: ["let value = Root()"],
                metadata: {
                  anchor: "listing-1",
                  title: "Listing 1",
                  abstract: [{ type: "text", text: "Create a root." }],
                },
              },
              { type: "image", identifier: "diagram" },
              {
                type: "overviewCard",
                head: [
                  {
                    type: "heading",
                    level: 2,
                    text: "Card heading",
                  },
                ],
                content: [
                  {
                    type: "paragraph",
                    inlineContent: [{ type: "text", text: "Card body." }],
                  },
                ],
              },
            ],
          },
        ],
        topicSections: [
          {
            title: "Creation",
            abstract: [{ type: "text", text: "Ways to create a value." }],
            identifiers: ["child"],
          },
        ],
        references: {
          child: {
            title: "Child",
            url: childPath,
            deprecated: true,
            abstract: [{ type: "text", text: "Child summary." }],
            conformance: {
              conformancePrefix: [{ type: "text", text: "Conforms when" }],
              constraints: [
                { type: "codeVoice", code: "Value" },
                { type: "text", text: " is Sendable." },
              ],
            },
          },
          diagram: {
            type: "image",
            alt: "A diagram.",
            variants: [{ url: "/images/example.png" }],
          },
        },
      },
      {
        documentationPath: rootPath,
        owned: new Set([rootPath, childPath]),
        outputPaths: new Map([
          [rootPath, "pages/swift/root.md"],
          [childPath, "pages/swift/child.md"],
        ]),
        entries: new Map([
          [rootPath, entry(rootPath)],
          [childPath, entry(childPath, { deprecated: true })],
        ]),
      },
    );

    expect(document).toMatchObject({
      sourcePath: "documentation/swift/root",
      outputPath: "pages/swift/root.md",
      title: "Root<Value>",
      canonicalUrl: "https://developer.apple.com/documentation/swift/root",
      section: "swift",
    });
    expect(document.body).toContain("# Root\\<Value\\>");
    expect(document.body).toContain("```swift\nstruct Root\n```");
    expect(document.body).toContain('<a id="Overview"></a>\n\n## Overview');
    expect(document.body).toContain("Open [Child](child.md).");
    expect(document.body).toContain(
      '<a id="listing-1"></a>\n\n**Listing 1**\n\nCreate a root.\n\n```swift\nlet value = Root()\n```',
    );
    expect(document.body).toContain(
      "![A diagram.](https://developer.apple.com/images/example.png)",
    );
    expect(document.body).toContain("## Card heading\n\nCard body.");
    expect(document.body).toContain(
      "### Creation\n\nWays to create a value.\n\n- [Child](child.md): Deprecated. Conforms when `Value` is Sendable. Child summary.",
    );
  });

  test("fails closed for an unknown render block", () => {
    expect(() =>
      convertPage(
        {
          metadata: { title: "Root" },
          primaryContentSections: [
            {
              kind: "content",
              content: [{ type: "newDoccBlock" }],
            },
          ],
        },
        {
          documentationPath: rootPath,
          owned: new Set([rootPath]),
          outputPaths: new Map([[rootPath, "pages/swift/root.md"]]),
          entries: new Map([[rootPath, entry(rootPath)]]),
        },
      ),
    ).toThrow('Unsupported DocC block "newDoccBlock"');
  });

  test("materializes same-path interface-language patches", () => {
    const document = convertPage(
      {
        identifier: { interfaceLanguage: "swift" },
        variants: [
          { traits: [{ interfaceLanguage: "swift" }], paths: [rootPath] },
          {
            traits: [{ interfaceLanguage: "occ" }],
            paths: [rootPath.slice(1)],
          },
        ],
        variantOverrides: [
          {
            traits: [{ interfaceLanguage: "occ" }],
            patch: [
              {
                op: "replace",
                path: "/primaryContentSections/0",
                value: {
                  kind: "declarations",
                  declarations: [
                    {
                      languages: ["occ"],
                      tokens: [{ kind: "text", text: "@interface Root" }],
                    },
                  ],
                },
              },
              {
                op: "add",
                path: "/primaryContentSections/1",
                value: {
                  kind: "parameters",
                  parameters: [
                    {
                      name: "value",
                      content: [
                        {
                          type: "paragraph",
                          inlineContent: [
                            { type: "text", text: "An Objective-C value." },
                          ],
                        },
                      ],
                    },
                  ],
                },
              },
              {
                op: "replace",
                path: "/references/doc:~1~1child/title",
                value: "Objective-C Child",
              },
            ],
          },
        ],
        metadata: { title: "Root" },
        primaryContentSections: [
          {
            kind: "declarations",
            declarations: [
              {
                languages: ["swift"],
                tokens: [{ kind: "text", text: "struct Root" }],
              },
            ],
          },
        ],
        topicSections: [{ identifiers: ["doc://child"] }],
        references: {
          "doc://child": { title: "Child", url: childPath },
        },
      },
      {
        documentationPath: rootPath,
        owned: new Set([rootPath, childPath]),
        outputPaths: new Map([
          [rootPath, "pages/swift/root.md"],
          [childPath, "pages/swift/child.md"],
        ]),
        entries: new Map([
          [rootPath, entry(rootPath)],
          [childPath, entry(childPath)],
        ]),
      },
    );

    expect(document.body).toContain(
      "# Root (Swift)\n\n## Declaration\n\n```swift\nstruct Root\n```",
    );
    expect(document.body).toContain(
      "# Root (Objective-C)\n\n## Declaration\n\n```objectivec\n@interface Root\n```",
    );
    expect(document.body).toContain(
      "## Parameters\n\n- `value`: An Objective-C value.",
    );
    expect(document.body).toContain("- [Objective-C Child](child.md)");
  });

  test("escapes Markdown-significant API names", () => {
    expect(escapeInline("Array<Element> and [index] or *value*")).toBe(
      "Array\\<Element\\> and \\[index\\] or \\*value\\*",
    );
  });

  test("renders data declarations and property constraints", () => {
    const document = convertPage(
      {
        identifier: { interfaceLanguage: "data" },
        metadata: { title: "Payload" },
        primaryContentSections: [
          {
            kind: "declarations",
            declarations: [
              {
                languages: ["data"],
                tokens: [{ kind: "text", text: "object Payload" }],
              },
            ],
          },
          {
            kind: "properties",
            title: "Properties",
            items: [
              {
                name: "status",
                type: [{ kind: "text", text: "string" }],
                attributes: [
                  { kind: "allowedValues", values: ["ready", "failed"] },
                  { kind: "default", value: "ready" },
                ],
              },
            ],
          },
        ],
      },
      {
        documentationPath: rootPath,
        owned: new Set([rootPath]),
        outputPaths: new Map([[rootPath, "pages/swift/root.md"]]),
        entries: new Map([[rootPath, entry(rootPath)]]),
      },
    );

    expect(document.body).toContain("```\nobject Payload\n```");
    expect(document.body).toContain("**Allowed values:** `ready`, `failed`");
    expect(document.body).toContain("**Default:** `ready`");
  });

  test("creates paths that can be checked out on Windows", () => {
    expect(
      assignOutputPaths([
        "/documentation/example/aux",
        "/documentation/example/trailing.",
      ]),
    ).toEqual(
      new Map([
        ["/documentation/example/aux", "pages/example/_aux.md"],
        ["/documentation/example/trailing.", "pages/example/trailing_.md"],
      ]),
    );
  });
});

describe("Apple catalog inventory digest", () => {
  function framework(
    slug: string,
    indexDigest: string,
    pages: readonly string[],
  ): FrameworkEntry {
    return {
      slug,
      title: slug,
      platforms: [],
      catalog: "shared",
      landingPath: `/documentation/${slug}`,
      pages,
      indexDigest,
    };
  }

  const swift = framework("swift", "a".repeat(64), [rootPath, childPath]);
  const webkit = framework("webkit", "b".repeat(64), [
    "/documentation/webkit/dom",
  ]);

  test("ignores the order frameworks and pages were discovered in", () => {
    expect(catalogDigest([swift, webkit])).toBe(
      catalogDigest([
        webkit,
        framework("swift", "a".repeat(64), [childPath, rootPath]),
      ]),
    );
  });

  test("changes when an index or the pages it lists change", () => {
    expect(catalogDigest([swift])).not.toBe(
      catalogDigest([
        framework("swift", "c".repeat(64), [rootPath, childPath]),
      ]),
    );
    expect(catalogDigest([swift])).not.toBe(
      catalogDigest([framework("swift", "a".repeat(64), [rootPath])]),
    );
  });
});
