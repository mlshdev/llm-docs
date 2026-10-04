> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scsiperipheralsdriverkit/scsitype07inversion

# SCSIType07InVersion

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 22.0+

Constants that represent versions of the Type07 inbound interface.

## Declaration

```objectivec
typedef enum SCSIType07InVersion : unsigned int { ... } SCSIType07InVersion;
```

## Topics

### Versions

- [kScsiType07InCurrentVersion1](scsitype07inversion/kscsitype07incurrentversion1.md): Version 1 of the Type07 inbound interface.

## See Also

### Sending commands to the device

- [UserSendCDB](iouserscsiperipheraldevicetype07/usersendcdb.md): Sends a vendor-specific Command Descriptor Block (CDB) to the device.
- [SCSIType07OutParameters](scsitype07outparameters.md): Parameters for commands to send to the external SCSI device.
- [SCSIType07OutVersion](scsitype07outversion.md): Constants that represent versions of the Type05 outbound interface.
- [SCSIType07InParameters](scsitype07inparameters.md): Parameters for responses from the external SCSI device.
