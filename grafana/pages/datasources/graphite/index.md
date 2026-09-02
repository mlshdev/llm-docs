> Release-pinned source for Grafana v13.2.1: [docs/sources/datasources/graphite/_index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/datasources/graphite/_index.md)

# Graphite data source

Grafana includes built-in support for Graphite.
This topic explains options, variables, querying, and other features specific to the Graphite data source, which include its feature-rich query editor.

For instructions on how to add a data source to Grafana, refer to the [administration documentation](https://grafana.com/docs/grafana/v13.2/administration/data-source-management/).

Once you've added the Graphite data source, you can configure it so that your Grafana instance's users can create queries in its [query editor](https://grafana.com/docs/grafana/v13.2/datasources/graphite/query-editor/) when they [build dashboards](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/) and use [Explore](https://grafana.com/docs/grafana/v13.2/explore/).

[Graphite: Sample Website Dashboard in Grafana Play](https://play.grafana.org/d/000000003/)

Grafana exposes metrics for Graphite on the `/metrics` endpoint.
For detailed instructions, refer to [Internal Grafana metrics](https://grafana.com/docs/grafana/v13.2/setup-grafana/set-up-grafana-monitoring/).

## Get Grafana metrics into Graphite

Grafana exposes metrics for Graphite on the `/metrics` endpoint.
Refer to [Internal Grafana metrics](https://grafana.com/docs/grafana/v13.2/setup-grafana/set-up-grafana-monitoring/) for more information.

## Graphite and Loki integration

When you change the data source selection in [Explore](https://grafana.com/docs/grafana/v13.2/explore/), Graphite queries are converted to Loki queries.
Grafana extracts Loki label names and values from the Graphite queries according to mappings provided in the Graphite data source configuration. Grafana automatically transforms queries using tags with `seriesByTags()` without requiring additional setup.

## Get the most out of the data source

After installing and configuring the Graphite data source you can:

- Create a wide variety of [visualizations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/)
- Configure and use [templates and variables](https://grafana.com/docs/grafana/v13.2/dashboards/variables/)
- Add [transformations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/transform-data/)
- Add [annotations](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/annotate-visualizations/)
- Set up [alerting](https://grafana.com/docs/grafana/v13.2/alerting/)
- [Troubleshoot](https://grafana.com/docs/grafana/v13.2/datasources/graphite/troubleshooting/) common issues with the Graphite data source
