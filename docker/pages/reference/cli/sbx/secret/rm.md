> Commit-pinned source for Docker main: [data/sbx_cli/sbx_secret_rm.yaml](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/data/sbx_cli/sbx_secret_rm.yaml)

# sbx secret rm

Remove a secret

**Usage:** `sbx secret rm [SERVICE] [flags]`

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--all-sandboxes` |  | Remove registry credentials injected into every sandbox (requires --registry) |
| `-f`, `--force` |  | Delete without confirmation prompt |
| `--registry` |  | Registry hostname to remove pull credentials for |
| `--sandbox` |  | Scope the removal to one sandbox (default: global) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
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
```
