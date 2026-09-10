> Commit-pinned source for Docker main: [data/cli/engine/docker_image_inspect.yaml](https://github.com/docker/docs/blob/c4f0e5b32deb9d3365c1f0be62305038a24e15e5/data/cli/engine/docker_image_inspect.yaml)

# docker image inspect

Display detailed information on one or more images

**Usage:** `docker image inspect [OPTIONS] IMAGE [IMAGE...]`

## Description

Display detailed information on one or more images

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--format` |  | Format output using a custom template: 'json': Print in JSON format 'TEMPLATE': Print output using the given Go template. Refer to https://docs.docker.com/go/formatting/ for more information about formatting output with templates |
| `--platform` |  | Inspect a specific platform of the multi-platform image. If the image or the server is not multi-platform capable, the command will error out if the platform does not match. 'os[/arch[/variant]]': Explicit platform (eg. linux/amd64) (API 1.49+) |
