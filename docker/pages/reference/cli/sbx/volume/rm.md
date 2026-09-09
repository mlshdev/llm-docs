> Commit-pinned source for Docker main: [data/sbx_cli/sbx_volume_rm.yaml](https://github.com/docker/docs/blob/6218eec744fd3fd0c714a72e04366015f4518118/data/sbx_cli/sbx_volume_rm.yaml)

# sbx volume rm

Delete a persistent volume

**Usage:** `sbx volume rm NAME [flags]`

## Description

Delete a persistent volume by name.

Volumes attached to active sandboxes cannot be deleted; detach them
first by stopping or deleting the sandbox(es) that mount the volume.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--force` |  | Skip confirmation prompt |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
sbx --cloud volume rm my-cache
```
