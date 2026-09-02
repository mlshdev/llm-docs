> Release-pinned source for Grafana v13.2.1: [docs/sources/administration/plugin-management/plugin-frontend-sandbox.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/administration/plugin-management/plugin-frontend-sandbox.md)

# Isolate plugin code with the Plugin Frontend Sandbox

> **Caution**
>
> Plugin Frontend Sandbox is currently in [public preview](https://grafana.com/docs/release-life-cycle/). Grafana Labs offers limited support, and breaking changes might occur prior to the feature being made generally available.

The Plugin Frontend Sandbox is a security feature that isolates plugin frontend code from the main Grafana application. When enabled, plugins run in a separate JavaScript context, which provides several security benefits:

- Prevents plugins from modifying parts of the Grafana interface outside their designated areas
- Stops plugins from interfering with other plugins functionality
- Protects core Grafana features from being altered by plugins
- Prevents plugins from modifying global browser objects and behaviors

Plugins running inside the Frontend Sandbox should continue to work normally without any noticeable changes in their intended functionality.

## When to use the Plugin Frontend Sandbox

We strongly recommend enabling the Frontend Sandbox for plugins that allow users to write custom JavaScript code for data visualization or manipulation, since they can potentially execute arbitrary JavaScript code in your Grafana instance. The sandbox provides an additional layer of security by restricting what this code can access and modify.

These are examples of plugins where the sandbox is particularly useful:

- Panel plugins that allow users to write custom JavaScript code
- Plugins from untrusted sources

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
3. If the plugin only works with the sandbox disabled, ensure you trust the plugin source before continuing to use it without sandbox protection
4. Report any sandbox-related issues to the plugin developer
