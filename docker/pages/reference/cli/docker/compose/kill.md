> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_kill.yaml](https://github.com/docker/docs/blob/f8d4abc333036d7d71928bab49a417876d348966/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_kill.yaml)

# docker compose kill

Force stop service containers

**Usage:** `docker compose kill [OPTIONS] [SERVICE...]`

## Description

Forces running containers to stop by sending a `SIGKILL` signal. Optionally the signal can be passed, for example:

```console
$ docker compose kill -s SIGINT
```

## Options

| Option             | Default   | Description                                                    |
| ------------------ | --------- | -------------------------------------------------------------- |
| `--remove-orphans` |           | Remove containers for services not defined in the Compose file |
| `-s`, `--signal`   | `SIGKILL` | SIGNAL to send to the container                                |

## Global options

| Option      | Default | Description                     |
| ----------- | ------- | ------------------------------- |
| `--dry-run` |         | Execute command in dry run mode |
