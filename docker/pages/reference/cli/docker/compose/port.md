> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_port.yaml](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_port.yaml)

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
