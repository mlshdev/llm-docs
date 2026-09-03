> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_create.yaml](https://github.com/docker/docs/blob/0dd94985910d2b70122891c8cf9173087f7460a8/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_create.yaml)

# docker compose create

Creates containers for a service

**Usage:** `docker compose create [OPTIONS] [SERVICE...]`

## Description

Creates containers for a service

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--build` |  | Build images before starting containers |
| `--force-recreate` |  | Recreate containers even if their configuration and image haven't changed |
| `--no-build` |  | Don't build an image, even if it's policy |
| `--no-recreate` |  | If containers already exist, don't recreate them. Incompatible with --force-recreate. |
| `--pull` | `policy` | Pull image before running ("always"\|"missing"\|"never"\|"build") |
| `--quiet-pull` |  | Pull without printing progress information |
| `--remove-orphans` |  | Remove containers for services not defined in the Compose file |
| `--scale` |  | Scale SERVICE to NUM instances. Overrides the `scale` setting in the Compose file if present. |
| `-y`, `--yes` |  | Assume "yes" as answer to all prompts and run non-interactively |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |
