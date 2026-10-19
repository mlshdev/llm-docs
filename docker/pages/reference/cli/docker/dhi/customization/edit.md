> Pinned source for Docker main: [data/cli/dhi/docker_dhi_customization_edit.yaml](https://github.com/docker/docs/blob/7efe90099b0a1ac8295c099f13abf8ac173ec46b/data/cli/dhi/docker_dhi_customization_edit.yaml)

# docker dhi customization edit

Edit an existing customization from YAML file

**Usage:** `docker dhi customization edit <file>`

**Aliases:** docker dhi customization edit, docker dhi customization update

## Description

Edit an existing Docker Hardened Images customization using a YAML file as input. The file should contain the complete customization structure with an 'id' field to identify which customization to update.

## Options

| Option   | Default | Description           |
| -------- | ------- | --------------------- |
| `--json` |         | Output in JSON format |

## Global options

| Option  | Default | Description                                |
| ------- | ------- | ------------------------------------------ |
| `--org` |         | Docker Hub organization (overrides config) |
