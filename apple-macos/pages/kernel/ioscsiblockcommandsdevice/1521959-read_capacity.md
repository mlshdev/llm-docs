> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1521959-read_capacity

# READ_CAPACITY

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool READ_CAPACITY(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField1Bit RELADR, SCSICmdField4Byte LOGICAL_BLOCK_ADDRESS, SCSICmdField1Bit PMI, SCSICmdField1Byte CONTROL);
```
