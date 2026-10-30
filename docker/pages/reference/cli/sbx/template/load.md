> Pinned source for Docker main: [data/sbx_cli/sbx_template_load.yaml](https://github.com/docker/docs/blob/53581df94e05ad4116a8d31e47ea098289fa5498/data/sbx_cli/sbx_template_load.yaml)

# sbx template load

Load an image from a tar file into the sandbox runtime

**Usage:** `sbx template load FILE [NAME] [flags]`

## Description

Load an image from a tar file into the sandbox runtime's image store.

The loaded image can be used as a template for new sandboxes.
Tar files are typically created with: sbx template save SANDBOX TAG --output FILE

With --cloud:
Upload a tar file as a cloud template. Takes FILE and NAME; NAME must be
unique per account. Uploads can take several minutes.

\--cpus and --memory-mib are required and must match a billable sandbox shape:

- micro (1 vCPU / 2048 MiB)
- small (2 vCPU / 4096 MiB)
- medium (4 vCPU / 8192 MiB)
- large (8 vCPU / 16384 MiB)
- xl (16 vCPU / 32768 MiB)

Use --capture-mode disk for a filesystem snapshot, or all to capture memory,
disk, and the microVM checkpoint for faster resume.

## Options

| Option           | Default | Description                                                                                                                                                                                                                                                     |
| ---------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--capture-mode` | `disk`  | What gets captured for this template. "disk" (default) captures only the filesystem — cold-boot from a standard OCI image, faster load. "all" captures memory + disk + microVM checkpoint — sub-second TTI on resume, slower load. Only effective with --cloud. |
| `--cpus`         |         | vCPUs; with --memory-mib must name a billable shape (required with --cloud)                                                                                                                                                                                     |
| `--description`  |         | Optional template description (--cloud only)                                                                                                                                                                                                                    |
| `--memory-mib`   |         | Memory in MiB; --cpus/--memory-mib must name a billable shape: micro (1 vCPU / 2048 MiB), small (2 vCPU / 4096 MiB), medium (4 vCPU / 8192 MiB), large (8 vCPU / 16384 MiB), xl (16 vCPU / 32768 MiB) (required with --cloud)                                   |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# Load an image from a tar file
  sbx template load /tmp/myimage.tar              # Linux/macOS
  sbx template load C:\Users\me\myimage.tar       # Windows

  # Use the loaded image as a template
  sbx run --pull never -t myimage:v1.0 claude

  # Cloud: upload a tar as a cloud-managed template (disk capture, faster load)
  sbx --cloud template load /tmp/myimage.tar my-template --cpus 2 --memory-mib 4096

  # Cloud: capture memory + disk + microVM checkpoint for sub-second resume
  sbx --cloud template load /tmp/myimage.tar my-template --cpus 2 --memory-mib 4096 --capture-mode all

  # Cloud: with a description
  sbx --cloud template load /tmp/myimage.tar my-template --cpus 2 --memory-mib 4096 --description "Nightly baseline"
```
