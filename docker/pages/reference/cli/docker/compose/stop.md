> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_stop.yaml](https://github.com/docker/docs/blob/1cb9a4d2c65d712da863e30cd3a1319ddeea3298/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_stop.yaml)

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
