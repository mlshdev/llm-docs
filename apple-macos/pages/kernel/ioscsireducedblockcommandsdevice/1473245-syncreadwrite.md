> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsireducedblockcommandsdevice/1473245-syncreadwrite](https://developer.apple.com/documentation/kernel/ioscsireducedblockcommandsdevice/1473245-syncreadwrite)

# SyncReadWrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn SyncReadWrite(IOMemoryDescriptor *buffer, UInt64 startBlock, UInt64 blockCount);
```
