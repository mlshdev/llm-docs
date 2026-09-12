> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgraphicsdisplayconfiguration](https://developer.apple.com/documentation/virtualization/vzgraphicsdisplayconfiguration)

# VZGraphicsDisplayConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

The base class for a graphics display configuration.

## Declaration

```swift
class VZGraphicsDisplayConfiguration
```

<a id="overview"></a>

## Overview

Don’t instantiate `VZGraphicsDisplayConfiguration` directly. Use one of its subclasses instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacGraphicsDisplayConfiguration](vzmacgraphicsdisplayconfiguration.md)
- [VZVirtioGraphicsScanoutConfiguration](vzvirtiographicsscanoutconfiguration.md)

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

- [VZVirtioGraphicsScanoutConfiguration](vzvirtiographicsscanoutconfiguration.md): The configuration for a Virtio graphics device that configures the dimensions of the graphics device for a Linux VM.

### Configurations

- [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md): Configuration for a display attached to a Mac graphics device.
- [VZMacGraphicsDisplayConfiguration](vzmacgraphicsdisplayconfiguration.md): The configuration for a Mac graphics device.
- [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md): The base class for a graphics device configuration.
- [VZVirtioGraphicsDeviceConfiguration](vzvirtiographicsdeviceconfiguration.md): Configuration that represents the configuration of a Virtio graphics device for a Linux VM.

# VZGraphicsDisplayConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

The base class for a graphics display configuration.

## Declaration

```objectivec
@interface VZGraphicsDisplayConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate `VZGraphicsDisplayConfiguration` directly. Use one of its subclasses instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacGraphicsDisplayConfiguration](vzmacgraphicsdisplayconfiguration.md)
- [VZVirtioGraphicsScanoutConfiguration](vzvirtiographicsscanoutconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [VZVirtioGraphicsScanoutConfiguration](vzvirtiographicsscanoutconfiguration.md): The configuration for a Virtio graphics device that configures the dimensions of the graphics device for a Linux VM.

### Configurations

- [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md): Configuration for a display attached to a Mac graphics device.
- [VZMacGraphicsDisplayConfiguration](vzmacgraphicsdisplayconfiguration.md): The configuration for a Mac graphics device.
- [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md): The base class for a graphics device configuration.
- [VZVirtioGraphicsDeviceConfiguration](vzvirtiographicsdeviceconfiguration.md): Configuration that represents the configuration of a Virtio graphics device for a Linux VM.
