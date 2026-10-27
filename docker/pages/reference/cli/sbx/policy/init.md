> Pinned source for Docker main: [data/sbx_cli/sbx_policy_init.yaml](https://github.com/docker/docs/blob/370c82d98701ada95ec149a7a8ee8bd469e20bcc/data/sbx_cli/sbx_policy_init.yaml)

# sbx policy init

Initialize the global network policy

**Usage:** `sbx policy init allow-all|balanced|deny-all [flags]`

## Description

Initialize the global network policy before starting a sandbox or adding
custom rules. Per-sandbox rules apply on top of this policy.

Choose a policy:

- allow-all: Allow all outbound network traffic.
- balanced: Allow typical development traffic, including AI services and package registries.
- deny-all: Block all outbound network traffic.

After initialization, use sbx policy allow/deny/rm to change the rules.
Initialization is a one-time setup. Use sbx policy reset to clear all policies
and start over.

With --cloud:
Set the default network mode of the cloud policy.

There is no one-time setup: init sets the default mode for the account, or for
one sandbox with --sandbox, keeps the existing allow and deny rules, and can be
run again. balanced is deny-all plus the balanced allow list added to the scope.
Use "sbx --cloud policy reset" to clear the rules first.

## Options

| Option      | Default | Description                                         |
| ----------- | ------- | --------------------------------------------------- |
| `--sandbox` |         | Target a single cloud sandbox's policy (cloud only) |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# Initialize with the balanced policy — recommended
  sbx policy init balanced

  # Allow all traffic
  sbx policy init allow-all

  # Block everything, then allow specific sites
  sbx policy init deny-all
  sbx policy allow network api.example.com:443

  # Set the account default to balanced
  sbx --cloud policy init balanced

  # Block everything for one sandbox, keeping its allow rules
  sbx --cloud policy init deny-all --sandbox my-sandbox
```
