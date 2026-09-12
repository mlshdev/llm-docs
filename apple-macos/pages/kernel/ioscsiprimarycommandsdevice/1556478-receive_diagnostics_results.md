> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprimarycommandsdevice/1556478-receive_diagnostics_results](https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/1556478-receive_diagnostics_results)

# RECEIVE_DIAGNOSTICS_RESULTS

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool RECEIVE_DIAGNOSTICS_RESULTS(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField1Bit PCV, SCSICmdField1Byte PAGE_CODE, SCSICmdField2Byte ALLOCATION_LENGTH, SCSICmdField1Byte CONTROL);
```
