> Commit-pinned source for Docker main: [data/sbx_cli/sbx_template_rm.yaml](https://github.com/docker/docs/blob/1808ce9024d6e24a418ae6b43b2413042e2c8e42/data/sbx_cli/sbx_template_rm.yaml)

# sbx template rm

Remove a template image

**Usage:** `sbx template rm TAG|ID|NAME [flags]`

## Description

Remove a template image from the sandbox runtime's image store.

The image can be identified by tag (e.g. "myimage:v1.0") or by image ID
(full or prefix, e.g. "abc123"). Use "sbx template ls" to see available
images and their IDs.

With --cloud:
The template can be identified by its tmpl_* ID or by its human name
(resolved via the server-side ?name= filter). Use "sbx template ls --cloud".

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Remove by tag
  sbx template rm myimage:v1.0

  # Remove by image ID (prefix)
  sbx template rm abc123

  # Cloud: remove by name
  sbx template rm my-template --cloud

  # Cloud: remove by tmpl_* id
  sbx template rm tmpl_abc123 --cloud
```
