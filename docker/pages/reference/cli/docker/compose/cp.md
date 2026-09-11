> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_cp.yaml](https://github.com/docker/docs/blob/2054b419afd87a3232f2e77366a561e172e27c67/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_cp.yaml)

# docker compose cp

Copy files/folders between a service container and the local filesystem

**Usage:** `docker compose cp [OPTIONS] SERVICE:SRC_PATH DEST_PATH|-
	docker compose cp [OPTIONS] SRC_PATH|- SERVICE:DEST_PATH`

## Description

Copy files/folders between a service container and the local filesystem

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--all` |  | Include containers created by the run command |
| `-a`, `--archive` |  | Archive mode (copy all uid/gid information) |
| `-L`, `--follow-link` |  | Always follow symbol link in SRC_PATH |
| `--index` |  | Index of the container if service has multiple replicas |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |
