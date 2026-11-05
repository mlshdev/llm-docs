> Pinned source for Docker main: [data/sbx_cli/sbx_mcp_auth_status.yaml](https://github.com/docker/docs/blob/c98501277b974550688eeed803c975e2665d6468/data/sbx_cli/sbx_mcp_auth_status.yaml)

# sbx mcp auth status

Show MCP server OAuth status

**Usage:** `sbx mcp auth status [SERVER] [flags]`

## Description

Show OAuth credential status for registered MCP servers.

With a local gateway or an OAuth override in the server registration, credentials
are stored locally. Otherwise, the hosted MCP control plane manages them.

This command does not start OAuth or refresh expired credentials.

## Options

| Option     | Default | Description                           |
| ---------- | ------- | ------------------------------------- |
| `--all`    |         | Apply to all registered OAuth servers |
| `--format` | `text`  | Output format: "text" or "json"       |
| `--json`   |         | Output in JSON format                 |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx mcp auth status --all
  sbx mcp auth status notion
  sbx mcp auth status --all --format=json
```
