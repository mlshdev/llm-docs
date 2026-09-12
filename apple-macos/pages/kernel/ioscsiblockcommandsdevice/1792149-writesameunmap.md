> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiblockcommandsdevice/1792149-writesameunmap](https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1792149-writesameunmap)

# WriteSameUnmap

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

## Declaration

```objectivec
IOReturn WriteSameUnmap(IOBlockStorageDeviceExtent *extents, UInt32 extentsCount, UInt32 requestBlockSize);
```
