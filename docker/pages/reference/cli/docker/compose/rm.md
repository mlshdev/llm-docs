> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_rm.yaml](https://github.com/docker/docs/blob/f6dc902a4d40c625f5f2c23a5c1eb735ffe7b570/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_rm.yaml)

# docker compose rm

Removes stopped service containers

**Usage:** `docker compose rm [OPTIONS] [SERVICE...]`

## Description

Removes stopped service containers.

By default, anonymous volumes attached to containers are not removed. You can override this with `-v`. To list all
volumes, use `docker volume ls`.

Any data which is not in a volume is lost.

Running the command with no options also removes one-off containers created by `docker compose run`:

```console
$ docker compose rm
Going to remove djangoquickstart_web_run_1
Are you sure? [yN] y
Removing djangoquickstart_web_run_1 ... done
```

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--force` |  | Don't ask to confirm removal |
| `-s`, `--stop` |  | Stop the containers, if required, before removing |
| `-v`, `--volumes` |  | Remove any anonymous volumes attached to containers |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |
