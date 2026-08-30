import { buildDatasourcePlugin } from "./datasource-plugin.ts";
import { buildDocker } from "./docker.ts";
import { buildGrafana } from "./grafana.ts";
import { buildNetbird } from "./netbird.ts";
import { buildN8n } from "./n8n.ts";
import { buildPodman } from "./podman.ts";
import { buildTraefik } from "./traefik.ts";
import { buildVictoriametricsDocs } from "./victoriametrics.ts";
import { buildZitadel } from "./zitadel.ts";
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
    case "docker":
      return buildDocker(project, lock);
    case "n8n":
      return buildN8n(project, lock);
    case "grafana":
      return buildGrafana(project, lock);
    case "victoriametrics":
    case "victorialogs":
    case "vmestimator":
      return buildVictoriametricsDocs(project, lock);
    case "victoriametrics-datasource":
    case "victorialogs-datasource":
      return buildDatasourcePlugin(project, lock);
    case "zitadel":
      return buildZitadel(project, lock);
  }
}
