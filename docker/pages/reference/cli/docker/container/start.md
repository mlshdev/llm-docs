> Commit-pinned source for Docker main: [data/cli/engine/docker_container_start.yaml](https://github.com/docker/docs/blob/b3f9d60b1b26476298cfc2db3dd70e74c915869f/data/cli/engine/docker_container_start.yaml)

# docker container start

Start one or more stopped containers

**Usage:** `docker container start [OPTIONS] CONTAINER [CONTAINER...]`

**Aliases:** docker container start, docker start

## Description

Start one or more stopped containers

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-a`, `--attach` |  | Attach STDOUT/STDERR and forward signals |
| `--checkpoint` |  | Restore from this checkpoint (Experimental) |
| `--checkpoint-dir` |  | Use a custom checkpoint storage directory (Experimental) |
| `--detach-keys` |  | Override the key sequence for detaching a container |
| `-i`, `--interactive` |  | Attach container's STDIN |

## Examples

```console
$ docker start my_container
```
