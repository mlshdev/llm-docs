> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1521930-syncronize_cache_16

# SYNCRONIZE_CACHE_16

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
bool SYNCRONIZE_CACHE_16(SCSITaskIdentifier request, SCSICmdField1Bit SYNC_NV, SCSICmdField1Bit IMMED, SCSICmdField8Byte LOGICAL_BLOCK_ADDRESS, SCSICmdField4Byte NUMBER_OF_BLOCKS, SCSICmdField6Bit GROUP_NUMBER, SCSICmdField1Byte CONTROL);
```
