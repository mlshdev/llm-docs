> Pinned source for Docker main: [data/sbx_cli/sbx_policy_allow.yaml](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/data/sbx_cli/sbx_policy_allow.yaml)

# sbx policy allow

Add an allow rule for sandboxes

**Usage:** `sbx policy allow COMMAND`

## Description

Add a rule that permits sandboxes to access specified resources.

Allowed resources are accessible within the selected policy scope. If a
resource matches both an allow and a deny rule, the deny rule takes
precedence.

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
