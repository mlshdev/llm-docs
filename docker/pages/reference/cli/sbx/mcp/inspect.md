> Pinned source for Docker main: [data/sbx_cli/sbx_mcp_inspect.yaml](https://github.com/docker/docs/blob/34992b922461d20cc97107b84056756802584571/data/sbx_cli/sbx_mcp_inspect.yaml)

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
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx mcp inspect notion

  # Machine-readable output for scripting
  sbx mcp inspect notion --json
```
