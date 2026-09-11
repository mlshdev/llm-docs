> Commit-pinned source for Docker main: [data/sbx_cli/sbx_kit_inspect.yaml](https://github.com/docker/docs/blob/5e8a1f493e574ad6a8b44d838e8df07f2befa31e/data/sbx_cli/sbx_kit_inspect.yaml)

# sbx kit inspect

Display details about a kit artifact

**Usage:** `sbx kit inspect REFERENCE [flags]`

> [!NOTE]
> This command is experimental.

## Description

Load and display details about a kit artifact.

The reference can be a local directory, ZIP file path, OCI registry reference, or git repository.

Pass --kit-arg to preview how the kit resolves with a given set of
arguments; the output shows the substituted content.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--json` |  | Output in JSON format |
| `--kit-arg` |  | Value for an argument the kit declares, as name=value for every kit or kit.name=value for one (can be repeated) (Experimental) |
| `--kit-args-file` |  | File of name=value kit arguments, one per line (can be repeated); --kit-arg overrides (Experimental) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
