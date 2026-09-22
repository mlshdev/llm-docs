> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_top.yaml](https://github.com/docker/docs/blob/c69ce0fd3851270bba5473502268ff7661887b2a/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_top.yaml)

# docker compose top

Display the running processes

**Usage:** `docker compose top [SERVICES...]`

## Description

Displays the running processes

## Global options

| Option      | Default | Description                     |
| ----------- | ------- | ------------------------------- |
| `--dry-run` |         | Execute command in dry run mode |

## Examples

```console
$ docker compose top
example_foo_1
UID    PID      PPID     C    STIME   TTY   TIME       CMD
root   142353   142331   2    15:33   ?     00:00:00   ping localhost -c 5
```
