import { describe, expect, test } from "bun:test";
import {
  cleanMarkdown,
  convertRst,
  parseFrontmatter,
  rewriteMarkdownLinks,
} from "./markdown.ts";

describe("Markdown normalization", () => {
  test("removes frontmatter and converts MkDocs admonitions", () => {
    const source = `---
title: Example
---
# Example

!!! warning "Be careful"
    First line.

    \`\`\`yaml tab="File"
    enabled: true
    \`\`\`
`;
    expect(parseFrontmatter(source).attributes.title).toBe("Example");
    expect(cleanMarkdown(source)).toContain("> **Be careful**\n> First line.");
    expect(cleanMarkdown(source)).toContain("> **File**\n>\n> ```yaml");
    expect(cleanMarkdown(source)).not.toContain("title: Example");
  });

  test("converts basic reStructuredText headings and roles", () => {
    expect(convertRst("Title\n=====\n\nSee :doc:`Install <install>`.\n")).toBe(
      "# Title\n\nSee [Install](install.md).\n",
    );
  });

  test("normalizes HTML images and attribute lists outside code fences", () => {
    const source = `# Heading
{: .subtitle }

<img src="../asset.png" alt="Asset">

\`\`\`text
{: keep-inside-code }
\`\`\`
`;
    const cleaned = cleanMarkdown(source);
    expect(cleaned).toContain("![Asset](../asset.png)");
    expect(cleaned).not.toContain("{: .subtitle }");
    expect(cleaned).toContain("{: keep-inside-code }");
  });

  test("rewrites Markdown links and rejects relative resolver output", () => {
    expect(
      rewriteMarkdownLinks(
        "[Page](../page.md)",
        () => "https://example.com/page",
      ),
    ).toContain("https://example.com/page");
    expect(() =>
      rewriteMarkdownLinks("[Page](../page.md)", (url) => url),
    ).toThrow("relative URL");
    expect(rewriteMarkdownLinks("[Missing](missing.md)", () => undefined)).toBe(
      "Missing\n",
    );
    expect(
      rewriteMarkdownLinks("![Diagram](missing.png)", () => undefined),
    ).toBe("\\[Image unavailable: Diagram]\n");
  });

  test("preserves paragraph and list boundaries", () => {
    const cleaned = cleanMarkdown(
      "Paragraph.\n\n- One\n- Two\n\nNext paragraph.\n",
    );
    expect(cleaned).toBe("Paragraph.\n\n- One\n- Two\n\nNext paragraph.\n");
  });

  test("removes generated ID anchors without breaking normal HTML links", () => {
    const cleaned = cleanMarkdown(
      '<a id="option" href="#option">Value</a></a> and <a href="https://example.com">link</a>.',
    );
    expect(cleaned).toBe(
      '<a id="option"></a>Value and <a href="https://example.com">link</a>.\n',
    );
  });

  test("normalizes same-document fragments and drops missing anchors", () => {
    const source = `# Combined Container Setup (v0.65.0+)

[Combined](#combined-container-setup-v0-65-0)

[Missing](#does-not-exist)
`;
    const rewritten = rewriteMarkdownLinks(source, (url) => url);
    expect(rewritten).toContain("#combined-container-setup-v0650");
    expect(rewritten).toContain("Missing");
    expect(rewritten).not.toContain("#does-not-exist");
  });
});
