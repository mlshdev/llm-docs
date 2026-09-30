> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_start.yaml](https://github.com/docker/docs/blob/e169d1082ba3fa27684fe5a67d8109a788aa84a9/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_start.yaml)

# docker compose start

Start services

**Usage:** `docker compose start [SERVICE...]`

## Description

Starts existing containers for a service

## Options

| Option           | Default | Description                                                                |
| ---------------- | ------- | -------------------------------------------------------------------------- |
| `--wait`         |         | Wait for services to be running\|healthy. Implies detached mode.           |
| `--wait-timeout` |         | Maximum duration in seconds to wait for the project to be running\|healthy |

## Global options

| Option      | Default | Description                     |
| ----------- | ------- | ------------------------------- |
| `--dry-run` |         | Execute command in dry run mode |
