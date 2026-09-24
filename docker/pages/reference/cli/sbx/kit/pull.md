> Pinned source for Docker main: [data/sbx_cli/sbx_kit_pull.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/sbx_cli/sbx_kit_pull.yaml)

# sbx kit pull

Pull a kit artifact from an OCI registry

**Usage:** `sbx kit pull REFERENCE [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Pull a kit artifact from an OCI registry and save its layer payload to a file.

The reference should be in the format "registry/repo:tag" or
"registry/repo\@sha256:digest" (e.g., "ghcr.io/myorg/my-plugin:1.0").

The file extension is chosen automatically based on the kit's format:
schemaVersion: "1"  → <name>.zip      (legacy ZIP archive)
schemaVersion: "2"  → <name>.tar.gz   (standard OCI tar+gzip layer)

The registry must support HTTPS.

Authentication: sbx registry secrets (sbx secret set --registry) take priority, falling back to the Docker credential store.

## Options

| Option           | Default | Description                                                 |
| ---------------- | ------- | ----------------------------------------------------------- |
| `-o`, `--output` |         | Output file path (default: derived from reference + format) |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
