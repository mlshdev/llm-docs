> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576303-get_configuration](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576303-get_configuration)

# GET_CONFIGURATION

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool GET_CONFIGURATION(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField2Bit RT, SCSICmdField2Byte STARTING_FEATURE_NUMBER, SCSICmdField2Byte ALLOCATION_LENGTH, SCSICmdField1Byte CONTROL);
```
