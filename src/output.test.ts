import { describe, expect, test } from "bun:test";
import { loadConfig } from "./config.ts";
import { generatedPaths } from "./output.ts";

describe("generatedPaths", () => {
  test("lists the aggregates before the project directories", () => {
    const paths = generatedPaths([{ id: "traefik" }, { id: "docker" }]);
    expect(paths).toEqual([
      "sources.lock.json",
      "llms.txt",
      "llms-full.txt",
      "traefik",
      "docker",
    ]);
  });

  // The publishing workflow replaces exactly these paths. A project missing
  // from the list is published in the root indexes while its directory is
  // managed by nobody, which is how a merged project once lost its pin.
  test("covers every configured project", async () => {
    const config = await loadConfig();
    const paths = new Set(generatedPaths(config.projects));
    for (const project of config.projects) {
      expect(paths).toContain(project.id);
    }
    expect(paths.size).toBe(config.projects.length + 3);
  });
});
