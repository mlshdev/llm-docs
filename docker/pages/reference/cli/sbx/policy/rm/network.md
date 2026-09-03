> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy_rm_network.yaml](https://github.com/docker/docs/blob/d47e43dee68bd9cbd16af81b1aa6aef45023e17c/data/sbx_cli/sbx_policy_rm_network.yaml)

# sbx policy rm network

Remove a network rule

**Usage:** `sbx policy rm network [--sandbox SANDBOX] [flags]`

## Description

Remove a network rule by rule ID, resource, or both.

--id takes the RULE_ID value shown by "sbx policy ls --wide" and
"sbx policy inspect" — the rule's identifier, not its name. Passing a rule
name fails with an error that names the actual rule ID and, for removable
rules, the exact corrected command.

The rule is removed from the global policy by default. Use --sandbox to
remove from policy "local" scoped to a single sandbox instead.

Use "sbx policy ls --wide" to see active rule IDs and resources, or
"sbx policy ls --json" for the raw filtered daemon response.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--id` |  | Remove by rule ID |
| `--resource` |  | Remove by resource value(s), comma-separated |
| `--sandbox` |  | Scope the removal to a specific sandbox (default: global policy) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# List rules to find the ID or resource to remove
  sbx policy ls --wide

  # Remove a global rule by resource
  sbx policy rm network --resource api.example.com

  # Remove a global rule by ID
  sbx policy rm network --id 2d3c1f0e-4a73-4e05-bc9d-f2f9a4b50d67

  # Remove a sandbox-scoped rule by resource
  sbx policy rm network --sandbox my-sandbox --resource api.example.com
```
