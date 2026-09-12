> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzpointingdeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzpointingdeviceconfiguration)

# VZPointingDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for a pointing device configuration.

## Declaration

```swift
class VZPointingDeviceConfiguration
```

<a id="overview"></a>

## Overview

Don’t instantiate a `VZPointingDeviceConfiguration` directly, use one of its subclasses like [VZUSBScreenCoordinatePointingDeviceConfiguration](vzusbscreencoordinatepointingdeviceconfiguration.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacTrackpadConfiguration](vzmactrackpadconfiguration.md)
- [VZUSBScreenCoordinatePointingDeviceConfiguration](vzusbscreencoordinatepointingdeviceconfiguration.md)

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
- [VZUSBScreenCoordinatePointingDeviceConfiguration](vzusbscreencoordinatepointingdeviceconfiguration.md): An object that defines the configuration for a USB pointing device that reports absolute coordinates.

# VZPointingDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for a pointing device configuration.

## Declaration

```objectivec
@interface VZPointingDeviceConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate a `VZPointingDeviceConfiguration` directly, use one of its subclasses like [VZUSBScreenCoordinatePointingDeviceConfiguration](vzusbscreencoordinatepointingdeviceconfiguration.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacTrackpadConfiguration](vzmactrackpadconfiguration.md)
- [VZUSBScreenCoordinatePointingDeviceConfiguration](vzusbscreencoordinatepointingdeviceconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Pointing devices

- [VZMacTrackpadConfiguration](vzmactrackpadconfiguration.md): The class that represents the configuration for a Mac trackpad.
- [VZUSBScreenCoordinatePointingDeviceConfiguration](vzusbscreencoordinatepointingdeviceconfiguration.md): An object that defines the configuration for a USB pointing device that reports absolute coordinates.
