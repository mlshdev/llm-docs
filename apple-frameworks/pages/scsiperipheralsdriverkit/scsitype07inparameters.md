> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scsiperipheralsdriverkit/scsitype07inparameters

# SCSIType07InParameters

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 22.0+

Parameters for responses from the external SCSI device.

## Declaration

```objectivec
struct SCSIType07InParameters;
```

<a id="Discussion"></a>

## Discussion

This type contains all the fields from [SCSIDeviceInParameters](scsideviceinparameters.md), typed for use only with [IOUserSCSIPeripheralDeviceType07](iouserscsiperipheraldevicetype07.md) devices.

## Relationships

### Inherits From

- [SCSIDeviceInParameters](scsideviceinparameters.md)

## See Also

### Sending commands to the device

- [UserSendCDB](iouserscsiperipheraldevicetype07/usersendcdb.md): Sends a vendor-specific Command Descriptor Block (CDB) to the device.
- [SCSIType07OutParameters](scsitype07outparameters.md): Parameters for commands to send to the external SCSI device.
- [SCSIType07OutVersion](scsitype07outversion.md): Constants that represent versions of the Type05 outbound interface.
- [SCSIType07InVersion](scsitype07inversion.md): Constants that represent versions of the Type07 inbound interface.
