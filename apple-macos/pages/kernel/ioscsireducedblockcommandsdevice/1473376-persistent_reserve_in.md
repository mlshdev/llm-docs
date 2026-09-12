> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsireducedblockcommandsdevice/1473376-persistent_reserve_in](https://developer.apple.com/documentation/kernel/ioscsireducedblockcommandsdevice/1473376-persistent_reserve_in)

# PERSISTENT_RESERVE_IN

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool PERSISTENT_RESERVE_IN(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField5Bit SERVICE_ACTION, SCSICmdField2Byte ALLOCATION_LENGTH);
```
