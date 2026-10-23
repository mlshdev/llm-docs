> Pinned source for Docker main: [data/sbx_cli/sbx_setup.yaml](https://github.com/docker/docs/blob/1d503f8b7c2b2008da6cbc08bb5be163666c84bf/data/sbx_cli/sbx_setup.yaml)

# sbx setup

Detect host configuration and prepare Docker Sandboxes

**Usage:** `sbx setup [COMMAND]`

> \[!NOTE]
> This command is experimental.

## Description

Detect what is already configured on your host and prepare Docker Sandboxes.

Agent secrets are detected from the built-in agent kit specs and the
env vars set on this host, and accepted secrets are imported into the global
secrets store (the same store as "sbx secret set"). Setup can enable SSH-agent
forwarding using each client's SSH\_AUTH\_SOCK, or the native Windows OpenSSH
agent pipe when that variable is unset. A fixed endpoint can also be configured.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
