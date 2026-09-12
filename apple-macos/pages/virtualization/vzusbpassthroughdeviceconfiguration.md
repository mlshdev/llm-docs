> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbpassthroughdeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzusbpassthroughdeviceconfiguration)

# VZUSBPassthroughDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

## Declaration

```swift
class VZUSBPassthroughDeviceConfiguration
```

<a id="overview"></a>

## Overview

Configuration of a VZUSBPassthroughDevice.

This device configuration creates a VZUSBPassthroughDevice. A VZUSBPassthroughDeviceConfiguration is an abstraction of a USB device that is connected to the system and makes the USB device accessible to a VZVirtualMachine by capturing it.

The USB device is captured when the VZVirtualMachine is started with a VZUSBPassthroughDeviceConfiguration added to a VZUSBControllerConfiguration. The USB device is also captured by a running VZVirtualMachine when -\[VZUSBController attachDevice:completionHandler:\] is called.

## Topics

### Initializers

- [init(device:)](vzusbpassthroughdeviceconfiguration/init%28device_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [VZUSBDeviceConfiguration](vzusbdeviceconfiguration.md)

## See Also

### Configurations

- [VZUSBControllerConfiguration](vzusbcontrollerconfiguration.md): The base class for a USB controller configuration.
- [VZXHCIControllerConfiguration](vzxhcicontrollerconfiguration.md): The configuration object for the USB Extensible Host Controller Interface (XHCI) controller.

# VZUSBPassthroughDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

## Declaration

```objectivec
@interface VZUSBPassthroughDeviceConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Configuration of a VZUSBPassthroughDevice.

This device configuration creates a VZUSBPassthroughDevice. A VZUSBPassthroughDeviceConfiguration is an abstraction of a USB device that is connected to the system and makes the USB device accessible to a VZVirtualMachine by capturing it.

The USB device is captured when the VZVirtualMachine is started with a VZUSBPassthroughDeviceConfiguration added to a VZUSBControllerConfiguration. The USB device is also captured by a running VZVirtualMachine when -\[VZUSBController attachDevice:completionHandler:\] is called.

## Topics

### Instance Methods

- [initWithDevice:](vzusbpassthroughdeviceconfiguration/init%28device_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [VZUSBDeviceConfiguration](vzusbdeviceconfiguration.md)

## See Also

### Configurations

- [VZUSBControllerConfiguration](vzusbcontrollerconfiguration.md): The base class for a USB controller configuration.
- [VZXHCIControllerConfiguration](vzxhcicontrollerconfiguration.md): The configuration object for the USB Extensible Host Controller Interface (XHCI) controller.
