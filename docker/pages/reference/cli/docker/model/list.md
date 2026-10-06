> Pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_list.yaml](https://github.com/docker/docs/blob/d745218a0918016144f1ba0d98222b75b21bf65a/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_list.yaml)

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
