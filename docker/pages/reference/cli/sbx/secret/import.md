> Commit-pinned source for Docker main: [data/sbx_cli/sbx_secret_import.yaml](https://github.com/docker/docs/blob/ec568fb193997abb62fc206183b30ba01498291d/data/sbx_cli/sbx_secret_import.yaml)

# sbx secret import

Import secrets detected in host environment variables

**Usage:** `sbx secret import [SERVICE] [flags]`

## Description

Import secrets that sbx detects in your host environment
variables (e.g. OPENAI_API_KEY, ANTHROPIC_API_KEY, GH_TOKEN) into the
global keychain. Once imported, the secret is available to every
sandbox without needing the env var on each shell.

Each detected env var is offered interactively with a Y/n prompt and a
last-4-char preview of the value. Existing stored entries are never
overwritten silently:

  - Interactive mode prompts for confirmation before overwriting.
  - --all imports new entries without prompting but SKIPS overwrites
    (use --force when you actually want to replace stored values).
  - --force imports unconditionally, including overwriting.

Services that already have an OAuth token configured (e.g. anthropic
after `sbx run claude … -- auth login`) are skipped: the OAuth token
takes precedence at runtime so any api-key import would never be used.
Run `sbx secret rm <service>` first if you want to switch from
OAuth to api-key auth.

Available services: anthropic, cursor, droid, github, google, groq, mistral, nebius, openai, openrouter, xai

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--all` |  | Import every detected env var without prompting |
| `--dry-run` |  | Show what would be imported without writing |
| `-f`, `--force` |  | Overwrite an existing stored entry without confirmation |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Walk every detected env var, prompting before each import
  sbx secret import

  # Import only the openai service (uses OPENAI_API_KEY)
  sbx secret import openai

  # Non-interactive: import everything detected without prompting
  sbx secret import --all

  # Overwrite an existing stored entry without confirmation
  sbx secret import openai --force

  # Preview what would be imported without writing
  sbx secret import --dry-run
```
