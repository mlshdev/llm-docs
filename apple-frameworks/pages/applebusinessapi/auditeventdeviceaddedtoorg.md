> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/auditeventdeviceaddedtoorg

# AuditEventDeviceAddedToOrg

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.5+

The data structure that represents the event data for a device added to organization audit event.

## Declaration

```
object AuditEventDeviceAddedToOrg
```

## Properties

- `serialNumber` — `string`: Serial number of the device, unique to that device.
- `purchaseSourceType` — `AuditEventPurchaseSourceType`: The way the device was added into Apple Business.
- `purchaseSourceId` — `string`: The unique id for the purchase source.
