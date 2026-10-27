> Pinned source for Grafana v13.3.0: [docs/sources/alerting/fundamentals/alert-rule-evaluation/evaluation-within-a-group.md](https://github.com/grafana/grafana/blob/752e3462ff71a43a5c1fb62d00a482fa2dc0ee6a/docs/sources/alerting/fundamentals/alert-rule-evaluation/evaluation-within-a-group.md)

# How rules are evaluated within a group

Each evaluation group contains an **evaluation interval** that determines how frequently the rule is evaluated. For instance, the evaluation may occur every `10s`, `30s`, `1m`, `10m`, etc.

Rules in different evaluation groups can be evaluated simultaneously.

Rules within the same evaluation group can be evaluated simultaneously or sequentially, depending on the rule type:

- **Grafana-managed** rules within the same group are evaluated concurrently—they are evaluated at different times over the same evaluation interval but display the same evaluation timestamp.

- **Data source-managed** rules within the same group are evaluated sequentially, one after the other—this is useful to ensure that recording rules are evaluated before alert rules.

- **Grafana-managed rules [imported from data source-managed rules](https://grafana.com/docs/grafana/v13.3/alerting/alerting-rules/alerting-migration/)** are also evaluated sequentially, in the order they appear in the original rule group. Grafana runs them as an evaluation sequence: each rule starts after the previous one finishes. This preserves the evaluation order when a rule depends on a preceding recording rule.

For Grafana-managed rules that depend on recording rule results, you can define an explicit evaluation order with a rule sequence. The sequence evaluates recording rules first, followed by alert rules, at a shared interval. For instructions, refer to [Configure rule sequences](https://grafana.com/docs/grafana/v13.3/alerting/alerting-rules/rule-sequences/).
