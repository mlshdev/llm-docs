> Commit-pinned source for Docker main: [data/cli/buildx/docker_buildx.yaml](https://github.com/docker/docs/blob/034d46977dac45d2a9493f2465b08108ac3cf87b/data/cli/buildx/docker_buildx.yaml)

# docker buildx

Docker Buildx

**Usage:** `docker buildx`

## Description

Extended build capabilities with BuildKit

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--builder` |  | Override the configured builder instance |
| `-D`, `--debug` |  | Enable debug logging |

## Subcommands

- [`docker buildx bake`](https://docs.docker.com/reference/cli/docker/buildx/bake/)
- [`docker buildx build`](https://docs.docker.com/reference/cli/docker/buildx/build/)
- [`docker buildx create`](https://docs.docker.com/reference/cli/docker/buildx/create/)
- [`docker buildx dap`](https://docs.docker.com/reference/cli/docker/buildx/dap/)
- [`docker buildx debug`](https://docs.docker.com/reference/cli/docker/buildx/debug/)
- [`docker buildx dial-stdio`](https://docs.docker.com/reference/cli/docker/buildx/dial-stdio/)
- [`docker buildx du`](https://docs.docker.com/reference/cli/docker/buildx/du/)
- [`docker buildx history`](https://docs.docker.com/reference/cli/docker/buildx/history/)
- [`docker buildx imagetools`](https://docs.docker.com/reference/cli/docker/buildx/imagetools/)
- [`docker buildx inspect`](https://docs.docker.com/reference/cli/docker/buildx/inspect/)
- [`docker buildx ls`](https://docs.docker.com/reference/cli/docker/buildx/ls/)
- [`docker buildx policy`](https://docs.docker.com/reference/cli/docker/buildx/policy/)
- [`docker buildx prune`](https://docs.docker.com/reference/cli/docker/buildx/prune/)
- [`docker buildx rm`](https://docs.docker.com/reference/cli/docker/buildx/rm/)
- [`docker buildx stop`](https://docs.docker.com/reference/cli/docker/buildx/stop/)
- [`docker buildx use`](https://docs.docker.com/reference/cli/docker/buildx/use/)
- [`docker buildx version`](https://docs.docker.com/reference/cli/docker/buildx/version/)

## Examples

### Override the configured builder instance (--builder) {#builder}

You can also use the `BUILDX_BUILDER` environment variable.

### Enable the default policy

Set `BUILDX_DEFAULT_POLICY=1` to enable Buildx's built-in source policy. The
policy verifies signed tags for images managed by Docker, including BuildKit
builder images and Dockerfile frontends. Untagged digest references and images
outside the managed repositories are allowed unchanged. Tagged references
that also contain a digest still have their release identity verified.
