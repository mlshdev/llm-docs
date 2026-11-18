> Pinned source for Docker main: [data/sbx_cli/sbx_mcp.yaml](https://github.com/docker/docs/blob/947343021a3e1eea022cbede8df39387717343f9/data/sbx_cli/sbx_mcp.yaml)

# sbx mcp

Manage MCP servers

**Usage:** `sbx mcp COMMAND`

## Description

Register and manage MCP servers for use with sandbox sessions.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |
