> Commit-pinned source for Docker main: [data/cli/buildx/docker_buildx_rm.yaml](https://github.com/docker/docs/blob/d47e43dee68bd9cbd16af81b1aa6aef45023e17c/data/cli/buildx/docker_buildx_rm.yaml)

# docker buildx rm

Remove one or more builder instances

**Usage:** `docker buildx rm [OPTIONS] [NAME...]`

## Description

Removes the specified or current builder. It is a no-op attempting to remove the
default builder.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--all-inactive` |  | Remove all inactive builders |
| `-f`, `--force` |  | Do not prompt for confirmation |
| `--keep-daemon` |  | Keep the BuildKit daemon running |
| `--keep-state` |  | Keep BuildKit state |
| `--timeout` | `20s` | Override the default timeout for loading builder status |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--builder` |  | Override the configured builder instance |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

### Remove all inactive builders (--all-inactive) {#all-inactive}

Remove builders that are not in running state.

```console
$ docker buildx rm --all-inactive
WARNING! This will remove all builders that are not in running state. Are you sure you want to continue? [y/N] y
```

### Override the configured builder instance (--builder) {#builder}

Same as [`buildx --builder`](/reference/cli/docker/buildx/#builder).

### Do not prompt for confirmation (--force) {#force}

Do not prompt for confirmation before removing inactive builders.

```console
$ docker buildx rm --all-inactive --force
```

### Keep the BuildKit daemon running (--keep-daemon) {#keep-daemon}

Keep the BuildKit daemon running after the buildx context is removed. This is
useful when you manage BuildKit daemons and buildx contexts independently.
Only supported by the
[`docker-container`](/build/drivers/docker-container/)
and [`kubernetes`](/build/drivers/kubernetes/) drivers.

### Keep BuildKit state (--keep-state) {#keep-state}

Keep BuildKit state, so it can be reused by a new builder with the same name.
Currently, only supported by the [`docker-container` driver](/build/drivers/docker-container/).
