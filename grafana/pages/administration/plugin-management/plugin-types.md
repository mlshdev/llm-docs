> Release-pinned source for Grafana v13.2.1: [docs/sources/administration/plugin-management/plugin-types.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/administration/plugin-management/plugin-types.md)

# Types of plugins

Grafana supports three types of plugins:

- [Panels](https://grafana.com/grafana/plugins/panel-plugins) - These plugins make it easy to create and add any kind of panel, to show your data, or improve your favorite dashboards.
- [Data sources](https://grafana.com/grafana/plugins/data-source-plugins) - These plugins allow you to pull data from various data sources such as databases, APIs, log files, and so on, and display it in the form of graphs, charts, and dashboards in Grafana.
- [Apps](https://grafana.com/grafana/plugins/app-plugins) - These plugins enable the bundling of data sources, panels, dashboards, and Grafana pages into a cohesive experience.

## Panel plugins

Add new visualizations to your dashboard with panel plugins, such as the [Clock](https://grafana.com/grafana/plugins/grafana-clock-panel), [Mosaic](https://grafana.com/grafana/plugins/boazreicher-mosaicplot-panel) and [Variable](https://grafana.com/grafana/plugins/volkovlabs-variable-panel) panels.

Use panel plugins when you want to:

- Visualize data returned by data source queries.
- Navigate between dashboards.
- Control external systems, such as smart home devices.

## Data source plugins

Data source plugins add support for new databases, such as [Google BigQuery](https://grafana.com/grafana/plugins/grafana-bigquery-datasource).

Data source plugins communicate with external sources of data and return the data in a format that Grafana understands. By adding a data source plugin, you can immediately use the data in any of your existing dashboards.

Use data source plugins when you want to query data from external or third-party systems.

### Managing access for data source plugins

Administrators can grant access to data source plugins with [LBAC](https://grafana.com/docs/grafana/v13.2/administration/data-source-management/teamlbac/).

Label Based Access Control (LBAC) customizes access rights based on team memberships, ensuring that users only query data relevant to their assigned permissions.

## App plugins

Applications, or app plugins, bundle data sources and panels to provide a cohesive experience, such as the [Zabbix](https://grafana.com/grafana/plugins/alexanderzobnin-zabbix-app) app.

Apps can also add custom pages for things like control panels.

Use app plugins when you want an out-of-the-box monitoring experience.

### Managing access for app plugins

Customize access to app plugins with [RBAC](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/access-control/rbac-for-app-plugins/).

By default, the Viewer, Editor and Admin roles have access to all app plugins that their Organization role allows them to access.

Access is granted by the `fixed:plugins.app:reader` role.

> **Note**
>
> To prevent users from seeing an app plugin, refer to [these permissions scenarios](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/access-control/plan-rbac-rollout-strategy/#prevent-viewers-from-accessing-an-app-plugin).
