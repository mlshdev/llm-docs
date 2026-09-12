> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsireducedblockcommandsdevice/1473308-request_sense](https://developer.apple.com/documentation/kernel/ioscsireducedblockcommandsdevice/1473308-request_sense)

# REQUEST_SENSE

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool REQUEST_SENSE(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField1Byte ALLOCATION_LENGTH);
```
