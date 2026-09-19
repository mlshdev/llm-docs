> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/1556568-log_sense

# LOG_SENSE

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool LOG_SENSE(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField1Bit PPC, SCSICmdField1Bit SP, SCSICmdField2Bit PC, SCSICmdField6Bit PAGE_CODE, SCSICmdField2Byte PARAMETER_POINTER, SCSICmdField2Byte ALLOCATION_LENGTH, SCSICmdField1Byte CONTROL);
```
