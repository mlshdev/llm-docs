> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/auditeventsresponse](https://developer.apple.com/documentation/applebusinessapi/auditeventsresponse)

# AuditEventsResponse

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.4+

The response containing a list of audit events.

## Declaration

```
object AuditEventsResponse
```

## Properties

- `data` — `[AuditEvent]` (required): The list of audit event resources.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
