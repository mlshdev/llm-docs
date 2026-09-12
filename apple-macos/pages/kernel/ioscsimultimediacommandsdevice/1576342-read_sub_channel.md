> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576342-read_sub_channel](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576342-read_sub_channel)

# READ_SUB_CHANNEL

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool READ_SUB_CHANNEL(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField1Bit MSF, SCSICmdField1Bit SUBQ, SCSICmdField1Byte SUB_CHANNEL_PARAMETER_LIST, SCSICmdField1Byte TRACK_NUMBER, SCSICmdField2Byte ALLOCATION_LENGTH, SCSICmdField1Byte CONTROL);
```
