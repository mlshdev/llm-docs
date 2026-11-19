> Pinned source for Docker main: [data/sbx_cli/sbx_port_publish.yaml](https://github.com/docker/docs/blob/f8d4abc333036d7d71928bab49a417876d348966/data/sbx_cli/sbx_port_publish.yaml)

# sbx port publish

Publish ports

**Usage:** `sbx port publish SANDBOX SPEC... [flags]`

## Description

Publish sandbox ports to the host.

Publishing a local port starts a stopped sandbox before creating the host
binding. A SPEC is \[\[HOST\_IP:]HOST\_PORT:]SANDBOX\_PORT\[/PROTOCOL].
If HOST\_IP is omitted, the port is bound on loopback, expanded based on
PROTOCOL and the sandbox's address families: tcp/udp binds both 127.0.0.1
and ::1 (or only 127.0.0.1 if the sandbox is IPv4-only); tcp4/udp4 binds
only 127.0.0.1; tcp6/udp6 binds only ::1.
Supported protocols: tcp, tcp4, tcp6, udp, udp4, udp6.

When publishing without a HOST\_PORT, an ephemeral port is allocated automatically.

When publishing without a PROTOCOL, tcp4 is used — so a sandbox service
listening only on IPv4 is reachable without a host client having to avoid
::1 — or tcp6 when HOST\_IP is an IPv6 address. Publish tcp explicitly to
bind both families.

With --cloud:
Expose ports of a cloud sandbox given by ID (sbx\_\*) or name.

A SPEC is the sandbox port number alone or with a /tcp suffix; UDP and host
bindings are refused.
The cloud control plane assigns a publicly reachable URL for each exposed port.

## Options

| Option     | Default | Description                        |
| ---------- | ------- | ---------------------------------- |
| `--format` |         | Output format: table, json or yaml |
| `--json`   |         | Output in JSON format              |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
# Publish sandbox port 8080 to an ephemeral host port
  sbx port publish my-sandbox 8080

  # Publish with a specific host port
  sbx port publish my-sandbox 3000:8080

  # Publish several ports at once
  sbx port publish my-sandbox 8080 9090/udp

  # Expose port 8080 on a cloud sandbox
  sbx --cloud port publish sbx_abc123 8080
```
