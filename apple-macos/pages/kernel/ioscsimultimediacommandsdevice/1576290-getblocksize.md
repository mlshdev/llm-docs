> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576290-getblocksize

# GetBlockSize

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
bool GetBlockSize(UInt32 *requestedByteCount, SCSICmdField3Bit EXPECTED_SECTOR_TYPE, SCSICmdField1Bit SYNC, SCSICmdField2Bit HEADER_CODES, SCSICmdField1Bit USER_DATA, SCSICmdField1Bit EDC_ECC, SCSICmdField2Bit ERROR_FIELD, SCSICmdField3Bit SUBCHANNEL_SELECTION_BITS);
```
