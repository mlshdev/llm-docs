> Pinned source for Docker main: [data/cli/engine/docker_container_inspect.yaml](https://github.com/docker/docs/blob/f90928eb2040c4638e188868a612fd47e6a061a4/data/cli/engine/docker_container_inspect.yaml)

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
