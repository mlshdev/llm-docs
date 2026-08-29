> Release-pinned source for Grafana v13.2.0: [docs/sources/visualizations/panels-visualizations/visualizations/alert-list/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/visualizations/panels-visualizations/visualizations/alert-list/index.md)

# Alert list

Alert lists allow you to display a list of important alerts that you want to track. You can configure the alert list to show the current state of your alert, such as firing, pending, or normal. Learn more about alerts in [Grafana Alerting overview](https://grafana.com/docs/grafana/v13.2/alerting/).

![An alert list visualization](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-alert-list-v11.3.png)

On each dashboard load, this visualization queries the alert list, always providing the most up-to-date results.

[Alert List in Grafana Play](https://play.grafana.org/d/bdodlcyou483ke/)

## Configure an alert list

Once you’ve [created a dashboard](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/create-dashboard/), the following video shows you how to configure an alert list visualization:

[Watch the video on YouTube](https://www.youtube.com/watch?v=o4rK7_AXZ9Y)

## Configuration options

The following section describes the configuration options available in the panel editor pane for this visualization. These options are, as much as possible, ordered as they appear in Grafana.

### Panel options

In the **Panel options** section of the panel editor pane, set basic options like panel title and description, as well as panel links. To learn more, refer to [Configure panel options](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-panel-options/).

### Options

Use the following options to refine your alert list visualization.

| Option                          | Description                                                                                                                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| View mode                       | Choose between **List** to display alerts in a detailed list format with comprehensive information, or **Stat** to show alerts as a summarized single-value statistic.           |
| Group mode                      | Choose between **Default grouping** to show alert instances grouped by their alert rule, or **Custom grouping** to show alert instances grouped by a custom set of labels.       |
| Group by                        | When **Custom grouping** is selected, choose label keys to group alert instances.                                                                                                |
| Max items                       | Sets the maximum number of alerts to list when **Group mode** is **Default grouping**. This option is hidden for **Custom grouping**. By default, Grafana sets this value to 20. |
| [Sort order](#sort-order)       | Select how to order the alerts displayed.                                                                                                                                        |
| Alerts linked to this dashboard | Toggle the switch on to only show alerts from the dashboard the alert list is in.                                                                                                |

#### Sort order

Select how to order the alerts displayed. Choose from:

- **Alphabetical (asc)** - Alphabetical order.
- **Alphabetical (desc)** - Reverse alphabetical order.
- **Importance** - By importance according to the following values, with 1 being the highest:
  - alerting: 1
  - firing: 1
  - no\_data: 2
  - pending: 3
  - ok: 4
  - paused: 5
  - inactive: 5
- **Time (asc)** - Oldest active alert instances first.
- **Time (desc)** - Newest active alert instances first.

### Filter options

These options allow you to limit alerts shown to only those that match the query, folder, or tags you choose.

| Option                       | Description                                                                                                                                                                                                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alert name                   | Filter alerts by name.                                                                                                                                                                                                                                                    |
| Alert instance label         | Filter alert instances using [label](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rules/annotation-label/) querying. For example,`{severity="critical", instance=~"cluster-us-.+"}`.                                                                |
| Datasource                   | Filter alerts from the selected data source.                                                                                                                                                                                                                              |
| Folder                       | Filter Grafana-managed alert rules by alert rule folder. This option is available only when **Datasource** is empty or set to **Grafana**. It doesn't filter by dashboard folder.                                                                                         |
| Show alerts with 0 instances | Filter for alert rules with no instances. Alert rules with 0 (zero) instances are hidden by default. You can choose to show them by toggling this switch. Because these rules have no instances, they remain hidden if the **Alert instance label** filter is configured. |

### Alert state filter options

Choose which alert states to display in this visualization.

| Option            | Description                                                                                                       |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| Alerting / Firing | Shows alerts that are currently active and triggering an alert condition.                                         |
| Pending           | Shows alerts that are in a transitional state, waiting for conditions to be met before triggering.                |
| No Data           | Shows alerts where the data source is not returning any data, which could indicate an issue with data collection. |
| Recovering        | Shows alerts in a recovering state after the alert condition is resolved.                                         |
| Normal            | Shows alerts that are in a normal or resolved state, where no alert condition is currently met.                   |
| Error             | Shows alerts where an error has occurred, typically related to an issue in the alerting process.                  |
