> Pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_uninstall-runner.yaml](https://github.com/docker/docs/blob/4e9a5751518ed8223a8dcde53693badddd72604f/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_uninstall-runner.yaml)

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
