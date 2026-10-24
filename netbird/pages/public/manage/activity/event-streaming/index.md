> Pinned source for NetBird v0.81.4: [netbirdio/docs@238224712cf7639036ed39fa8873d777b8822273:src/pages/manage/activity/event-streaming/index.mdx](https://github.com/netbirdio/docs/blob/238224712cf7639036ed39fa8873d777b8822273/src/pages/manage/activity/event-streaming/index.mdx)

# Stream Network Activity to Third-Party SIEM Platforms

![event-streaming-integration](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/activity/event-streaming/event-streaming-integration.png)

Security Information and Event Management (SIEM) systems play a critical role in network security by monitoring,
detecting, and responding to security threats in real-time. By aggregating and analyzing activity across the network,
SIEMs help identify anomalous patterns and potential breaches, providing a centralized view of security events.

NetBird provides an event streaming feature that allows you to stream network [activity events](https://docs.netbird.io/manage/activity/traffic-events-logging)
to third-party SIEM systems, such as [Datadog](https://www.datadoghq.com/dg/security/siem-solution/), [Amazon S3](https://aws.amazon.com/s3/), [Amazon Data Firehose](https://aws.amazon.com/firehose/), and others through a generic HTTP integration.

> **Note**
>
> This feature is available in the cloud version of NetBird and in self-hosted deployments with an [enterprise license](https://docs.netbird.io/selfhosted/enterprise). The open-source self-hosted version does not include event streaming.

This documentation provides step-by-step guides and best practices for integrating NetBird activity event streaming with
supported third-party platforms. To get started, select one of the following integrations:

- [Datadog](https://docs.netbird.io/manage/activity/event-streaming/datadog)
- [Amazon S3](https://docs.netbird.io/manage/activity/event-streaming/amazon-s3)
- [Amazon Data Firehose](https://docs.netbird.io/manage/activity/event-streaming/amazon-firehose)
- [SentinelOne Data Lake](https://docs.netbird.io/manage/activity/event-streaming/sentinelone-data-lake)
- [Generic HTTP](https://docs.netbird.io/manage/activity/event-streaming/generic-http)
- [Wazuh](https://docs.netbird.io/manage/activity/event-streaming/wazuh)

## Delivery

NetBird streams each audit event and traffic event after saving it, so an event that fails to stream is not lost: it remains in the [audit events log](https://docs.netbird.io/manage/activity) or the [traffic events](https://docs.netbird.io/manage/activity/traffic-events-logging) store. When the destination is unreachable or rejects an event, Datadog and Generic HTTP behave differently:

- **Datadog**: one delivery attempt per event. A failed delivery is not retried.
- **Generic HTTP**: a failed delivery is retried twice, after 1 and then 2 seconds, before the event is dropped (three attempts in total by default).

Creating, updating, and deleting a stream destination are recorded in the audit events log as `Integration created`, `Integration updated`, and `Integration deleted`. Updating includes enabling and disabling the destination.

Changes to a stream destination take up to five minutes to apply, because NetBird caches the destination's settings. After you disable or delete a destination, audit and traffic events can keep arriving there for up to five minutes, including the event that records the change. After you enable it again, events can take the same time to resume. In self-hosted Enterprise deployments, this interval is set by `NB_EVENT_STREAMING_CACHE_TTL` on the management server and the enricher service.

NetBird removes any `name` or `email` key from `meta` before streaming an event. For many audit events, such as group, policy, and peer changes, `name` is where the object's name is, so look it up in the audit events log using `target_id`.

For the fields carried by streamed traffic events, see [Streamed event fields](https://docs.netbird.io/manage/activity/traffic-events-logging#streamed-event-fields).
