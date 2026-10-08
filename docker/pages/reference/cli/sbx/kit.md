> Pinned source for Docker main: [data/sbx_cli/sbx_kit.yaml](https://github.com/docker/docs/blob/858251609b8884594fd1de29c51155bc3024b260/data/sbx_cli/sbx_kit.yaml)

# sbx kit

Manage kit artifacts

**Usage:** `sbx kit COMMAND`

> \[!NOTE]
> This command is experimental.

## Description

Manage kit artifacts.

Kits are declarative YAML artifacts that define sandbox agents or extend them
with additional credentials, network policies, environment variables, startup
commands, and files.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
