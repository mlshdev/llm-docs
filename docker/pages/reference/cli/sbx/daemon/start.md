> Pinned source for Docker main: [data/sbx_cli/sbx_daemon_start.yaml](https://github.com/docker/docs/blob/18bbfeeb249da011f359d558dba84c4b6dc3a335/data/sbx_cli/sbx_daemon_start.yaml)

# sbx daemon start

Start the sandboxd daemon

**Usage:** `sbx daemon start [flags]`

## Options

| Option           | Default | Description                                                                  |
| ---------------- | ------- | ---------------------------------------------------------------------------- |
| `-d`, `--detach` |         | Run daemon in background                                                     |
| `--policy`       |         | Initialize the global network policy: "allow-all", "balanced", or "deny-all" |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
