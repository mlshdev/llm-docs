> Commit-pinned source for Docker main: [data/cli/engine/docker_context_update.yaml](https://github.com/docker/docs/blob/432aa8fa3c1b4c3500e6795ee5090f427ce28efb/data/cli/engine/docker_context_update.yaml)

# docker context update

Update a context

**Usage:** `docker context update [OPTIONS] CONTEXT`

## Description

Updates an existing `context`.
See [context create](/reference/cli/docker/context/create/).

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--description` |  | Description of the context |
| `--docker` |  | set the docker endpoint |

## Examples

### Update an existing context

```console
$ docker context update \
    --description "some description" \
    --docker "host=tcp://myserver:2376,ca=~/ca-file,cert=~/cert-file,key=~/key-file" \
    my-context
```
