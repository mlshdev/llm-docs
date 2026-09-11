> Commit-pinned source for Docker main: [data/cli/engine/docker_volume_rm.yaml](https://github.com/docker/docs/blob/5e8a1f493e574ad6a8b44d838e8df07f2befa31e/data/cli/engine/docker_volume_rm.yaml)

# docker volume rm

Remove one or more volumes

**Usage:** `docker volume rm [OPTIONS] VOLUME [VOLUME...]`

**Aliases:** docker volume rm, docker volume remove

## Description

Remove one or more volumes. You can't remove a volume that's in use by a container.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--force` |  | Force the removal of one or more volumes (API 1.25+) |

## Examples

```console
$ docker volume rm hello

hello
```
