> Commit-pinned source for Docker main: [data/cli/buildx/docker_buildx_imagetools.yaml](https://github.com/docker/docs/blob/b98c400647c70f3e2177d513802d5d785aef232e/data/cli/buildx/docker_buildx_imagetools.yaml)

# docker buildx imagetools

Commands to work on images in registry

**Usage:** `docker buildx imagetools`

## Description

The `imagetools` commands contains subcommands for working with manifest lists
in container registries. These commands are useful for inspecting manifests
to check multi-platform configuration and attestations.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--builder` |  | Override the configured builder instance |
| `-D`, `--debug` |  | Enable debug logging |

## Subcommands

- [`docker buildx imagetools create`](https://docs.docker.com/reference/cli/docker/buildx/imagetools/create/)
- [`docker buildx imagetools inspect`](https://docs.docker.com/reference/cli/docker/buildx/imagetools/inspect/)

## Examples

### Override the configured builder instance (--builder) {#builder}

Same as [`buildx --builder`](/reference/cli/docker/buildx/#builder).
