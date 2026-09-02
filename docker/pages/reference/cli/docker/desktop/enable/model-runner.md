> Commit-pinned source for Docker main: [data/cli/desktop/docker_desktop_enable_model_runner.yaml](https://github.com/docker/docs/blob/c596433b17b6e062376dcd24395336f316e1714a/data/cli/desktop/docker_desktop_enable_model_runner.yaml)

# docker desktop enable model-runner

Manage Docker Model Runner settings

**Usage:** `docker desktop enable model-runner [OPTIONS]`

## Description

Enable and manage Docker Model Runner settings used by 'docker model'

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--no-tcp` |  | Disable TCP connection. Cannot be used with --tcp. |
| `--tcp` | `12434` | Enable or change TCP port for connection (1-65535). Cannot be used with --no-tcp. |
| `--cors` | `all` | CORS configuration. Can be `all`, `none`, or comma-separated list of allowed origins. |
| `--gpu` |  | Enable GPU support for Model Runner (Windows only). |
