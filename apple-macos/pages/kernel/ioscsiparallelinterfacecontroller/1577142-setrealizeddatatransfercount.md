> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiparallelinterfacecontroller/1577142-setrealizeddatatransfercount

# SetRealizedDataTransferCount

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 11.0)

## Declaration

```objectivec
bool SetRealizedDataTransferCount(SCSIParallelTaskIdentifier parallelTask, UInt64 realizedTransferCountInBytes);
```
