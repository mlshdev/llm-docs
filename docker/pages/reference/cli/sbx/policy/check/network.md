> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy_check_network.yaml](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/data/sbx_cli/sbx_policy_check_network.yaml)

# sbx policy check network

Check network access to a host

**Usage:** `sbx policy check network [--sandbox SANDBOX] TARGET [flags]`

## Description

Check whether current policy allows network access to TARGET.

TARGET may be a hostname, host:port, IP literal, or URL. Bare hosts and IP
literals are evaluated with port 443. HTTP(S) URLs use their default ports;
other URL schemes must include an explicit port.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--json` |  | Output in JSON format |
| `--sandbox` |  | Evaluate in a specific sandbox policy context |
| `--verbose` |  | Show the exact policy request fields |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Check global network policy
  sbx policy check network api.example.com

  # Check policy in a sandbox context
  sbx policy check network --sandbox my-sandbox api.example.com:443

  # Check a pasted URL and output JSON
  sbx policy check network --json https://api.example.com/v1
```
