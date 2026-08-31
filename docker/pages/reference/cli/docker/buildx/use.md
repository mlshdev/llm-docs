> Commit-pinned source for Docker main: [data/cli/buildx/docker_buildx_use.yaml](https://github.com/docker/docs/blob/ca60e92629079de412f38632876ab208d84267ef/data/cli/buildx/docker_buildx_use.yaml)

# docker buildx use

Set the current builder instance

**Usage:** `docker buildx use [OPTIONS] NAME`

## Description

Switches the current builder instance. Build commands invoked after this command
will run on a specified builder. Alternatively, a context name can be used to
switch to the default builder of that context.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--default` |  | Set builder as default for current context |
| `--global` |  | Builder persists context changes |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--builder` |  | Override the configured builder instance |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

### Override the configured builder instance (--builder) {#builder}

Same as [`buildx --builder`](/reference/cli/docker/buildx/#builder).
