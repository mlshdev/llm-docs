> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzxhcicontroller](https://developer.apple.com/documentation/virtualization/vzxhcicontroller)

# VZXHCIController (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 15.0+

A class that represents a USB Extensible Host Controller Interface (XHCI) controller in a VM.

## Declaration

```swift
class VZXHCIController
```

<a id="overview"></a>

## Overview

Don’t create `VZXHCIController` objects directly. Instead, you create a `VZXHCIController` object at runtime though the [usbControllers](vzvirtualmachineconfiguration/usbcontrollers.md) property of the [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object by populating it with [VZXHCIControllerConfiguration](vzxhcicontrollerconfiguration.md) objects.

## Relationships

### Inherits From

- [VZUSBController](vzusbcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Controllers

- [VZUSBController](vzusbcontroller.md): A class that represents a USB controller in a VM.

# VZXHCIController (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 15.0+

A class that represents a USB Extensible Host Controller Interface (XHCI) controller in a VM.

## Declaration

```objectivec
@interface VZXHCIController : VZUSBController
```

<a id="overview"></a>

## Overview

Don’t create `VZXHCIController` objects directly. Instead, you create a `VZXHCIController` object at runtime though the [usbControllers](vzvirtualmachineconfiguration/usbcontrollers.md) property of the [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object by populating it with [VZXHCIControllerConfiguration](vzxhcicontrollerconfiguration.md) objects.

## Relationships

### Inherits From

- [VZUSBController](vzusbcontroller.md)

## See Also

### Controllers

- [VZUSBController](vzusbcontroller.md): A class that represents a USB controller in a VM.
