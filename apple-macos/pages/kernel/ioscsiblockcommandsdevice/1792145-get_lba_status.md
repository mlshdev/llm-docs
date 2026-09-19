> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1792145-get_lba_status

# GET_LBA_STATUS

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

## Declaration

```objectivec
bool GET_LBA_STATUS(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField8Byte LOGICAL_BLOCK_ADDRESS, SCSICmdField4Byte ALLOCATION_LENGTH, SCSICmdField1Byte CONTROL);
```
