> Commit-pinned source for Docker main: [data/sbx_cli/sbx_template_save.yaml](https://github.com/docker/docs/blob/c4f0e5b32deb9d3365c1f0be62305038a24e15e5/data/sbx_cli/sbx_template_save.yaml)

# sbx template save

Save a snapshot of the sandbox as a template

**Usage:** `sbx template save SANDBOX TAG [flags]`

## Description

Save a snapshot of the sandbox as a template.

The saved image is stored in the sandbox runtime's image store and can be
used as a template for new sandboxes with: sbx run -t TAG AGENT [WORKSPACE]

Use --output to also export the image to a tar file that can be shared
and loaded on another host with: sbx template load FILE

With --cloud:
Snapshot a running cloud sandbox into a cloud-managed template. The
snapshot can take several minutes for kit-sized images; the command
polls for completion. Use --description to attach a free-form description
to the saved template.

--capture-mode controls what gets captured: "disk" (default) cold-boots
from the filesystem; "all" captures memory + disk + microVM checkpoint so
subsequent runs resume in sub-second time at the cost of a slower load.

Cloud snapshots typically produce multi-GB templates and take several
minutes to complete. See https://docs.docker.com/ai/sandboxes/ for the snapshot/load model.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--capture-mode` | `disk` | What gets captured for this template. "disk" (default) captures only the filesystem — cold-boot from a standard OCI image, faster load. "all" captures memory + disk + microVM checkpoint — sub-second TTI on resume, slower load. Only effective with --cloud. |
| `-d`, `--description` |  | Description for the template (cloud only) |
| `-o`, `--output` |  | Also export the image to a tar file |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Save as a template for new sandboxes on this host
  sbx template save my-sandbox myimage:v1.0

  # Also export to a shareable tar file
  sbx template save my-sandbox myimage:v1.0 --output /tmp/myimage.tar

  # Cloud: snapshot a running cloud sandbox into a cloud-managed template
  sbx template save sbx_abc123 my-snap --cloud

  # Cloud: attach a description to the saved template
  sbx template save sbx_abc123 my-snap --cloud --description "nightly build"

  # Cloud: capture memory + disk + microVM checkpoint for sub-second resume
  sbx template save sbx_abc123 my-snap --cloud --capture-mode all
```
