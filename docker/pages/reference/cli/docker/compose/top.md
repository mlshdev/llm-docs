> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_top.yaml](https://github.com/docker/docs/blob/571f478dda32a3f19f8451bdf199633a8d1e3578/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_top.yaml)

# docker compose top

Display the running processes

**Usage:** `docker compose top [SERVICES...]`

## Description

Displays the running processes

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |

## Examples

```console
$ docker compose top
example_foo_1
UID    PID      PPID     C    STIME   TTY   TIME       CMD
root   142353   142331   2    15:33   ?     00:00:00   ping localhost -c 5
```
