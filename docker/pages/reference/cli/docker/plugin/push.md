> Pinned source for Docker main: [data/cli/engine/docker_plugin_push.yaml](https://github.com/docker/docs/blob/ae6b9eeae1463ed0dc5fd03d3ca5ffd2c29d6383/data/cli/engine/docker_plugin_push.yaml)

# docker plugin push

Push a plugin to a registry

**Usage:** `docker plugin push [OPTIONS] PLUGIN[:TAG]`

## Description

After you have created a plugin using `docker plugin create` and the plugin is
ready for distribution, use `docker plugin push` to share your images to Docker
Hub or a self-hosted registry.

Registry credentials are managed by [docker login](https://docs.docker.com/reference/cli/docker/login/).

## Examples

The following example shows how to push a sample `user/plugin`.

```console
$ docker plugin ls

ID             NAME                    DESCRIPTION                  ENABLED
69553ca1d456   user/plugin:latest      A sample plugin for Docker   false

$ docker plugin push user/plugin
```
