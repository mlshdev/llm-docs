> Commit-pinned source for Docker main: [data/sbx_cli/sbx_secret_set-custom.yaml](https://github.com/docker/docs/blob/f6dc902a4d40c625f5f2c23a5c1eb735ffe7b570/data/sbx_cli/sbx_secret_set-custom.yaml)

# sbx secret set-custom

Create or update a custom secret

**Usage:** `sbx secret set-custom [flags]`

> [!NOTE]
> This command is experimental.

## Description

Create or update a custom secret for a service not built into sbx.

Custom secrets work via a placeholder: the sandbox sees the placeholder value
instead of the real secret. When the sandbox makes an outbound request to the
target host, the proxy replaces the placeholder with the real secret in the
request headers — the secret never enters the sandbox directly.

--host accepts an exact host, IP address, or wildcard pattern. Repeat --host
to cover multiple unrelated domains with one secret. "*" matches a single label
and "**" matches any number of labels. For example "*.example.com" covers
"cli.example.com" and "ide.example.com" with one entry.

Custom secrets apply globally by default. Use --sandbox to scope one to a
specific sandbox.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--command` |  | Use a command's standard output as the secret value |
| `--env` |  | Set this env var in the sandbox to the placeholder value |
| `--host` |  | Host, IP, or wildcard pattern (e.g. *.example.com); repeatable |
| `--no-verify` |  | Skip checking the --ref or --command source when storing it |
| `--placeholder` |  | Placeholder value; use {rand} for a random suffix (e.g. sk-{rand}) |
| `--ref` |  | Use a 1Password op:// reference or AWS Secrets Manager ARN as the secret source |
| `--refresh` |  | Secret refresh policy: on-demand (default) or after a duration |
| `--sandbox` |  | Scope the secret to one sandbox (default: all sandboxes) |
| `--show-error` |  | Show resolver standard error if the initial check fails (may contain secrets) |
| `-t`, `--token` |  | Secret value (less secure: visible in shell history) |
| `--value` |  | Secret value (less secure: visible in shell history) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Create a global custom secret. A unique placeholder is generated automatically.
  # The sandbox env var API_KEY is set to the placeholder value; outbound requests
  # to the host have the placeholder replaced with the real secret.
  sbx secret set-custom --host api.example.com --env API_KEY --value secret123

  # Use a wildcard host to cover multiple subdomains that share one key.
  sbx secret set-custom --host '*.coderabbit.ai' --env CODERABBIT_API_KEY --value secret123

  # Use multiple --host flags to cover unrelated domains with the same key.
  sbx secret set-custom --host api.example.com --host api.other.io --env API_KEY --value secret123

  # Scope to a specific sandbox instead of globally.
  sbx secret set-custom --sandbox my-sandbox --host api.example.com --env API_KEY --value secret123

  # Custom placeholder with {rand} suffix; the CLI prints the generated value.
  sbx secret set-custom --host api.example.com --placeholder sk-{rand} --value secret123
```
