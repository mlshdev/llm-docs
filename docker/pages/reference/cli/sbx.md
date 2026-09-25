> Pinned source for Docker main: [data/sbx_cli/sbx.yaml](https://github.com/docker/docs/blob/0bd254d2b506fd6c8bbf8b55affcce84fc02bb48/data/sbx_cli/sbx.yaml)

# sbx

Manage AI coding agent sandboxes.

**Usage:** `sbx COMMAND`

## Description

Docker Sandboxes creates isolated sandbox environments for AI agents, powered by Docker.

Run without a command to launch interactive mode, or pass a command for CLI usage.

## Options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
