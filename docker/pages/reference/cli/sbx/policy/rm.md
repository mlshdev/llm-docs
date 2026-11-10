> Pinned source for Docker main: [data/sbx_cli/sbx_policy_rm.yaml](https://github.com/docker/docs/blob/34992b922461d20cc97107b84056756802584571/data/sbx_cli/sbx_policy_rm.yaml)

# sbx policy rm

Remove a policy rule

**Usage:** `sbx policy rm COMMAND`

## Description

Remove a previously added allow or deny rule.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |
