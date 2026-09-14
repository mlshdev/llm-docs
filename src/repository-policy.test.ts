import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { rootDirectory } from "./config.ts";

describe("publication policy", () => {
  test("does not restore the obsolete GitHub Pages deployment", async () => {
    const packageJson = JSON.parse(
      await readFile(path.join(rootDirectory, "package.json"), "utf8"),
    ) as { readonly scripts?: Readonly<Record<string, string>> };
    expect(packageJson.scripts?.site).toBeUndefined();

    const sources = await Promise.all(
      [
        ".github/workflows/update-docs.yml",
        "src/cli.ts",
        "src/output.ts",
        "README.md",
      ].map((file) => readFile(path.join(rootDirectory, file), "utf8")),
    );
    const repositoryPublicationSources = sources.join("\n");
    for (const obsoletePagesMarker of [
      "actions/configure-pages",
      "actions/deploy-pages",
      "actions/upload-pages-artifact",
      "bun run site",
      'case "site"',
      "function buildSite",
      "github-pages",
      "id-token: write",
      "pages: write",
      "_site",
    ]) {
      expect(repositoryPublicationSources).not.toContain(obsoletePagesMarker);
    }
  });
});
