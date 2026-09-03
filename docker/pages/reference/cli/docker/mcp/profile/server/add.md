> Commit-pinned source for Docker main: [data/cli/mcp/docker_mcp_profile_server_add.yaml](https://github.com/docker/docs/blob/ec568fb193997abb62fc206183b30ba01498291d/data/cli/mcp/docker_mcp_profile_server_add.yaml)

# docker mcp profile server add

Add MCP servers to a profile

**Usage:** `docker mcp profile server add <profile-id> [--server <ref1> --server <ref2> ...]`

## Description

Add MCP servers to a profile.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--server` |  | Server to include specified with a URI: https:// (MCP Registry reference) or docker:// (Docker Image reference) or catalog:// (Catalog reference) or file:// (Local file path). Can be specified multiple times. |

## Examples

# Add servers from a catalog
  docker mcp profile server add dev-tools --server catalog://mcp/docker-mcp-catalog/github+obsidian

  # Add servers with OCI references
  docker mcp profile server add my-profile --server docker://my-server:latest

  # Add servers with MCP Registry references
  docker mcp profile server add my-profile --server http://registry.modelcontextprotocol.io/v0/servers/71de5a2a-6cfb-4250-a196-f93080ecc860

  # Mix server references
  docker mcp profile server add dev-tools --server catalog://mcp/docker-mcp-catalog/github+obsidian --server docker://my-server:latest
