> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioblockstoragedevice/1646351-dogetprovisionstatus](https://developer.apple.com/documentation/kernel/ioblockstoragedevice/1646351-dogetprovisionstatus)

# doGetProvisionStatus

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

## Declaration

```objectivec
virtual IOReturn doGetProvisionStatus(UInt64 block, UInt64 nblks, UInt32 *extentsCount, IOBlockStorageProvisionDeviceExtent *extents, IOStorageGetProvisionStatusOptions options);
```
