> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewireserialbusprotocoltransport/1550715-coalescesensedata

# CoalesceSenseData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
SCSITaskStatus CoalesceSenseData(FWSBP2StatusBlock *sourceData, UInt8 quadletCount, SCSI_Sense_Data *targetData);
```
