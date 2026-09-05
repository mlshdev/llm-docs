> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_export.yaml](https://github.com/docker/docs/blob/034d46977dac45d2a9493f2465b08108ac3cf87b/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_export.yaml)

# docker compose export

Export a service container's filesystem as a tar archive

**Usage:** `docker compose export [OPTIONS] SERVICE`

## Description

Export a service container's filesystem as a tar archive

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--index` |  | index of the container if service has multiple replicas. |
| `-o`, `--output` |  | Write to a file, instead of STDOUT |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |
