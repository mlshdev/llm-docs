> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_cp.yaml](https://github.com/docker/docs/blob/aabe8d1f704ebbcc85d29cc6eac88459ce9e00a4/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_cp.yaml)

# docker compose cp

Copy files/folders between a service container and the local filesystem

**Usage:** `docker compose cp [OPTIONS] SERVICE:SRC_PATH DEST_PATH|-
	docker compose cp [OPTIONS] SRC_PATH|- SERVICE:DEST_PATH`

## Description

Copy files/folders between a service container and the local filesystem

## Options

| Option                | Default | Description                                             |
| --------------------- | ------- | ------------------------------------------------------- |
| `--all`               |         | Include containers created by the run command           |
| `-a`, `--archive`     |         | Archive mode (copy all uid/gid information)             |
| `-L`, `--follow-link` |         | Always follow symbol link in SRC\_PATH                  |
| `--index`             |         | Index of the container if service has multiple replicas |

## Global options

| Option      | Default | Description                     |
| ----------- | ------- | ------------------------------- |
| `--dry-run` |         | Execute command in dry run mode |
