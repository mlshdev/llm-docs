> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/concepts/features/audit-trail.mdx](https://zitadel.com/docs/concepts/features/audit-trail)

ZITADEL provides you with a built-in audit trail to track all changes and events over an unlimited period of time.
Most other solutions replace a historical record and track changes in a separate log when information is updated.
ZITADEL only ever appends data in an [Eventstore](https://zitadel.com/docs/concepts/eventstore/overview), keeping all historical record.
The audit trail itself is identical to the state, since ZITADEL calculates the state from all the past changes.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/concepts/audit-trail/audit-log-events.png)

This form of audit log has several benefits over storing classic audit logs.
You can view past data in-context of the whole system at a single point in time.
Reviewing a past state of the application can be important when tracing an incident that happened months back. Moreover, the eventstore provides a truly complete and clean audit log.

> **Future Plans**
>
> There will be three major areas for future development on the audit data
>
> - [Metrics](https://github.com/zitadel/zitadel/issues/4458) and [standard reports](https://github.com/zitadel/zitadel/discussions/2162#discussioncomment-1153259)
> - [Feedback loop](https://github.com/zitadel/zitadel/issues/5102) and threat detection
> - Forensics and replay of events

## Accessing the Audit Log

### Last changes of an object

You can check the last changes of most objects in the [Console](https://zitadel.com/docs/guides/manage/console/console-overview).
In the following screenshot you can see an example of last changes on a [user](https://zitadel.com/docs/guides/manage/console/users-overview).
The same view is available on several other objects such as organization or project.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/console/myprofile.png)

### Event View

Administrators can see all events across an instance and filter them directly in [Console](https://zitadel.com/docs/guides/manage/console/console-overview).
Go to your default settings and then click on the Tab **Events** to open the Event Viewer or browse to $CUSTOM\_DOMAIN/ui/console/events

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/concepts/audit-trail/event-viewer.png)

### Event API

Since everything that is available in Management Console can also be called with our APIs, you can access all events and audit data through our APIs:

- [Event API Guide](https://zitadel.com/docs/guides/integrate/zitadel-apis/event-api)
- [API Documentation](https://zitadel.com/docs/reference/api/admin)

Access to the API is possible with a [Service Account](https://zitadel.com/docs/guides/integrate/service-accounts/authenticate-service-accounts), allowing you to integrate the events with your own business logic.

## Using logs in external systems

You can use the events from the audit log in external systems such as a SOC/SIEM solution.

Follow our guide on how to [integrate ZITADEL with external systems for streaming events and audit logs](https://zitadel.com/docs/guides/integrate/external-audit-log).
