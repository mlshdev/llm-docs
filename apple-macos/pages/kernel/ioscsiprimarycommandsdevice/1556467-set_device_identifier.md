> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprimarycommandsdevice/1556467-set_device_identifier](https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/1556467-set_device_identifier)

# SET_DEVICE_IDENTIFIER

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool SET_DEVICE_IDENTIFIER(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField5Bit SERVICE_ACTION, SCSICmdField4Byte PARAMETER_LIST_LENGTH, SCSICmdField1Byte CONTROL);
```
