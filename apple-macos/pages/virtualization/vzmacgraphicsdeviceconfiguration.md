> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacgraphicsdeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzmacgraphicsdeviceconfiguration)

# VZMacGraphicsDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

Configuration for a display attached to a Mac graphics device.

## Declaration

```swift
class VZMacGraphicsDeviceConfiguration
```

<a id="overview"></a>

## Overview

Use this device to attach a display that’s shown in a [VZVirtualMachineView](vzvirtualmachineview.md).

## Topics

### Creating the graphics device configuration

- [init()](vzmacgraphicsdeviceconfiguration/init%28%29.md): Creates a new Mac graphics device configuration.

### Configuring displays

- [displays](vzmacgraphicsdeviceconfiguration/displays.md): The displays associated with this graphics device.

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
- [VZMacGraphicsDisplayConfiguration](vzmacgraphicsdisplayconfiguration.md): The configuration for a Mac graphics device.
- [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md): The base class for a graphics device configuration.
- [VZVirtioGraphicsDeviceConfiguration](vzvirtiographicsdeviceconfiguration.md): Configuration that represents the configuration of a Virtio graphics device for a Linux VM.

# VZMacGraphicsDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

Configuration for a display attached to a Mac graphics device.

## Declaration

```objectivec
@interface VZMacGraphicsDeviceConfiguration : VZGraphicsDeviceConfiguration
```

<a id="overview"></a>

## Overview

Use this device to attach a display that’s shown in a [VZVirtualMachineView](vzvirtualmachineview.md).

## Topics

### Creating the graphics device configuration

- [init](vzmacgraphicsdeviceconfiguration/init%28%29.md): Creates a new Mac graphics device configuration.

### Configuring displays

- [displays](vzmacgraphicsdeviceconfiguration/displays.md): The displays associated with this graphics device.

## Relationships

### Inherits From

- [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md)

## See Also

### Configurations

- [VZGraphicsDisplayConfiguration](vzgraphicsdisplayconfiguration.md): The base class for a graphics display configuration.
- [VZMacGraphicsDisplayConfiguration](vzmacgraphicsdisplayconfiguration.md): The configuration for a Mac graphics device.
- [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md): The base class for a graphics device configuration.
- [VZVirtioGraphicsDeviceConfiguration](vzvirtiographicsdeviceconfiguration.md): Configuration that represents the configuration of a Virtio graphics device for a Linux VM.
