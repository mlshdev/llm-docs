> Pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_requests.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_requests.yaml)

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
