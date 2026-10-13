> Pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_uninstall-runner.yaml](https://github.com/docker/docs/blob/9643ba0813ea4290a7ab1f206dddaf7683f39edd/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_uninstall-runner.yaml)

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
