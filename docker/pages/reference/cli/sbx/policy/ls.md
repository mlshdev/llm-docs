> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy_ls.yaml](https://github.com/docker/docs/blob/d47e43dee68bd9cbd16af81b1aa6aef45023e17c/data/sbx_cli/sbx_policy_ls.yaml)

# sbx policy ls

List sandbox policies

**Usage:** `sbx policy ls [SANDBOX] [flags]`

## Description

List active sandbox policies.

Without SANDBOX, the command shows one overview row per policy with its source,
where it applies, and a summary of decisions by resource type. With SANDBOX, it
summarizes active rules that apply to that sandbox.

Use --wide to show the detailed rule-level table with separate POLICY,
POLICY_ID, RULE, and RULE_ID columns plus resources, status, and rule
metadata. RULE_ID is the identifier accepted by "sbx policy rm network --id"
(local rules only). Use --json for the filtered daemon response.

When remote governance is active, inactive policy rules are hidden by default.
Use --include-inactive to show inactive rules for troubleshooting.
Use "sbx policy inspect <policy-or-rule>" for full detail on a selected policy or
rule.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--decision` |  | Filter policies by decision: "allow" or "deny" |
| `--include-inactive` |  | Show inactive policy rules hidden by remote governance |
| `--json` |  | Output filtered policy rules as JSON |
| `--source` |  | Filter policies by source: "local", "org", or "kit" |
| `--type` | `all` | Filter policies by type: "all", "network", or "filesystem" (default "all") |
| `--wide` |  | Show detailed rule-level output with rule IDs and resources |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

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

  # Include inactive rules hidden by remote governance
  sbx policy ls --include-inactive
```
