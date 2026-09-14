> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_start.yaml](https://github.com/docker/docs/blob/5541c4e3130a6de70be53bba50dfef4f203e4026/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_start.yaml)

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
