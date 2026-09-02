> Commit-pinned source for Docker main: [data/cli/dhi/docker_dhi_catalog_list.yaml](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/data/cli/dhi/docker_dhi_catalog_list.yaml)

# docker dhi catalog list

List available Docker Hardened Images

**Usage:** `docker dhi catalog list`

## Description

List all available Docker Hardened Images and Helm charts in the catalog

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--filter` |  | Filter by name (case-insensitive substring match) |
| `--fips` |  | Filter to FIPS compliant images (use --fips=false to exclude) |
| `--json` |  | Output in JSON format |
| `--stig` |  | Filter to STIG certified images (use --stig=false to exclude) |
| `--type` |  | Filter by type (image, helm, chart, or helm-chart) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--org` |  | Docker Hub organization (overrides config) |
