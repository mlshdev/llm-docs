> Pinned source for Docker main: [data/sbx_cli/sbx_policy_ls.yaml](https://github.com/docker/docs/blob/c98501277b974550688eeed803c975e2665d6468/data/sbx_cli/sbx_policy_ls.yaml)

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

With --cloud:
List the cloud network policy's default mode and allow and deny patterns.

Without SANDBOX, show the account policy. Specify a sandbox name or ID to show
its policy. Cloud rules have no rule IDs; use "sbx --cloud policy rm network"
with --resource to remove a pattern.

## Options

| Option               | Default | Description                                                                                |
| -------------------- | ------- | ------------------------------------------------------------------------------------------ |
| `--created-via`      |         | Filter policies by how they were created: "default", "added", "provisioned", or "approval" |
| `--decision`         |         | Filter policies by decision: "allow" or "deny"                                             |
| `--format`           |         | Output format: table, json or yaml                                                         |
| `--include-inactive` |         | Show inactive policy rules hidden by remote governance                                     |
| `--json`             |         | Output in JSON format                                                                      |
| `--protocol`         |         | Filter network rules by protocol: tcp or udp                                               |
| `-q`, `--quiet`      |         | Only display rule IDs (network patterns with --cloud)                                      |
| `--source`           |         | Filter policies by source: "local", "org", or "kit"                                        |
| `--type`             | `all`   | Filter policies by type: "all", "network", "http", "filesystem" (default "all")            |
| `--wide`             |         | Show detailed rule-level output with rule IDs and resources                                |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

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

  # List only rule IDs
  sbx policy ls -q

  # List only network policies
  sbx policy ls --type network

  # List organization policies that deny access
  sbx policy ls --source org --decision deny

  # List persistent rules created from approval prompts
  sbx policy ls --wide --created-via approval

  # Include inactive rules hidden by remote governance
  sbx policy ls --include-inactive

  # Show the account policy
  sbx --cloud policy ls

  # Show one sandbox's policy
  sbx --cloud policy ls my-sandbox

  # Output the policy as JSON
  sbx --cloud policy ls --format json

  # List only network patterns
  sbx --cloud policy ls -q
```
