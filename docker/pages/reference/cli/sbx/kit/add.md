> Commit-pinned source for Docker main: [data/sbx_cli/sbx_kit_add.yaml](https://github.com/docker/docs/blob/2054b419afd87a3232f2e77366a561e172e27c67/data/sbx_cli/sbx_kit_add.yaml)

# sbx kit add

Add a mixin to a sandbox

**Usage:** `sbx kit add SANDBOX REFERENCE [flags]`

> [!NOTE]
> This command is experimental.

## Description

Add a mixin artifact to an existing sandbox.

The sandbox's container is recreated with the new kit appended to its
original kit list, preserving kit-owned volumes (e.g. agent session
state) across the swap. Workspace data is unaffected: bind-mounted
sandboxes keep their host-side mount; --clone sandboxes keep their
in-container working tree via a named workspace volume that
reattaches to the swap container.

The sandbox must already exist and must have been created with the
recreate-aware label set (sandboxes created before the kit-add recreate
feature shipped will be refused with a clear error). The reference can be
a local directory, ZIP file path, OCI registry reference, or git
repository.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--kit-arg` |  | Value for an argument the kit declares, as name=value for every kit or kit.name=value for one (can be repeated) (Experimental) |
| `--kit-args-file` |  | File of name=value kit arguments, one per line (can be repeated); --kit-arg overrides (Experimental) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Add a local mixin directory to a sandbox
  sbx kit add my-sandbox ./mcp-postgres/

  # Add a kit from a ZIP file
  sbx kit add my-sandbox ./mcp-postgres.zip

  # Add a kit from an OCI registry
  sbx kit add my-sandbox ghcr.io/myorg/mcp-postgres:1.0

  # Add a kit from a git repository
  sbx kit add my-sandbox git+https://github.com/org/kits.git#dir=mcp-postgres

  # Add a parameterized kit
  sbx kit add my-sandbox ./mcp-postgres/ --kit-arg host=db.internal
```
