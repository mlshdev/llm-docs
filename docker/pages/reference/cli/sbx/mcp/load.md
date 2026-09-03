> Commit-pinned source for Docker main: [data/sbx_cli/sbx_mcp_load.yaml](https://github.com/docker/docs/blob/d47e43dee68bd9cbd16af81b1aa6aef45023e17c/data/sbx_cli/sbx_mcp_load.yaml)

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
