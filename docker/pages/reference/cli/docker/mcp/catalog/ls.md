> Commit-pinned source for Docker main: [data/cli/mcp/docker_mcp_catalog_ls.yaml](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/data/cli/mcp/docker_mcp_catalog_ls.yaml)

# docker mcp catalog ls

List all configured catalogs

**Usage:** `docker mcp catalog ls`

## Description

List all configured catalogs including Docker's official catalog and any locally managed catalogs.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--format` |  | Output format. Supported: "json", "yaml". |

## Examples

# List all catalogs
  docker mcp catalog ls

  # List catalogs in JSON format
  docker mcp catalog ls --format=json
