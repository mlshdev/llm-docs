> Commit-pinned source for Docker main: [data/sbx_cli/sbx_setup_ssh_remove.yaml](https://github.com/docker/docs/blob/22e32a82b28b6dabf125325fe9cd79133dc1de4a/data/sbx_cli/sbx_setup_ssh_remove.yaml)

# sbx setup ssh remove

Remove SSH client config for the current local app instance

**Usage:** `sbx setup ssh remove [flags]`

> [!NOTE]
> This command is experimental.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
