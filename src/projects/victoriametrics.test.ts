import { describe, expect, test } from "bun:test";
import {
  assertResolvedReferences,
  dropPresentationMarkup,
  expandShortcodes,
} from "./victoriametrics.ts";

const page = (sourcePath: string) => ({ sourcePath, attributes: {}, body: "" });
const index = page("docs/victoriametrics/vmctl/_index.md");
const child = page("docs/victoriametrics/vmctl/how-to.md");

const navigation = new Map([
  ["", [{ page: index, identifier: "vmctl", weight: 1, label: "vmctl" }]],
  [
    "vmctl",
    [{ page: child, identifier: "vmctl-how-to", weight: 1, label: "How to" }],
  ],
]);

const siteUrls = new Map([
  [
    child.sourcePath,
    "https://docs.victoriametrics.com/victoriametrics/vmctl/how-to/",
  ],
]);

const expand = (source: string, sourcePath = index.sourcePath) =>
  expandShortcodes(source, sourcePath, navigation, siteUrls).trim();

describe("VictoriaMetrics shortcode expansion", () => {
  test("renders a section listing from the menu navigation", () => {
    expect(expand("# vmctl\n\n{{% section %}}\n")).toContain(
      "- [How to](https://docs.victoriametrics.com/victoriametrics/vmctl/how-to/)",
    );
  });

  test("rejects a section without navigation children", () => {
    expect(() => expand("{{% section %}}", child.sourcePath)).toThrow(
      "lists a section without navigation children",
    );
  });

  test("labels version availability inline", () => {
    expect(
      expand('Tab completion. {{% available_from "v1.27.0" anomaly %}}'),
    ).toBe("Tab completion. _(available from vmanomaly v1.27.0)_");
    expect(expand('Old flag. {{% deprecated_from "v1.28.4" anomaly %}}')).toBe(
      "Old flag. _(deprecated since vmanomaly v1.28.4)_",
    );
    expect(expand('Core flag. {{% available_from "v1.150.0" %}}')).toBe(
      "Core flag. _(available from v1.150.0)_",
    );
  });

  test("rejects an unknown version scope", () => {
    expect(() => expand('{{% available_from "v1.0.0" enterprise %}}')).toThrow(
      'Unsupported VictoriaMetrics available_from scope "enterprise"',
    );
  });

  test("promotes nested collapse blocks to headed sections", () => {
    const expanded = expand(
      `{{% collapse name="Model arguments" %}}
Outer text.

{{% collapse name="Configuration example" %}}
Inner text.
{{% /collapse %}}
{{% /collapse %}}`,
    );
    expect(expanded).toContain("**Model arguments**");
    expect(expanded).toContain("**Configuration example**");
    expect(expanded).toContain("Inner text.");
  });

  test("rejects an unbalanced collapse", () => {
    expect(() => expand('{{% collapse name="Open" %}}\nText.\n')).toThrow(
      "Unbalanced VictoriaMetrics collapse",
    );
  });

  test("rejects a collapse without a name", () => {
    expect(() => expand("{{% collapse %}}\nText.\n{{% /collapse %}}")).toThrow(
      "collapse without a name",
    );
  });
});

describe("VictoriaMetrics presentation markup", () => {
  test("drops attribute lists and layout wrappers", () => {
    expect(
      dropPresentationMarkup(
        `<p align="center">
![Decision Tree](decision-tree.webp)
{width="700"}
</p>`,
      ),
    ).toBe("![Decision Tree](decision-tree.webp)");
  });

  test("keeps MetricsQL selectors that look like attribute lists", () => {
    const selector = '{job="app1",env="prod" or job="app2",env="dev"}';
    expect(dropPresentationMarkup(selector)).toBe(selector);
  });

  test("unwraps a link whose only content is the image it opens", () => {
    expect(
      dropPresentationMarkup(
        '  <a class="content-image" href="/ui.webp"><img alt="UI" src="/ui.webp" /></a>',
      ),
    ).toBe('  <img alt="UI" src="/ui.webp" />');
  });

  test("leaves fenced code untouched", () => {
    const fenced = '```yaml\n<div>\n{width="700"}\n```';
    expect(dropPresentationMarkup(fenced)).toBe(fenced);
  });
});

describe("VictoriaMetrics reference validation", () => {
  test("rejects references left unresolved inside raw HTML", () => {
    expect(() =>
      assertResolvedReferences("docs/page.md", '<img src="/ui.webp">'),
    ).toThrow("keeps unresolved references (/ui.webp)");
  });

  test("accepts absolute and fragment references", () => {
    expect(() =>
      assertResolvedReferences(
        "docs/page.md",
        '<a href="https://docs.victoriametrics.com/">Docs</a><a href="#top">Top</a>',
      ),
    ).not.toThrow();
  });
});
