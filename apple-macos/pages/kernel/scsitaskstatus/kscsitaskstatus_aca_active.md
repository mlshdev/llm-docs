> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/scsitaskstatus/kscsitaskstatus_aca_active](https://developer.apple.com/documentation/kernel/scsitaskstatus/kscsitaskstatus_aca_active)

# kSCSITaskStatus_ACA_ACTIVE

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kSCSITaskStatus_ACA_ACTIVE = 0x30
```

<a id="discussion"></a>

## Discussion

The task completed with a status of ACA_ACTIVE. The device server may need the initiator to clear the Auto-Contingent Allegiance condition before it will respond to new commands.
