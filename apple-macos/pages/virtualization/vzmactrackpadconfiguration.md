> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmactrackpadconfiguration](https://developer.apple.com/documentation/virtualization/vzmactrackpadconfiguration)

# VZMacTrackpadConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The class that represents the configuration for a Mac trackpad.

## Declaration

```swift
class VZMacTrackpadConfiguration
```

<a id="overview"></a>

## Overview

> **Note**

>  The framework recognizes this device in virtual machines running macOS 13 and later. To support both macOS 13.0 and earlier guests, set [pointingDevices](vzvirtualmachineconfiguration/pointingdevices.md) to an array that contains both a [VZMacTrackpadConfiguration](vzmactrackpadconfiguration.md) and a [VZUSBScreenCoordinatePointingDeviceConfiguration](vzusbscreencoordinatepointingdeviceconfiguration.md) object.

The [VZVirtualMachineView](vzvirtualmachineview.md) uses this device to send pointer events and multi-touch trackpad gestures to the virtual machine. In macOS 13 and later, guests use the multi-touch trackpad device, while earlier versions of macOS uses the USB pointing device.

## Topics

### Initializers

- [init()](vzmactrackpadconfiguration/init%28%29.md): Creates a new Mac trackpad configuration.

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

- [VZUSBScreenCoordinatePointingDeviceConfiguration](vzusbscreencoordinatepointingdeviceconfiguration.md): An object that defines the configuration for a USB pointing device that reports absolute coordinates.
- [VZPointingDeviceConfiguration](vzpointingdeviceconfiguration.md): The base class for a pointing device configuration.

# VZMacTrackpadConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The class that represents the configuration for a Mac trackpad.

## Declaration

```objectivec
@interface VZMacTrackpadConfiguration : VZPointingDeviceConfiguration
```

<a id="overview"></a>

## Overview

> **Note**

>  The framework recognizes this device in virtual machines running macOS 13 and later. To support both macOS 13.0 and earlier guests, set [pointingDevices](vzvirtualmachineconfiguration/pointingdevices.md) to an array that contains both a [VZMacTrackpadConfiguration](vzmactrackpadconfiguration.md) and a [VZUSBScreenCoordinatePointingDeviceConfiguration](vzusbscreencoordinatepointingdeviceconfiguration.md) object.

The [VZVirtualMachineView](vzvirtualmachineview.md) uses this device to send pointer events and multi-touch trackpad gestures to the virtual machine. In macOS 13 and later, guests use the multi-touch trackpad device, while earlier versions of macOS uses the USB pointing device.

## Topics

### Initializers

- [init](vzmactrackpadconfiguration/init%28%29.md): Creates a new Mac trackpad configuration.

## Relationships

### Inherits From

- [VZPointingDeviceConfiguration](vzpointingdeviceconfiguration.md)

## See Also

### Pointing devices

- [VZUSBScreenCoordinatePointingDeviceConfiguration](vzusbscreencoordinatepointingdeviceconfiguration.md): An object that defines the configuration for a USB pointing device that reports absolute coordinates.
- [VZPointingDeviceConfiguration](vzpointingdeviceconfiguration.md): The base class for a pointing device configuration.
