> Release-pinned source for Grafana v13.2.0: [docs/sources/alerting/set-up/configure-alert-state-history/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/alerting/set-up/configure-alert-state-history/index.md)

# Configure alert state history

Alerting can record all alert rule state changes for your Grafana managed alert rules in a Loki or Prometheus instance, or in both.

- With Prometheus, you can query the `GRAFANA_ALERTS` metric for alert state changes in **Grafana Explore**.
- With Loki, you can query and view alert state changes in **Grafana Explore** and the [Grafana Alerting History views](https://grafana.com/docs/grafana/v13.2/alerting/monitor-status/view-alert-state-history/).

## Configure Loki for alert state

The following steps describe a basic configuration:

1. **Configure Loki**

   The default Loki settings might need some tweaking as the state history view might query up to 30 days of data.

   The following change to the default configuration should work for most instances, but look at the full Loki configuration settings and adjust according to your needs.

   ```yaml
   limits_config:
     split_queries_by_interval: '24h'
     max_query_parallelism: 32
   ```

   As this might impact the performances of an existing Loki instance, use a separate Loki instance for the alert state history.

2. **Configure Grafana**

   The following Grafana configuration instructs Alerting to write alert state history to a Loki instance:

   ```toml
   [unified_alerting.state_history]
   enabled = true
   backend = loki

   # The URL of the Loki server
   loki_remote_url = http://localhost:3100
   ```

3. **Configure the Loki data source in Grafana**

   Add the [Loki data source](https://grafana.com/docs/grafana/v13.2/datasources/loki/) to Grafana.

If everything is set up correctly, you can access the [History view and History page](https://grafana.com/docs/grafana/v13.2/alerting/monitor-status/view-alert-state-history/) to view and filter alert state history. You can also use **Grafana Explore** to query the Loki instance, see [Alerting Meta monitoring](https://grafana.com/docs/grafana/v13.2/alerting/monitor/) for details.

## Configure Prometheus for alert state (GRAFANA\_ALERTS metric)

You can also configure a Prometheus instance to store alert state changes for your Grafana-managed alert rules. However, this setup does not enable the **Grafana Alerting History views**, as Loki does.

Instead, Grafana Alerting writes alert state data to the `GRAFANA_ALERTS` metric-similar to how Prometheus Alerting writes to the `ALERTS` metric.

```
GRAFANA_ALERTS{alertname="", alertstate="", grafana_alertstate="", grafana_rule_uid="", <additional alert labels>}
```

The following steps describe a basic configuration:

1. **Configure Prometheus**

   Enable the remote write receiver in your Prometheus instance by setting the `--web.enable-remote-write-receiver` command-line flag. This enables the endpoint to receive alert state data from Grafana Alerting.

2. **Configure the Prometheus data source in Grafana**

   Add the [Prometheus data source](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/) to Grafana.

   In the [Prometheus data source configuration options](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/configure/), set the **Prometheus type** to match your Prometheus instance type. Grafana Alerting uses this option to identify the remote write endpoint.

3. **Configure Grafana**

   The following Grafana configuration instructs Alerting to write alert state history to a Prometheus instance:

   ```toml
   [unified_alerting.state_history]
   enabled = true
   backend = prometheus
   # Target data source UID for writing alert state changes.
   prometheus_target_datasource_uid = <DATA_SOURCE_UID>

   # (Optional) Metric name for the alert state metric. Default is "GRAFANA_ALERTS".
   # prometheus_metric_name = GRAFANA_ALERTS
   # (Optional)  Timeout for writing alert state data to the target data source. Default is 10s.
   # prometheus_write_timeout = 10s
   ```

You can then use **Grafana Explore** to query the alert state metric. For details, refer to [Alerting Meta monitoring](https://grafana.com/docs/grafana/v13.2/alerting/monitor/).

```promQL
GRAFANA_ALERTS{alertstate='firing'}
```

## Configure Loki and Prometheus for alert state

You can also configure both Loki and Prometheus to record alert state changes for your Grafana-managed alert rules.

Start with the same setup steps as shown in the previous [Loki](#configure-loki-for-alert-state) and Prometheus sections. Then, adjust your Grafana configuration as follows:

```toml
[unified_alerting.state_history]
enabled = true
backend = multiple

primary = loki
# URL of the Loki server.
loki_remote_url = http://localhost:3100

secondaries = prometheus
# Target data source UID for writing alert state changes.
prometheus_target_datasource_uid = <DATA_SOURCE_UID>

```
