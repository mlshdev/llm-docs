> Commit-pinned source for Docker main: [data/cli/engine/docker_network_inspect.yaml](https://github.com/docker/docs/blob/fbdfa1488763a18a7fada0ea1fd24134ffe0fcff/data/cli/engine/docker_network_inspect.yaml)

# docker network inspect

Display detailed information on one or more networks

**Usage:** `docker network inspect [OPTIONS] NETWORK [NETWORK...]`

## Description

Returns information about one or more networks. By default, this command renders
all results in a JSON object.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--format` |  | Format output using a custom template: 'json': Print in JSON format 'TEMPLATE': Print output using the given Go template. Refer to https://docs.docker.com/go/formatting/ for more information about formatting output with templates |
| `-v`, `--verbose` |  | Verbose output for diagnostics |
