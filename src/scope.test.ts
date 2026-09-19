import { describe, expect, test } from "bun:test";
import { loadConfig } from "./config.ts";
import { parseProjectScope, projectsInScope } from "./scope.ts";

describe("project scope", () => {
  test("defaults direct CLI calls to GitHub-backed projects", () => {
    expect(parseProjectScope([])).toBe("github");
  });

  test("parses each supported scope", () => {
    expect(parseProjectScope(["--scope=github"])).toBe("github");
    expect(parseProjectScope(["--scope=docc"])).toBe("docc");
    expect(parseProjectScope(["--scope=all"])).toBe("all");
  });

  test("rejects unknown and duplicate options", () => {
    expect(() => parseProjectScope(["--scope=other"])).toThrow(
      "Invalid project scope",
    );
    expect(() => parseProjectScope(["--verbose"])).toThrow("Unknown option");
    expect(() => parseProjectScope(["--scope=github", "--scope=docc"])).toThrow(
      "only be specified once",
    );
  });

  test("partitions the configured projects by source kind", async () => {
    const projects = (await loadConfig()).projects;
    const github = projectsInScope(projects, "github");
    const docc = projectsInScope(projects, "docc");

    expect(github.length + docc.length).toBe(projects.length);
    expect(github.every((project) => project.kind === "github")).toBe(true);
    expect(docc.every((project) => project.kind === "docc")).toBe(true);
    expect(projectsInScope(projects, "all")).toEqual(projects);
  });
});
