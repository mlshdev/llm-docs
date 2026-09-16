> Pinned source for Docker main: [data/cli/mcp/docker_mcp_server_init.yaml](https://github.com/docker/docs/blob/aabe8d1f704ebbcc85d29cc6eac88459ce9e00a4/data/cli/mcp/docker_mcp_server_init.yaml)

# docker mcp server init

Initialize a new MCP server project

**Usage:** `docker mcp server init <directory>`

## Description

Initialize a new MCP server project in the specified directory with boilerplate code, Dockerfile, and compose.yaml

## Options

| Option       | Default | Description                                                            |
| ------------ | ------- | ---------------------------------------------------------------------- |
| `--language` | `go`    | Programming language for the server (currently only 'go' is supported) |
| `--template` | `basic` | Template to use (basic, chatgpt-app-basic)                             |
