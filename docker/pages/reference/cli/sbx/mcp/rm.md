> Pinned source for Docker main: [data/sbx_cli/sbx_mcp_rm.yaml](https://github.com/docker/docs/blob/18bbfeeb249da011f359d558dba84c4b6dc3a335/data/sbx_cli/sbx_mcp_rm.yaml)

# sbx mcp rm

Remove a registered MCP server

**Usage:** `sbx mcp rm <name> [flags]`

## Options

| Option          | Default | Description               |
| --------------- | ------- | ------------------------- |
| `-f`, `--force` |         | Skip confirmation prompts |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx mcp rm notion
```
