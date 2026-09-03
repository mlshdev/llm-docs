> Commit-pinned source for Docker main: [data/cli/buildx/docker_buildx_history_import.yaml](https://github.com/docker/docs/blob/ec568fb193997abb62fc206183b30ba01498291d/data/cli/buildx/docker_buildx_history_import.yaml)

# docker buildx history import

Import build records into Docker Desktop

**Usage:** `docker buildx history import [OPTIONS] -`

## Description

Import a build record from a `.dockerbuild` archive into Docker Desktop. This
lets you view, inspect, and analyze builds created in other environments or CI
pipelines.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--file` |  | Import from a file path |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--builder` |  | Override the configured builder instance |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

### Import a `.dockerbuild` archive from standard input

```console
docker buildx history import < mybuild.dockerbuild
```

### Import a build archive from a file (--file) {#file}

```console
docker buildx history import --file ./artifacts/backend-build.dockerbuild
```

### Open a build manually

By default, the `import` command automatically opens the imported build in Docker
Desktop. You don't need to run `open` unless you're opening a specific build
or re-opening it later.

If you've imported multiple builds, you can open one manually:

```console
docker buildx history open ci-build
```
