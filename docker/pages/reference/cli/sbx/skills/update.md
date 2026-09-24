> Pinned source for Docker main: [data/sbx_cli/sbx_skills_update.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/sbx_cli/sbx_skills_update.yaml)

# sbx skills update

Update skills added from repositories

**Usage:** `sbx skills update [skill]... [flags]`

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
