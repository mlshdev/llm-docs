> Commit-pinned source for Docker main: [data/sbx_cli/sbx_mcp_auth.yaml](https://github.com/docker/docs/blob/fd5e73c9183cc2e1600a747a52aaf3d8ea0ce3b5/data/sbx_cli/sbx_mcp_auth.yaml)

# sbx mcp auth

Authorize MCP servers

**Usage:** `sbx mcp auth [server-name] [flags]`

## Description

Authorize registered remote MCP servers through the hosted MCP control plane.

Commands use the Docker Hub account from 'sbx login' as the request principal.
User and tenant identity are derived by the control plane; they are not sent in
the request body.

Running 'sbx mcp auth <server>' authorizes or reauthorizes one server. If the
stored credential is expired, sbx asks the control plane to refresh it first and
only falls back to interactive OAuth when refresh needs user consent. A name
with no local registration is resolved from the Docker MCP catalog and
authorized under its catalog name, so no 'sbx mcp add' is required for catalog
servers.

Use 'sbx mcp auth status' to inspect hosted credential status without starting
OAuth, and 'sbx mcp auth rm' to remove hosted credentials without removing
local MCP server registrations.

Pass --scope (repeatable) to authorize a specific set of scopes for this run,
overriding the default recorded at 'sbx mcp add' time. Scopes are validated only
when the server advertises a supported set (RFC 8414 scopes_supported); each
scope must then be a member or the command fails. If the server advertises no
supported set, the requested scopes are accepted as given. With no --scope and
no recorded default, all advertised scopes are requested.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--all` |  | Apply to all registered OAuth servers |
| `--format` | `text` | Output format: "text" or "json" |
| `--scope` |  | OAuth scope to authorize for this run (repeatable; overrides the recorded default; must be advertised by the server's authorization metadata) |
| `--verbose` |  | Print authorization polling progress |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
sbx mcp auth status --all
  sbx mcp auth status notion
  sbx mcp auth rm --all
  sbx mcp auth rm notion
  sbx mcp auth --all
  sbx mcp auth notion
  sbx mcp auth notion --scope read --scope write
```
