> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_ls.yaml](https://github.com/docker/docs/blob/2eaa01ac4fbe81c8cb8705724a05e19474dd681a/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_ls.yaml)

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
