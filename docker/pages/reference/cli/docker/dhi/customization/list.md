> Commit-pinned source for Docker main: [data/cli/dhi/docker_dhi_customization_list.yaml](https://github.com/docker/docs/blob/195c0626b986095e849a7353dd94af1f46f32787/data/cli/dhi/docker_dhi_customization_list.yaml)

# docker dhi customization list

List all customizations

**Usage:** `docker dhi customization list`

## Description

List all Docker Hardened Images customizations

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--bulk-id` |  | Filter by bulk customization ID (exact match) |
| `-f`, `--filter` |  | Filter by customization name (case-insensitive substring match) |
| `--json` |  | Output in JSON format |
| `-r`, `--repo` |  | Filter by destination repository (case-insensitive substring match) |
| `--source` |  | Filter by DHI source repository (case-insensitive substring match) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--org` |  | Docker Hub organization (overrides config) |
