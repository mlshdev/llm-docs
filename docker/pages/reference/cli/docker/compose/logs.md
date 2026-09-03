> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_logs.yaml](https://github.com/docker/docs/blob/88c23a1ca40fdf176064bef4dbb7b2495debebb3/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_logs.yaml)

# docker compose logs

View output from containers

**Usage:** `docker compose logs [OPTIONS] [SERVICE...]`

## Description

Displays log output from services

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--follow` |  | Follow log output |
| `--index` |  | index of the container if service has multiple replicas |
| `--no-color` |  | Produce monochrome output |
| `--no-log-prefix` |  | Don't print prefix in logs |
| `--since` |  | Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes) |
| `-n`, `--tail` | `all` | Number of lines to show from the end of the logs for each container |
| `-t`, `--timestamps` |  | Show timestamps |
| `--until` |  | Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |
