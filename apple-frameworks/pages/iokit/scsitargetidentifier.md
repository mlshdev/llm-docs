> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitargetidentifier](https://developer.apple.com/documentation/iokit/scsitargetidentifier)

# SCSITargetIdentifier

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

64-bit number to represent a SCSI Target Device.

## Declaration

```objectivec
typedef SCSIDeviceIdentifier SCSITargetIdentifier;
```

<a id="discussion"></a>

## Discussion

If the identifier is for a target only and not an initiator, then SCSITargetIdentifier should be used.
