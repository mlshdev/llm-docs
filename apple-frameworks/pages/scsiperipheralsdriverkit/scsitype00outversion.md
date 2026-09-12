> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/scsitype00outversion](https://developer.apple.com/documentation/scsiperipheralsdriverkit/scsitype00outversion)

# SCSIType00OutVersion

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 22.0+

Constants that represent versions of the type 00 outbound interface.

## Declaration

```objectivec
typedef enum SCSIType00OutVersion : unsigned int { ... } SCSIType00OutVersion;
```

## Topics

### Versions

- [kScsiType00OutCurrentVersion1](scsitype00outversion/kscsitype00outcurrentversion1.md): Version 1 of the type 00 outbound interface.

## See Also

### Sending commands to the device

- [UserSendCDB](iouserscsiperipheraldevicetype00/usersendcdb.md): Sends a vendor-specific Command Descriptor Block (CDB) to the device.
- [SCSIType00OutParameters](scsitype00outparameters.md): Parameters for commands to send to the external SCSI device.
- [SCSIType00InParameters](scsitype00inparameters.md): Parameters for responses from the external SCSI device.
- [SCSIType00InVersion](scsitype00inversion.md): Constants that represent versions of the type 00 inbound interface.
