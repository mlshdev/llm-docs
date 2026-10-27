> Pinned source for Docker main: [data/sbx_cli/sbx_ttl.yaml](https://github.com/docker/docs/blob/370c82d98701ada95ec149a7a8ee8bd469e20bcc/data/sbx_cli/sbx_ttl.yaml)

# sbx ttl

Show or extend a cloud sandbox's TTL

**Usage:** `sbx ttl [+DURATION] SANDBOX [flags]`

## Description

Inspect or extend a cloud sandbox's TTL.

With one argument, prints the current expiration and the maximum
remaining time before the sandbox's hard 24h-from-creation ceiling.

With two arguments — a duration prefixed with '+' followed by a sandbox
ID or name — extends the TTL by that amount, subject to the server-enforced
ceiling. The server cannot shorten an expiration, so DURATION must be
positive. Units are Go's duration units (h, m, s, ms, us, ns), in either
case (+2h, +2H, +1h30m).

SANDBOX may be given by ID (sbx\_\*) or name, as shown by "sbx --cloud ls".

Cloud-only: local sandboxes are not TTL-managed.

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

## Examples

```console
# Show the remaining TTL
  sbx --cloud ttl my-sandbox

  # Extend it by two hours
  sbx --cloud ttl +2h my-sandbox
```
