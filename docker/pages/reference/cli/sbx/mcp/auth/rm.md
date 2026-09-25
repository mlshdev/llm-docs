> Pinned source for Docker main: [data/sbx_cli/sbx_mcp_auth_rm.yaml](https://github.com/docker/docs/blob/0bd254d2b506fd6c8bbf8b55affcce84fc02bb48/data/sbx_cli/sbx_mcp_auth_rm.yaml)

# sbx mcp auth rm

Remove MCP server OAuth credentials

**Usage:** `sbx mcp auth rm [server-name] [flags]`

## Description

Remove hosted OAuth credentials for registered MCP servers.

This command does not remove local MCP server registrations. Use 'sbx mcp rm'
to remove a registration.

## Options

| Option          | Default | Description                                     |
| --------------- | ------- | ----------------------------------------------- |
| `--all`         |         | Apply to all registered OAuth servers           |
| `-f`, `--force` |         | Skip confirmation prompts                       |
| `--format`      | `text`  | Output format: "text" or "json"                 |
| `--json`        |         | Output in JSON format (alias for --format json) |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx mcp auth rm --all
  sbx mcp auth rm notion
  sbx mcp auth rm notion --format=json
```
