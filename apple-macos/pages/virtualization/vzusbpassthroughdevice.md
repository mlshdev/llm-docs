> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbpassthroughdevice](https://developer.apple.com/documentation/virtualization/vzusbpassthroughdevice)

# VZUSBPassthroughDevice (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

## Declaration

```swift
class VZUSBPassthroughDevice
```

<a id="overview"></a>

## Overview

Class representing a USB passthrough device.

This device is created through either instantiating it directly and passing VZUSBPassthroughDeviceConfiguration to its initializer or instantiating a VZUSBPassthroughDeviceConfiguration in a VZVirtualMachineConfiguration. Direct instantiation will create an object that can be passed to -\[VZUSBController attachDevice:completionHandler:\] method. Instantiation via VZUSBPassthroughDeviceConfiguration will make the device available in the usbDevices property of VZUSBController.

## Topics

### Initializers

- [init(configuration:)](vzusbpassthroughdevice/init%28configuration_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [VZUSBDevice](vzusbdevice.md)

## See Also

### Storage Devices

- [VZUSBMassStorageDevice](vzusbmassstoragedevice.md): A class that represents a hot-pluggable USB mass storage device.

# VZUSBPassthroughDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

## Declaration

```objectivec
@interface VZUSBPassthroughDevice : NSObject
```

<a id="overview"></a>

## Overview

Class representing a USB passthrough device.

This device is created through either instantiating it directly and passing VZUSBPassthroughDeviceConfiguration to its initializer or instantiating a VZUSBPassthroughDeviceConfiguration in a VZVirtualMachineConfiguration. Direct instantiation will create an object that can be passed to -\[VZUSBController attachDevice:completionHandler:\] method. Instantiation via VZUSBPassthroughDeviceConfiguration will make the device available in the usbDevices property of VZUSBController.

## Topics

### Instance Methods

- [initWithConfiguration:error:](vzusbpassthroughdevice/init%28configuration_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [VZUSBDevice](vzusbdevice.md)

## See Also

### Storage Devices

- [VZUSBMassStorageDevice](vzusbmassstoragedevice.md): A class that represents a hot-pluggable USB mass storage device.
