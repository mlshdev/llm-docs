> Pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_uninstall-runner.yaml](https://github.com/docker/docs/blob/7d6c8bf81ab88fc6f5c4893b6259864d29de574c/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_uninstall-runner.yaml)

# docker model uninstall-runner

Uninstall Docker Model Runner (Docker Engine only)

**Usage:** `docker model uninstall-runner`

## Description

Uninstall Docker Model Runner (Docker Engine only)

## Options

| Option      | Default | Description                                         |
| ----------- | ------- | --------------------------------------------------- |
| `--backend` |         | Uninstall a deferred backend (e.g. vllm, diffusers) |
| `--images`  |         | Remove docker/model-runner images                   |
| `--models`  |         | Remove model storage volume                         |
