> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/auditeventreleaseentitytype

# AuditEventReleaseEntityType

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Type  
**Availability:** Apple Business API 2.5+

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
