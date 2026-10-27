> Pinned source for Grafana v13.3.0: [docs/sources/visualizations/panels-visualizations/visualizations/alert-list/index.md](https://github.com/grafana/grafana/blob/752e3462ff71a43a5c1fb62d00a482fa2dc0ee6a/docs/sources/visualizations/panels-visualizations/visualizations/alert-list/index.md)

# Alert list

Alert lists allow you to display a list of important alerts that you want to track. You can configure the alert list to show the current state of your alert, such as firing, pending, or normal. Learn more about alerts in [Grafana Alerting overview](https://grafana.com/docs/grafana/v13.3/alerting/).

![An alert list visualization](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-alert-list-v11.3.png)

On each dashboard load, this visualization queries the alert list, always providing the most up-to-date results.
It shows only alerts that are currently active, and doesn't support historical alerts or dashboard time range filtering.

[Alert List in Grafana Play](https://play.grafana.org/d/bdodlcyou483ke/)

## Configure an alert list

Once you’ve [created a dashboard](https://grafana.com/docs/grafana/v13.3/dashboards/build-dashboards/create-dashboard/), the following video shows you how to configure an alert list visualization:

[Watch the video on YouTube](https://www.youtube.com/watch?v=o4rK7_AXZ9Y)

## Configuration options

The following section describes the configuration options available in the panel editor pane for this visualization. These options are, as much as possible, ordered as they appear in Grafana.

### Panel options

In the **Panel options** section of the panel editor pane, set options like the panel title, description, and show/hide rules.
To learn more, refer to [Configure panel options](https://grafana.com/docs/grafana/v13.3/visualizations/panels-visualizations/configure-panel-options/).

| Option                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title                  | Text entered in this field appears at the top of your panel in the panel editor and in the dashboard. You can use [variables you have defined](https://grafana.com/docs/grafana/v13.3/visualizations/dashboards/variables/) or [built-in variables](https://grafana.com/docs/grafana/v13.3/visualizations/dashboards/variables/built-in-variables).                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Description            | Add a description to a panel to share with users any important information about it, such as its purpose. Text entered in this field appears in a tooltip in the upper-left corner of the panel. Conversely, toggle on the **Use as subtitle** switch to display the description just below the panel title instead. You can use [variables you have defined](https://grafana.com/docs/grafana/v13.3/visualizations/dashboards/variables/) or dashboard-scoped [built-in variables](https://grafana.com/docs/grafana/v13.3/visualizations/dashboards/variables/built-in-variables) (such as `$__from`, `$__to`, `$__dashboard`, `$__org`, and `$__user`). Query-scoped global variables (such as `$__interval` and `$__interval_ms`) are not available in this field. |
| Transparent background | Toggle this switch on and off to control whether or not the panel has the same background color as the dashboard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Panel links            | Add [links to the panel](https://grafana.com/docs/grafana/v13.3/visualizations/dashboards/build-dashboards/manage-dashboard-links/#panel-links) to create shortcuts to other dashboards, panels, and external websites. Access panel links by clicking the icon next to the panel title.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Repeat options         | Set whether to repeat the panel for each value in the selected variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Show/hide rules        | Set whether to show or hide panels based on various rules.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

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
| Alert instance label         | Filter alert instances using [label](https://grafana.com/docs/grafana/v13.3/alerting/fundamentals/alert-rules/annotation-label/) querying. For example,`{severity="critical", instance=~"cluster-us-.+"}`.                                                                |
| Datasource                   | Filter alerts from the selected data source. Selecting a specific data source excludes Grafana-managed alert rules, even if they match your other filters. To include Grafana-managed alerts, select the **-- Grafana --** data source or leave this field empty.         |
| Folder                       | Filter Grafana-managed alert rules by alert rule folder. This option is available only when **Datasource** is empty or set to **-- Grafana --**. It doesn't filter by dashboard folder.                                                                                   |
| Show alerts with 0 instances | Filter for alert rules with no instances. Alert rules with 0 (zero) instances are hidden by default. You can choose to show them by toggling this switch. Because these rules have no instances, they remain hidden if the **Alert instance label** filter is configured. |

> **Note**
>
> Grafana distinguishes between Grafana-managed alert rules and data source-managed alert rules.
> The **Datasource** filter only matches data source-managed alerts unless you select **-- Grafana --**, so leave **Datasource** empty if you want to see alerts from both kinds of rules.

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
