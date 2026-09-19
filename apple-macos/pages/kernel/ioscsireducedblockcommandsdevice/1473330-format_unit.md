> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsireducedblockcommandsdevice/1473330-format_unit

# FORMAT_UNIT

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool FORMAT_UNIT(SCSITaskIdentifier request, SCSICmdField1Bit IMMED, SCSICmdField1Bit PROGRESS, SCSICmdField1Bit PERCENT_TIME, SCSICmdField1Bit INCREMENT);
```
