> Pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_requests.yaml](https://github.com/docker/docs/blob/947343021a3e1eea022cbede8df39387717343f9/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_requests.yaml)

# docker model requests

Fetch requests+responses from Docker Model Runner

**Usage:** `docker model requests [OPTIONS]`

## Description

Fetch requests+responses from Docker Model Runner

## Options

| Option               | Default | Description                                                                      |
| -------------------- | ------- | -------------------------------------------------------------------------------- |
| `-f`, `--follow`     |         | Follow requests stream                                                           |
| `--include-existing` |         | Include existing requests when starting to follow (only available with --follow) |
| `--model`            |         | Specify the model to filter requests                                             |
