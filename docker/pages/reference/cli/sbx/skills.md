> Pinned source for Docker main: [data/sbx_cli/sbx_skills.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_skills.yaml)

# sbx skills

Manage skills available in sandboxes

**Usage:** `sbx skills COMMAND`

> \[!NOTE]
> This command is experimental.

## Description

Manage skills available to agents in Docker Sandboxes.

Skills are shared across sandboxes by default, mounted read-only. Use
\--skills=off when creating a sandbox to opt out, or --skills=readwrite to
mount the store read-write.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
