> Commit-pinned source for Docker main: [data/sbx_cli/sbx_skills.yaml](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/data/sbx_cli/sbx_skills.yaml)

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
