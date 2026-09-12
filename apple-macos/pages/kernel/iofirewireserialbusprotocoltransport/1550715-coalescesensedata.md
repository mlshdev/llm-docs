> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireserialbusprotocoltransport/1550715-coalescesensedata](https://developer.apple.com/documentation/kernel/iofirewireserialbusprotocoltransport/1550715-coalescesensedata)

# CoalesceSenseData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
SCSITaskStatus CoalesceSenseData(FWSBP2StatusBlock *sourceData, UInt8 quadletCount, SCSI_Sense_Data *targetData);
```
