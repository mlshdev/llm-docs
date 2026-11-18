> Pinned source for Docker main: [data/sbx_cli/sbx_policy.yaml](https://github.com/docker/docs/blob/947343021a3e1eea022cbede8df39387717343f9/data/sbx_cli/sbx_policy.yaml)

# sbx policy

Manage sandbox policies

**Usage:** `sbx policy COMMAND`

## Description

Manage persistent access policies for sandboxes.

Policies contain rules that control what sandboxes can access. Local rules
can apply globally across all sandboxes or be scoped to one sandbox. Use
subcommands to allow, deny, list, or remove rules.

Network rules match the hostname a connection names, such as its TLS SNI or
HTTP Host. A denied host that shares an address with an allowed host can
still be reached in three cases. First, on connections the proxy does not
decrypt, the HTTP Host or :authority inside the encrypted stream is not
checked. Second, on cleartext HTTP sent through a CONNECT tunnel or without
HTTP\_PROXY, only the first request on each connection has its Host checked.
Third, a connection that names no host is allowed when any hostname the
sandbox resolved to that address is allowed, even if another of those
hostnames is denied.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |
