> Pinned source for Docker main: [data/sbx_cli/sbx_mcp_inspect.yaml](https://github.com/docker/docs/blob/226023fc89bdeb3f051c4c8c697d04ed5f5bcd2c/data/sbx_cli/sbx_mcp_inspect.yaml)

# sbx mcp inspect

Show MCP server details

**Usage:** `sbx mcp inspect NAME [flags]`

## Options

| Option     | Default | Description                        |
| ---------- | ------- | ---------------------------------- |
| `--format` |         | Output format: table, json or yaml |
| `--json`   |         | Output in JSON format              |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx mcp inspect notion

  # Machine-readable output for scripting
  sbx mcp inspect notion --json
```
