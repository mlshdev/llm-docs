> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576273-readdiscstructure

# ReadDiscStructure

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn ReadDiscStructure(IOMemoryDescriptor *buffer, const UInt32 length, const UInt8 structureFormat, const UInt32 logicalBlockAddress, const UInt8 layer, const UInt8 agid, const UInt8 mediaType);
```
