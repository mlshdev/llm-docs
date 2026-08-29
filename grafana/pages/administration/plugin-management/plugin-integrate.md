> Release-pinned source for Grafana v13.2.0: [docs/sources/administration/plugin-management/plugin-integrate.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/administration/plugin-management/plugin-integrate.md)

# Allow plugin backend communication

By default, you can only communicate with plugin backends remotely.

However, you can configure your Grafana instance to let the frontends of installed plugins to directly communicate with the backends of other plugins installed locally. You can use this configuration to, for example, enable a [canvas panel](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/canvas/) to call an application resource API that is permitted by the `actions_allow_post_url` option.

## Integrate your plugins

To enable backend communication between plugins, set the plugins you want to communicate with. In your configuration file (`grafana.ini` or `custom.ini` depending on your operating system), remove the semicolon to enable and then set the following configuration option:

```
  actions_allow_post_url=
```

This is a comma-separated list that uses glob matching.

- To allow access to all plugins that have a backend, use:

```
actions_allow_post_url=/api/plugins/*
```

- To access the backend of only one plugin, use:

```
actions_allow_post_url=/api/plugins/<GRAFANA_SPECIAL_APP>
```
