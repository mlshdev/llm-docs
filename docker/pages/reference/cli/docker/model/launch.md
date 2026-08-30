> Commit-pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_launch.yaml](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_launch.yaml)

# docker model launch

Launch an app configured to use Docker Model Runner

**Usage:** `docker model launch [APP] [-- APP_ARGS...]`

## Description

Launch an app configured to use Docker Model Runner.

Without arguments, lists all supported apps.

Supported apps: anythingllm, claude, codex, openclaw, opencode, openwebui

Examples:
  docker model launch
  docker model launch opencode
  docker model launch claude -- --help
  docker model launch openwebui --port 3000
  docker model launch claude --config

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--config` |  | Print configuration without launching |
| `--detach` |  | Run containerized app in background |
| `--dry-run` |  | Print what would be executed without running it |
| `--image` |  | Override container image for containerized apps |
| `--model` |  | Model to use (for opencode) |
| `--port` |  | Host port to expose (web UIs) |
