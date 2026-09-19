> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iobdservices/1529419-readdvdstructure

# readDVDStructure

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn readDVDStructure(IOMemoryDescriptor *buffer, const UInt8 structureFormat, const UInt32 logicalBlockAddress, const UInt8 layer, const UInt8 agid);
```
