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
