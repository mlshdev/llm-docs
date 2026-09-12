> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/scsitype00inparameters](https://developer.apple.com/documentation/scsiperipheralsdriverkit/scsitype00inparameters)

# SCSIType00InParameters

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 22.0+

Parameters for responses from the external SCSI device.

## Declaration

```objectivec
struct SCSIType00InParameters;
```

<a id="Discussion"></a>

## Discussion

This type contains all the fields from [SCSIDeviceInParameters](scsideviceinparameters.md), typed for use only with [IOUserSCSIPeripheralDeviceType00](iouserscsiperipheraldevicetype00.md) devices.

## Relationships

### Inherits From

- [SCSIDeviceInParameters](scsideviceinparameters.md)

## See Also

### Sending commands to the device

- [UserSendCDB](iouserscsiperipheraldevicetype00/usersendcdb.md): Sends a vendor-specific Command Descriptor Block (CDB) to the device.
- [SCSIType00OutParameters](scsitype00outparameters.md): Parameters for commands to send to the external SCSI device.
- [SCSIType00OutVersion](scsitype00outversion.md): Constants that represent versions of the type 00 outbound interface.
- [SCSIType00InVersion](scsitype00inversion.md): Constants that represent versions of the type 00 inbound interface.
