> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiographicsdeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtiographicsdeviceconfiguration)

# VZVirtioGraphicsDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

Configuration that represents the configuration of a Virtio graphics device for a Linux VM.

## Declaration

```swift
class VZVirtioGraphicsDeviceConfiguration
```

## Topics

### Creating the configuration object

- [init()](vzvirtiographicsdeviceconfiguration/init%28%29.md): Creates a new Virtio graphics device.

### Instance properties

- [scanouts](vzvirtiographicsdeviceconfiguration/scanouts.md): The array of output devices.
- [VZVirtioGraphicsScanoutConfiguration](vzvirtiographicsscanoutconfiguration.md): The configuration for a Virtio graphics device that configures the dimensions of the graphics device for a Linux VM.

## Relationships

### Inherits From

- [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md)

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

- [VZGraphicsDisplayConfiguration](vzgraphicsdisplayconfiguration.md): The base class for a graphics display configuration.
- [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md): Configuration for a display attached to a Mac graphics device.
- [VZMacGraphicsDisplayConfiguration](vzmacgraphicsdisplayconfiguration.md): The configuration for a Mac graphics device.
- [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md): The base class for a graphics device configuration.

# VZVirtioGraphicsDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

Configuration that represents the configuration of a Virtio graphics device for a Linux VM.

## Declaration

```objectivec
@interface VZVirtioGraphicsDeviceConfiguration : VZGraphicsDeviceConfiguration
```

## Topics

### Creating the configuration object

- [init](vzvirtiographicsdeviceconfiguration/init%28%29.md): Creates a new Virtio graphics device.

### Instance properties

- [scanouts](vzvirtiographicsdeviceconfiguration/scanouts.md): The array of output devices.
- [VZVirtioGraphicsScanoutConfiguration](vzvirtiographicsscanoutconfiguration.md): The configuration for a Virtio graphics device that configures the dimensions of the graphics device for a Linux VM.

## Relationships

### Inherits From

- [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md)

## See Also

### Configurations

- [VZGraphicsDisplayConfiguration](vzgraphicsdisplayconfiguration.md): The base class for a graphics display configuration.
- [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md): Configuration for a display attached to a Mac graphics device.
- [VZMacGraphicsDisplayConfiguration](vzmacgraphicsdisplayconfiguration.md): The configuration for a Mac graphics device.
- [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md): The base class for a graphics device configuration.
