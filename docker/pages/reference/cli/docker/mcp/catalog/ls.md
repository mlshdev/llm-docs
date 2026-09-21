> Pinned source for Docker main: [data/cli/mcp/docker_mcp_catalog_ls.yaml](https://github.com/docker/docs/blob/71fa06427156ab4e87b88cdc9983d2efea8b7519/data/cli/mcp/docker_mcp_catalog_ls.yaml)

# docker mcp catalog ls

List all configured catalogs

**Usage:** `docker mcp catalog ls`

## Description

List all configured catalogs including Docker's official catalog and any locally managed catalogs.

## Options

| Option     | Default | Description                               |
| ---------- | ------- | ----------------------------------------- |
| `--format` |         | Output format. Supported: "json", "yaml". |

## Examples

# List all catalogs

docker mcp catalog ls

# List catalogs in JSON format

docker mcp catalog ls --format=json
