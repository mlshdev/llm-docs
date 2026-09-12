> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdirectorysharingdevice](https://developer.apple.com/documentation/virtualization/vzdirectorysharingdevice)

# VZDirectorySharingDevice (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class that represents a directory sharing device in a VM.

## Declaration

```swift
class VZDirectorySharingDevice
```

<a id="overview"></a>

## Overview

Don’t instantiate `VZDirectorySharingDevice` directly; configure a directory sharing device first by using [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) through a subclass of [VZDirectorySharingDeviceConfiguration](vzdirectorysharingdeviceconfiguration.md).

When you create a [VZVirtualMachine](vzvirtualmachine.md) from the configuration, the directory sharing devices are available through the `VZVirtualMachine.directorySharingDevices` property.

The real type of `VZDirectorySharingDevice` corresponds to the type used by the configuration. For example, a [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md) leads to a device of type [VZVirtioFileSystemDevice](vzvirtiofilesystemdevice.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioFileSystemDevice](vzvirtiofilesystemdevice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Shared directory devices

- [VZVirtioFileSystemDevice](vzvirtiofilesystemdevice.md): An object the defines a VIRTIO file system device.

# VZDirectorySharingDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class that represents a directory sharing device in a VM.

## Declaration

```objectivec
@interface VZDirectorySharingDevice : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate `VZDirectorySharingDevice` directly; configure a directory sharing device first by using [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) through a subclass of [VZDirectorySharingDeviceConfiguration](vzdirectorysharingdeviceconfiguration.md).

When you create a [VZVirtualMachine](vzvirtualmachine.md) from the configuration, the directory sharing devices are available through the `VZVirtualMachine.directorySharingDevices` property.

The real type of `VZDirectorySharingDevice` corresponds to the type used by the configuration. For example, a [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md) leads to a device of type [VZVirtioFileSystemDevice](vzvirtiofilesystemdevice.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioFileSystemDevice](vzvirtiofilesystemdevice.md)

## See Also

### Shared directory devices

- [VZVirtioFileSystemDevice](vzvirtiofilesystemdevice.md): An object the defines a VIRTIO file system device.
