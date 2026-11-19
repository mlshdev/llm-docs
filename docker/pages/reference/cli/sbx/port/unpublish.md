> Pinned source for Docker main: [data/sbx_cli/sbx_port_unpublish.yaml](https://github.com/docker/docs/blob/f8d4abc333036d7d71928bab49a417876d348966/data/sbx_cli/sbx_port_unpublish.yaml)

# sbx port unpublish

Unpublish ports

**Usage:** `sbx port unpublish SANDBOX SPEC... [flags]`

## Description

Unpublish sandbox ports from the host.

A SPEC is \[\[HOST\_IP:]HOST\_PORT:]SANDBOX\_PORT\[/PROTOCOL].
If HOST\_IP is omitted, the port is bound on loopback, expanded based on
PROTOCOL and the sandbox's address families: tcp/udp binds both 127.0.0.1
and ::1 (or only 127.0.0.1 if the sandbox is IPv4-only); tcp4/udp4 binds
only 127.0.0.1; tcp6/udp6 binds only ::1.
Supported protocols: tcp, tcp4, tcp6, udp, udp4, udp6.

When unpublishing without a HOST\_PORT, mappings matching HOST\_IP and PROTOCOL
are removed from every host port.

When unpublishing without a PROTOCOL, the mapping is removed whether it was
published with that same default or as dual-stack tcp. Name the protocol to
remove a tcp6 or udp mapping; anything left behind is reported.

With --cloud:
Remove exposed ports from a cloud sandbox given by ID (sbx\_\*) or name.

A SPEC is the sandbox port number alone or with a /tcp suffix; UDP and host
bindings are refused.

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
# Unpublish a port
  sbx port unpublish my-sandbox 3000:8080

  # Unpublish a sandbox port from every host port
  sbx port unpublish my-sandbox 8080

  # Remove an exposed port from a cloud sandbox
  sbx --cloud port unpublish sbx_abc123 8080
```
