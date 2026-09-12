> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576281-read_disc_information](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576281-read_disc_information)

# READ_DISC_INFORMATION

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool READ_DISC_INFORMATION(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField2Byte ALLOCATION_LENGTH, SCSICmdField1Byte CONTROL);
```
