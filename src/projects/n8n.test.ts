import { describe, expect, test } from "bun:test";
import {
  loadSpaceFolders,
  normalizeGitBookHtml,
  normalizeLeadingTabs,
  parseSummary,
  transformGitBook,
} from "./n8n.ts";

describe("n8n navigation", () => {
  test("loads published GitBook spaces in table order", () => {
    const files = new Set([
      "docs/get-started/SUMMARY.md",
      "docs/build/SUMMARY.md",
    ]);
    const spaces = loadSpaceFolders(
      "| `get-started` | `start123` |\n| `missing` | `gone123` |\n| `build` | `build123` |",
      files,
    );
    expect([...spaces]).toEqual([
      ["start123", "get-started"],
      ["build123", "build"],
    ]);
  });

  test("parses nested-parenthesis page paths", () => {
    expect(
      parseSummary(
        "* [All items](cookbook/(node-name).all.md)",
        "docs/build/SUMMARY.md",
      ),
    ).toEqual([
      {
        label: "All items",
        sourcePath: "docs/build/cookbook/(node-name).all.md",
      },
    ]);
  });
});

describe("n8n GitBook conversion", () => {
  test("normalizes mixed indentation without changing inline tabs", () => {
    expect(normalizeLeadingTabs("  \tvalue\ntext\tvalue")).toBe(
      "      value\ntext\tvalue",
    );
  });

  test("renders hints, tabs, files, and embeds as plain Markdown", () => {
    const source = `{% hint style="warning" %}
Read this.
{% endhint %}

{% tabs %}
{% tab title="JavaScript" %}
Use JS.
{% endtab %}
{% endtabs %}

{% file src="assets/workflow.json" %}
Example workflow
{% endfile %}

{% embed url="https://youtu.be/example" %}`;
    expect(transformGitBook(source, "docs/build/page.md")).toBe(
      `> **Warning**
> Read this.

**JavaScript**

Use JS.

[Example workflow](assets/workflow.json)

[Embedded media](https://youtu.be/example)\n`,
    );
  });

  test("drops GitBook custom blocks and keeps the ones carrying a URL", () => {
    const source = `Before.

{% @github-files/github-code-block %}

{% @mailchimp/mailchimp-embed url="https://example.invalid/form" %}

After.`;
    expect(transformGitBook(source, "docs/deploy/page.md")).toBe(
      `Before.

[Embedded content](https://example.invalid/form)

After.\n`,
    );
  });

  test("leaves GitBook examples inside fences untouched", () => {
    const source = `\`\`\`markdown
{% hint style="info" %}
Example
{% endhint %}
\`\`\``;
    expect(transformGitBook(source, "docs/contribute/style.md")).toBe(
      `${source}\n`,
    );
  });

  test("accepts GitBook single-line fences", () => {
    expect(
      transformGitBook(
        "```locations.readonly contacts.write```",
        "docs/integrations/credentials.md",
      ),
    ).toBe("```locations.readonly contacts.write```\n");
  });

  test("renders compact hints", () => {
    expect(
      transformGitBook(
        `{% hint style="warning" %} Upgrade first.
{% endhint %}
{% hint style="info" %} Network only. {% endhint %}`,
        "docs/deploy/page.md",
      ),
    ).toBe(`> **Warning**
> Upgrade first.

> **Info**
> Network only.\n`);
  });

  test("normalizes serialized GitBook hints", () => {
    expect(
      normalizeGitBookHtml(
        '<div data-gb-custom-block data-tag="hint" data-style="warning" class="hint"><p><strong>Careful</strong></p><p>Read the <a href="guide.md">guide</a>.</p><ul><li>Back up first</li><li>Upgrade</li></ul></div>',
      ),
    ).toBe(`> **Warning**
> **Careful**
>
> Read the [guide](guide.md).
>
> - Back up first
> - Upgrade\n`);
  });

  test("decodes embedded workflow demos", () => {
    const content = encodeURIComponent(
      JSON.stringify({ name: "Example", nodes: [] }),
    );
    expect(
      transformGitBook(
        `{% @n8n-blocks/n8n-workflow-demo content="${content}" url="https://example.com/workflow.json" %}`,
        "docs/build/page.md",
      ),
    ).toBe(`**Workflow example**

\`\`\`json
{
  "name": "Example",
  "nodes": []
}
\`\`\`\n`);

    expect(
      transformGitBook(
        '{% @n8n-blocks/n8n-workflow-demo content="" url="https://api.n8n.io/workflows/templates/1747" %}',
        "docs/build/page.md",
      ),
    ).toBe("[Workflow example](https://api.n8n.io/workflows/templates/1747)\n");
  });

  test("rejects unsupported blocks", () => {
    expect(() =>
      transformGitBook("{% unknown %}", "docs/build/page.md"),
    ).toThrow("Unsupported n8n GitBook block");
  });
});
