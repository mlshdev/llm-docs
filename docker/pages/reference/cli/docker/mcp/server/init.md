> Commit-pinned source for Docker main: [data/cli/mcp/docker_mcp_server_init.yaml](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/data/cli/mcp/docker_mcp_server_init.yaml)

# docker mcp server init

Initialize a new MCP server project

**Usage:** `docker mcp server init <directory>`

## Description

Initialize a new MCP server project in the specified directory with boilerplate code, Dockerfile, and compose.yaml

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--language` | `go` | Programming language for the server (currently only 'go' is supported) |
| `--template` | `basic` | Template to use (basic, chatgpt-app-basic) |
