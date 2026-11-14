> Pinned source for Docker main: [data/sbx_cli/sbx_df.yaml](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/data/sbx_cli/sbx_df.yaml)

# sbx df

Show runtime disk usage

**Usage:** `sbx df [flags]`

## Description

Show disk usage for local images, containers, and managed volumes.

Image totals include stored blobs and snapshots, count shared layers once,
and include retained data without tags. Active images and volumes are referenced
by a container, including stopped containers. Active containers are running or
paused.

Reclaimable space is an estimate for removing unused resources of each type,
not the space that "sbx prune" alone removes. Detached writable layers are
included in the container total. Shared filesystem blocks, leases,
and concurrent activity can reduce or delay space recovered. Host bind mounts,
logs, and caches are excluded. Unavailable measurements show as unknown.
Cloud disk usage is not supported.

## Options

| Option            | Default | Description                                     |
| ----------------- | ------- | ----------------------------------------------- |
| `--format`        |         | Output format: table, json or yaml              |
| `--json`          |         | Output in JSON format                           |
| `-v`, `--verbose` |         | Show individual images, containers, and volumes |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
# Show a disk usage summary
  sbx df

  # Show individual images, containers, and volumes
  sbx df --verbose

  # Output in JSON format
  sbx df --format json
```
