> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbcontroller](https://developer.apple.com/documentation/virtualization/vzusbcontroller)

# VZUSBController (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 15.0+

A class that represents a USB controller in a VM.

## Declaration

```swift
class VZUSBController
```

<a id="overview"></a>

## Overview

Don’t create a `VZUSBController` directly. You need to first configure USB controllers on a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) through a subclass of [VZUSBControllerConfiguration](vzusbcontrollerconfiguration.md). When you create a [VZVirtualMachine](vzvirtualmachine.md) from the configuration, the USB controllers are available through the [usbControllers](vzvirtualmachine/usbcontrollers.md) property.

The concrete type of a `VZUSBController` corresponds to the type the configuration uses. For example, a [VZXHCIControllerConfiguration](vzxhcicontrollerconfiguration.md) leads to a device of type [VZXHCIController](vzxhcicontroller.md).

## Topics

### Instance properties

- [usbDevices](vzusbcontroller/usbdevices.md): The list of attached USB devices for the controller.

### Attaching and detaching devices

- [attach(device:completionHandler:)](vzusbcontroller/attach%28device_completionhandler_%29.md): Attaches a USB device to the controller.
- [detach(device:completionHandler:)](vzusbcontroller/detach%28device_completionhandler_%29.md): Detaches a USB device from the controller.

### Protocols

- [VZUSBController.Delegate](vzusbcontroller/delegate-swift.protocol.md)

### Instance Properties

- [delegate](vzusbcontroller/delegate-swift.property.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZXHCIController](vzxhcicontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Controllers

- [VZXHCIController](vzxhcicontroller.md): A class that represents a USB Extensible Host Controller Interface (XHCI) controller in a VM.

# VZUSBController (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 15.0+

A class that represents a USB controller in a VM.

## Declaration

```objectivec
@interface VZUSBController : NSObject
```

<a id="overview"></a>

## Overview

Don’t create a `VZUSBController` directly. You need to first configure USB controllers on a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) through a subclass of [VZUSBControllerConfiguration](vzusbcontrollerconfiguration.md). When you create a [VZVirtualMachine](vzvirtualmachine.md) from the configuration, the USB controllers are available through the [usbControllers](vzvirtualmachine/usbcontrollers.md) property.

The concrete type of a `VZUSBController` corresponds to the type the configuration uses. For example, a [VZXHCIControllerConfiguration](vzxhcicontrollerconfiguration.md) leads to a device of type [VZXHCIController](vzxhcicontroller.md).

## Topics

### Instance properties

- [usbDevices](vzusbcontroller/usbdevices.md): The list of attached USB devices for the controller.

### Attaching and detaching devices

- [attachDevice:completionHandler:](vzusbcontroller/attach%28device_completionhandler_%29.md): Attaches a USB device to the controller.
- [detachDevice:completionHandler:](vzusbcontroller/detach%28device_completionhandler_%29.md): Detaches a USB device from the controller.

### Instance Properties

- [delegate](vzusbcontroller/delegate-swift.property.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZXHCIController](vzxhcicontroller.md)

## See Also

### Controllers

- [VZXHCIController](vzxhcicontroller.md): A class that represents a USB Extensible Host Controller Interface (XHCI) controller in a VM.
