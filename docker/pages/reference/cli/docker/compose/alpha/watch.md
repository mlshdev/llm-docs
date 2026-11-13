> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_alpha_watch.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_alpha_watch.yaml)

# docker compose alpha watch

Watch build context for service and rebuild/refresh containers when files are updated

**Usage:** `docker compose alpha watch [SERVICE...]`

> \[!NOTE]
> This command is experimental.

## Description

Watch build context for service and rebuild/refresh containers when files are updated

## Options

| Option    | Default | Description                                   |
| --------- | ------- | --------------------------------------------- |
| `--no-up` |         | Do not build & start services before watching |
| `--quiet` |         | hide build output                             |

## Global options

| Option      | Default | Description                     |
| ----------- | ------- | ------------------------------- |
| `--dry-run` |         | Execute command in dry run mode |
