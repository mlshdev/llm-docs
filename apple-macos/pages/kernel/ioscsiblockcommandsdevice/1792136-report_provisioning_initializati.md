> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiblockcommandsdevice/1792136-report_provisioning_initializati](https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1792136-report_provisioning_initializati)

# REPORT_PROVISIONING_INITIALIZATION_PATTERN

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

## Declaration

```objectivec
bool REPORT_PROVISIONING_INITIALIZATION_PATTERN(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField4Byte ALLOCATION_LENGTH, SCSICmdField1Byte CONTROL);
```
