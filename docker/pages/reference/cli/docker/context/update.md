> Pinned source for Docker main: [data/cli/engine/docker_context_update.yaml](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/data/cli/engine/docker_context_update.yaml)

# docker context update

Update a context

**Usage:** `docker context update [OPTIONS] CONTEXT`

## Description

Updates an existing `context`.
See [context create](https://docs.docker.com/reference/cli/docker/context/create/).

## Options

| Option          | Default | Description                |
| --------------- | ------- | -------------------------- |
| `--description` |         | Description of the context |
| `--docker`      |         | set the docker endpoint    |

## Examples

````console
### Update an existing context

```console
$ docker context update \
    --description "some description" \
    --docker "host=tcp://myserver:2376,ca=~/ca-file,cert=~/cert-file,key=~/key-file" \
    my-context
````

```
```
