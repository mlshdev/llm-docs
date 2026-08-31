> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_commit.yaml](https://github.com/docker/docs/blob/652986790ecf1ddf1081149f29da132a95207a04/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_commit.yaml)

# docker compose commit

Create a new image from a service container's changes

**Usage:** `docker compose commit [OPTIONS] SERVICE [REPOSITORY[:TAG]]`

## Description

Create a new image from a service container's changes

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-a`, `--author` |  | Author (e.g., "John Hannibal Smith <hannibal@a-team.com>") |
| `-c`, `--change` |  | Apply Dockerfile instruction to the created image |
| `--index` |  | index of the container if service has multiple replicas. |
| `-m`, `--message` |  | Commit message |
| `-p`, `--pause` | `true` | Pause container during commit |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |
