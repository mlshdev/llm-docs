> Pinned source for Docker main: [data/sbx_cli/sbx_ttl.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/sbx_cli/sbx_ttl.yaml)

# sbx ttl

Inspect or extend a cloud sandbox's TTL

**Usage:** `sbx ttl [+DURATION] SANDBOX`

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

| Option   | Default | Description    |
| -------- | ------- | -------------- |
| `--json` |         | Output as JSON |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
