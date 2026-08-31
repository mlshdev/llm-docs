> Commit-pinned source for Docker main: [data/sbx_cli/sbx_mcp_ls.yaml](https://github.com/docker/docs/blob/652986790ecf1ddf1081149f29da132a95207a04/data/sbx_cli/sbx_mcp_ls.yaml)

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

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
sbx mcp ls
```
