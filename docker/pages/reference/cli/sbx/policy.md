> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy.yaml](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/data/sbx_cli/sbx_policy.yaml)

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
