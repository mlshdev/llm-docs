> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/auditeventsresponse

# AuditEventsResponse

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.5+

The response containing a list of audit events.

## Declaration

```
object AuditEventsResponse
```

## Properties

- `data` — `[AuditEvent]` (required): The list of audit event resources.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
