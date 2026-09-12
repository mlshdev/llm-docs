> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobdmedia/1427670-readstructure](https://developer.apple.com/documentation/kernel/iobdmedia/1427670-readstructure)

# readStructure

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn readStructure(IOMemoryDescriptor *buffer, UInt8 format, UInt32 address, UInt8 layer, UInt8 grantID);
```
