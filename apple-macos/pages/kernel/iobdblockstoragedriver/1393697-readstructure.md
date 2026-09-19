> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iobdblockstoragedriver/1393697-readstructure

# readStructure

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn readStructure(IOMemoryDescriptor *buffer, const DVDStructureFormat format, const UInt32 address, const UInt8 layer, const UInt8 agid);
```
