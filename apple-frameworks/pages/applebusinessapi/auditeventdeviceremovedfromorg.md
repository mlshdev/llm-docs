> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/auditeventdeviceremovedfromorg](https://developer.apple.com/documentation/applebusinessapi/auditeventdeviceremovedfromorg)

# AuditEventDeviceRemovedFromOrg

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.4+

The data structure that represents the event data for a device removed from organization audit event.

## Declaration

```
object AuditEventDeviceRemovedFromOrg
```

## Properties

- `serialNumber` — `string`: Serial number of the device, unique to that device.
- `releaseEntityId` — `string`: The unique id of the releasing entity. In the case of releaseEntityType == USER this property is intentionally not populated since it’s already given by SUBJECT_TYPE and SUBJECT_ID.
- `releaseEntityType` — `AuditEventReleaseEntityType`: The type of entity that conducted the release/disown operation.
