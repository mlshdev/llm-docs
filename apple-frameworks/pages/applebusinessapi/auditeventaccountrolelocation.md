> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/auditeventaccountrolelocation

# AuditEventAccountRoleLocation

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.5+

The data structure that represents a role and location assignment.

## Declaration

```
object AuditEventAccountRoleLocation
```

## Properties

- `roleName` — `string`: The name of the role (For example, Organization Administrator, IT Administrator).
- `locationUniqueIdentifier` — `string`: The unique identifier of a location (a user may have different roles at different locations).
