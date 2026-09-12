> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsireducedblockcommandsdevice/1473222-start_stop_unit](https://developer.apple.com/documentation/kernel/ioscsireducedblockcommandsdevice/1473222-start_stop_unit)

# START_STOP_UNIT

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool START_STOP_UNIT(SCSITaskIdentifier request, SCSICmdField1Bit IMMED, SCSICmdField4Bit POWER_CONDITIONS, SCSICmdField1Bit LEOJ, SCSICmdField1Bit START);
```
