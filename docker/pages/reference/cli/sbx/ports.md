> Commit-pinned source for Docker main: [data/sbx_cli/sbx_ports.yaml](https://github.com/docker/docs/blob/22e32a82b28b6dabf125325fe9cd79133dc1de4a/data/sbx_cli/sbx_ports.yaml)

# sbx ports

Manage sandbox port publishing

**Usage:** `sbx ports SANDBOX [flags]`

## Description

Manage sandbox port publishing.

List, publish, or unpublish sandbox ports. Publishing a local port starts a
stopped sandbox before creating the host binding. Without --publish or
--unpublish flags, lists all published ports.

Port spec format: [[HOST_IP:]HOST_PORT:]SANDBOX_PORT[/PROTOCOL]
If HOST_PORT is omitted, an ephemeral port is allocated automatically.
If HOST_IP is omitted, the port is bound on loopback, expanded based on
PROTOCOL and the sandbox's address families: tcp/udp binds both 127.0.0.1
and ::1 (or only 127.0.0.1 if the sandbox is IPv4-only); tcp4/udp4 binds
only 127.0.0.1; tcp6/udp6 binds only ::1.
Supported protocols: tcp, tcp4, tcp6, udp, udp4, udp6.

When publishing without a PROTOCOL, tcp4 is used — so a sandbox service
listening only on IPv4 is reachable without a host client having to avoid
::1 — or tcp6 when HOST_IP is an IPv6 address. Publish tcp explicitly to
bind both families.

When unpublishing without a PROTOCOL, the mapping is removed whether it was
published with that same default or as dual-stack tcp. Name the protocol to
remove a tcp6 or udp mapping; anything left behind is reported.

In cloud mode (--cloud), the sandbox may be given by ID (sbx_*) or name, and
only the sandbox port number is accepted. The cloud control plane assigns a
publicly reachable URL for each exposed port.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--json` |  | Output in JSON format (for port listing) |
| `--publish` |  | Publish a port (can be repeated): [[HOST_IP:]HOST_PORT:]SANDBOX_PORT[/PROTOCOL] (local) or SANDBOX_PORT (cloud) |
| `--unpublish` |  | Unpublish a port (can be repeated): [HOST_IP:]HOST_PORT:SANDBOX_PORT[/PROTOCOL] (local) or SANDBOX_PORT (cloud) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# List published ports
  sbx ports my-sandbox

  # Publish sandbox port 8080 to an ephemeral host port
  sbx ports my-sandbox --publish 8080

  # Publish with a specific host port
  sbx ports my-sandbox --publish 3000:8080

  # Unpublish a port
  sbx ports my-sandbox --unpublish 3000:8080

  # Expose port 8080 on a cloud sandbox
  sbx ports sbx_abc123 --cloud --publish 8080

  # Remove an exposed port from a cloud sandbox
  sbx ports sbx_abc123 --cloud --unpublish 8080
```
