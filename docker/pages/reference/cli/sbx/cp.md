> Pinned source for Docker main: [data/sbx_cli/sbx_cp.yaml](https://github.com/docker/docs/blob/53581df94e05ad4116a8d31e47ea098289fa5498/data/sbx_cli/sbx_cp.yaml)

# sbx cp

Copy files or directories between a sandbox and the host

**Usage:** `sbx cp SRC DST [flags]`

## Description

Either SRC or DST must be a sandbox path, written as SANDBOX:PATH.
The other must be a local path. Copying between two sandboxes is not supported. Or — with --cloud — the cloud sandbox
ID (sbx\_\*) or name from "sbx --cloud ls". Cloud transfers go through the Docker
Sandboxes Cloud file API instead of the local sandboxd.

When copying a directory, the directory itself is placed at the destination.
If the destination path does not exist it is created; if it already exists
as a directory, the source is placed inside it.

When a local path is inside a sandbox workspace, sbx cp refuses symbolic
links that lead out of the workspace, even with --follow-link, including
when the workspace is reached through a symbolic link or junction to it.

## Options

| Option                | Default | Description                              |
| --------------------- | ------- | ---------------------------------------- |
| `-L`, `--follow-link` |         | Follow symbolic links in the source path |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# Copy a file from host to sandbox
  sbx cp ./config.json my-sandbox:/home/user/

  # Copy a file from sandbox to host
  sbx cp my-sandbox:/home/user/output.log ./

  # Copy a directory
  sbx cp ./src/ my-sandbox:/home/user/src

  # Copy to/from a cloud sandbox
  sbx --cloud cp ./config.json sbx_abc:/workspace/config.json
  sbx --cloud cp sbx_abc:/workspace/out.log ./
```
