> Commit-pinned source for Docker main: [data/sbx_cli/sbx_mcp_auth_rm.yaml](https://github.com/docker/docs/blob/b98c400647c70f3e2177d513802d5d785aef232e/data/sbx_cli/sbx_mcp_auth_rm.yaml)

# sbx mcp auth rm

Remove MCP server OAuth credentials

**Usage:** `sbx mcp auth rm [server-name] [flags]`

## Description

Remove hosted OAuth credentials for registered MCP servers.

This command does not remove local MCP server registrations. Use 'sbx mcp rm'
to remove a registration.

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
sbx mcp auth rm --all
  sbx mcp auth rm notion
  sbx mcp auth rm notion --format=json
```
