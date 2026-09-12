> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofilterscheme/1564814-setpriority](https://developer.apple.com/documentation/kernel/iofilterscheme/1564814-setpriority)

# setPriority

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn setPriority(IOService *client, IOStorageExtent *extents, UInt32 extentsCount, IOStoragePriority priority);
```
