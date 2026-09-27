> Pinned source for Docker main: [data/sbx_cli/sbx_diagnose.yaml](https://github.com/docker/docs/blob/4e9a5751518ed8223a8dcde53693badddd72604f/data/sbx_cli/sbx_diagnose.yaml)

# sbx diagnose

Diagnose common issues with your sbx installation

**Usage:** `sbx diagnose`

## Options

| Option           | Default | Description                                     |
| ---------------- | ------- | ----------------------------------------------- |
| `--json`         |         | Output in JSON format (alias for --output json) |
| `-o`, `--output` |         | Output format: "json" or "github-issue"         |
| `--upload`       |         | Upload diagnostics to Docker support            |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
