> Commit-pinned source for Docker main: [data/cli/mcp/docker_mcp_catalog_show.yaml](https://github.com/docker/docs/blob/2054b419afd87a3232f2e77366a561e172e27c67/data/cli/mcp/docker_mcp_catalog_show.yaml)

# docker mcp catalog show

Show a catalog

**Usage:** `docker mcp catalog show <oci-reference> [--pull <pull-option>]`

## Description

Show a catalog

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--format` | `human` | Supported: json, yaml, human. |
| `--no-tools` |  | Exclude tools from output (deprecated, use --yq instead) |
| `--pull` | `never` | Supported: missing, never, always, initial, exists, or duration (e.g. '1h', '1d'). Duration represents time since last update. |
| `--yq` |  | YQ expression to apply to the output |
