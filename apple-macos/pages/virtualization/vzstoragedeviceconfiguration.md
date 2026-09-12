> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzstoragedeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzstoragedeviceconfiguration)

# VZStorageDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common configuration traits for storage device requests.

## Declaration

```swift
class VZStorageDeviceConfiguration
```

<a id="overview"></a>

## Overview

Don’t create a [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md) object directly. Instead, instantiate one of its subclasses, such as [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md). Use the [attachment](vzstoragedeviceconfiguration/attachment.md) property of this class to access the device’s underlying storage.

## Topics

### Getting the attachment point

- [attachment](vzstoragedeviceconfiguration/attachment.md): The attachment object that provides the underlying storage for the device.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZNVMExpressControllerDeviceConfiguration](vznvmexpresscontrollerdeviceconfiguration.md)
- [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md)
- [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Configurations

- [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md): The configuration object that requests the creation of a virtual storage device in the guest system.
- [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md): The configuration object that represents a USB Mass storage device.
- [VZDiskImageCachingMode](vzdiskimagecachingmode.md): An integer that describes the disk image caching mode.
- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.
- [VZNVMExpressControllerDeviceConfiguration](vznvmexpresscontrollerdeviceconfiguration.md): The configuration object that represents an NVM Express Controller storage device.

# VZStorageDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common configuration traits for storage device requests.

## Declaration

```objectivec
@interface VZStorageDeviceConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t create a [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md) object directly. Instead, instantiate one of its subclasses, such as [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md). Use the [attachment](vzstoragedeviceconfiguration/attachment.md) property of this class to access the device’s underlying storage.

## Topics

### Getting the attachment point

- [attachment](vzstoragedeviceconfiguration/attachment.md): The attachment object that provides the underlying storage for the device.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZNVMExpressControllerDeviceConfiguration](vznvmexpresscontrollerdeviceconfiguration.md)
- [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md)
- [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configurations

- [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md): The configuration object that requests the creation of a virtual storage device in the guest system.
- [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md): The configuration object that represents a USB Mass storage device.
- [VZDiskImageCachingMode](vzdiskimagecachingmode.md): An integer that describes the disk image caching mode.
- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.
- [VZNVMExpressControllerDeviceConfiguration](vznvmexpresscontrollerdeviceconfiguration.md): The configuration object that represents an NVM Express Controller storage device.
