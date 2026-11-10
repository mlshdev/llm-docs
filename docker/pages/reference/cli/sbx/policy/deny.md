> Pinned source for Docker main: [data/sbx_cli/sbx_policy_deny.yaml](https://github.com/docker/docs/blob/34992b922461d20cc97107b84056756802584571/data/sbx_cli/sbx_policy_deny.yaml)

# sbx policy deny

Add a deny rule for sandboxes

**Usage:** `sbx policy deny COMMAND`

## Description

Add a rule that blocks sandboxes from accessing specified resources.

Deny rules take precedence over allow rules for the same hostname or CIDR. A
direct connection to an allowed hostname is also checked against CIDR rules for
its resolved IP address, and a deny on either takes precedence. Connections
through an upstream proxy that resolves the hostname are checked by hostname
only.

Without --cloud, a rule is refused, and nothing is added, when the same scope
already holds the opposite decision for the same resource on any of the same
protocols (for HTTP rules, the same methods, path, and query constraints).
Remove the existing rule with "sbx policy rm network --id RULE\_ID" first, adding
\--sandbox SANDBOX if the rule is sandbox-scoped. Rules in different scopes, such
as a global allow and a sandbox-scoped deny, can coexist, and the deny rule
takes precedence. Rules from your organization's policy never cause this
refusal. With --cloud, the new rule replaces the opposite rule in the same scope
instead.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |
