> Commit-pinned source for Docker main: [data/sbx_cli/sbx_volume.yaml](https://github.com/docker/docs/blob/f0470b5edae7289b77e04ac4e015f6d3604f15ad/data/sbx_cli/sbx_volume.yaml)

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

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
