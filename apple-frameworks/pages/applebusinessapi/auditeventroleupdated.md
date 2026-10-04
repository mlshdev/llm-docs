> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/auditeventroleupdated

# AuditEventRoleUpdated

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.6+

The data structure that represents the event data for a role updated audit event.

## Declaration

```
object AuditEventRoleUpdated
```

## Properties

- `privilegesAdded` — `[string]`: The permissions added to the role.
- `privilegesRemoved` — `[string]`: The permissions removed from the role.
