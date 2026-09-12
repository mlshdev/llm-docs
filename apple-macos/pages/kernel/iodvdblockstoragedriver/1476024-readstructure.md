> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodvdblockstoragedriver/1476024-readstructure](https://developer.apple.com/documentation/kernel/iodvdblockstoragedriver/1476024-readstructure)

# readStructure

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn readStructure(IOMemoryDescriptor *buffer, const DVDStructureFormat format, const UInt32 address, const UInt8 layer, const UInt8 agid);
```
