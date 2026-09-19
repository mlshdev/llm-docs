> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiparallelinterfacecontroller/1577227-getautosensedata

# GetAutoSenseData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 11.0)

## Declaration

```objectivec
bool GetAutoSenseData(SCSIParallelTaskIdentifier parallelTask, SCSI_Sense_Data *receivingBuffer, UInt8 senseDataSize);
```
