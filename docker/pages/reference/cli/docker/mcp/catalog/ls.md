> Pinned source for Docker main: [data/cli/mcp/docker_mcp_catalog_ls.yaml](https://github.com/docker/docs/blob/1cb9a4d2c65d712da863e30cd3a1319ddeea3298/data/cli/mcp/docker_mcp_catalog_ls.yaml)

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

```console
# List all catalogs
  docker mcp catalog ls

  # List catalogs in JSON format
  docker mcp catalog ls --format=json
```
