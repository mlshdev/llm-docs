> Commit-pinned source for Docker main: [data/cli/mcp/docker_mcp_catalog_server_add.yaml](https://github.com/docker/docs/blob/fd5e73c9183cc2e1600a747a52aaf3d8ea0ce3b5/data/cli/mcp/docker_mcp_catalog_server_add.yaml)

# docker mcp catalog server add

Add MCP servers to a catalog

**Usage:** `docker mcp catalog server add <oci-reference> [--server <ref1> --server <ref2> ...]`

## Description

Add MCP servers to a catalog using various URI schemes.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--server` |  | Server to include specified with a URI: https:// (MCP Registry reference) or docker:// (Docker Image reference) or catalog:// (Catalog reference) or file:// (Local file path). Can be specified multiple times. |

## Examples

# Add servers from another catalog
  docker mcp catalog server add mcp/my-catalog:latest --server catalog://mcp/docker-mcp-catalog:latest/github

  # Add servers with OCI references
  docker mcp catalog server add mcp/my-catalog:latest --server docker://my-server:latest

  # Add servers with MCP Registry references
  docker mcp catalog server add mcp/my-catalog:latest --server https://registry.modelcontextprotocol.io/v0/servers/71de5a2a-6cfb-4250-a196-f93080ecc860

  # Mix server references
  docker mcp catalog server add mcp/my-catalog:latest --server catalog://mcp/docker-mcp-catalog:latest/github --server docker://my-server:latest
