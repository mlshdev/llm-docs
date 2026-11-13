> Pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_list.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_list.yaml)

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
