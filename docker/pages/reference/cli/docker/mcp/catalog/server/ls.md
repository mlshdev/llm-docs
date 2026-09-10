> Commit-pinned source for Docker main: [data/cli/mcp/docker_mcp_catalog_server_ls.yaml](https://github.com/docker/docs/blob/920ee0bb1e638c6a39d7c2a1075fa2b1d8f451a7/data/cli/mcp/docker_mcp_catalog_server_ls.yaml)

# docker mcp catalog server ls

List servers in a catalog

**Usage:** `docker mcp catalog server ls <oci-reference>`

**Aliases:** docker mcp catalog server ls, docker mcp catalog server list

## Description

List all servers in a catalog.

Use --filter to search for servers matching a query (case-insensitive substring matching on server names).
Filters use key=value format (e.g., name=github).

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--filter` |  | Filter output (e.g., name=github) |
| `--format` | `human` | Supported: json, yaml, human. |

## Examples

# List all servers in a catalog
  docker mcp catalog server ls mcp/docker-mcp-catalog:latest

  # Filter servers by name
  docker mcp catalog server ls mcp/docker-mcp-catalog:latest --filter name=github

  # Combine multiple filters (using short flag)
  docker mcp catalog server ls mcp/docker-mcp-catalog:latest -f name=slack -f name=github

  # Output in JSON format
  docker mcp catalog server ls mcp/docker-mcp-catalog:latest --format json
