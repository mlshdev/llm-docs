> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/1556467-set_device_identifier

# SET_DEVICE_IDENTIFIER

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool SET_DEVICE_IDENTIFIER(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField5Bit SERVICE_ACTION, SCSICmdField4Byte PARAMETER_LIST_LENGTH, SCSICmdField1Byte CONTROL);
```
