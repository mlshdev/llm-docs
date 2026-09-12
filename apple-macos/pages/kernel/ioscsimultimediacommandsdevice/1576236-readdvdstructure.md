> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576236-readdvdstructure](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576236-readdvdstructure)

# ReadDVDStructure

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn ReadDVDStructure(IOMemoryDescriptor *buffer, const UInt32 length, const UInt8 structureFormat, const UInt32 logicalBlockAddress, const UInt8 layer, const UInt8 agid);
```
