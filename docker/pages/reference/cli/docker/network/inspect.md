> Pinned source for Docker main: [data/cli/engine/docker_network_inspect.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/data/cli/engine/docker_network_inspect.yaml)

# docker network inspect

Display detailed information on one or more networks

**Usage:** `docker network inspect [OPTIONS] NETWORK [NETWORK...]`

## Description

Returns information about one or more networks. By default, this command renders
all results in a JSON object.

## Options

| Option            | Default | Description                                                                                                                                                                                                                             |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-f`, `--format`  |         | Format output using a custom template: 'json': Print in JSON format 'TEMPLATE': Print output using the given Go template. Refer to <https://docs.docker.com/go/formatting/> for more information about formatting output with templates |
| `-v`, `--verbose` |         | Verbose output for diagnostics                                                                                                                                                                                                          |
