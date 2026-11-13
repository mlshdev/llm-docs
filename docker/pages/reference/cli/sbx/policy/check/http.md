> Pinned source for Docker main: [data/sbx_cli/sbx_policy_check_http.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/data/sbx_cli/sbx_policy_check_http.yaml)

# sbx policy check http

Check HTTP access to a URL

**Usage:** `sbx policy check http [--sandbox SANDBOX] [--method METHOD] URL [flags]`

## Description

Evaluate current policy for an HTTP request to URL.

URL must be an absolute HTTP or HTTPS URL. The check evaluates network access
first, then evaluates HTTP method, path, and query policy when it applies. It
does not resolve hostnames, make a network request, or account for runtime
transport behavior. Transparent connections that require HTTP authorization are
blocked at runtime, while daemon-managed aliases can be reachable regardless of
the policy result. Results for hostnames do not include policy applied to their
resolved IP addresses. The displayed URL retains the target's host spelling;
with --verbose, Resource shows the normalized host and port evaluated by policy.

## Options

| Option            | Default | Description                                   |
| ----------------- | ------- | --------------------------------------------- |
| `--format`        |         | Output format: table, json or yaml            |
| `--json`          |         | Output in JSON format                         |
| `--method`        | `GET`   | HTTP method to evaluate                       |
| `--sandbox`       |         | Evaluate in a specific sandbox policy context |
| `-v`, `--verbose` |         | Show the policy action and resource           |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
# Check a GET request
  sbx policy check http https://api.example.com/v1/items

  # Check a POST request in a sandbox context
  sbx policy check http --sandbox my-sandbox --method POST https://api.example.com/v1/items

  # Check a query-qualified request and output JSON
  sbx policy check http --json 'https://api.example.com/search?team=platform'
```
