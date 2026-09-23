> Pinned source for Docker main: [data/sbx_cli/sbx_mcp_auth_status.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_mcp_auth_status.yaml)

# sbx mcp auth status

Show MCP server OAuth status

**Usage:** `sbx mcp auth status [server-name] [flags]`

## Description

Show hosted OAuth credential status for registered MCP servers.

This command does not start OAuth or refresh expired credentials.

## Options

| Option     | Default | Description                                     |
| ---------- | ------- | ----------------------------------------------- |
| `--all`    |         | Apply to all registered OAuth servers           |
| `--format` | `text`  | Output format: "text" or "json"                 |
| `--json`   |         | Output in JSON format (alias for --format json) |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx mcp auth status --all
  sbx mcp auth status notion
  sbx mcp auth status --all --format=json
```
