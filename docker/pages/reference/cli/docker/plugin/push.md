> Commit-pinned source for Docker main: [data/cli/engine/docker_plugin_push.yaml](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/data/cli/engine/docker_plugin_push.yaml)

# docker plugin push

Push a plugin to a registry

**Usage:** `docker plugin push [OPTIONS] PLUGIN[:TAG]`

## Description

After you have created a plugin using `docker plugin create` and the plugin is
ready for distribution, use `docker plugin push` to share your images to Docker
Hub or a self-hosted registry.

Registry credentials are managed by [docker login](/reference/cli/docker/login/).

## Examples

The following example shows how to push a sample `user/plugin`.

```console
$ docker plugin ls

ID             NAME                    DESCRIPTION                  ENABLED
69553ca1d456   user/plugin:latest      A sample plugin for Docker   false

$ docker plugin push user/plugin
```
