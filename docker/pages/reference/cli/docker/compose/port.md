> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_port.yaml](https://github.com/docker/docs/blob/c98501277b974550688eeed803c975e2665d6468/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_port.yaml)

# docker compose port

List port mappings or print the public port for a specific mapping for the service

**Usage:** `docker compose port [OPTIONS] SERVICE [PRIVATE_PORT]`

## Description

List port mappings or print the public port for a specific mapping for the service

## Options

| Option       | Default | Description                                             |
| ------------ | ------- | ------------------------------------------------------- |
| `--index`    |         | Index of the container if service has multiple replicas |
| `--protocol` | `tcp`   | tcp or udp                                              |

## Global options

| Option      | Default | Description                     |
| ----------- | ------- | ------------------------------- |
| `--dry-run` |         | Execute command in dry run mode |
