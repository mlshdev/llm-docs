> Commit-pinned source for Docker main: [data/sbx_cli/sbx_template_load.yaml](https://github.com/docker/docs/blob/c4f0e5b32deb9d3365c1f0be62305038a24e15e5/data/sbx_cli/sbx_template_load.yaml)

# sbx template load

Load an image from a tar file into the sandbox runtime

**Usage:** `sbx template load FILE [NAME] [flags]`

## Description

Load an image from a tar file into the sandbox runtime's image store.

The loaded image can be used as a template for new sandboxes.
Tar files are typically created with: sbx template save SANDBOX TAG --output FILE

With --cloud:
The tar is uploaded to the cloud template registry as a new template.
Takes two arguments (FILE, NAME). NAME must be unique per account.
--cpus and --memory-mib are required (the server enforces power-of-two
CPUs and memory:cpu ratio constraints). --capture-mode controls what
gets captured for the template: "disk" (default) is faster to load and
cold-boots from the filesystem; "all" captures memory + disk + microVM
checkpoint so subsequent runs resume in sub-second time at the cost of
a slower load.

Cloud loads upload your full tar to the registry; multi-GB uploads can
take several minutes. See https://docs.docker.com/ai/sandboxes/ for the snapshot/load model.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--capture-mode` | `disk` | What gets captured for this template. "disk" (default) captures only the filesystem — cold-boot from a standard OCI image, faster load. "all" captures memory + disk + microVM checkpoint — sub-second TTI on resume, slower load. Only effective with --cloud. |
| `--cpus` |  | Number of CPUs (1, 2, 4, 8, or 16; required with --cloud) |
| `--description` |  | Optional template description (--cloud only) |
| `--memory-mib` |  | Memory in MiB (512–32768, must satisfy 2:1/1:1/1:2 ratio with --cpus; required with --cloud) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Load an image from a tar file
  sbx template load /tmp/myimage.tar              # Linux/macOS
  sbx template load C:\Users\me\myimage.tar       # Windows

  # Use the loaded image as a template
  sbx run -t myimage:v1.0 claude

  # Cloud: upload a tar as a cloud-managed template (disk capture, faster load)
  sbx template load /tmp/myimage.tar my-template --cloud --cpus 2 --memory-mib 2048

  # Cloud: capture memory + disk + microVM checkpoint for sub-second resume
  sbx template load /tmp/myimage.tar my-template --cloud --cpus 2 --memory-mib 2048 --capture-mode all

  # Cloud: with a description
  sbx template load /tmp/myimage.tar my-template --cloud --cpus 2 --memory-mib 2048 --description "Nightly baseline"
```
