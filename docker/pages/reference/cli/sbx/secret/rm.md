> Commit-pinned source for Docker main: [data/sbx_cli/sbx_secret_rm.yaml](https://github.com/docker/docs/blob/920ee0bb1e638c6a39d7c2a1075fa2b1d8f451a7/data/sbx_cli/sbx_secret_rm.yaml)

# sbx secret rm

Remove a secret

**Usage:** `sbx secret rm [SERVICE] [flags]`

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--all` |  | Remove every stored secret across all scopes |
| `--all-sandboxes` |  | Remove registry credentials injected into every sandbox (requires --registry) |
| `-f`, `--force` |  | Delete without confirmation prompt |
| `--registry` |  | Registry hostname to remove pull credentials for |
| `--sandbox` |  | Scope the removal to one sandbox (default: global) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Remove a global secret
  sbx secret rm github

  # Remove a sandbox-scoped secret
  sbx secret rm openai --sandbox my-sandbox

  # Remove without confirmation prompt
  sbx secret rm github -f

  # Remove OpenAI or Anthropic credential(s) from global scope (OAuth and/or API key)
  sbx secret rm openai
  sbx secret rm anthropic

  # Remove custom secret by specifying the placeholder value
  sbx secret rm --placeholder docker-placeholder-value

  # Remove registry pull credentials (removes host-only and global entries)
  sbx secret rm --registry ghcr.io -f

  # Remove only the global (all-sandboxes) registry credential
  sbx secret rm --all-sandboxes --registry ghcr.io -f

  # Remove every stored secret across every scope (service secrets, custom
  # secrets, OAuth tokens, and registry credentials)
  sbx secret rm --all
```
