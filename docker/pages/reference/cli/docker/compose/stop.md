> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_stop.yaml](https://github.com/docker/docs/blob/18bbfeeb249da011f359d558dba84c4b6dc3a335/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_stop.yaml)

# docker compose stop

Stop services

**Usage:** `docker compose stop [OPTIONS] [SERVICE...]`

## Description

Stops running containers without removing them. They can be started again with `docker compose start`.

## Options

| Option            | Default | Description                           |
| ----------------- | ------- | ------------------------------------- |
| `-t`, `--timeout` |         | Specify a shutdown timeout in seconds |

## Global options

| Option      | Default | Description                     |
| ----------- | ------- | ------------------------------- |
| `--dry-run` |         | Execute command in dry run mode |
