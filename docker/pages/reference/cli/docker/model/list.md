> Pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_list.yaml](https://github.com/docker/docs/blob/7efe90099b0a1ac8295c099f13abf8ac173ec46b/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_list.yaml)

# docker model list

List the models pulled to your local environment

**Usage:** `docker model list [OPTIONS] [MODEL]`

**Aliases:** docker model list, docker model ls

## Description

List the models pulled to your local environment

## Options

| Option          | Default | Description                                            |
| --------------- | ------- | ------------------------------------------------------ |
| `--json`        |         | List models in a JSON format                           |
| `--openai`      |         | List models in an OpenAI format                        |
| `--openaiurl`   |         | OpenAI-compatible API endpoint URL to list models from |
| `-q`, `--quiet` |         | Only show model IDs                                    |
