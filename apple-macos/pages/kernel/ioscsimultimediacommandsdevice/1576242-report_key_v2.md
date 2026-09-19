> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576242-report_key_v2

# REPORT_KEY_V2

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.12)

## Declaration

```objectivec
bool REPORT_KEY_V2(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField4Byte LOGICAL_BLOCK_ADDRESS, SCSICmdField1Byte KEY_CLASS, SCSICmdField2Byte ALLOCATION_LENGTH, SCSICmdField2Bit AGID, SCSICmdField6Bit KEY_FORMAT, SCSICmdField1Byte CONTROL);
```
