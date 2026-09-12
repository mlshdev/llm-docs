> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprimarycommandsdevice/1556528-report_device_identifier](https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/1556528-report_device_identifier)

# REPORT_DEVICE_IDENTIFIER

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool REPORT_DEVICE_IDENTIFIER(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField4Byte ALLOCATION_LENGTH, SCSICmdField1Byte CONTROL);
```
