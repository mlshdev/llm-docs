> Pinned source for Grafana v13.3.2: [docs/sources/alerting/monitor-status/declare-incident-from-alert.md](https://github.com/grafana/grafana/blob/b8e90ef2a99c8629339e7233a7a813456d87c075/docs/sources/alerting/monitor-status/declare-incident-from-alert.md)

# Declare incidents from firing alerts

Declare an incident from a firing alert to streamline your alert to incident workflow.

## Before you begin

- Ensure you have [Grafana IRM](https://grafana.com/docs/grafana-cloud/observe-and-act/respond-to-incidents/) installed.
- You must have a firing alert.

## Procedure

To declare an incident from a firing alert, complete the following steps.

1. Navigate to **Alerts & IRM** -> **Alerting** -> **Alert rules**.

2. From the Alert rules page, click the **Firing** filter to display firing alerts. Find the firing alert that you want to declare an incident for.

3. Click **More** -> **Declare Incident**.

   Alternatively, you can declare an incident from the Alert details page.

   The **Declare Incident** pop-up opens in the Grafana Incident application.

4. In the **Declare Incident** pop-up, enter the **What's going on?** field.

   This field is pre-filled with the name of the alert rule, but you can edit it as required.

   The alert rule is also linked to the incident.

5. Select a severity.

6. Add labels, as required.

7. Click **Additional details** to select the incident's status and start time.

8. Click **Automated actions** to enable automated actions configured by admins.

9. Click **Declare Incident**.

## Next steps

View and manage the incident in the **Grafana IRM** application.

![Incident timeline view in Grafana Incident](https://grafana.com/media/docs/alerting/incident-response-management-timeline-ui.png)

For more information, refer to the [Grafana IRM documentation](https://grafana.com/docs/grafana-cloud/observe-and-act/respond-to-incidents/).
