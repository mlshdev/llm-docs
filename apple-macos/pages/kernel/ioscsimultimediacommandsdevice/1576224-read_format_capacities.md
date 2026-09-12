> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576224-read_format_capacities](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576224-read_format_capacities)

# READ_FORMAT_CAPACITIES

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool READ_FORMAT_CAPACITIES(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField2Byte ALLOCATION_LENGTH, SCSICmdField1Byte CONTROL);
```
