> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdirectorysharingdeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzdirectorysharingdeviceconfiguration)

# VZDirectorySharingDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for a directory sharing device configuration.

## Declaration

```swift
class VZDirectorySharingDeviceConfiguration
```

<a id="overview"></a>

## Overview

Don’t instantiate `VZDirectorySharingDeviceConfiguration` directly. Instead use one of its subclasses, like [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md)

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

- [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md): An object that represents the configuration of a Virtio file system device.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.

# VZDirectorySharingDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for a directory sharing device configuration.

## Declaration

```objectivec
@interface VZDirectorySharingDeviceConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate `VZDirectorySharingDeviceConfiguration` directly. Instead use one of its subclasses, like [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configurations

- [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md): An object that represents the configuration of a Virtio file system device.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.
