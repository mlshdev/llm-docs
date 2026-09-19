> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/auditeventapiaccountrolelocationchanged

# AuditEventApiAccountRoleLocationChanged

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.5+

The data structure that represents the event data for an API account role location changed audit event.

## Declaration

```
object AuditEventApiAccountRoleLocationChanged
```

## Properties

- `apiAccountRoleLocationList` — `[AuditEventAccountRoleLocation]`: The list of role and location assignments for the API account.
