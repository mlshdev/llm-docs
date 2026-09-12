> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiblockcommandsdevice/1792148-updatelbaprovisionstatus](https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1792148-updatelbaprovisionstatus)

# UpdateLBAProvisionStatus

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

## Declaration

```objectivec
IOReturn UpdateLBAProvisionStatus(UInt32 *extentsCount, IOBlockStorageProvisionDeviceExtent *extents, IOMemoryDescriptor *dataBuffer, UInt32 transferLength);
```
