> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy_check.yaml](https://github.com/docker/docs/blob/034d46977dac45d2a9493f2465b08108ac3cf87b/data/sbx_cli/sbx_policy_check.yaml)

# sbx policy check

Check whether policy allows an access request

**Usage:** `sbx policy check COMMAND`

## Description

Check whether the current sandbox policy would authorize an access request.

The check is read-only and evaluates the same daemon-side policy authorizer
used by sandbox network enforcement.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
