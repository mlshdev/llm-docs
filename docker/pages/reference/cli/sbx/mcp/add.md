> Pinned source for Docker main: [data/sbx_cli/sbx_mcp_add.yaml](https://github.com/docker/docs/blob/370c82d98701ada95ec149a7a8ee8bd469e20bcc/data/sbx_cli/sbx_mcp_add.yaml)

# sbx mcp add

Register an MCP server

**Usage:** `sbx mcp add NAME (--url URL | --command COMMAND) [flags]`

## Description

Register an MCP server for use with sbx create/run --static-mcp.
To attach a registered server to a running sandbox, use sbx mcp load.

Use --url for a remote MCP endpoint, a community-registry or server-manifest
URL, or a Docker Hardened Image reference. Other image references are unsupported.
Use --command for a local stdio server. Local servers run on the host with your
full permissions; use only trusted executables.

OAuth metadata is discovered automatically for remote endpoints. Use --client-id
for a pre-registered client, or --oauth-authorization-server when the server
publishes no discovery metadata. Confidential clients need a secret stored as
mcp:NAME:client\_secret; use sbx secret set without -t to read it from stdin.

Use --header for custom headers on remote endpoints. Header values can reference
stored secrets; see the examples below. Header secrets come from this host's
secret store and require a locally connected server.

For registration and authorization workflows, see:
<https://docs.docker.com/ai/sandboxes/mcp-gateway/>

## Options

| Option                         | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--args`                       |         | Command-line arguments for the command                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--callback-port`              |         | Local port to bind the OAuth callback listener to during add-time authorization (default: OS-assigned ephemeral port). Useful when the port must be pre-registered in an OAuth app's allowed redirect URIs. Applies to --url remote OAuth servers; ignored with a warning if the server turns out not to need OAuth.                                                                                                                                                                                                        |
| `--client-id`                  |         | OAuth client id for a pre-registered client (with --url; may be used with or without --oauth-authorization-server). A confidential client's secret comes from 'sbx secret set mcp:<server>:client\_secret'                                                                                                                                                                                                                                                                                                                  |
| `--command`                    |         | Executable to run for a local stdio server                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--dir`                        |         | Working directory (cwd) for a --command host server                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--disable-http2`              |         | Do not negotiate HTTP/2 for this remote server, leaving HTTP/1.1. Applies to --url servers.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--header`                     |         | Custom HTTP header to send to a remote --url endpoint, in curl form 'Name: value' (repeatable). A ${placeholder} in the value is substituted at connect time from 'sbx secret set mcp:<server>:<placeholder>'                                                                                                                                                                                                                                                                                                               |
| `--local`                      |         | Run registry OCI server locally via docker run                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--no-scope`                   |         | Request no scopes during add-time authorization, so the authorization server applies its own default grant. Suppresses required and OIDC fallback scopes; cannot be combined with --scope. Applies to --url remote OAuth servers.                                                                                                                                                                                                                                                                                           |
| `--oauth-authorization-server` |         | Path or http(s) URL to an RFC 8414 oauth-authorization-server metadata JSON document                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--resource`                   |         | RFC 8707 resource indicator to send during OAuth: an absolute URI (scheme and host, no fragment) naming the server the token is for. Overrides the value the server publishes in its RFC 9728 metadata and the one derived from --url; set it only when that derived value is wrong. Not honoured by the hosted gateway for a plain remote yet. Applies to --url remote OAuth servers.                                                                                                                                      |
| `--scope`                      |         | Default OAuth scope to request at consent time (repeatable; a scope the server's advertised metadata does not recognize prints a warning but is still requested, since advertising a scope never promised the server would grant it either). With no --scope, the scope set the resource itself requires is requested; with neither, whichever of openid, email, profile, and offline\_access are advertised are requested; other advertised scopes are excluded from this fallback. Applies to --url remote OAuth servers. |
| `--skip-auth`                  |         | Register an OAuth server without starting the hosted OAuth flow                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--skip-ssrf-check`            |         | Skip SSRF checks for this add, including OAuth authorization-server metadata and redirects (operator asserts the provider is trusted)                                                                                                                                                                                                                                                                                                                                                                                       |
| `--url`                        |         | MCP server manifest URL, remote endpoint URL, or dhi.io image ref                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# Remote MCP endpoint (OAuth auto-detected)
  sbx mcp add notion --url https://mcp.notion.com/mcp
  sbx mcp add linear --url https://mcp.linear.app/mcp

  # MCP community-registry URL
  sbx mcp add fetch --url https://registry.modelcontextprotocol.io/v0/servers/fetch-mcp/versions/latest

  # Plain server-manifest URL (server.json / server.yaml)
  sbx mcp add opine --url https://example.com/mcp/opine/server.yaml

  # Docker Hardened Image (manifest is extracted from the image attestation)
  sbx mcp add fetch --url dhi.io/fetch-mcp:latest

  # Registry URL, local mode (runs on host via docker run; stdio packages only)
  sbx mcp add fetch --local --url https://registry.modelcontextprotocol.io/v0/servers/fetch-mcp/versions/latest

  # Private-network endpoint (host resolves to a private address) — opt out of the SSRF guard
  sbx mcp add internal --url https://private.example.com/mcp --skip-ssrf-check

  # Remote endpoint with a hand-supplied OAuth override (server publishes no
  # well-known OAuth metadata): --oauth-authorization-server is a path or
  # http(s) URL to an RFC 8414 metadata document, --client-id the OAuth client id
  sbx mcp add acme --url https://mcp.acme.com/mcp --oauth-authorization-server ./acme-as.json --client-id my-client

  # Pre-registered client on a DISCOVERABLE server that has no registration
  # endpoint — no --oauth-authorization-server needed (metadata is discovered)
  sbx mcp add slack --url https://slack.example.com/mcp --client-id my-preregistered-client

  # Confidential client — store the secret first (prompted, never in argv or
  # shell history), then register; the secret is read from the secret store
  sbx secret set mcp:slack:client_secret
  sbx mcp add slack --url https://slack.example.com/mcp --client-id my-preregistered-client

  # Record default OAuth scopes to request at consent time (a scope the
  # server's authorization metadata does not advertise warns but is still
  # requested; repeat --scope for each one)
  sbx mcp add acme --url https://mcp.acme.com/mcp --scope read --scope write

  # URN- and URL-shaped scope values are ordinary scopes and need no quoting
  sbx mcp add fastmail --url https://api.fastmail.com/mcp --scope https://www.fastmail.com/dev/mcp --scope offline_access

  # Correct the RFC 8707 'resource' indicator when the derived one is wrong (a
  # server whose published identifier is not its endpoint URL)
  sbx mcp add acme --url https://mcp.acme.com/mcp --resource https://api.acme.com/mcp

  # Remote endpoint with custom headers (curl convention; repeatable). The
  # ${api-key} value is read from the secret store when a sandbox connects
  sbx mcp add acme --url https://mcp.acme.com/mcp --header 'Authorization: Bearer ${api-key}' --header 'Accept: application/json, text/event-stream'
  sbx secret set mcp:acme:api-key

  # Local stdio command (runs on host — development only)
  sbx mcp add github --command npx --args @modelcontextprotocol/server-github
  sbx mcp add postgres --command docker --args "run,-i,--rm,mcp/postgres"

  # Local stdio command with a working directory (cwd) for the host process
  sbx mcp add local-fs --command node --args server.js --dir /srv/data
```
