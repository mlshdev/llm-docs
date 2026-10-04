> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype07/usersendcdb

# UserSendCDB

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+

Sends a vendor-specific Command Descriptor Block (CDB) to the device.

## Declaration

```objectivec
virtual kern_return_t UserSendCDB(SCSIType07OutParameters command, SCSIType07InParameters *response);
```

## Parameters

- `command`: A [SCSIType07OutParameters](../scsitype07outparameters.md) instance that contains the request information.
- `response`: A pointer to a [SCSIType07InParameters](../scsitype07inparameters.md) instance. On return, the framework fills this object with the response data.

<a id="return-value"></a>

## Return Value

A value that indicates the result of sending the CDB. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

Call this method to deliver vendor-specific 16-byte commands to the external drive that this dext matches.

## See Also

### Sending commands to the device

- [SCSIType07OutParameters](../scsitype07outparameters.md): Parameters for commands to send to the external SCSI device.
- [SCSIType07OutVersion](../scsitype07outversion.md): Constants that represent versions of the Type05 outbound interface.
- [SCSIType07InParameters](../scsitype07inparameters.md): Parameters for responses from the external SCSI device.
- [SCSIType07InVersion](../scsitype07inversion.md): Constants that represent versions of the Type07 inbound interface.
