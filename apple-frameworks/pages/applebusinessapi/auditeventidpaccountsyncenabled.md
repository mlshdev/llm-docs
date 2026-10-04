> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/auditeventidpaccountsyncenabled

# AuditEventIdpAccountSyncEnabled

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.6+

The data structure that represents the event data for an identity provider account sync enabled audit event.

## Declaration

```
object AuditEventIdpAccountSyncEnabled
```

## Properties

- `vendorName` — `AuditEventIdpVendorName`: The identity provider vendor.
- `activityId` — `string`: The unique identifier for the account sync activity.
