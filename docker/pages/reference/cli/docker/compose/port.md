> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_port.yaml](https://github.com/docker/docs/blob/f6dc902a4d40c625f5f2c23a5c1eb735ffe7b570/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_port.yaml)

# docker compose port

Print the public port for a port binding

**Usage:** `docker compose port [OPTIONS] SERVICE PRIVATE_PORT`

## Description

Prints the public port for a port binding

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--index` |  | Index of the container if service has multiple replicas |
| `--protocol` | `tcp` | tcp or udp |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |
