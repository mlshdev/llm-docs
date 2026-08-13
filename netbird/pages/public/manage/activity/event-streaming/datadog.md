> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/manage/activity/event-streaming/datadog.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/manage/activity/event-streaming/datadog.mdx)

# Stream Network Activity to Datadog Cloud SIEM

Datadog is a monitoring and analytics platform for cloud-scale applications. Datadog Cloud SIEM provides real-time threat
detection and security monitoring for cloud environments. By using the NetBird-Datadog integration, you can stream [network activity](https://docs.netbird.io/manage/activity/traffic-events-logging) to Datadog Cloud SIEM for real-time monitoring
and threat detection across your private network.

NetBird integrates with Datadog using the [Datadog Log Collection HTTP API](https://docs.datadoghq.com/api/latest/logs/#send-logs)
and sends activity events to Datadog in real-time once they occur. The events appear in the [Datadog Log Explorer](https://docs.datadoghq.com/logs/explorer/), where you can
search, filter, and analyze them right away.

> **Note**
>
> This feature is only available in the cloud version of NetBird.

## Prerequisites

Before you start creating and configuring a Datadog event streaming integration, ensure that you have the following:

- A Datadog account with permissions to create and manage API keys. If you don't have the required permissions,
  ask your Datadog administrator to grant them to you.

## Create a Datdog API Key

- Navigate to the [API Keys](https://app.datadoghq.eu/organization-settings/api-keys) page
- Click `+ New Key` at the top
- Give it a descriptive name like `NetBird Event Streaming`
- Click `Create Key`
- Copy the key. You will need this key when configuring an integration in NetBird.

## Create an Integration in NetBird

- Navigate to the [Integrations » Event Streaming](https://preview.netbird.io/integrations) tab in the NetBird Dashboard

![event-streaming-integration](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/activity/event-streaming/event-streaming-integration.png)

- Enable and configure the Datadog integration
  - First select the region of your Datadog account (for more details see [Datadog Documentation](https://docs.datadoghq.com/getting_started/site/))

![datadog-region-select](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/activity/event-streaming/datadog/datadog-region-select.png)

- Then enter the API key you created in Step 1 and click `Connect`

![datadog-api-key](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/activity/event-streaming/datadog/datadog-api-key.png)

## Verify the Integration

After configuring the Datadog integration in NetBird, you can verify that the integration is working correctly by checking
the Datadog Log Explorer for incoming events. If the integration is successful, you should see two events from the netbird service
in the Log Explorer:

- `integration test`
- `integration created`

![verify-datadog-integration](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/activity/event-streaming/datadog/verify-datadog-integration.png)

The `integration test` event is sent to validate whether the provided credentials are correct and NetBird can stream events.
The `integration created` event is sent when the integration is successfully created.

The integration is now set up and ready to stream network activity events to Datadog.
