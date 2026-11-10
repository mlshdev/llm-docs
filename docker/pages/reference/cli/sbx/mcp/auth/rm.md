> Pinned source for Docker main: [data/sbx_cli/sbx_mcp_auth_rm.yaml](https://github.com/docker/docs/blob/34992b922461d20cc97107b84056756802584571/data/sbx_cli/sbx_mcp_auth_rm.yaml)

# sbx mcp auth rm

Remove MCP server OAuth credentials

**Usage:** `sbx mcp auth rm [SERVER] [flags]`

## Description

Remove OAuth credentials for registered MCP servers.

With a local gateway or an OAuth override in the server registration, credentials
are stored locally. Otherwise, the hosted MCP control plane manages them.

This command does not remove local MCP server registrations. Use 'sbx mcp rm'
to remove a registration.

## Options

| Option          | Default | Description                           |
| --------------- | ------- | ------------------------------------- |
| `--all`         |         | Apply to all registered OAuth servers |
| `-f`, `--force` |         | Skip confirmation prompts             |
| `--format`      | `text`  | Output format: "text" or "json"       |
| `--json`        |         | Output in JSON format                 |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx mcp auth rm --all
  sbx mcp auth rm notion
  sbx mcp auth rm notion --format=json
```
