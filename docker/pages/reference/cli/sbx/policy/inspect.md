> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy_inspect.yaml](https://github.com/docker/docs/blob/b744dd31039efeac59c11e017ac6ab62d9077339/data/sbx_cli/sbx_policy_inspect.yaml)

# sbx policy inspect

Inspect policy or rule details

**Usage:** `sbx policy inspect <policy-or-rule> [flags]`

## Description

Inspect full detail for a selected policy or rule.

The selector may be a policy ID, policy name, rule ID, or rule name.
Selecting a policy lists every resource with its decision, rule, and status,
plus a rule table showing each rule's RULE_ID, whether it is editable, and
either the exact removal command or the reason it is read-only. Selecting a
rule shows just that rule with the same editability detail. RULE_ID is the
identifier accepted by "sbx policy rm network --id" (local rules only). Use
"sbx policy ls" to find policy names and "sbx policy ls --wide" to find rule
IDs and resource values.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Inspect a policy by name
  sbx policy inspect "Developer access"

  # Inspect a rule by ID
  sbx policy inspect 2d3c1f0e-4a73-4e05-bc9d-f2f9a4b50d67
```
