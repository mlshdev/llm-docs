> Commit-pinned source for Docker main: [data/cli/mcp/docker_mcp_profile_config.yaml](https://github.com/docker/docs/blob/fbdfa1488763a18a7fada0ea1fd24134ffe0fcff/data/cli/mcp/docker_mcp_profile_config.yaml)

# docker mcp profile config

Update the configuration of a profile

**Usage:** `docker mcp profile config <profile-id> [--set <config-arg1> <config-arg2> ...] [--get <config-key1> <config-key2> ...] [--del <config-arg1> <config-arg2> ...]`

## Description

Update the configuration of a profile

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--del` |  | Delete configuration values: <key> (can be specified multiple times) |
| `--format` | `human` | Supported: json, yaml, human. |
| `--get` |  | Get configuration values: <key> (can be specified multiple times) |
| `--get-all` |  | Get all configuration values |
| `--set` |  | Set configuration values: <key>=<value> (repeatable). Value may be JSON to set typed values (arrays, numbers, booleans, objects). |
