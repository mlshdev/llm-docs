> Commit-pinned source for Docker main: [data/cli/dhi/docker_dhi_customization_edit.yaml](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/data/cli/dhi/docker_dhi_customization_edit.yaml)

# docker dhi customization edit

Edit an existing customization from YAML file

**Usage:** `docker dhi customization edit <file>`

**Aliases:** docker dhi customization edit, docker dhi customization update

## Description

Edit an existing Docker Hardened Images customization using a YAML file as input. The file should contain the complete customization structure with an 'id' field to identify which customization to update.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--json` |  | Output in JSON format |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--org` |  | Docker Hub organization (overrides config) |
