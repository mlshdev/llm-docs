> Release-pinned source for Grafana v13.2.0: [docs/sources/alerting/alerting-rules/link-alert-rules-to-panels.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/alerting/alerting-rules/link-alert-rules-to-panels.md)

# Create and link alert rules to panels

Grafana allows you to link an alert rule to a dashboard panel. This can help you:

- Inform alert responders about where to investigate and which data to examine.
- Visualize the alert state directly from dashboards.
- Include a screenshot of the panel in notification messages.

An alert rule is linked to a panel by setting the [`__dashboardUid__` and `__panelId__` annotations](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rules/annotation-label/#annotations). Both annotations must be set together.

## Link alert rules to panels

When configuring the alert rule, you can set the dashboard and panel annotations as shown in this [video](https://youtu.be/ClLp-iSoaSY?si=qKWnvSVaQuvYcuw9\&t=170).

1. Configure the alert rule.
2. In the **Configure notification message** section, click **Link dashboard and panel**.
3. Select an existing dashboard, then choose a panel from the selected dashboard.
4. Complete the alert rule configuration and click **Save rule** to initiate the alert rule.

You can then [view the alert state on the panel](https://grafana.com/docs/grafana/v13.2/alerting/monitor-status/view-alert-state/#view-alert-state-on-panels).

By default, notification messages include a link to the dashboard panel. Additionally, you can [enable displaying panel screenshots in notifications](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/images-in-notifications/).

![](https://grafana.com/media/docs/alerting/panel-displays-alert-state.png)

*A panel displaying the alert status and state changes.*

## Create alert rules from panels

To streamline alert creation, you can create an alert rule directly from a panel.

1. Navigate to a dashboard in the **Dashboards** section.
2. Hover over the top-right corner of a panel and click the panel menu icon.
3. From the dropdown menu, select **More...** > **New alert rule**.
4. This opens the **Edit rule** form and pre-fills some values:
   - Sets the annotations to the corresponding dashboard and panel.
   - Sets the alert rule query using the panel query.
5. Complete the alert rule configuration and click **Save rule** to initiate the alert rule.

You can then [view the alert state on the panel](https://grafana.com/docs/grafana/v13.2/alerting/monitor-status/view-alert-state/#view-alert-state-on-panels).

By default, notification messages include a link to the dashboard panel. Additionally, you can [enable displaying panel screenshots in notifications](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/images-in-notifications/).

> **Note**
>
> Changes to panel and alert rule queries aren't synchronized. If you change a query, you have to update it in both the panel and the alert rule.

## Access linked alert rules from panels

This option is available only in [time series panels](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/time-series/). To access alert rules associated to a time series panel, complete the following steps.

1. Hover over the top-right corner of the panel and click the panel menu icon.
2. Click **Edit**.
3. Click the **Alert** tab to view existing alert rules or create a new one.

> **Tip**
>
> For a practical example, refer to our [Getting started: Link alerts to visualizations tutorial](http://www.grafana.com/tutorials/alerting-get-started-pt6/).
