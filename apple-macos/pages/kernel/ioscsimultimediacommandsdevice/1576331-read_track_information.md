> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576331-read_track_information](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576331-read_track_information)

# READ_TRACK_INFORMATION

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool READ_TRACK_INFORMATION(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField2Bit ADDRESS_NUMBER_TYPE, SCSICmdField4Byte LOGICAL_BLOCK_ADDRESS_TRACK_SESSION_NUMBER, SCSICmdField2Byte ALLOCATION_LENGTH, SCSICmdField1Byte CONTROL);
```
