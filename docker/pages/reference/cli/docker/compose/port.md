> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_port.yaml](https://github.com/docker/docs/blob/858251609b8884594fd1de29c51155bc3024b260/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_port.yaml)

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
