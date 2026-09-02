> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_volumes.yaml](https://github.com/docker/docs/blob/fd5e73c9183cc2e1600a747a52aaf3d8ea0ce3b5/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_volumes.yaml)

# docker compose volumes

List volumes

**Usage:** `docker compose volumes [OPTIONS] [SERVICE...]`

## Description

List volumes

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--format` | `table` | Format output using a custom template: 'table': Print output in table format with column headers (default) 'table TEMPLATE': Print output in table format using the given Go template 'json': Print in JSON format 'TEMPLATE': Print output using the given Go template. Refer to https://docs.docker.com/go/formatting/ for more information about formatting output with templates |
| `-q`, `--quiet` |  | Only display volume names |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |
