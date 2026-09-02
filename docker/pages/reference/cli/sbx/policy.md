> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy.yaml](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/data/sbx_cli/sbx_policy.yaml)

# sbx policy

Manage sandbox policies

**Usage:** `sbx policy COMMAND`

## Description

Manage persistent access policies for sandboxes.

Policies contain rules that control what sandboxes can access. Local rules
can apply globally across all sandboxes or be scoped to one sandbox. Use
subcommands to allow, deny, list, or remove rules.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
