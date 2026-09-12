> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsiinitiatoridentifier](https://developer.apple.com/documentation/iokit/scsiinitiatoridentifier)

# SCSIInitiatorIdentifier

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

64-bit number to represent a SCSI Initiator Device.

## Declaration

```objectivec
typedef SCSIDeviceIdentifier SCSIInitiatorIdentifier;
```

<a id="discussion"></a>

## Discussion

If the identifier is for an initiator only and not a target, then SCSIInitiatorIdentifier should be used.
