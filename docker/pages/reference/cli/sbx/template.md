> Pinned source for Docker main: [data/sbx_cli/sbx_template.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/sbx_cli/sbx_template.yaml)

# sbx template

Manage sandbox templates

**Usage:** `sbx template COMMAND`

## Description

Manage sandbox templates.

Templates are saved snapshots of sandboxes that can be reused to create new
sandboxes with: sbx run --pull never -t TAG AGENT \[WORKSPACE]

With --cloud:
Manage cloud sandbox templates.

Reuse a saved template with: sbx --cloud run --template TEMPLATE

Cloud snapshots and loads typically produce multi-GB artifacts and take
several minutes. See <https://docs.docker.com/ai/sandboxes/> for details.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
