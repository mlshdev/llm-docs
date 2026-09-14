import { describe, expect, test } from "bun:test";
import { bunNavigation } from "./bun.ts";

describe("Bun navigation", () => {
  const config = {
    navigation: {
      tabs: [
        {
          tab: "Runtime",
          groups: [
            {
              group: "Get started",
              pages: ["/index", "/runtime/file-io"],
            },
          ],
        },
      ],
    },
  };
  const sources = new Map([
    ["docs/index.mdx", "# Bun"],
    ["docs/runtime/file-io.mdx", "# File I/O"],
    ["docs/internal-draft.mdx", "# Draft"],
  ]);

  test("follows declared order and excludes orphaned Markdown", () => {
    const navigation = bunNavigation(config, sources);
    expect([...navigation]).toEqual([
      ["docs/index.mdx", "Get started"],
      ["docs/runtime/file-io.mdx", "Get started"],
    ]);
    expect(navigation.has("docs/internal-draft.mdx")).toBe(false);
  });

  test("fails when navigation names a missing page", () => {
    expect(() =>
      bunNavigation(
        {
          navigation: {
            groups: [{ group: "Runtime", pages: ["/missing"] }],
          },
        },
        sources,
      ),
    ).toThrow("missing page /missing");
  });
});
