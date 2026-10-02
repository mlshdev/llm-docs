> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_top.yaml](https://github.com/docker/docs/blob/1cb9a4d2c65d712da863e30cd3a1319ddeea3298/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_top.yaml)

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

````console
```console
$ docker compose top
example_foo_1
UID    PID      PPID     C    STIME   TTY   TIME       CMD
root   142353   142331   2    15:33   ?     00:00:00   ping localhost -c 5
````

```
```
