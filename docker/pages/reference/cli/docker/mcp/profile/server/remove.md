> Commit-pinned source for Docker main: [data/cli/mcp/docker_mcp_profile_server_remove.yaml](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/data/cli/mcp/docker_mcp_profile_server_remove.yaml)

# docker mcp profile server remove

Remove MCP servers from a profile

**Usage:** `docker mcp profile server remove <profile-id> --name <name1> --name <name2> ...`

**Aliases:** docker mcp profile server remove, docker mcp profile server rm

## Description

Remove MCP servers from a profile by server name.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--name` |  | Server name to remove (can be specified multiple times) |

## Examples

# Remove servers by name
  docker mcp profile server remove dev-tools --name github --name slack

  # Remove a single server
  docker mcp profile server remove dev-tools --name github
