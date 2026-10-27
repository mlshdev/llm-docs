> Pinned source for Grafana v13.3.0: [docs/sources/alerting/monitor-status/alerts-page.md](https://github.com/grafana/grafana/blob/752e3462ff71a43a5c1fb62d00a482fa2dc0ee6a/docs/sources/alerting/monitor-status/alerts-page.md)

> **Public preview**
>
> Alerts page is in public preview.

# Alert view

Grafana Alerting provides a consolidated snapshot of your firing and pending Grafana-managed alerts in a simplified view. For users with complex deployments, it can be difficult to monitor and prioritize critical incidents among a large volume of firing or pending alerts. With the Alert page, you have a view where you can quickly explore and sort your recent alert history and see what alerts require review or action.

To see your firing and pending alerts in the alert page, go to **Alerts & IRM** > **Alerting** > **Alert activity**.

![Filter your firing and pending alerts in the Alert view.](https://grafana.com/media/docs/alerting/alerts-page.png)

## How it works

The Alerts page only shows alerts from Grafana-managed alert rules. Grafana uses a metric called `GRAFANA_ALERTS`, which is recorded in the default Mimir data source that is provisioned for cloud users.

> **Note**
>
> OSS users need to manually configure this. To configure alert state history for OSS, refer to the <a href="https://grafana.com/docs/grafana/latest/alerting/set-up/configure-alert-state-history/#configure-loki-and-prometheus-for-alert-state">configure Loki and Prometheus for alert state</a> documentation.

## Required permissions

To see alerts in the Alerts page, you need both of the following permissions:

- **`alert.rules:read`**: Read the alert rules in the folders that contain them.
- **`datasources:query`**: Query the data source that records alert state history. In Grafana Cloud, this is the provisioned Prometheus data source that stores the `GRAFANA_ALERTS` metric.

The page queries the alert state history data source directly, so it can't display any alerts without the `datasources:query` permission for that data source. This applies even when you can read the alert rules and view them in the **Alert rules** page.

For more information about alerting permissions, refer to [Configure role-based access control](https://grafana.com/docs/grafana/v13.3/alerting/set-up/configure-rbac/). To find out which data source records alert state history in your Grafana instance, refer to [Configure alert state history](https://grafana.com/docs/grafana/v13.3/alerting/set-up/configure-alert-state-history/).

## Filter alerts in the Alerts page

The page displays the count of alert rules and instances that are both firing and pending. Use the filters to group your alerts and find specific alerts by label.

To group alerts by label, click the **Group by** field and select the labels from the dropdown menu. You can select multiple labels for alert grouping.

To filter by specific label values, click the **Filters** field and select a label to filter by, followed by an expression of what label value you want to use. You can enter multiple label values in your search.

You can also select a time range from the time picker to further adjust your results. Click the **time range** field and enter an absolute time range or select a period from the quick ranges list to apply a new time window to the display results.
