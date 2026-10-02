> Pinned source for Docker main: [data/sbx_cli/sbx_skills_ls.yaml](https://github.com/docker/docs/blob/1cb9a4d2c65d712da863e30cd3a1319ddeea3298/data/sbx_cli/sbx_skills_ls.yaml)

# sbx skills ls

List installed skills

**Usage:** `sbx skills ls [flags]`

> \[!NOTE]
> This command is experimental.

## Description

List skills available to agents in Docker Sandboxes.

## Options

| Option          | Default | Description              |
| --------------- | ------- | ------------------------ |
| `--json`        |         | Output in JSON format    |
| `-q`, `--quiet` |         | Only display skill names |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
