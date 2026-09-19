> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiprotocolservices/3516769-setautosensedata

# SetAutoSenseData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
bool SetAutoSenseData(SCSITaskIdentifier request, SCSI_Sense_Data *senseData, UInt8 senseDataSize);
```
