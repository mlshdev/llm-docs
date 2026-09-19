> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/auditeventpurchasesourcetype

# AuditEventPurchaseSourceType

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Type  
**Availability:** Apple Business API 2.5+

Strings that represent how a device was added to an organization.

## Declaration

```
string AuditEventPurchaseSourceType
```

## Possible Values

- `APPLE`:
- `MANUALLY_ADDED`:
- `RESELLER`:

<a id="discussion"></a>

## Discussion

- Possible Values

  - APPLE: Device purchased from Apple.
  - MANUALLY_ADDED: Device manually added.
  - RESELLER: Device purchased from an Apple Authorized Reseller or an authorized cellular carrier.
