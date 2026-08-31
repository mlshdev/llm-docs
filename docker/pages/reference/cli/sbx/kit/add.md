> Commit-pinned source for Docker main: [data/sbx_cli/sbx_kit_add.yaml](https://github.com/docker/docs/blob/ca60e92629079de412f38632876ab208d84267ef/data/sbx_cli/sbx_kit_add.yaml)

# sbx kit add

Add a kit to a sandbox

**Usage:** `sbx kit add SANDBOX REFERENCE [flags]`

> [!NOTE]
> This command is experimental.

## Description

Add a kit artifact to an existing sandbox.

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

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Add a local kit directory to a sandbox
  sbx kit add my-sandbox ./mcp-postgres/

  # Add a kit from a ZIP file
  sbx kit add my-sandbox ./mcp-postgres.zip

  # Add a kit from an OCI registry
  sbx kit add my-sandbox ghcr.io/myorg/mcp-postgres:1.0

  # Add a kit from a git repository
  sbx kit add my-sandbox git+https://github.com/org/kits.git#dir=mcp-postgres
```
