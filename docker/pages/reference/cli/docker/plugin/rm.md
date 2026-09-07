> Commit-pinned source for Docker main: [data/cli/engine/docker_plugin_rm.yaml](https://github.com/docker/docs/blob/42a44992f49bda99e0caf2b015f0cfb0bb0c488c/data/cli/engine/docker_plugin_rm.yaml)

# docker plugin rm

Remove one or more plugins

**Usage:** `docker plugin rm [OPTIONS] PLUGIN [PLUGIN...]`

**Aliases:** docker plugin rm, docker plugin remove

## Description

Removes a plugin. You cannot remove a plugin if it is enabled, you must disable
a plugin using the [`docker plugin disable`](/reference/cli/docker/plugin/disable/) before removing
it, or use `--force`. Use of `--force` is not recommended, since it can affect
functioning of running containers using the plugin.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--force` |  | Force the removal of an active plugin |

## Examples

The following example disables and removes the `sample-volume-plugin:latest`
plugin:

```console
$ docker plugin disable tiborvass/sample-volume-plugin

tiborvass/sample-volume-plugin

$ docker plugin rm tiborvass/sample-volume-plugin:latest

tiborvass/sample-volume-plugin
```
