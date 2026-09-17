> Pinned source for Docker main: [data/cli/mcp/docker_mcp_profile_tools.yaml](https://github.com/docker/docs/blob/ae6b9eeae1463ed0dc5fd03d3ca5ffd2c29d6383/data/cli/mcp/docker_mcp_profile_tools.yaml)

# docker mcp profile tools

Manage tool allowlist for servers in a profile

**Usage:** `docker mcp profile tools <profile-id> [--enable <tool> ...] [--disable <tool> ...] [--enable-all <server> ...] [--disable-all <server> ...]`

## Description

Manage the tool allowlist for servers in a profile.
Tools are specified using dot notation: <serverName>.<toolName>

Use --enable to enable specific tools for a server (can be specified multiple times).
Use --disable to disable specific tools for a server (can be specified multiple times).
Use --enable-all to enable all tools for a server (can be specified multiple times).
Use --disable-all to disable all tools for a server (can be specified multiple times).

To view enabled tools, use: docker mcp profile show <profile-id>

## Options

| Option          | Default | Description                                                  |
| --------------- | ------- | ------------------------------------------------------------ |
| `--disable`     |         | Disable specific tools: <serverName>.<toolName> (repeatable) |
| `--disable-all` |         | Disable all tools for a server: <serverName> (repeatable)    |
| `--enable`      |         | Enable specific tools: <serverName>.<toolName> (repeatable)  |
| `--enable-all`  |         | Enable all tools for a server: <serverName> (repeatable)     |

## Examples

# Enable specific tools for a server

docker mcp profile tools my-profile --enable github.create\_issue --enable github.list\_repos

# Disable specific tools for a server

docker mcp profile tools my-profile --disable github.create\_issue --disable github.search\_code

# Enable and disable in one command

docker mcp profile tools my-profile --enable github.create\_issue --disable github.search\_code

# Enable all tools for a server

docker mcp profile tools my-profile --enable-all github

# Disable all tools for a server

docker mcp profile tools my-profile --disable-all github

# View all enabled tools in the profile

docker mcp profile show my-profile
