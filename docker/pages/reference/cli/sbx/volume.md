> Pinned source for Docker main: [data/sbx_cli/sbx_volume.yaml](https://github.com/docker/docs/blob/e169d1082ba3fa27684fe5a67d8109a788aa84a9/data/sbx_cli/sbx_volume.yaml)

# sbx volume

Manage persistent volumes (cloud-only)

**Usage:** `sbx volume COMMAND`

## Description

Manage persistent volumes for cloud sandboxes.

Volumes provide persistent storage that survives across sandbox runs.
Data is saved as a snapshot when a sandbox exits, not continuously
synced. If multiple sandboxes mount the same volume concurrently, the
last sandbox to exit wins — its snapshot overwrites the others.

Volumes are a cloud-only feature; every subcommand requires --cloud.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
