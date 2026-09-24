> Pinned source for Docker main: [data/cli/mcp/docker_mcp_catalog_server_remove.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/cli/mcp/docker_mcp_catalog_server_remove.yaml)

# docker mcp catalog server remove

Remove MCP servers from a catalog

**Usage:** `docker mcp catalog server remove <oci-reference> --name <name1> --name <name2> ...`

**Aliases:** docker mcp catalog server remove, docker mcp catalog server rm

## Description

Remove MCP servers from a catalog by server name.

## Options

| Option   | Default | Description                                             |
| -------- | ------- | ------------------------------------------------------- |
| `--name` |         | Server name to remove (can be specified multiple times) |

## Examples

```console
# Remove servers by name
  docker mcp catalog server remove mcp/my-catalog:latest --name github --name slack

  # Remove a single server
  docker mcp catalog server remove mcp/my-catalog:latest --name github
```
