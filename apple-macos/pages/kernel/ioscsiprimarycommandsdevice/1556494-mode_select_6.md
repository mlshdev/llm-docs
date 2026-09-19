> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/1556494-mode_select_6

# MODE_SELECT_6

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool MODE_SELECT_6(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField1Bit PF, SCSICmdField1Bit SP, SCSICmdField1Byte PARAMETER_LIST_LENGTH, SCSICmdField1Byte CONTROL);
```
