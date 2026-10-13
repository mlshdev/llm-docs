> Pinned source for Docker main: [data/cli/mcp/docker_mcp_catalog_show.yaml](https://github.com/docker/docs/blob/9643ba0813ea4290a7ab1f206dddaf7683f39edd/data/cli/mcp/docker_mcp_catalog_show.yaml)

# docker mcp catalog show

Show a catalog

**Usage:** `docker mcp catalog show <oci-reference> [--pull <pull-option>]`

## Description

Show a catalog

## Options

| Option       | Default | Description                                                                                                                    |
| ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `--format`   | `human` | Supported: json, yaml, human.                                                                                                  |
| `--no-tools` |         | Exclude tools from output (deprecated, use --yq instead)                                                                       |
| `--pull`     | `never` | Supported: missing, never, always, initial, exists, or duration (e.g. '1h', '1d'). Duration represents time since last update. |
| `--yq`       |         | YQ expression to apply to the output                                                                                           |
