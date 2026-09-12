> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbmassstoragedeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzusbmassstoragedeviceconfiguration)

# VZUSBMassStorageDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The configuration object that represents a USB Mass storage device.

## Declaration

```swift
class VZUSBMassStorageDeviceConfiguration
```

## Topics

### Creating the configuration object

- [init(attachment:)](vzusbmassstoragedeviceconfiguration/init%28attachment_%29.md): Creates a new storage device configuration with the specified attachment.

## Relationships

### Inherits From

- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [VZUSBDeviceConfiguration](vzusbdeviceconfiguration.md)

## See Also

### Configurations

- [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md): The configuration object that requests the creation of a virtual storage device in the guest system.
- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md): The common configuration traits for storage device requests.
- [VZDiskImageCachingMode](vzdiskimagecachingmode.md): An integer that describes the disk image caching mode.
- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.
- [VZNVMExpressControllerDeviceConfiguration](vznvmexpresscontrollerdeviceconfiguration.md): The configuration object that represents an NVM Express Controller storage device.

# VZUSBMassStorageDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The configuration object that represents a USB Mass storage device.

## Declaration

```objectivec
@interface VZUSBMassStorageDeviceConfiguration : VZStorageDeviceConfiguration
```

## Topics

### Creating the configuration object

- [initWithAttachment:](vzusbmassstoragedeviceconfiguration/init%28attachment_%29.md): Creates a new storage device configuration with the specified attachment.

## Relationships

### Inherits From

- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md)

### Conforms To

- [VZUSBDeviceConfiguration](vzusbdeviceconfiguration.md)

## See Also

### Configurations

- [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md): The configuration object that requests the creation of a virtual storage device in the guest system.
- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md): The common configuration traits for storage device requests.
- [VZDiskImageCachingMode](vzdiskimagecachingmode.md): An integer that describes the disk image caching mode.
- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.
- [VZNVMExpressControllerDeviceConfiguration](vznvmexpresscontrollerdeviceconfiguration.md): The configuration object that represents an NVM Express Controller storage device.
