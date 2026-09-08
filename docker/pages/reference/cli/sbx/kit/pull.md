> Commit-pinned source for Docker main: [data/sbx_cli/sbx_kit_pull.yaml](https://github.com/docker/docs/blob/1808ce9024d6e24a418ae6b43b2413042e2c8e42/data/sbx_cli/sbx_kit_pull.yaml)

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
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
