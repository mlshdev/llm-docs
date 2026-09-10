> Commit-pinned source for Docker main: [data/sbx_cli/sbx_mcp_ls.yaml](https://github.com/docker/docs/blob/56ff4df658450553e83cf962aeba536b246d51c8/data/sbx_cli/sbx_mcp_ls.yaml)

# sbx mcp ls

List MCP servers, grouped by the gateway that serves them

**Usage:** `sbx mcp ls [flags]`

## Description

List registered MCP servers under the gateway that serves them.

The gateway header reports where it runs, who controls it, and whether you are
signed in; each server row reports its transport and whether it is usable now.
Servers needing authorization carry the 'sbx mcp auth' next step.

Auth status is read without starting an OAuth flow — from the local token store
in local data-plane mode, otherwise from the hosted control plane.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--json` |  | Output in JSON format |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
sbx mcp ls

  # Machine-readable output for scripting
  sbx mcp ls --json
```
