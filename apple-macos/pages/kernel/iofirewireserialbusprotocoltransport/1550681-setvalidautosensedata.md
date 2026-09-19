> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewireserialbusprotocoltransport/1550681-setvalidautosensedata

# SetValidAutoSenseData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
void SetValidAutoSenseData(SBP2ClientOrbData *clientData, FWSBP2StatusBlock *statusBlock, SCSI_Sense_Data *targetData);
```
