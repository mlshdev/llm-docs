import { describe, expect, test } from "bun:test";
import { renderRegion, type RenderContext } from "./grafana.ts";

function context(sourcePath: string): RenderContext {
  return {
    pages: new Map(),
    tree: {
      root: { sourcePath: "", attributes: {}, body: "" },
      children: new Map(),
    },
    version: "next",
    page: { sourcePath, attributes: {}, body: "" },
    stack: new Set(),
  } as unknown as RenderContext;
}

describe("Grafana shortcode region rendering", () => {
  test("renders a paired admonition shortcode", () => {
    const rendered = renderRegion(
      'before {{< admonition type="note" >}}hello{{< /admonition >}} after',
      context("docs/example.md"),
    );
    expect(rendered).toContain("hello");
    expect(rendered).toContain("**Note**");
    expect(rendered).not.toContain("admonition");
  });

  test("quarantines a stray closing shortcode instead of dropping content", () => {
    const source = "before {{% /tabs %}} after";
    expect(() => renderRegion(source, context("docs/example.md"))).toThrow(
      "Unmatched closing Grafana shortcode tabs",
    );
  });

  test("quarantines an unsupported shortcode", () => {
    expect(() =>
      renderRegion("{{< unknown-thing >}}", context("docs/example.md")),
    ).toThrow("Unsupported Grafana shortcode unknown-thing");
  });
});
