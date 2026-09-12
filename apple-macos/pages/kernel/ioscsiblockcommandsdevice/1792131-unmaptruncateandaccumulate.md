> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiblockcommandsdevice/1792131-unmaptruncateandaccumulate](https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1792131-unmaptruncateandaccumulate)

# UnmapTruncateAndAccumulate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

## Declaration

```objectivec
bool UnmapTruncateAndAccumulate(IOBlockStorageDeviceExtent *extentDispatchList, UInt32 blockDescriptorCount, UInt32 *unmapLBACount, IOBlockStorageDeviceExtent *mergedExtent);
```
