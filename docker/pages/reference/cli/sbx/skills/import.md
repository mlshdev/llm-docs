> Commit-pinned source for Docker main: [data/sbx_cli/sbx_skills_import.yaml](https://github.com/docker/docs/blob/ec568fb193997abb62fc206183b30ba01498291d/data/sbx_cli/sbx_skills_import.yaml)

# sbx skills import

Import skills from supported agent directories

**Usage:** `sbx skills import [flags]`

> [!NOTE]
> This command is experimental.

## Description

Copy skills from supported agent directories on the host into the
persistent store shared by sandboxes.

Sources are scanned in this order (alphabetical; first wins on conflict):
  ~/.agents/skills
  ~/.claude/skills
  ~/.copilot/skills
  ~/.cursor/skills
  ~/.factory/skills

If two sources contain a skill with the same name, the later source is skipped
with a warning — the first source's version is kept.

Each imported skill folder replaces any store folder of the same name (the
existing folder is backed up first, then the new copy is installed) so stale
files from a previous version cannot linger. You will be prompted before any
existing skill is overwritten; use --force to skip all prompts.

Symlinks at the top level are followed if they point to a directory. Symlinks
within skill folders and loose files at the top level are skipped.

The store lives under the sandbox state directory and is cleared by
'sbx reset'. Supported by Claude, Codex, Copilot, Cursor, and Droid agents.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Preview which skills would be imported without copying anything |
| `-f`, `--force` |  | Overwrite existing skills without prompting |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
