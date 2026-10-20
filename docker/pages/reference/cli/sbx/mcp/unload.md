> Pinned source for Docker main: [data/sbx_cli/sbx_mcp_unload.yaml](https://github.com/docker/docs/blob/d8edfe0d28dd00fa8ab175d94fe3375731689d4f/data/sbx_cli/sbx_mcp_unload.yaml)

# sbx mcp unload

Unload an MCP server from a running sandbox

**Usage:** `sbx mcp unload NAME --sandbox SANDBOX [flags]`

## Description

Detach an MCP server from a running sandbox's gateway.
Connected agents stop seeing the server's tools immediately via the standard
MCP tools/list\_changed notification — no agent restart required. The server
is not restored when the sandbox is restarted.

The server stays registered in the local MCP store; load it again with
'sbx mcp load', or remove the registration with 'sbx mcp rm'.

## Options

| Option      | Default | Description                    |
| ----------- | ------- | ------------------------------ |
| `--sandbox` |         | Target sandbox name (required) |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# Unload the 'notion' server from the running sandbox 'my-sbx'.
  sbx mcp unload notion --sandbox my-sbx
```
