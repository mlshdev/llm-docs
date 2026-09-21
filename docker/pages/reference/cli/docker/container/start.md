> Pinned source for Docker main: [data/cli/engine/docker_container_start.yaml](https://github.com/docker/docs/blob/71fa06427156ab4e87b88cdc9983d2efea8b7519/data/cli/engine/docker_container_start.yaml)

# docker container start

Start one or more stopped containers

**Usage:** `docker container start [OPTIONS] CONTAINER [CONTAINER...]`

**Aliases:** docker container start, docker start

## Description

Start one or more stopped containers

## Options

| Option                | Default | Description                                              |
| --------------------- | ------- | -------------------------------------------------------- |
| `-a`, `--attach`      |         | Attach STDOUT/STDERR and forward signals                 |
| `--checkpoint`        |         | Restore from this checkpoint (Experimental)              |
| `--checkpoint-dir`    |         | Use a custom checkpoint storage directory (Experimental) |
| `--detach-keys`       |         | Override the key sequence for detaching a container      |
| `-i`, `--interactive` |         | Attach container's STDIN                                 |

## Examples

```console
$ docker start my_container
```
