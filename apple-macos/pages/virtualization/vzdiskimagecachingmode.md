> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskimagecachingmode](https://developer.apple.com/documentation/virtualization/vzdiskimagecachingmode)

# VZDiskImageCachingMode (Swift)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

An integer that describes the disk image caching mode.

## Declaration

```swift
enum VZDiskImageCachingMode
```

## Topics

### Disk image caching modes

- [VZDiskImageCachingMode.automatic](vzdiskimagecachingmode/automatic.md): Allows the virtualization framework to automatically determine whether to enable data caching.
- [VZDiskImageCachingMode.cached](vzdiskimagecachingmode/cached.md): Enables data caching.
- [VZDiskImageCachingMode.uncached](vzdiskimagecachingmode/uncached.md): Disables data caching.

### Initializers

- [init(rawValue:)](vzdiskimagecachingmode/init%28rawvalue_%29.md)

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
- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.
- [VZNVMExpressControllerDeviceConfiguration](vznvmexpresscontrollerdeviceconfiguration.md): The configuration object that represents an NVM Express Controller storage device.

# VZDiskImageCachingMode (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

An integer that describes the disk image caching mode.

## Declaration

```objectivec
enum VZDiskImageCachingMode : NSInteger;
```

## Topics

### Disk image caching modes

- [VZDiskImageCachingModeAutomatic](vzdiskimagecachingmode/automatic.md): Allows the virtualization framework to automatically determine whether to enable data caching.
- [VZDiskImageCachingModeCached](vzdiskimagecachingmode/cached.md): Enables data caching.
- [VZDiskImageCachingModeUncached](vzdiskimagecachingmode/uncached.md): Disables data caching.

## See Also

### Configurations

- [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md): The configuration object that requests the creation of a virtual storage device in the guest system.
- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md): The common configuration traits for storage device requests.
- [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md): The configuration object that represents a USB Mass storage device.
- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.
- [VZNVMExpressControllerDeviceConfiguration](vznvmexpresscontrollerdeviceconfiguration.md): The configuration object that represents an NVM Express Controller storage device.
