> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_watch.yaml](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_watch.yaml)

# docker compose watch

Watch build context for service and rebuild/refresh containers when files are updated

**Usage:** `docker compose watch [SERVICE...]`

## Description

Watch build context for service and rebuild/refresh containers when files are updated

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--no-up` |  | Do not build & start services before watching |
| `--prune` | `true` | Prune dangling images on rebuild |
| `--quiet` |  | hide build output |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |
