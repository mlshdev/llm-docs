> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiblockcommandsdevice/1792146-getprovisionstatus](https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1792146-getprovisionstatus)

# GetProvisionStatus

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

## Declaration

```objectivec
virtual IOReturn GetProvisionStatus(UInt64 block, UInt64 nblks, UInt32 *extentsCount, IOBlockStorageProvisionDeviceExtent *extents);
```
