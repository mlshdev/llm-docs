> Pinned source for Docker main: [data/cli/engine/docker_container_inspect.yaml](https://github.com/docker/docs/blob/938f943d945d222a29f8615cadf03ff536f895a8/data/cli/engine/docker_container_inspect.yaml)

# docker container inspect

Display detailed information on one or more containers

**Usage:** `docker container inspect [OPTIONS] CONTAINER [CONTAINER...]`

## Description

Display detailed information on one or more containers

## Options

| Option           | Default | Description                                                                                                                                                                                                                             |
| ---------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-f`, `--format` |         | Format output using a custom template: 'json': Print in JSON format 'TEMPLATE': Print output using the given Go template. Refer to <https://docs.docker.com/go/formatting/> for more information about formatting output with templates |
| `-s`, `--size`   |         | Display total file sizes                                                                                                                                                                                                                |
