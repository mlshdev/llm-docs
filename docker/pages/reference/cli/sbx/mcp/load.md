> Commit-pinned source for Docker main: [data/sbx_cli/sbx_mcp_load.yaml](https://github.com/docker/docs/blob/3d15caeca7608231f930137accb6d933be157b5d/data/sbx_cli/sbx_mcp_load.yaml)

# sbx mcp load

Load an already-registered MCP server into a running sandbox

**Usage:** `sbx mcp load <name> --sandbox <sandbox> [flags]`

## Description

Attach a previously-registered MCP server to a running sandbox's gateway.
Connected agents see the new server's tools immediately via the standard MCP
tools/list_changed notification — no agent restart required.

The server must already exist in the local MCP store (register first with
'sbx mcp add'). Both remote/hosted and local-stdio servers are supported.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--sandbox` |  | Target sandbox name (required) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Register, then load into the running sandbox 'my-sbx'.
  sbx mcp add notion --url https://mcp.notion.com/mcp
  sbx mcp load notion --sandbox my-sbx

  # Local stdio server.
  sbx mcp add github --command npx --args @modelcontextprotocol/server-github
  sbx mcp load github --sandbox my-sbx
```
