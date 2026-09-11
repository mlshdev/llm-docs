> Commit-pinned source for Docker main: [data/sbx_cli/sbx_tui.yaml](https://github.com/docker/docs/blob/bbf8dfd2f0205fd5c754eedceac8f8b69aa91f81/data/sbx_cli/sbx_tui.yaml)

# sbx tui

Open the interactive TUI dashboard

**Usage:** `sbx tui [flags]`

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
