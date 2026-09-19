> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/3516749-synchronize_cache

# SYNCHRONIZE_CACHE

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
bool SYNCHRONIZE_CACHE(SCSITaskIdentifier request, SCSICmdField1Bit IMMED, SCSICmdField1Bit SYNC_NV, SCSICmdField4Byte LOGICAL_BLOCK_ADDRESS, SCSICmdField6Bit GROUP_NUMBER, SCSICmdField2Byte NUMBER_OF_BLOCKS, SCSICmdField1Byte CONTROL);
```
