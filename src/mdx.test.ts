import { describe, expect, test } from "bun:test";
import { convertMdx } from "./mdx.ts";

describe("NetBird MDX conversion", () => {
  test("preserves component metadata without evaluating JavaScript", () => {
    const source = `export const title = 'API page'
export const description = 'API description'

# Endpoint {{ tag: 'GET', label: '/api/items' }}

<Properties>
  <Property name="enabled" type="boolean" required={true}>
    Enables the item.
  </Property>
</Properties>

<Button href="https://example.com">Open</Button>
`;
    const converted = convertMdx(source, "example.mdx");
    expect(converted.title).toBe("API page");
    expect(converted.description).toBe("API description");
    expect(converted.body).toContain("GET /api/items");
    expect(converted.body).toContain("**enabled (type: boolean; required)**");
    expect(converted.body).toContain("[Open](https://example.com)");
  });

  test("rejects unknown components", () => {
    expect(() => convertMdx("<Unknown />", "unknown.mdx")).toThrow(
      "Unhandled MDX component",
    );
  });
});

describe("ZITADEL MDX conversion", () => {
  const partial = `Shared guidance for {props.provider}.

<Callout type="warn">Rotate the secret.</Callout>
`;

  const convert = (source: string) =>
    convertMdx(source, "content/page.mdx", {
      resolveImport: (specifier) =>
        specifier === "./_shared.mdx"
          ? { kind: "mdx", sourcePath: "content/_shared.mdx", source: partial }
          : specifier === "./config.yaml"
            ? {
                kind: "text",
                sourcePath: "content/config.yaml",
                source: "Log:\n  Level: info\n",
              }
            : specifier === "lucide-react"
              ? { kind: "omitted", sourcePath: specifier, source: "" }
              : undefined,
    });

  test("inlines imported partials with the props the page passes", () => {
    const converted = convert(`import Shared from './_shared.mdx';

<Shared provider="Google" />
`);
    expect(converted.body).toContain("Shared guidance for Google.");
    expect(converted.body).toContain("> **Warning**");
  });

  test("renders imported files as code and cards as a list", () => {
    const converted =
      convert(`import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { FileText } from 'lucide-react';
import Config from './config.yaml';

<DynamicCodeBlock lang="yaml" code={Config} />

<Cards>
  <Card title="Quick start" href="/guides/start" icon={<FileText />} />
</Cards>
`);
    expect(converted.body).toContain("```yaml\nLog:\n  Level: info\n```");
    expect(converted.body).toContain("- [Quick start](/guides/start)");
  });

  test("converts HTML tables to Markdown tables", () => {
    const converted = convert(`<table>
  <tr>
    <th>Advisory</th>
    <th>Summary</th>
  </tr>
  <tr>
    <td>A-10000</td>
    <td>
      Reusing user
      sessions.
    </td>
  </tr>
</table>
`);
    expect(converted.body).toContain("| Advisory | Summary");
    expect(converted.body).toContain("| A-10000  | Reusing user sessions. |");
  });

  test("omits components that only exist while the site renders", () => {
    const converted = convert(`export function Chart() {
  return <div />;
}

<Chart />

<DocCardList />

Prose stays.
`);
    expect(converted.body.trim()).toBe("Prose stays.");
  });
});
