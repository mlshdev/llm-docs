> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/manage/settings/notifications.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/manage/settings/notifications.mdx)

# Notifications

NetBird can notify you when important events occur in your account, such as peers waiting for approval, routing peer disconnections, or new users joining. You can configure it under `Settings` > `Notifications` in the NetBird dashboard.

> **Note**
>
> This feature is currently only available in the cloud version of NetBird.

![Notifications overview showing Email, Webhook, and Slack channels](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/settings/notifications/netbird-settings-notifications-overview.png)

NetBird supports three notification channels:

| Channel   | Description                                                   |
| --------- | ------------------------------------------------------------- |
| `Email`   | Send notifications to one or more email addresses             |
| `Webhook` | Send notifications as HTTP POST requests to a custom endpoint |
| `Slack`   | Send notifications to a Slack channel via an Incoming Webhook |

Each channel can be independently enabled or disabled and configured with its own set of event types.

## Supported Events

All notification channels support the following events:

| Category        | Event                       | Description                                        |
| --------------- | --------------------------- | -------------------------------------------------- |
| **Peer**        | `Pending Approval`          | A peer is waiting for approval to join the network |
| **Peer**        | `Peer Added`                | A new peer is added to the network                 |
| **Peer**        | `Routing Peer Disconnected` | A routing peer loses its connection                |
| **Peer**        | `Routing Peer Deleted`      | A routing peer is deleted from the network         |
| **User**        | `Pending Approval`          | A user is waiting for approval to join the network |
| **User**        | `User Joined`               | A new user joins the account                       |
| **User**        | `Service User Created`      | A new service user is created                      |
| **Integration** | `IdP Sync Token Expired`    | The IdP sync token has expired and needs renewal   |
| **Integration** | `EDR Sync Token Expired`    | The EDR sync token has expired and needs renewal   |

You can toggle each event on or off individually per channel.

## Email Notifications

The email channel lets you send notifications to one or more email recipients.

### Configure Email Notifications

1. Navigate to `Settings` > `Notifications` and click on the `Email` channel.
2. Use the `Enable Email Channel` toggle to enable or disable all email notifications.
3. Under `Email Addresses`, enter the email address you want to receive notifications and click `Add`. You can add multiple recipients.
4. Toggle individual events on or off under the `Peer Notifications`, `User Notifications`, and `Integration Notifications` sections.

![Email notification channel configuration with recipients and event toggles](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/settings/notifications/netbird-notifications-email-channel.png)

To remove a recipient, click the `x` button next to their email address.

## Webhook Notifications

The webhook channel sends notification events as HTTP `POST` requests to a URL you specify. This is useful for integrating with third-party tools like Microsoft Teams, PagerDuty, or custom automation systems.

### Connect a Webhook

1. Navigate to `Settings` > `Notifications` and click on the `Webhook` channel.
2. Click the `Connect` button to open the webhook configuration modal.

![Webhook channel page with Connect button](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/settings/notifications/netbird-notifications-webhook-channel.png)

3. In the `General` tab, enter the full HTTP(S) URL of your endpoint. Notification events will be sent as `POST` requests to this URL. Optionally, select an `Authentication` method for the endpoint.

![Connect Webhook modal showing the General tab with endpoint URL and authentication options](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/settings/notifications/netbird-notifications-webhook-create-general-tab.png)

4. Click `Continue` to move to the `Headers` tab. Optionally add any custom HTTP headers your endpoint requires.

![Connect Webhook modal showing the Headers tab for adding custom HTTP headers](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/settings/notifications/netbird-notifications-webook-headers-tab.png)

5. Click `Connect` to save the webhook.

Once connected, you can toggle individual events on or off, just like with the email channel.

### Edit or Delete a Webhook

To update the webhook URL, authentication, or headers, click `Edit` on the webhook channel page. \\

To remove the webhook entirely, click `Delete`.

![Webhook channel page showing Edit and Delete options for a connected webhook](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/settings/notifications/netbird-notifications-webhook-edit-delete.png)

## Slack Notifications

The Slack channel lets you receive NetBird notification events directly in a Slack channel via an Incoming Webhook.

### Connect Slack

1. Navigate to `Settings` > `Notifications` and click on the `Slack` channel.

![Slack notification channel page with Connect button](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/settings/notifications/netbird-notifications-slack-channel.png)

2. Click the `Connect` button to open the Slack configuration modal. In the first step, you will create a Slack App:
   - Open [Slack App Management](https://api.slack.com/apps?new_app=1), click `Create an app`, and choose `From scratch`.

![Connect NetBird with Slack - Step 1: Create a Slack App](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/settings/notifications/netbird-notifications-slack-create-app.png)

- Set the app name to `NetBird Notifications`, select your workspace, and click `Create App`.

![Slack app creation - naming and workspace selection](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/settings/notifications/netbird-notifications-slack-name-workspace.png)

3. Click `Continue` to move to the second step. Here you will configure the Incoming Webhook:
   - In the Slack app settings, go to `Incoming Webhooks` and toggle `Activate Incoming Webhooks` to `On`.

![Slack Incoming Webhooks settings page](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/settings/notifications/netbird-notifications-slack-incoming-webhooks.png)

- Click `Add New Webhook to Workspace`, select the channel where you want to receive notifications, \
  &#x20;and confirm with `Allow`.
- Copy the generated `Webhook URL`.

![Copying the Slack webhook URL](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/settings/notifications/netbird-notifications-slack-webhook-url-copy.png)

- Paste the Webhook URL into the input field in the NetBird modal.

![Connect NetBird with Slack - Step 2: Enter Webhook URL](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/settings/notifications/netbird-notifications-slack-webhook-url.png)

4. Click `Connect` to save the configuration.

Once connected, you can toggle individual events on or off, just like with the email channel.

### Disconnect Slack

To disconnect Slack, click the dropdown menu on the Slack channel page and select `Disconnect`. You will no longer receive notifications in your Slack channel.

![Slack channel disconnect option in the dropdown menu](https://raw.githubusercontent.com/netbirdio/docs/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/public/docs-static/img/manage/settings/notifications/netbird-notifications-slack-disconnect.png)

## Get Started

[Use NetBird](https://netbird.io/pricing)

- Make sure to [star us on GitHub](https://github.com/netbirdio/netbird)
- Follow us [on X](https://x.com/netbird)
- Join our Slack Channel
- NetBird [latest release](https://github.com/netbirdio/netbird/releases) on GitHub
