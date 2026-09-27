> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1792131-unmaptruncateandaccumulate

# UnmapTruncateAndAccumulate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

## Declaration

```objectivec
bool UnmapTruncateAndAccumulate(IOBlockStorageDeviceExtent *extentDispatchList, UInt32 blockDescriptorCount, UInt32 *unmapLBACount, IOBlockStorageDeviceExtent *mergedExtent);
```
