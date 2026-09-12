> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbcontrollerconfiguration](https://developer.apple.com/documentation/virtualization/vzusbcontrollerconfiguration)

# VZUSBControllerConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 15.0+

The base class for a USB controller configuration.

## Declaration

```swift
class VZUSBControllerConfiguration
```

<a id="overview"></a>

## Overview

Don’t create `VZUSBControllerConfiguration` objects directly. Use one of its subclasses, such as [VZXHCIControllerConfiguration](vzxhcicontrollerconfiguration.md), instead.

## Topics

### Instance properties

- [usbDevices](vzusbcontrollerconfiguration/usbdevices.md): The list of USB devices.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZXHCIControllerConfiguration](vzxhcicontrollerconfiguration.md)

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

- [VZXHCIControllerConfiguration](vzxhcicontrollerconfiguration.md): The configuration object for the USB Extensible Host Controller Interface (XHCI) controller.
- [VZUSBPassthroughDeviceConfiguration](vzusbpassthroughdeviceconfiguration.md)

# VZUSBControllerConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 15.0+

The base class for a USB controller configuration.

## Declaration

```objectivec
@interface VZUSBControllerConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t create `VZUSBControllerConfiguration` objects directly. Use one of its subclasses, such as [VZXHCIControllerConfiguration](vzxhcicontrollerconfiguration.md), instead.

## Topics

### Instance properties

- [usbDevices](vzusbcontrollerconfiguration/usbdevices.md): The list of USB devices.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZXHCIControllerConfiguration](vzxhcicontrollerconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configurations

- [VZXHCIControllerConfiguration](vzxhcicontrollerconfiguration.md): The configuration object for the USB Extensible Host Controller Interface (XHCI) controller.
- [VZUSBPassthroughDeviceConfiguration](vzusbpassthroughdeviceconfiguration.md)
