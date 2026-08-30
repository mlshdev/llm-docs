> Commit-pinned source for Docker main: [data/sbx_cli/sbx_secret.yaml](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/data/sbx_cli/sbx_secret.yaml)

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
| `-D`, `--debug` |  | Enable debug logging |
