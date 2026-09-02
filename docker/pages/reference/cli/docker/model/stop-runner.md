> Commit-pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_stop-runner.yaml](https://github.com/docker/docs/blob/2028912e0e64869c14702deec64ba2ef5cc10441/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_stop-runner.yaml)

# docker model stop-runner

Stop Docker Model Runner (Docker Engine only)

**Usage:** `docker model stop-runner`

## Description

This command stops the Docker Model Runner by removing the running containers, but preserves the container images on disk. Use this command when you want to temporarily stop the runner but plan to start it again later.

To completely remove the runner including images, use `docker model uninstall-runner --images` instead.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--models` |  | Remove model storage volume |
