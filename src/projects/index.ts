import { buildNetbird } from "./netbird.ts";
import { buildPodman } from "./podman.ts";
import { buildTraefik } from "./traefik.ts";
import type { LockedSource, ProjectBuild, SourceProject } from "../types.ts";

export function buildProject(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  switch (project.id) {
    case "traefik":
      return buildTraefik(project, lock);
    case "netbird":
      return buildNetbird(project, lock);
    case "podman":
      return buildPodman(project, lock);
  }
}
