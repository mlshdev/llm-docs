> Pinned source for Docker main: [data/sbx_cli/sbx_mcp_rm.yaml](https://github.com/docker/docs/blob/f90928eb2040c4638e188868a612fd47e6a061a4/data/sbx_cli/sbx_mcp_rm.yaml)

# sbx mcp rm

Remove a registered MCP server

**Usage:** `sbx mcp rm NAME [flags]`

## Description

Remove a registered MCP server and its OAuth credential.

Use --registration-only to remove the local registration without starting the
daemon or accessing credentials. This also removes the registration's saved
environment ownership and approval, including damaged or orphaned registrations. Stored credentials are
kept, and MCP processes already running in sandbox gateways are not stopped.
For an untrusted registration, first stop the selected daemon; this interrupts
all of its sandbox gateways. A later approved env run can register a declared
server again.

## Options

| Option                | Default | Description                                                                                                |
| --------------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `-f`, `--force`       |         | Skip confirmation prompts                                                                                  |
| `--registration-only` |         | Remove only the local registration without starting the daemon; keep credentials and running MCP processes |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx mcp rm notion
  sbx mcp rm --registration-only notion
```
