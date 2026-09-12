> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/auditeventdeviceassignedtoserver](https://developer.apple.com/documentation/applebusinessapi/auditeventdeviceassignedtoserver)

# AuditEventDeviceAssignedToServer

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.4+

The data structure that represents the event data for a device assigned to server audit event.

## Declaration

```
object AuditEventDeviceAssignedToServer
```

## Properties

- `serialNumber` — `string`: Serial number of the device, unique to that device.
- `targetServerName` — `string`: The name of the device management service the device was assigned to.
