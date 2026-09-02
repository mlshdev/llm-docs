> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/monitor-status/view-alert-state.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/monitor-status/view-alert-state.md)

# View alert state

An alert rule and its corresponding alert instances can transition through distinct states during the alert rule evaluation.

![A diagram of the distinct alert instance states and transitions.](https://grafana.com/media/docs/alerting/alert-rule-evaluation-full-statediagram_v3.svg)

There are three key components that helps us understand the behavior of our alerts:

- [Alert Instance State](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rule-evaluation/nodata-and-error-states/#alert-instance-states): Refers to the state of the individual alert instances.
- [Alert Rule State](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rule-evaluation/alert-rule-state-and-health/): Determined by the "worst state" among its alert instances.
- [Alert Rule Health](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rule-evaluation/alert-rule-state-and-health/): Indicates the status in cases of `Error` or `NoData` events.

## View alert rule and instance states

To view the details of your alert rules and the status of alert instances:

1. Click **Alerts & IRM** -> **Alerting**.
2. Click **Alert rules** to view the list of existing alert rules.

![View alert rule state and alert rule health in Grafana Alerting](https://grafana.com/media/docs/alerting/view-alert-rule-list-with-actions2.png)

Each alert rule shows its state, summary, and available actions such as **Pause evaluation**, **Silence notifications**, **Export**, **Delete**, and more.

1. Click on an alert rule to view additional details and its resulting alert instances.

### View from the alert rule details page

To view more alert rule details, complete the following steps.

1. Click **Alerts & IRM** -> **Alerting** -> **Alert rules**.
2. Click to expand an alert rule.
3. Click the alert name to go to the alert details view.

![Alert rule view page in Grafana Alerting](https://grafana.com/media/docs/alerting/alert-rule-view-page-with-breadcrumb.png)

The namespace and group are shown in the breadcrumb navigation. They are interactive and can be used to filter rules by namespace or group.

The rest of the alert detail content is split up into tabs:

**Query and conditions**

View the details of the query that is used for the alert rule, including the expressions and intermediate values for each step of the expression pipeline. A graph view is included for range queries and data sources that return time series-like data frames.

**Instances**

Explore each alert instance, its status, labels and various other metadata for multi-dimensional alert rules.

Use **Search by label** to enter search criteria using label selectors. For example, `environment=production,region=~US|EU,severity!=warning`.

**History**

Explore the recorded history for an alert rule. You can also filter by alert state.

**Details**

Debug or audit using the alert rule metadata and view the alert rule annotations.

## View alert state on panels

When an [alert rule is linked to a time series panel](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/link-alert-rules-to-panels/), the time series panel displays the alert state and alert events.

A heart icon near the panel title shows the current alert state:

- A broken red heart when the alert is in `Alerting` state.
- A green heart when the alert is in `Normal` state.

Colored annotations indicate changes in alert state, such as pending, alerting, and resolving.

![A panel with a firing alert and annotations that display the pending and alerting state changes.](https://grafana.com/media/docs/alerting/panel-displays-alert-state.png)

Additionally, Grafana provides an [alert list panel](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/alert-list/) that you can add to a dashboard to display a list of alerts and their states.

![Two alert list panels displaying distinct lists of alerts.](https://grafana.com/static/img/docs/alert-list-panel/alert-list-panel.png)

You can configure the alert list panel with various visualization options and filters to control how alerts are displayed. For more details, refer to the [Alert list documentation](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/alert-list/).

[this demo dashboard with alert list panels and linked alert rules in Grafana Play](https://play.grafana.org/d/000000074/alerting?tech=docs\&pg=alerting-demo\&plcmt=callout-play\&cta=alert-demo-dashboard)
