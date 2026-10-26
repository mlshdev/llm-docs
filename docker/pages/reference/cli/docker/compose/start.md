> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_start.yaml](https://github.com/docker/docs/blob/171f597d4e166d42879d7d620a8a29e3b1a17a80/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_start.yaml)

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
