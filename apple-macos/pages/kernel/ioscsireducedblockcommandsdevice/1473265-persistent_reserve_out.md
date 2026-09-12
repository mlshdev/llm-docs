> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsireducedblockcommandsdevice/1473265-persistent_reserve_out](https://developer.apple.com/documentation/kernel/ioscsireducedblockcommandsdevice/1473265-persistent_reserve_out)

# PERSISTENT_RESERVE_OUT

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool PERSISTENT_RESERVE_OUT(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField5Bit SERVICE_ACTION, SCSICmdField4Bit SCOPE, SCSICmdField4Bit TYPE);
```
