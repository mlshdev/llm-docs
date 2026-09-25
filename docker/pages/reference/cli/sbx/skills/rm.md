> Pinned source for Docker main: [data/sbx_cli/sbx_skills_rm.yaml](https://github.com/docker/docs/blob/0bd254d2b506fd6c8bbf8b55affcce84fc02bb48/data/sbx_cli/sbx_skills_rm.yaml)

# sbx skills rm

Remove installed skills

**Usage:** `sbx skills rm <skill>... [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Remove one or more installed skills from Docker Sandboxes.

Running agents may be reading installed skills. Removal cannot be undone and
requires confirmation; use --force to skip confirmation in scripts.

## Options

| Option          | Default | Description               |
| --------------- | ------- | ------------------------- |
| `-f`, `--force` |         | Skip confirmation prompts |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
