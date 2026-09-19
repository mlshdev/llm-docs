> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/scsitaskstatus/kscsitaskstatus_aca_active

# kSCSITaskStatus_ACA_ACTIVE

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kSCSITaskStatus_ACA_ACTIVE = 0x30
```

<a id="discussion"></a>

## Discussion

The task completed with a status of ACA_ACTIVE. The device server may need the initiator to clear the Auto-Contingent Allegiance condition before it will respond to new commands.
