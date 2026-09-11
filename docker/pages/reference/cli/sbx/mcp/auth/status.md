> Commit-pinned source for Docker main: [data/sbx_cli/sbx_mcp_auth_status.yaml](https://github.com/docker/docs/blob/5e8a1f493e574ad6a8b44d838e8df07f2befa31e/data/sbx_cli/sbx_mcp_auth_status.yaml)

# sbx mcp auth status

Show MCP server OAuth status

**Usage:** `sbx mcp auth status [server-name] [flags]`

## Description

Show hosted OAuth credential status for registered MCP servers.

This command does not start OAuth or refresh expired credentials.

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
sbx mcp auth status --all
  sbx mcp auth status notion
  sbx mcp auth status --all --format=json
```
