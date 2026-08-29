> Release-pinned source for Grafana v13.2.0: [docs/sources/alerting/fundamentals/alert-rule-evaluation/evaluation-within-a-group.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/alerting/fundamentals/alert-rule-evaluation/evaluation-within-a-group.md)

# How rules are evaluated within a group

Each evaluation group contains an **evaluation interval** that determines how frequently the rule is evaluated. For instance, the evaluation may occur every `10s`, `30s`, `1m`, `10m`, etc.

Rules in different evaluation groups can be evaluated simultaneously.

Rules within the same evaluation group can be evaluated simultaneously or sequentially, depending on the rule type:

- **Grafana-managed** rules within the same group are evaluated concurrently—they are evaluated at different times over the same evaluation interval but display the same evaluation timestamp.

- **Data source-managed** rules within the same group are evaluated sequentially, one after the other—this is useful to ensure that recording rules are evaluated before alert rules.

- **Grafana-managed rules [imported from data source-managed rules](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/alerting-migration/)** are also evaluated sequentially.
