> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_bridge_convert.yaml](https://github.com/docker/docs/blob/b3f9d60b1b26476298cfc2db3dd70e74c915869f/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_bridge_convert.yaml)

# docker compose bridge convert

Convert compose files to Kubernetes manifests, Helm charts, or another model

**Usage:** `docker compose bridge convert`

## Description

Convert compose files to Kubernetes manifests, Helm charts, or another model

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-o`, `--output` | `out` | The output directory for the Kubernetes resources |
| `--templates` |  | Directory containing transformation templates |
| `-t`, `--transformation` |  | Transformation to apply to compose model (default: docker/compose-bridge-kubernetes) |
| `-y`, `--yes` |  | Assume "yes" to the output directory overwrite prompt. For scripts/CI, where no interactive confirmation is possible |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |
