> Commit-pinned source for Docker main: [data/sbx_cli/sbx_volume_create.yaml](https://github.com/docker/docs/blob/f0470b5edae7289b77e04ac4e015f6d3604f15ad/data/sbx_cli/sbx_volume_create.yaml)

# sbx volume create

Create a new persistent volume

**Usage:** `sbx volume create NAME [flags]`

## Description

Create a new persistent volume.

The volume name must be unique per account; an attempt to create a volume
with a name already in use is rejected.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--json` |  | Output in JSON format |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
sbx --cloud volume create my-cache
```
