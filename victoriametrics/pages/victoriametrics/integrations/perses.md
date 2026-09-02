> Release-pinned source for VictoriaMetrics v1.151.0: [docs/victoriametrics/integrations/perses.md](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/83fc70c6aced8c99a0a445a872ee891191b98517/docs/victoriametrics/integrations/perses.md)

VictoriaMetrics integrates with [Perses](https://perses.dev/) via [Prometheus plugins](https://perses.dev/plugins/docs/prometheus/).

![Overview VictoriaMetrics Perses integration](https://raw.githubusercontent.com/VictoriaMetrics/VictoriaMetrics/83fc70c6aced8c99a0a445a872ee891191b98517/docs/victoriametrics/integrations/perses-overview.webp)

# Plugins setup

## Datasource plugin

- Go to `http://<perses-url>/projects/<project-name>/datasources` and click `ADD DATASOURCE`.
- Fill `Name` field with desired datasource name and select `Prometheus Datasource` in `Source` dropdown.
- Choose `Proxy` or `Direct access` depending on the [public availability](https://perses.dev/perses/docs/concepts/proxy/) of your VictoriaMetrics instance.
- Click `Save` to submit.

![Prometheus datasource plugin configuration](https://raw.githubusercontent.com/VictoriaMetrics/VictoriaMetrics/83fc70c6aced8c99a0a445a872ee891191b98517/docs/victoriametrics/integrations/perses-datasource.webp)

## Variables plugin

- Go to `http://<perses-url>/projects/<project-name>/variables` and click `ADD VARIABLE`.
- Fill `Name` field with desired variable name.
- Select `List` in `Type` dropdown.
- Select `Prometheus Label Values Variable` in `Source` dropdown.
- Select the Prometheus datasource you previously created from the `Prometheus Datasource` dropdown.
- Type the name of a label in `Label Name` field.
- Click `Save` to submit.

![Prometheus variables plugin configuration](https://raw.githubusercontent.com/VictoriaMetrics/VictoriaMetrics/83fc70c6aced8c99a0a445a872ee891191b98517/docs/victoriametrics/integrations/perses-variable.webp)

# Create panels

## Time Series Panel

- Go to project dashboard page `http://<perses-url>/projects/<project-name>/dashboards/<dashboard-name>`, click `Edit` and then `Panel` buttons.
- Fill `Name` field with desired panel name.
- Select `Time Series Chart` in `Type` dropdown.
- Select `Prometheus Time Series Query` in `Query Type` dropdown.
- Select the Prometheus datasource you configured above from the `Prometheus Datasource` dropdown.
- Type a valid [MetricsQL expression](https://docs.victoriametrics.com/victoriametrics/metricsql/) in `PromQL Expression` field.
  It may reference a variable defined in variables plugin section using `${var-name}` expression or with specific formats like `${var:pipe}` for regex filters or `${var:csv}` for comma-separated values.
- Click `Add` to save a panel.

![Build Time Series panel using Prometheus plugin](https://raw.githubusercontent.com/VictoriaMetrics/VictoriaMetrics/83fc70c6aced8c99a0a445a872ee891191b98517/docs/victoriametrics/integrations/perses-time-panel.webp)
