> Commit-pinned source for Docker main: [data/sbx_cli/sbx_skills.yaml](https://github.com/docker/docs/blob/f6dc902a4d40c625f5f2c23a5c1eb735ffe7b570/data/sbx_cli/sbx_skills.yaml)

# sbx skills

Manage skills shared across sandboxes

**Usage:** `sbx skills COMMAND`

> [!NOTE]
> This command is experimental.

## Description

Manage the persistent agent skills store shared across sandboxes.

Copy skills from supported agent directories on the host into the store with:
  sbx skills import

Sandboxes with skills sharing enabled mount the store read-write. Use
--no-share-skills when creating a sandbox to opt out.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
