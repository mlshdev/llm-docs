> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/scsitype00inversion](https://developer.apple.com/documentation/scsiperipheralsdriverkit/scsitype00inversion)

# SCSIType00InVersion

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 22.0+

Constants that represent versions of the type 00 inbound interface.

## Declaration

```objectivec
typedef enum SCSIType00InVersion : unsigned int { ... } SCSIType00InVersion;
```

## Topics

### Versions

- [kScsiType00InCurrentVersion1](scsitype00inversion/kscsitype00incurrentversion1.md): Version 1 of the type 00 inbound interface.

## See Also

### Sending commands to the device

- [UserSendCDB](iouserscsiperipheraldevicetype00/usersendcdb.md): Sends a vendor-specific Command Descriptor Block (CDB) to the device.
- [SCSIType00OutParameters](scsitype00outparameters.md): Parameters for commands to send to the external SCSI device.
- [SCSIType00OutVersion](scsitype00outversion.md): Constants that represent versions of the type 00 outbound interface.
- [SCSIType00InParameters](scsitype00inparameters.md): Parameters for responses from the external SCSI device.
