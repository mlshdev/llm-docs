> Pinned source for Docker main: [data/sbx_cli/sbx_policy_ls.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_policy_ls.yaml)

# sbx policy ls

List sandbox policies

**Usage:** `sbx policy ls [SANDBOX] [flags]`

## Description

List active sandbox policies.

Without SANDBOX, the command shows one overview row per policy with its source,
where it applies, and a summary of decisions by resource type. With SANDBOX, it
summarizes active rules that apply to that sandbox.

Use --wide to show the detailed rule-level table with separate POLICY,
POLICY\_ID, RULE, and RULE\_ID columns plus resources, status, and rule
metadata. RULE\_ID is the identifier accepted by "sbx policy rm network --id"
(local rules only). Use --json for the filtered daemon response.

When remote governance is active, inactive policy rules are hidden by default.
Use --include-inactive to show inactive rules for troubleshooting.
Use "sbx policy inspect <policy-or-rule>" for full detail on a selected policy or
rule.

## Options

| Option               | Default | Description                                                                                |
| -------------------- | ------- | ------------------------------------------------------------------------------------------ |
| `--created-via`      |         | Filter policies by how they were created: "default", "added", "provisioned", or "approval" |
| `--decision`         |         | Filter policies by decision: "allow" or "deny"                                             |
| `--include-inactive` |         | Show inactive policy rules hidden by remote governance                                     |
| `--json`             |         | Output filtered policy rules as JSON                                                       |
| `--protocol`         |         | Filter network rules by protocol: tcp or udp                                               |
| `--source`           |         | Filter policies by source: "local", "org", or "kit"                                        |
| `--type`             | `all`   | Filter policies by type: "all", "network", "filesystem" (default "all")                    |
| `--wide`             |         | Show detailed rule-level output with rule IDs and resources                                |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# List all policies
  sbx policy ls

  # List the policies that apply to one sandbox
  sbx policy ls my-sandbox

  # Show detailed rule-level rows with rule IDs and resources
  sbx policy ls --wide

  # Output filtered rules as JSON
  sbx policy ls --json

  # List only network policies
  sbx policy ls --type network

  # List organization policies that deny access
  sbx policy ls --source org --decision deny

  # List persistent rules created from approval prompts
  sbx policy ls --wide --created-via approval

  # Include inactive rules hidden by remote governance
  sbx policy ls --include-inactive
```
