> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsireducedblockcommandsdevice/1473428-write_buffer

# WRITE_BUFFER

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool WRITE_BUFFER(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField4Bit MODE, SCSICmdField1Byte BUFFER_ID, SCSICmdField3Byte BUFFER_OFFSET, SCSICmdField3Byte PARAMETER_LIST_LENGTH);
```
