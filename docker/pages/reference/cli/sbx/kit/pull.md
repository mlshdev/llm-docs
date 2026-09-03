> Commit-pinned source for Docker main: [data/sbx_cli/sbx_kit_pull.yaml](https://github.com/docker/docs/blob/f6dc902a4d40c625f5f2c23a5c1eb735ffe7b570/data/sbx_cli/sbx_kit_pull.yaml)

# sbx kit pull

Pull a kit artifact from an OCI registry

**Usage:** `sbx kit pull REFERENCE [flags]`

> [!NOTE]
> This command is experimental.

## Description

Pull a kit artifact from an OCI registry and save its layer payload to a file.

The reference should be in the format "registry/repo:tag" or
"registry/repo@sha256:digest" (e.g., "ghcr.io/myorg/my-plugin:1.0").

The file extension is chosen automatically based on the kit's format:
  schemaVersion: "1"  → <name>.zip      (legacy ZIP archive)
  schemaVersion: "2"  → <name>.tar.gz   (standard OCI tar+gzip layer)

The registry must support HTTPS.

Authentication: sbx registry secrets (sbx secret set --registry) take priority, falling back to the Docker credential store.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-o`, `--output` |  | Output file path (default: derived from reference + format) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
