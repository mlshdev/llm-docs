> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprimarycommandsdevice/1556477-send_diagnostics](https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/1556477-send_diagnostics)

# SEND_DIAGNOSTICS

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool SEND_DIAGNOSTICS(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField3Bit SELF_TEST_CODE, SCSICmdField1Bit PF, SCSICmdField1Bit SELF_TEST, SCSICmdField1Bit DEVOFFL, SCSICmdField1Bit UNITOFFL, SCSICmdField2Byte PARAMETER_LIST_LENGTH, SCSICmdField1Byte CONTROL);
```
