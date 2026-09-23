> Pinned source for Docker main: [data/sbx_cli/sbx_policy_rm_network.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_policy_rm_network.yaml)

# sbx policy rm network

Remove a network rule

**Usage:** `sbx policy rm network [--sandbox SANDBOX] [flags]`

## Description

Remove a network rule by rule ID, resource, or both.

\--id takes the RULE\_ID value shown by "sbx policy ls --wide" and
"sbx policy inspect" — the rule's identifier, not its name. Passing a rule
name fails with an error that names the actual rule ID and, for removable
rules, the exact corrected command.

The rule is removed from the global policy by default. Use --sandbox to
remove from policy "local" scoped to a single sandbox instead.

Use "sbx policy ls --wide" to see active rule IDs and resources, or
"sbx policy ls --json" for the filtered rules; network values are printed in
the form the CLI accepts back.

With --cloud:
Remove a cloud network rule by pattern.

Cloud rules have no IDs: --resource removes the pattern from both the allow
and deny lists, and the output names each list it was removed from. The rule
leaves the account policy by default; use --sandbox to scope the removal to one
sandbox. Use "sbx --cloud policy ls" to see the current rules.

## Options

| Option          | Default | Description                                                      |
| --------------- | ------- | ---------------------------------------------------------------- |
| `-f`, `--force` |         | Skip confirmation prompts                                        |
| `--id`          |         | Remove by rule ID                                                |
| `--resource`    |         | Remove by resource value(s), comma-separated                     |
| `--sandbox`     |         | Scope the removal to a specific sandbox (default: global policy) |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

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

  # Remove a cloud rule by pattern, from the allow or deny list it is in
  sbx --cloud policy rm network --resource api.example.com

  # Remove a pattern from one cloud sandbox's rules
  sbx --cloud policy rm network --sandbox my-sandbox --resource api.example.com
```
