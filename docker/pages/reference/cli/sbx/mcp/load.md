> Pinned source for Docker main: [data/sbx_cli/sbx_mcp_load.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_mcp_load.yaml)

# sbx mcp load

Load an already-registered MCP server into a running sandbox

**Usage:** `sbx mcp load <name> --sandbox <sandbox> [flags]`

## Description

Attach a previously-registered MCP server to a running sandbox's gateway.
Connected agents see the new server's tools immediately via the standard MCP
tools/list\_changed notification — no agent restart required.

The server must already exist in the local MCP store (register first with
'sbx mcp add'). Both remote/hosted and local-stdio servers are supported.

With --cloud:
Load an MCP server into a running cloud sandbox's gateway.

There is no local registration: the cloud gateway resolves the server name
itself, and the sandbox may be given by name or sbx\_ ID. Connected agents see
the new server's tools immediately.

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
# Register, then load into the running sandbox 'my-sbx'.
  sbx mcp add notion --url https://mcp.notion.com/mcp
  sbx mcp load notion --sandbox my-sbx

  # Local stdio server.
  sbx mcp add github --command npx --args @modelcontextprotocol/server-github
  sbx mcp load github --sandbox my-sbx

  # Cloud: load a gateway-known server into a cloud sandbox by name or ID
  sbx --cloud mcp load notion --sandbox my-sbx
```
