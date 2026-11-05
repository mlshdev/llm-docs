> Pinned source for Docker main: [data/sbx_cli/sbx_skills_update.yaml](https://github.com/docker/docs/blob/c98501277b974550688eeed803c975e2665d6468/data/sbx_cli/sbx_skills_update.yaml)

# sbx skills update

Update skills added from repositories

**Usage:** `sbx skills update [SKILL...] [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Download the latest versions of skills installed with 'sbx skills add'.

With no names, every skill added from a repository is updated. Specify one or
more names to update only those skills. Skills installed with 'sbx skills
import' must be added from a repository before they can be updated.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
# Update every skill added from a repository
  sbx skills update

  # Update one skill
  sbx skills update my-skill
```
