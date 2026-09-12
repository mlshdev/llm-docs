> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodvdblockstoragedevice/1534827-readdvdstructure](https://developer.apple.com/documentation/kernel/iodvdblockstoragedevice/1534827-readdvdstructure)

# readDVDStructure

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn readDVDStructure(IOMemoryDescriptor *buffer, const DVDStructureFormat format, const UInt32 address, const UInt8 layer, const UInt8 agid);
```
