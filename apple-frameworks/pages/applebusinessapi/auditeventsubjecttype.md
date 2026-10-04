> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/auditeventsubjecttype

# AuditEventSubjectType

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Type  
**Availability:** Apple Business API 2.6+

Strings that represent the type of entity that was affected by an action.

## Declaration

```
string AuditEventSubjectType
```

## Possible Values

- `ORGANIZATION`:
- `USER`:
- `LOCATION`:
- `DEVICE`:
- `COLLECTION`:
- `DEVICE_MANAGEMENT_SETTING`:
- `SUBSCRIPTION`:
- `DOMAIN`:
- `API_USER`:

<a id="discussion"></a>

## Discussion

- Possible Values

  - ORGANIZATION: Organization entity.
  - USER: User entity.
  - LOCATION: Location entity.
  - DEVICE: Device entity.
  - COLLECTION: Collection entity.
  - DEVICE_MANAGEMENT_SETTING: Device management configuration.
  - SUBSCRIPTION: Subscription entity.
  - DOMAIN: Domain entity.
  - API_USER: API account entity.
  - ROLE: Role entity.
  - IDP: Identity provider entity.
  - INVITATION: Invitation entity.
