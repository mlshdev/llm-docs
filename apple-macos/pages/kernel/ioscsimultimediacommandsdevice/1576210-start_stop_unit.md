> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576210-start_stop_unit

# START_STOP_UNIT

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool START_STOP_UNIT(SCSITaskIdentifier request, SCSICmdField1Bit IMMED, SCSICmdField4Bit POWER_CONDITIONS, SCSICmdField1Bit LOEJ, SCSICmdField1Bit START, SCSICmdField1Byte CONTROL);
```
