> Commit-pinned source for Docker main: [data/sbx_cli/sbx_skills_import.yaml](https://github.com/docker/docs/blob/56ff4df658450553e83cf962aeba536b246d51c8/data/sbx_cli/sbx_skills_import.yaml)

# sbx skills import

Import skills from supported agent directories

**Usage:** `sbx skills import [flags]`

> [!NOTE]
> This command is experimental.

## Description

Import skills already installed for supported coding agents on this
machine.

The following directories are checked in order:
  ~/.agents/skills
  ~/.claude/skills
  ~/.config/opencode/skills
  ~/.copilot/skills
  ~/.cursor/skills
  ~/.factory/skills

When the same skill appears in more than one directory, the first copy is used
and the others are skipped with a warning.

Importing a skill that is already installed replaces it completely, including
removing files that are no longer present. You will be prompted before a skill
is replaced; use --force to skip all prompts.

Symlinks at the top level are followed if they point to a directory. Symlinks
within skill folders and loose files at the top level are skipped.

Imported skills are available to Claude, Codex, Copilot, Cursor, Droid, and
OpenCode.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Preview which skills would be imported without copying anything |
| `-f`, `--force` |  | Overwrite existing skills without prompting |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
