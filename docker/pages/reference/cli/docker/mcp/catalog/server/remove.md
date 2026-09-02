> Commit-pinned source for Docker main: [data/cli/mcp/docker_mcp_catalog_server_remove.yaml](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/data/cli/mcp/docker_mcp_catalog_server_remove.yaml)

# docker mcp catalog server remove

Remove MCP servers from a catalog

**Usage:** `docker mcp catalog server remove <oci-reference> --name <name1> --name <name2> ...`

**Aliases:** docker mcp catalog server remove, docker mcp catalog server rm

## Description

Remove MCP servers from a catalog by server name.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--name` |  | Server name to remove (can be specified multiple times) |

## Examples

# Remove servers by name
  docker mcp catalog server remove mcp/my-catalog:latest --name github --name slack

  # Remove a single server
  docker mcp catalog server remove mcp/my-catalog:latest --name github
