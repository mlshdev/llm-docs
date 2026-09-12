> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznvmexpresscontrollerdeviceconfiguration](https://developer.apple.com/documentation/virtualization/vznvmexpresscontrollerdeviceconfiguration)

# VZNVMExpressControllerDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

The configuration object that represents an NVM Express Controller storage device.

## Declaration

```swift
class VZNVMExpressControllerDeviceConfiguration
```

<a id="overview"></a>

## Overview

This device configuration creates a storage device that conforms to the [NVM Express specification revision 1.1b](https://nvmexpress.org/wp-content/uploads/NVM-Express-1_1b-1.pdf).

The device configuration is valid only if used with [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md).

## Topics

### Creating a new device configuration

- [init(attachment:)](vznvmexpresscontrollerdeviceconfiguration/init%28attachment_%29.md): Creates a new NVM Express controller configuration with the storage device attachment you provide.

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

## See Also

### Related Documentation

- [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md): The platform configuration for a generic Intel or ARM virtual machine.

### Configurations

- [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md): The configuration object that requests the creation of a virtual storage device in the guest system.
- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md): The common configuration traits for storage device requests.
- [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md): The configuration object that represents a USB Mass storage device.
- [VZDiskImageCachingMode](vzdiskimagecachingmode.md): An integer that describes the disk image caching mode.
- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.

# VZNVMExpressControllerDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

The configuration object that represents an NVM Express Controller storage device.

## Declaration

```objectivec
@interface VZNVMExpressControllerDeviceConfiguration : VZStorageDeviceConfiguration
```

<a id="overview"></a>

## Overview

This device configuration creates a storage device that conforms to the [NVM Express specification revision 1.1b](https://nvmexpress.org/wp-content/uploads/NVM-Express-1_1b-1.pdf).

The device configuration is valid only if used with [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md).

## Topics

### Creating a new device configuration

- [initWithAttachment:](vznvmexpresscontrollerdeviceconfiguration/init%28attachment_%29.md): Creates a new NVM Express controller configuration with the storage device attachment you provide.

## Relationships

### Inherits From

- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md)

## See Also

### Related Documentation

- [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md): The platform configuration for a generic Intel or ARM virtual machine.

### Configurations

- [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md): The configuration object that requests the creation of a virtual storage device in the guest system.
- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md): The common configuration traits for storage device requests.
- [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md): The configuration object that represents a USB Mass storage device.
- [VZDiskImageCachingMode](vzdiskimagecachingmode.md): An integer that describes the disk image caching mode.
- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.
