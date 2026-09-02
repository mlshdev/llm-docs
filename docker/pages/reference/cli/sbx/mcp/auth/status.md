> Commit-pinned source for Docker main: [data/sbx_cli/sbx_mcp_auth_status.yaml](https://github.com/docker/docs/blob/c596433b17b6e062376dcd24395336f316e1714a/data/sbx_cli/sbx_mcp_auth_status.yaml)

# sbx mcp auth status

Show MCP server OAuth status

**Usage:** `sbx mcp auth status [server-name] [flags]`

## Description

Show hosted OAuth credential status for registered MCP servers.

This command does not start OAuth or refresh expired credentials.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--all` |  | Apply to all registered OAuth servers |
| `--format` | `text` | Output format: "text" or "json" |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
sbx mcp auth status --all
  sbx mcp auth status notion
  sbx mcp auth status --all --format=json
```
