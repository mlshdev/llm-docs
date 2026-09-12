> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsireducedblockcommandsdevice/1473330-format_unit](https://developer.apple.com/documentation/kernel/ioscsireducedblockcommandsdevice/1473330-format_unit)

# FORMAT_UNIT

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool FORMAT_UNIT(SCSITaskIdentifier request, SCSICmdField1Bit IMMED, SCSICmdField1Bit PROGRESS, SCSICmdField1Bit PERCENT_TIME, SCSICmdField1Bit INCREMENT);
```
