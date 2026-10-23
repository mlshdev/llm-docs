> Pinned source for Docker main: [data/sbx_cli/sbx_skills_import.yaml](https://github.com/docker/docs/blob/1d503f8b7c2b2008da6cbc08bb5be163666c84bf/data/sbx_cli/sbx_skills_import.yaml)

# sbx skills import

Import skills from supported agent directories

**Usage:** `sbx skills import [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Import skills installed for supported coding agents on this machine.
Directories are checked in order:

1. \~/.agents/skills
2. \~/.claude/skills
3. \~/.config/opencode/skills
4. \~/.copilot/skills
5. \~/.cursor/skills
6. \~/.factory/skills

The first copy of each skill is used. Importing replaces an existing skill
completely, including removing obsolete files; --force skips confirmation.
Top-level directory symlinks are followed; symlinks within skills are skipped.

## Options

| Option          | Default | Description                                                     |
| --------------- | ------- | --------------------------------------------------------------- |
| `--dry-run`     |         | Preview which skills would be imported without copying anything |
| `-f`, `--force` |         | Overwrite existing skills without prompting                     |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx skills import

  # Preview without changing anything
  sbx skills import --dry-run
```
