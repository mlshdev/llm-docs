> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskimagesynchronizationmode](https://developer.apple.com/documentation/virtualization/vzdiskimagesynchronizationmode)

# VZDiskImageSynchronizationMode (Swift)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

An integer that describes the disk image synchronization mode.

## Declaration

```swift
enum VZDiskImageSynchronizationMode
```

## Topics

### Disk image synchronization modes

- [VZDiskImageSynchronizationMode.full](vzdiskimagesynchronizationmode/full.md): Synchronizes data to the permanent storage holding the disk image.
- [VZDiskImageSynchronizationMode.fsync](vzdiskimagesynchronizationmode/fsync.md): Synchronizes data to the drive using the system’s best-effort synchronization mode.
- [VZDiskImageSynchronizationMode.none](vzdiskimagesynchronizationmode/none.md): Disables data synchronization with the permanent storage.

### Initializers

- [init(rawValue:)](vzdiskimagesynchronizationmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configurations

- [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md): The configuration object that requests the creation of a virtual storage device in the guest system.
- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md): The common configuration traits for storage device requests.
- [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md): The configuration object that represents a USB Mass storage device.
- [VZDiskImageCachingMode](vzdiskimagecachingmode.md): An integer that describes the disk image caching mode.
- [VZNVMExpressControllerDeviceConfiguration](vznvmexpresscontrollerdeviceconfiguration.md): The configuration object that represents an NVM Express Controller storage device.

# VZDiskImageSynchronizationMode (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

An integer that describes the disk image synchronization mode.

## Declaration

```objectivec
enum VZDiskImageSynchronizationMode : NSInteger;
```

## Topics

### Disk image synchronization modes

- [VZDiskImageSynchronizationModeFull](vzdiskimagesynchronizationmode/full.md): Synchronizes data to the permanent storage holding the disk image.
- [VZDiskImageSynchronizationModeFsync](vzdiskimagesynchronizationmode/fsync.md): Synchronizes data to the drive using the system’s best-effort synchronization mode.
- [VZDiskImageSynchronizationModeNone](vzdiskimagesynchronizationmode/none.md): Disables data synchronization with the permanent storage.

## See Also

### Configurations

- [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md): The configuration object that requests the creation of a virtual storage device in the guest system.
- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md): The common configuration traits for storage device requests.
- [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md): The configuration object that represents a USB Mass storage device.
- [VZDiskImageCachingMode](vzdiskimagecachingmode.md): An integer that describes the disk image caching mode.
- [VZNVMExpressControllerDeviceConfiguration](vznvmexpresscontrollerdeviceconfiguration.md): The configuration object that represents an NVM Express Controller storage device.
