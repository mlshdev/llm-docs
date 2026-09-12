> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype05/usersendcdb](https://developer.apple.com/documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype05/usersendcdb)

# UserSendCDB

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+

Sends a vendor-specific Command Descriptor Block (CDB) to the device.

## Declaration

```objectivec
virtual kern_return_t UserSendCDB(SCSIType05OutParameters command, SCSIType05InParameters *response);
```

## Parameters

- `command`: A [SCSIType05OutParameters](../scsitype05outparameters.md) instance that contains the request information.
- `response`: A pointer to a [SCSIType05InParameters](../scsitype05inparameters.md) instance. On return, the framework fills this object with the response data.

<a id="return-value"></a>

## Return Value

A value that indicates the result of sending the CDB. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

Call this method to deliver vendor-specific 16-byte commands to the external drive that this dext matches.

## See Also

### Sending commands to the device

- [SCSIType05OutParameters](../scsitype05outparameters.md): Parameters for commands to send to the external SCSI device.
- [SCSIType05OutVersion](../scsitype05outversion.md): Constants that represent versions of the type 05 outbound interface.
- [SCSIType05InParameters](../scsitype05inparameters.md): Parameters for responses from the external SCSI device.
- [SCSIType05InVersion](../scsitype05inversion.md): Constants that represent versions of the type 05 inbound interface.
