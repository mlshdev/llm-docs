> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbscreencoordinatepointingdeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzusbscreencoordinatepointingdeviceconfiguration)

# VZUSBScreenCoordinatePointingDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that defines the configuration for a USB pointing device that reports absolute coordinates.

## Declaration

```swift
class VZUSBScreenCoordinatePointingDeviceConfiguration
```

<a id="overview"></a>

## Overview

A `VZVirtualMachineView` can use this device to send pointer events to the VM.

## Topics

### Creating pointing devices

- [init()](vzusbscreencoordinatepointingdeviceconfiguration/init%28%29.md): Creates a new pointing device.

## Relationships

### Inherits From

- [VZPointingDeviceConfiguration](vzpointingdeviceconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Pointing devices

- [VZMacTrackpadConfiguration](vzmactrackpadconfiguration.md): The class that represents the configuration for a Mac trackpad.
- [VZPointingDeviceConfiguration](vzpointingdeviceconfiguration.md): The base class for a pointing device configuration.

# VZUSBScreenCoordinatePointingDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that defines the configuration for a USB pointing device that reports absolute coordinates.

## Declaration

```objectivec
@interface VZUSBScreenCoordinatePointingDeviceConfiguration : VZPointingDeviceConfiguration
```

<a id="overview"></a>

## Overview

A `VZVirtualMachineView` can use this device to send pointer events to the VM.

## Topics

### Creating pointing devices

- [init](vzusbscreencoordinatepointingdeviceconfiguration/init%28%29.md): Creates a new pointing device.

## Relationships

### Inherits From

- [VZPointingDeviceConfiguration](vzpointingdeviceconfiguration.md)

## See Also

### Pointing devices

- [VZMacTrackpadConfiguration](vzmactrackpadconfiguration.md): The class that represents the configuration for a Mac trackpad.
- [VZPointingDeviceConfiguration](vzpointingdeviceconfiguration.md): The base class for a pointing device configuration.
