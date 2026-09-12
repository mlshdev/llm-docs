> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiblockcommandsdevice/1521981-read_capacity_16](https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1521981-read_capacity_16)

# READ_CAPACITY_16

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
bool READ_CAPACITY_16(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField8Byte LOGICAL_BLOCK_ADDRESS, SCSICmdField4Byte ALLOCATION_LENGTH, SCSICmdField1Bit PMI, SCSICmdField1Byte CONTROL);
```
