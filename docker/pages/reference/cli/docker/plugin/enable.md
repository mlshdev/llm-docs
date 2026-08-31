> Commit-pinned source for Docker main: [data/cli/engine/docker_plugin_enable.yaml](https://github.com/docker/docs/blob/652986790ecf1ddf1081149f29da132a95207a04/data/cli/engine/docker_plugin_enable.yaml)

# docker plugin enable

Enable a plugin

**Usage:** `docker plugin enable [OPTIONS] PLUGIN`

## Description

Enables a plugin. The plugin must be installed before it can be enabled,
see [`docker plugin install`](/reference/cli/docker/plugin/install/).

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--timeout` | `30` | HTTP client timeout (in seconds) |

## Examples

The following example shows that the `sample-volume-plugin` plugin is installed,
but disabled:

```console
$ docker plugin ls

ID            NAME                                    DESCRIPTION                ENABLED
69553ca1d123  tiborvass/sample-volume-plugin:latest   A test plugin for Docker   false
```

To enable the plugin, use the following command:

```console
$ docker plugin enable tiborvass/sample-volume-plugin

tiborvass/sample-volume-plugin

$ docker plugin ls

ID            NAME                                    DESCRIPTION                ENABLED
69553ca1d123  tiborvass/sample-volume-plugin:latest   A test plugin for Docker   true
```
