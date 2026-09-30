> Pinned source for Docker main: [data/cli/dhi/docker_dhi_customization_list.yaml](https://github.com/docker/docs/blob/e169d1082ba3fa27684fe5a67d8109a788aa84a9/data/cli/dhi/docker_dhi_customization_list.yaml)

# docker dhi customization list

List all customizations

**Usage:** `docker dhi customization list`

## Description

List all Docker Hardened Images customizations

## Options

| Option           | Default | Description                                                         |
| ---------------- | ------- | ------------------------------------------------------------------- |
| `--bulk-id`      |         | Filter by bulk customization ID (exact match)                       |
| `-f`, `--filter` |         | Filter by customization name (case-insensitive substring match)     |
| `--json`         |         | Output in JSON format                                               |
| `-r`, `--repo`   |         | Filter by destination repository (case-insensitive substring match) |
| `--source`       |         | Filter by DHI source repository (case-insensitive substring match)  |

## Global options

| Option  | Default | Description                                |
| ------- | ------- | ------------------------------------------ |
| `--org` |         | Docker Hub organization (overrides config) |
