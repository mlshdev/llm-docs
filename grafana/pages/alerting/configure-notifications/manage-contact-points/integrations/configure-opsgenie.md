> Release-pinned source for Grafana v13.2.0: [docs/sources/alerting/configure-notifications/manage-contact-points/integrations/configure-opsgenie.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/alerting/configure-notifications/manage-contact-points/integrations/configure-opsgenie.md)

# Configure Opsgenie for Alerting

Use the Grafana Alerting - Opsgenie integration to receive alert notifications in your Opsgenie alert dashboard when your Grafana alert rules are triggered and resolved.

## Before you begin

Create an API key to enable Grafana to send alert notifications to Opsgenie alert dashboard.

To create an API key in Opsgenie, complete the following steps.

1. Follow the steps in the [API integration guide](https://support.atlassian.com/opsgenie/docs/create-a-default-api-integration/).

   Make sure you turn on the integration.

2. Copy the API key.

## Procedure

To create your Opsgenie integration in Grafana Alerting, complete the following steps.

1. Navigate to **Alerts & IRM** -> **Alerting** -> **Notification configuration**, then select the **Contact points** tab.

2. Click **+ Add contact point**.

3. Enter a contact point name.

4. From the **Integration** list, select **Opsgenie**.

5. In the **API key** field, paste in your API key.

6. Configure the **Alert API URL**.
   1. For Grafana Alertmanager, enter `https://api.opsgenie.com/v2/alerts`.
   2. For other Alertmanagers, enter the host for sending Opsgenie API requests, depending on the hosted region.

7. Click **Test** to check that your integration works.

   **For Grafana Alertmanager only.**

   A test alert notification is sent to the Alerts page in Opsgenie.

8. Click **Save contact point**.

## Next steps

The Opsgenie contact point is ready to receive alert notifications.

To add this contact point to your alert rule, complete the following steps:

1. In Grafana, navigate to **Alerting** > **Alert rules**.
2. Edit or create a new alert rule.
3. Scroll down to the **Configure labels and notifications** section.
4. Under **Notifications**, click **Select contact point**.
5. From the drop-down menu, select the previously created contact point.
6. Click **Save rule and exit**.
