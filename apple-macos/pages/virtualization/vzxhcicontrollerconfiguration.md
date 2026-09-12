> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzxhcicontrollerconfiguration](https://developer.apple.com/documentation/virtualization/vzxhcicontrollerconfiguration)

# VZXHCIControllerConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 15.0+

The configuration object for the USB Extensible Host Controller Interface (XHCI) controller.

## Declaration

```swift
class VZXHCIControllerConfiguration
```

<a id="overview"></a>

## Overview

Use this configuration to create a USB XHCI controller device for the guest.

## Topics

### Initializers

- [init()](vzxhcicontrollerconfiguration/init%28%29.md): Creates a USB Extensible Host Controller Interface (XHCI) configuration.

## Relationships

### Inherits From

- [VZUSBControllerConfiguration](vzusbcontrollerconfiguration.md)

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

- [VZUSBControllerConfiguration](vzusbcontrollerconfiguration.md): The base class for a USB controller configuration.
- [VZUSBPassthroughDeviceConfiguration](vzusbpassthroughdeviceconfiguration.md)

# VZXHCIControllerConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 15.0+

The configuration object for the USB Extensible Host Controller Interface (XHCI) controller.

## Declaration

```objectivec
@interface VZXHCIControllerConfiguration : VZUSBControllerConfiguration
```

<a id="overview"></a>

## Overview

Use this configuration to create a USB XHCI controller device for the guest.

## Topics

### Initializers

- [init](vzxhcicontrollerconfiguration/init%28%29.md): Creates a USB Extensible Host Controller Interface (XHCI) configuration.

## Relationships

### Inherits From

- [VZUSBControllerConfiguration](vzusbcontrollerconfiguration.md)

## See Also

### Configurations

- [VZUSBControllerConfiguration](vzusbcontrollerconfiguration.md): The base class for a USB controller configuration.
- [VZUSBPassthroughDeviceConfiguration](vzusbpassthroughdeviceconfiguration.md)
