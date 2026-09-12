> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsideviceidentifier](https://developer.apple.com/documentation/iokit/scsideviceidentifier)

# SCSIDeviceIdentifier

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

64-bit number to represent a SCSI Device.

## Declaration

```objectivec
typedef UInt64 SCSIDeviceIdentifier;
```

<a id="discussion"></a>

## Discussion

If the identifier can either be that of an initiator or a target, SCSIDeviceIdentifier should be used.
