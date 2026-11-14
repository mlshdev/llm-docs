> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_kill.yaml](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_kill.yaml)

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
