> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobdblockstoragedevice/1541740-readdiscstructure](https://developer.apple.com/documentation/kernel/iobdblockstoragedevice/1541740-readdiscstructure)

# readDiscStructure

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn readDiscStructure(IOMemoryDescriptor *buffer, UInt8 format, UInt32 address, UInt8 layer, UInt8 grantID, UInt8 type);
```
