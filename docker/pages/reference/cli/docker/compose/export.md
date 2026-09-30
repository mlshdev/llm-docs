> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_export.yaml](https://github.com/docker/docs/blob/e169d1082ba3fa27684fe5a67d8109a788aa84a9/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_export.yaml)

# docker compose export

Export a service container's filesystem as a tar archive

**Usage:** `docker compose export [OPTIONS] SERVICE`

## Description

Export a service container's filesystem as a tar archive

## Options

| Option           | Default | Description                                              |
| ---------------- | ------- | -------------------------------------------------------- |
| `--index`        |         | index of the container if service has multiple replicas. |
| `-o`, `--output` |         | Write to a file, instead of STDOUT                       |

## Global options

| Option      | Default | Description                     |
| ----------- | ------- | ------------------------------- |
| `--dry-run` |         | Execute command in dry run mode |
