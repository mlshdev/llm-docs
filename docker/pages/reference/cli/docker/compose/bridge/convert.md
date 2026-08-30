> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_bridge_convert.yaml](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_bridge_convert.yaml)

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

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |
