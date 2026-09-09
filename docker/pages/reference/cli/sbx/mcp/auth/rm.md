> Commit-pinned source for Docker main: [data/sbx_cli/sbx_mcp_auth_rm.yaml](https://github.com/docker/docs/blob/6218eec744fd3fd0c714a72e04366015f4518118/data/sbx_cli/sbx_mcp_auth_rm.yaml)

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
| `--json` |  | Output in JSON format (alias for --format json) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
sbx mcp auth rm --all
  sbx mcp auth rm notion
  sbx mcp auth rm notion --format=json
```
