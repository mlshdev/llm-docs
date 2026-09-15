> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_attach.yaml](https://github.com/docker/docs/blob/2465b5136acea8373d5c6a27e4672f4acf26c935/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_attach.yaml)

# docker compose attach

Attach local standard input, output, and error streams to a service's running container

**Usage:** `docker compose attach [OPTIONS] SERVICE`

## Description

Attach local standard input, output, and error streams to a service's running container

## Options

| Option          | Default | Description                                               |
| --------------- | ------- | --------------------------------------------------------- |
| `--detach-keys` |         | Override the key sequence for detaching from a container. |
| `--index`       |         | index of the container if service has multiple replicas.  |
| `--no-stdin`    |         | Do not attach STDIN                                       |
| `--sig-proxy`   | `true`  | Proxy all received signals to the process                 |

## Global options

| Option      | Default | Description                     |
| ----------- | ------- | ------------------------------- |
| `--dry-run` |         | Execute command in dry run mode |
