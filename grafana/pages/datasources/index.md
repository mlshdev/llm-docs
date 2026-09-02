> Release-pinned source for Grafana v13.2.1: [docs/sources/datasources/_index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/datasources/_index.md)

# Data sources

A *data source* in Grafana is a connection to a storage backend that holds your data, such as a Prometheus server, a Loki instance, a SQL database, or a cloud monitoring service. Grafana queries data sources to retrieve the stored data (e.g. metrics, logs, traces, and profiles) that it then visualizes in dashboards and Explore.

Grafana comes with built-in support for many data sources.
If you need other data sources, you can also install one of the many data source plugins.
If the plugin you need doesn't exist, you can develop a custom plugin.

Each data source comes with a *query editor*,
which formulates custom queries according to the source's structure.
After you add and configure a data source, you can use it as an input for many operations, including:

- Query the data with [Explore](https://grafana.com/docs/grafana/v13.2/explore/).
- Visualize it in [panels](https://grafana.com/docs/grafana/v13.2/panels-visualizations/).
- Create rules for [alerts](https://grafana.com/docs/grafana/v13.2/alerting/).

This documentation describes how to manage data sources in general,
and how to configure or query the built-in data sources.

For other available plugins, refer to the list of [documented plugins](https://grafana.com/docs/plugins/) or browse the [Plugin catalog](https://grafana.com/grafana/plugins/). To develop a custom plugin, refer to [Create a data source plugin](#create-a-data-source-plugin).

> **Note**
>
> Grafana Cloud includes pre-configured data sources for Prometheus, Loki, and Tempo, so you can start querying without additional setup. Refer to [Grafana Cloud documentation](https://grafana.com/docs/grafana-cloud/) for details.

## Manage data sources

Only users with the [organization administrator role](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/#organization-roles) can add or remove data sources.
To access data source management tools in Grafana as an administrator, navigate to **Connections > Data sources** in the left-side menu.

For details on data source management, including instructions on how to configure user permissions for queries, refer to the [administration documentation](https://grafana.com/docs/grafana/v13.2/administration/data-source-management/).

By default, any user in an organization can query any data source in that organization. With [Grafana Enterprise](https://grafana.com/docs/grafana/v13.2/introduction/grafana-enterprise/) or Grafana Cloud, you can configure **data source permissions** to restrict query, edit, and admin access to specific users, teams, or roles. Refer to the [data source management documentation](https://grafana.com/docs/grafana/v13.2/administration/data-source-management/) for details.

## Add a data source

Before you can create your first dashboard, you need to add your data source.

> **Note**
>
> Only users with the organization admin role can add data sources.

**To add a data source:**

1. Click **Connections** in the left-side menu.
2. Enter the name of a specific data source in the search dialog. You can filter by **Data source** to only see data sources.
3. Click the data source you want to add.
4. Configure the data source following instructions specific to that data source.

You can mark one data source as the **Default** by toggling the option on its configuration page. The default data source is pre-selected when you create new panels, navigate to Explore, or create alert rules.

## Query editors

Each data source's **query editor** provides a customized user interface that helps you write queries that take advantage of its unique capabilities.
You use a data source's query editor when you create queries in [dashboard panels](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/) or [Explore](https://grafana.com/docs/grafana/v13.2/explore/).

Because of the differences between query languages, each data source query editor looks and functions differently.
Depending on your data source, the query editor might provide auto-completion features, metric names, variable suggestions, or a visual query-building interface.

For general information about querying in Grafana, and common options and user interface elements across all query editors, refer to [Query and transform data](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/).

## Provision data sources

You can define and manage data sources as code using the Grafana provisioning system. This lets you configure data sources through YAML files or Terraform instead of the Grafana UI, which is useful for automated deployments and version-controlled configuration.

For more information, refer to [Provision data sources](https://grafana.com/docs/grafana/v13.2/administration/provisioning/#data-sources).

## Special data sources

Grafana includes three special data sources:

### Grafana

A built-in data source that generates random walk data and can poll the [TestData](https://grafana.com/docs/grafana/v13.2/datasources/testdata/) data source. Additionally, it can list files and get other data from a Grafana installation. This can be helpful for testing visualizations and running experiments.

### Mixed

An abstraction that lets you query multiple data sources in the same panel. When you select Mixed, you can then select a different data source for each new query that you add.

- The first query uses the data source that was selected before you selected **Mixed**.
- You can't change an existing query to use the **Mixed** data source.

[Mixed Datasources Example in Grafana Play](https://play.grafana.org/d/000000100/)

### Dashboard

A data source that uses the result set from another panel in the same dashboard. The dashboard data source can use data either directly from the selected panel or from annotations attached to the selected panel.

[Panel as a Data Source in Grafana Play](https://play.grafana.org/d/ede8zps8ndb0gc/)

## Built-in core data sources

Grafana ships with the following core data sources, organized by their primary use case.

### Metrics and time series

- [AWS CloudWatch](https://grafana.com/docs/grafana/v13.2/datasources/aws-cloudwatch/)
- [Azure Monitor](https://grafana.com/docs/grafana/v13.2/datasources/azure-monitor/)
- [Google Cloud Monitoring](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/)
- [Graphite](https://grafana.com/docs/grafana/v13.2/datasources/graphite/)
- [InfluxDB](https://grafana.com/docs/grafana/v13.2/datasources/influxdb/)
- [OpenTSDB](https://grafana.com/docs/grafana/v13.2/datasources/opentsdb/)
- [Prometheus](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/)

### Logs

- [Elasticsearch](https://grafana.com/docs/grafana/v13.2/datasources/elasticsearch/)
- [Loki](https://grafana.com/docs/grafana/v13.2/datasources/loki/)

### Traces

- [Jaeger](https://grafana.com/docs/grafana/v13.2/datasources/jaeger/)
- [Tempo](https://grafana.com/docs/grafana/v13.2/datasources/tempo/)
- [Zipkin](https://grafana.com/docs/grafana/v13.2/datasources/zipkin/)

### Profiles

- [Parca](https://grafana.com/docs/grafana/v13.2/datasources/parca/)
- [Pyroscope](https://grafana.com/docs/grafana/v13.2/datasources/pyroscope/)

### SQL databases

- [Microsoft SQL Server (MSSQL)](https://grafana.com/docs/grafana/v13.2/datasources/mssql/)
- [MySQL](https://grafana.com/docs/grafana/v13.2/datasources/mysql/)
- [PostgreSQL](https://grafana.com/docs/grafana/v13.2/datasources/postgres/)

### Alerting

- [Alertmanager](https://grafana.com/docs/grafana/v13.2/datasources/alertmanager/)

### Testing and debugging

- [TestData](https://grafana.com/docs/grafana/v13.2/datasources/testdata/)

## Add additional data source plugins

You can add additional data sources as plugins (that aren't available in core Grafana), which you can install or create yourself.

### Find data source plugins in the plugin catalog

To view available data source plugins, go to the [plugin catalog](https://grafana.com/grafana/plugins/?type=datasource) and select the "Data sources" filter.
For details about the plugin catalog, refer to [Plugin management](https://grafana.com/docs/grafana/v13.2/administration/plugin-management/).

You can further filter the plugin catalog's results for data sources provided by the Grafana community, Grafana Labs, and partners.
If you use [Grafana Enterprise](https://grafana.com/docs/grafana/v13.2/introduction/grafana-enterprise/), you can also filter by Enterprise-supported plugins.

For more documentation on a specific data source plugin's features, including its query language and editor, refer to its plugin catalog page.

### Create a data source plugin

To build your own data source plugin, refer to the [Build a data source plugin](https://grafana.com/developers/plugin-tools/tutorials/build-a-data-source-plugin) tutorial and [Plugin tools](https://grafana.com/developers/plugin-tools).

## Correlate data across data sources

Grafana lets you link related data across different data sources so you can jump from one signal to another during investigations. For example, you can navigate from a trace span to related logs, or from a log line to metrics for the same service.

You can set up these links in two ways:

- **Data source configuration:** Tracing data sources like Tempo, Jaeger, and Zipkin include built-in settings for trace-to-logs, trace-to-metrics, and trace-to-profiles links.
- **Correlations:** A more flexible, general-purpose feature that lets you define rules to link data between any data sources. Refer to [Correlations](https://grafana.com/docs/grafana/v13.2/administration/correlations/) for details.

## Troubleshoot data sources

If you run into issues with a data source, refer to [Troubleshoot data sources](https://grafana.com/docs/grafana/v13.2/datasources/troubleshooting/) for solutions to common problems like connection errors, authentication failures, and empty query results.

Each built-in data source also has its own troubleshooting page with guidance specific to that data source.

## Next steps

After you've configured a data source, you can:

- **Build a dashboard:** Click the **Build a dashboard** drop-down list on the data source configuration page and select **From suggestions** to open a dialog box with suggested dashboards based on the data source type. For more information, refer to [Create dashboards from suggestions](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/create-template-dashboards/) or [Create a dashboard](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/create-dashboard/).
- **Explore your data:** Use [Explore](https://grafana.com/docs/grafana/v13.2/explore/) to run free-form queries without creating a dashboard.
- **Set up alerts:** Create [alert rules](https://grafana.com/docs/grafana/v13.2/alerting/) to get notified when your data meets certain conditions.
- **Use template variables:** Create dynamic, reusable dashboards with [template variables](https://grafana.com/docs/grafana/v13.2/dashboards/variables/).
- **Add annotations:** Overlay [annotations](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/annotate-visualizations/) on your graphs to mark events and correlate them with metrics.
- **Transform query results:** Apply [transformations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/) to manipulate and combine data from multiple sources.
- **Enable query caching:** Improve dashboard performance and reduce backend load with [query and resource caching](https://grafana.com/docs/grafana/v13.2/administration/data-source-management/#query-and-resource-caching) (available in Grafana Enterprise and Grafana Cloud).
