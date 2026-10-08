> Pinned source for Docker main: [data/sbx_cli/sbx_version.yaml](https://github.com/docker/docs/blob/858251609b8884594fd1de29c51155bc3024b260/data/sbx_cli/sbx_version.yaml)

# sbx version

Show Docker Sandboxes version information

**Usage:** `sbx version`

## Options

| Option   | Default | Description                                                                                                            |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `--json` |         | Output in JSON format, including the server version and, when the backend reports them, the runtime component versions |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
