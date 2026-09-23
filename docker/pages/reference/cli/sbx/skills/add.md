> Pinned source for Docker main: [data/sbx_cli/sbx_skills_add.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_skills_add.yaml)

# sbx skills add

Add skills from a Git repository

**Usage:** `sbx skills add <repository> [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Install skills from a Git repository for use in Docker Sandboxes. The
repository must contain one or more valid SKILL.md files.

All discovered skills are installed when --skill is omitted. Use --skill one
or more times, or pass a comma-separated list, to install only named skills.
Replacing an installed skill requires confirmation; use --force to skip
prompts.

The repository can be specified as a Git URL or as GitHub owner/repository
shorthand. Skills installed with this command can later be refreshed with
'sbx skills update'.

## Options

| Option          | Default | Description                                              |
| --------------- | ------- | -------------------------------------------------------- |
| `-f`, `--force` |         | Overwrite existing skills without prompting              |
| `-s`, `--skill` |         | Add only the named skill (repeatable or comma-separated) |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx skills add https://github.com/anthropics/skills --skill frontend-design
  sbx skills add anthropics/skills --skill frontend-design --skill pdf
  sbx skills add https://github.com/anthropics/skills --force
```
