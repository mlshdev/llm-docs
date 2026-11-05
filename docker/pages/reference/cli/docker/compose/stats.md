> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_stats.yaml](https://github.com/docker/docs/blob/c98501277b974550688eeed803c975e2665d6468/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_stats.yaml)

# docker compose stats

Display a live stream of container(s) resource usage statistics

**Usage:** `docker compose stats [OPTIONS] [SERVICE]`

## Description

Display a live stream of container(s) resource usage statistics

## Options

| Option           | Default | Description                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--aggregate`    |         | Show one line per project, summing the resource usage of its containers (only 'table' and 'json' formats)                                                                                                                                                                                                                                                                                      |
| `-a`, `--all`    |         | Show all containers (default shows just running)                                                                                                                                                                                                                                                                                                                                               |
| `--all-projects` |         | Show the containers of all projects instead of the current one, with their project (only 'table' and 'json' formats)                                                                                                                                                                                                                                                                           |
| `--format`       |         | Format output using a custom template: 'table': Print output in table format with column headers (default) 'table TEMPLATE': Print output in table format using the given Go template 'json': Print in JSON format 'TEMPLATE': Print output using the given Go template. Refer to <https://docs.docker.com/engine/cli/formatting/> for more information about formatting output with templates |
| `--no-stream`    |         | Disable streaming stats and only pull the first result                                                                                                                                                                                                                                                                                                                                         |
| `--no-trunc`     |         | Do not truncate output                                                                                                                                                                                                                                                                                                                                                                         |

## Global options

| Option      | Default | Description                     |
| ----------- | ------- | ------------------------------- |
| `--dry-run` |         | Execute command in dry run mode |
