> Commit-pinned source for Docker main: [data/sbx_cli/sbx_template_rm.yaml](https://github.com/docker/docs/blob/fd5e73c9183cc2e1600a747a52aaf3d8ea0ce3b5/data/sbx_cli/sbx_template_rm.yaml)

# sbx template rm

Remove a template image

**Usage:** `sbx template rm TAG|ID [flags]`

## Description

Remove a template image from the sandbox runtime's image store.

The image can be identified by tag (e.g. "myimage:v1.0") or by image ID
(full or prefix, e.g. "abc123"). Use "sbx template ls" to see available
images and their IDs.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Remove by tag
  sbx template rm myimage:v1.0

  # Remove by image ID (prefix)
  sbx template rm abc123
```
