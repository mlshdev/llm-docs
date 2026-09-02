> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/configure-notifications/manage-contact-points/integrations/configure-alertmanager.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/configure-notifications/manage-contact-points/integrations/configure-alertmanager.md)

# Configure an Alertmanager contact point

Use the Alertmanager integration in a contact point to send specific alerts to a different Alertmanager.

If you have an existing Alertmanager running in your infrastructure, you can use a contact point to forward Grafana alerts to your Alertmanager.

For example, a team might run its own Alertmanager to manage notifications from other alerting systems. That team can create alerts with Grafana and configure an Alertmanager contact point to forward only their alerts to their existing Alertmanager.

This setup avoids duplicating Alertmanager configurations for better maintenance.

> **Note**
>
> To send all Grafana-managed alerts to an Alertmanager, add it as a data source and enable it to receive all alerts. With this setup, you can configure multiple Alertmanagers to receive all alerts.
>
> For setup instructions, refer to [Configure Alertmanagers](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/manage-contact-points/).

## Configure an Alertmanager for a contact point

To create a contact point with Alertmanager integration, complete the following steps.

1. Navigate to **Alerts & IRM** -> **Alerting** -> **Notification configuration**, then select the **Contact points** tab.
2. Click **+ Add contact point**.
3. Enter a name for the contact point.
4. From the **Integration** list, select **Alertmanager**.
5. In the **URL** field, enter the URL of the Alertmanager.
6. (Optional) Configure [optional settings](#optional-settings).
7. Click **Save contact point**.

For more details on contact points, including how to test them and enable notifications, refer to [Configure contact points](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/manage-contact-points/).

## Alertmanager settings

| Option | Description                                                                                                                                                                         |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| URL    | The Alertmanager URL. This field is [protected](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/manage-contact-points/) from modification in Grafana Cloud. |

#### Optional settings

| Option              | Description                             |
| ------------------- | --------------------------------------- |
| Basic Auth User     | Username for HTTP Basic Authentication. |
| Basic Auth Password | Password for HTTP Basic Authentication. |

#### Optional notification settings

| Option                   | Description                                                         |
| ------------------------ | ------------------------------------------------------------------- |
| Disable resolved message | Enable this option to prevent notifications when an alert resolves. |
