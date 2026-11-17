> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_ls.yaml](https://github.com/docker/docs/blob/670073947d7b7046bc419b40a27c5a448d9b6c9b/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_ls.yaml)

# docker compose ls

List running compose projects

**Usage:** `docker compose ls [OPTIONS]`

## Description

Lists running Compose projects

## Options

| Option          | Default | Description                                 |
| --------------- | ------- | ------------------------------------------- |
| `-a`, `--all`   |         | Show all stopped Compose projects           |
| `--filter`      |         | Filter output based on conditions provided  |
| `--format`      | `table` | Format the output. Values: \[table \| json] |
| `-q`, `--quiet` |         | Only display project names                  |

## Global options

| Option      | Default | Description                     |
| ----------- | ------- | ------------------------------- |
| `--dry-run` |         | Execute command in dry run mode |
