> Pinned source for Docker main: [data/sbx_cli/sbx_mcp_ls.yaml](https://github.com/docker/docs/blob/7d6c8bf81ab88fc6f5c4893b6259864d29de574c/data/sbx_cli/sbx_mcp_ls.yaml)

# sbx mcp ls

List MCP servers, grouped by the gateway that serves them

**Usage:** `sbx mcp ls [flags]`

## Description

List registered MCP servers under the gateway that serves them.

The gateway header reports where it runs, who controls it, and whether you are
signed in; each server row reports its transport and whether it is usable now.
Servers needing authorization carry the 'sbx mcp auth' next step.

A server registered with custom headers is marked as such; one whose header
placeholder has no stored value carries the 'sbx secret set' next step, and one
whose headers this gateway cannot send is flagged unsupported. Either way the
server cannot connect as it stands. Run 'sbx mcp inspect <name>' for the headers
themselves and the state of each placeholder.

Auth status is read without starting an OAuth flow — from the local token store
in local data-plane mode, otherwise from the hosted control plane.

## Options

| Option   | Default | Description           |
| -------- | ------- | --------------------- |
| `--json` |         | Output in JSON format |

## Global options

| Option            | Default                                  | Description                                                                                                                                                                                                             |
| ----------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--cloud`         |                                          | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list)                                                                  |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (<https://api.sandboxes-cloud.docker.com>). Set DOCKER\_CLOUD\_API\_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug`   |                                          | Enable debug logging                                                                                                                                                                                                    |

## Examples

```console
sbx mcp ls

  # Machine-readable output for scripting
  sbx mcp ls --json
```
