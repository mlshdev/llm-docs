> Pinned source for Docker main: [data/sbx_cli/sbx_setup.yaml](https://github.com/docker/docs/blob/0bd254d2b506fd6c8bbf8b55affcce84fc02bb48/data/sbx_cli/sbx_setup.yaml)

# sbx setup

Detect host configuration and prepare Docker Sandboxes

**Usage:** `sbx setup [COMMAND]`

> \[!NOTE]
> This command is experimental.

## Description

Detect what is already configured on your host and prepare Docker Sandboxes.

Agent secrets are detected from the built-in agent kit specs and the
env vars set on this host, and accepted secrets are imported into the global
secrets store (the same store as "sbx secret set"). When SSH\_AUTH\_SOCK is set,
setup can enable SSH-agent forwarding and either use each client's current
socket or persist a fixed socket path.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
