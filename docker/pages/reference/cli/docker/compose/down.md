> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_down.yaml](https://github.com/docker/docs/blob/652986790ecf1ddf1081149f29da132a95207a04/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_down.yaml)

# docker compose down

Stop and remove containers, networks

**Usage:** `docker compose down [OPTIONS] [SERVICES]`

## Description

Stops containers and removes containers, networks, volumes, and images created by `up`.

By default, the only things removed are:

- Containers for services defined in the Compose file.
- Networks defined in the networks section of the Compose file.
- The default network, if one is used.

Networks and volumes defined as external are never removed.

Anonymous volumes are not removed by default. However, as they don’t have a stable name, they are not automatically
mounted by a subsequent `up`. For data that needs to persist between updates, use explicit paths as bind mounts or
named volumes.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--remove-orphans` |  | Remove containers for services not defined in the Compose file |
| `--rmi` |  | Remove images used by services. "local" remove only images that don't have a custom tag ("local"\|"all") |
| `-t`, `--timeout` |  | Specify a shutdown timeout in seconds |
| `-v`, `--volumes` |  | Remove named volumes declared in the "volumes" section of the Compose file and anonymous volumes attached to containers |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |
