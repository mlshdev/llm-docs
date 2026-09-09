> Commit-pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_launch.yaml](https://github.com/docker/docs/blob/22e32a82b28b6dabf125325fe9cd79133dc1de4a/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_launch.yaml)

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
