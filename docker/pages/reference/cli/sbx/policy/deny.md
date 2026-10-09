> Pinned source for Docker main: [data/sbx_cli/sbx_policy_deny.yaml](https://github.com/docker/docs/blob/18bbfeeb249da011f359d558dba84c4b6dc3a335/data/sbx_cli/sbx_policy_deny.yaml)

# sbx policy deny

Add a deny rule for sandboxes

**Usage:** `sbx policy deny COMMAND`

## Description

Add a rule that blocks sandboxes from accessing specified resources.

Deny rules take precedence over allow rules for the same hostname or CIDR. An
allowed hostname isn't checked against CIDR rules for its resolved IP address.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
