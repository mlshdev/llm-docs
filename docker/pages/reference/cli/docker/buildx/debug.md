> Pinned source for Docker main: [data/cli/buildx/docker_buildx_debug.yaml](https://github.com/docker/docs/blob/226023fc89bdeb3f051c4c8c697d04ed5f5bcd2c/data/cli/buildx/docker_buildx_debug.yaml)

# docker buildx debug

Start debugger

> \[!NOTE]
> This command is experimental.

## Description

Start debugger

## Options

| Option     | Default | Description                                                      |
| ---------- | ------- | ---------------------------------------------------------------- |
| `--invoke` |         | Launch a monitor with executing specified command (Experimental) |
| `--on`     | `error` | When to launch the monitor (\[always, error]) (Experimental)     |

## Global options

| Option          | Default | Description                              |
| --------------- | ------- | ---------------------------------------- |
| `--builder`     |         | Override the configured builder instance |
| `-D`, `--debug` |         | Enable debug logging                     |

## Subcommands

- [`docker buildx debug build`](https://docs.docker.com/reference/cli/docker/buildx/debug/build/)
