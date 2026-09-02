> Commit-pinned source for Docker main: [data/cli/mcp/docker_mcp_profile_server_ls.yaml](https://github.com/docker/docs/blob/fd5e73c9183cc2e1600a747a52aaf3d8ea0ce3b5/data/cli/mcp/docker_mcp_profile_server_ls.yaml)

# docker mcp profile server ls

List servers across profiles

**Usage:** `docker mcp profile server ls`

**Aliases:** docker mcp profile server ls, docker mcp profile server list

## Description

List all servers grouped by profile.

Use --filter to search for servers matching a query (case-insensitive substring matching on server names).
Filters use key=value format (e.g., name=github, profile=my-dev-env).

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--filter` |  | Filter output (e.g., name=github, profile=my-dev-env) |
| `--format` | `human` | Supported: json, yaml, human. |

## Examples

# List all servers across all profiles
  docker mcp profile server ls

  # Filter servers by name
  docker mcp profile server ls --filter name=github

  # Show servers from a specific profile
  docker mcp profile server ls --filter profile=my-dev-env

  # Combine multiple filters (using short flag)
  docker mcp profile server ls -f name=slack -f profile=my-dev-env

  # Output in JSON format
  docker mcp profile server ls --format json
