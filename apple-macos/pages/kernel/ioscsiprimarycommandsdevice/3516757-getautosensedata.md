> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/3516757-getautosensedata

# GetAutoSenseData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
bool GetAutoSenseData(SCSITaskIdentifier request, SCSI_Sense_Data *senseData, UInt8 senseDataSize);
```
