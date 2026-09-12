> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/auditeventreleaseentitytype](https://developer.apple.com/documentation/applebusinessapi/auditeventreleaseentitytype)

# AuditEventReleaseEntityType

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Type  
**Availability:** Apple Business API 2.4+

Strings that represent the type of entity that conducted the release operation.

## Declaration

```
string AuditEventReleaseEntityType
```

## Possible Values

- `USER`:
- `MDM`:
- `RESELLER`:
- `API`:
- `REPLACEMENT`:

<a id="discussion"></a>

## Discussion

- Possible Values

  - USER: Released by user.
  - MDM: Released by a device management service.
  - RESELLER: Released by an Apple Authorized Reseller or an authorized cellular carrier.
  - API: Released via API.
  - REPLACEMENT: Released due to replacement.
