> Commit-pinned source for Docker main: [data/sbx_cli/sbx_secret.yaml](https://github.com/docker/docs/blob/5e8a1f493e574ad6a8b44d838e8df07f2befa31e/data/sbx_cli/sbx_secret.yaml)

# sbx secret

Manage stored secrets

**Usage:** `sbx secret COMMAND`

## Description

Manage stored secrets for sandbox environments.

SERVICE SECRETS (e.g. "github", "anthropic", "openai")
  When a sandbox starts, the proxy uses stored secrets to authenticate API
  requests on behalf of the agent. The secret is never exposed directly.
  Scoped globally (shared across all sandboxes) or to a specific sandbox.

REGISTRY SECRETS (e.g. "ghcr.io", "myregistry.azurecr.io")
  Used to pull private template images and kit artifacts before sandbox
  creation. Unlike service secrets, registry credentials are host-only by
  default. They are not injected into sandboxes unless --all-sandboxes or
  --sandbox is set (the credential never enters the sandbox filesystem).
  Use "sbx secret set --registry <host> --password-stdin" to store them.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
