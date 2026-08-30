> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_commit.yaml](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_commit.yaml)

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
