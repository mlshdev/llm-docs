> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1792149-writesameunmap

# WriteSameUnmap

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

## Declaration

```objectivec
IOReturn WriteSameUnmap(IOBlockStorageDeviceExtent *extents, UInt32 extentsCount, UInt32 requestBlockSize);
```
