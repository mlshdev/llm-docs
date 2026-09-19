import type { SourceProject } from "./types.ts";

export const projectScopes = ["github", "docc", "all"] as const;

export type ProjectScope = (typeof projectScopes)[number];

export function parseProjectScope(args: readonly string[]): ProjectScope {
  let scope: ProjectScope = "github";
  let specified = false;
  for (const argument of args) {
    if (!argument.startsWith("--scope=")) {
      throw new Error(`Unknown option: ${argument}`);
    }
    const value = argument.slice("--scope=".length);
    const selected = projectScopes.find((candidate) => candidate === value);
    if (!selected) {
      throw new Error(
        `Invalid project scope ${JSON.stringify(value)}; expected github, docc, or all`,
      );
    }
    if (specified) {
      throw new Error("Project scope may only be specified once");
    }
    scope = selected;
    specified = true;
  }
  return scope;
}

export function projectsInScope(
  projects: readonly SourceProject[],
  scope: ProjectScope,
): readonly SourceProject[] {
  return scope === "all"
    ? projects
    : projects.filter((project) => project.kind === scope);
}
