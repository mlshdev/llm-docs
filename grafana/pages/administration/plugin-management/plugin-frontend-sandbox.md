> Pinned source for Grafana v13.3.0: [docs/sources/administration/plugin-management/plugin-frontend-sandbox.md](https://github.com/grafana/grafana/blob/752e3462ff71a43a5c1fb62d00a482fa2dc0ee6a/docs/sources/administration/plugin-management/plugin-frontend-sandbox.md)

# Improve security with the Plugins Frontend Sandbox

> **Caution**
>
> The Plugin Frontend Sandbox [public preview](https://grafana.com/docs/release-life-cycle/) has been deprecated and will
> be removed in Grafana 13.4.

The Plugin Frontend Sandbox helps keep a plugin's frontend code focused on the plugin's own area of the Grafana interface.

Plugins running inside the Frontend Sandbox should continue to work normally without any noticeable changes in their intended functionality.

## Intended use

The Frontend Sandbox affects how a plugin interacts with the Grafana interface by adding extra controls to reduce the browser capabilities available to plugin code running within Grafana.

> **Warning**
>
> Never install plugins from sources you do not trust.

## Compatibility and requirements

The following applies:

- The Frontend Sandbox is available in public preview in Grafana >=11.5. It's compatible with all types of plugins including app plugins, panel plugins, and data source plugins.
- Angular-based plugins are not supported.
- Plugins developed and signed by Grafana Labs are excluded and cannot be sandboxed.

## Enable the Frontend Sandbox

For self-hosted Grafana installations, add the plugin IDs you want to sandbox in the `security` section using the `enable_frontend_sandbox_for_plugins` configuration option.

For Grafana Cloud users, you can simply use the toggle switch in the plugin catalog page to enable or disable the sandbox for each plugin. By default, the sandbox is disabled for all plugins.

> **Note**
>
> Enabling the Frontend Sandbox might impact the performance of certain plugins. Only disable the sandbox if you fully trust the plugin and understand the security implications.

## Troubleshooting

If a plugin isn't functioning correctly with the Frontend Sandbox enabled:

1. Temporarily disable the sandbox for that specific plugin
2. Test if the plugin works correctly without the sandbox
3. If the plugin only works with the sandbox disabled, confirm the plugin comes from a source you trust before continuing to use it
4. Report any sandbox-related issues to the plugin developer
