> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/configure-notifications/manage-contact-points/integrations/configure-email.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/configure-notifications/manage-contact-points/integrations/configure-email.md)

# Configure email for alert notifications

Use the email integration to send alert notifications to one or more addresses.

You can customize the [subject and main section of the email body](#optional-settings-using-templates). By default, the subject and body are generated from the alert data included in the notification.

## Before you begin

In Grafana OSS, you must configure SMTP settings before you can enable email notifications.

> **Note**
>
> In Grafana Cloud, SMTP configuration is not required.

1. Open the [configuration file](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/). The file is typically named `grafana.ini` or `custom.ini` and located in the `conf` directory of your Grafana installation.

2. Configure the [SMTP settings](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/#smtp) for your email server in the `[smtp]` section.

3. Save your changes and restart Grafana.

4. Test email notifications by creating a contact point.

## Configure Email for a contact point

To create a contact point with a email integration, complete the following steps.

1. Navigate to **Alerts & IRM** -> **Alerting** -> **Notification configuration**, then select the **Contact points** tab.
2. Click **+ New contact point**.
3. Enter a name for the contact point.
4. From the **Integration** list, select **Email**.
5. Set up the required [settings](#email-settings) for your Email configuration.
6. Click **Save contact point**.

For more details on contact points, including how to test them and enable notifications, refer to [Configure contact points](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/manage-contact-points/).

## Email settings

| Option    | Description                                                                                |
| --------- | ------------------------------------------------------------------------------------------ |
| Addresses | The list of email addresses to send the notifications. Email addresses are case sensitive. |

#### Optional settings

| Option       | Description                                                               |
| ------------ | ------------------------------------------------------------------------- |
| Single email | Send a single email to all email addresses rather than individual emails. |

#### Optional settings using templates

> **Note**
>
> You can customize the email subject and main section of the email body, but you can't edit HTML or CSS for visual changes.
>
> In Grafana OSS and Enterprise, you can edit the full email template. However, this is not officially supported because it's an internal API that may change without prior notice.

| Option  | Description                                                                                                                                                                                                  |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Subject | Sets the email subject, replacing the default template. Supports [notification templates](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/).                  |
| Message | Sets the main section of the email body, replacing the default template. Supports [notification templates](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/). |

![](https://grafana.com/media/docs/alerting/custom-email-message5.png)

*Email notification with custom message.*

#### Optional notification settings

| Option                   | Description                                                         |
| ------------------------ | ------------------------------------------------------------------- |
| Disable resolved message | Enable this option to prevent notifications when an alert resolves. |
