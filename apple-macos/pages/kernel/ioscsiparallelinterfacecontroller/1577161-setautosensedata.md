> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiparallelinterfacecontroller/1577161-setautosensedata](https://developer.apple.com/documentation/kernel/ioscsiparallelinterfacecontroller/1577161-setautosensedata)

# SetAutoSenseData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 11.0)

## Declaration

```objectivec
bool SetAutoSenseData(SCSIParallelTaskIdentifier parallelTask, SCSI_Sense_Data *newSenseData, UInt8 senseDataSize);
```
