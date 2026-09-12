> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576198-get_performance](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576198-get_performance)

# GET_PERFORMANCE

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool GET_PERFORMANCE(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField2Bit TOLERANCE, SCSICmdField1Bit WRITE, SCSICmdField2Bit EXCEPT, SCSICmdField4Byte STARTING_LBA, SCSICmdField2Byte MAXIMUM_NUMBER_OF_DESCRIPTORS, SCSICmdField1Byte CONTROL);
```
