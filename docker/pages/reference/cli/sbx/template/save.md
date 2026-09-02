> Commit-pinned source for Docker main: [data/sbx_cli/sbx_template_save.yaml](https://github.com/docker/docs/blob/2028912e0e64869c14702deec64ba2ef5cc10441/data/sbx_cli/sbx_template_save.yaml)

# sbx template save

Save a snapshot of the sandbox as a template

**Usage:** `sbx template save SANDBOX TAG [flags]`

## Description

Save a snapshot of the sandbox as a template.

The saved image is stored in the sandbox runtime's image store and can be
used as a template for new sandboxes with: sbx run -t TAG AGENT [WORKSPACE]

Use --output to also export the image to a tar file that can be shared
and loaded on another host with: sbx template load FILE

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-o`, `--output` |  | Also export the image to a tar file |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Save as a template for new sandboxes on this host
  sbx template save my-sandbox myimage:v1.0

  # Also export to a shareable tar file
  sbx template save my-sandbox myimage:v1.0 --output /tmp/myimage.tar
```
