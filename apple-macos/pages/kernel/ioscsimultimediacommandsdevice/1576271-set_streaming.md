> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576271-set_streaming](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576271-set_streaming)

# SET_STREAMING

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool SET_STREAMING(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField2Byte PARAMETER_LIST_LENGTH, SCSICmdField1Byte CONTROL);
```
