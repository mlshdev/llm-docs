> Pinned source for Docker main: [data/cli/engine/docker_container_start.yaml](https://github.com/docker/docs/blob/7efe90099b0a1ac8295c099f13abf8ac173ec46b/data/cli/engine/docker_container_start.yaml)

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

````console
```console
$ docker start my_container
````

```
```
