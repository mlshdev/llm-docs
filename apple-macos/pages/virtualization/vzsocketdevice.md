> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzsocketdevice](https://developer.apple.com/documentation/virtualization/vzsocketdevice)

# VZSocketDevice (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common behavior of socket devices.

## Declaration

```swift
class VZSocketDevice
```

<a id="overview"></a>

## Overview

Don’t create or use a [VZSocketDevice](vzsocketdevice.md) object directly. If your virtual machine’s configuration includes a [VZVirtioSocketDeviceConfiguration](vzvirtiosocketdeviceconfiguration.md) object, the virtual machine returns a [VZVirtioSocketDevice](vzvirtiosocketdevice.md) object in its [socketDevices](vzvirtualmachine/socketdevices.md) property. Use that object to configure the port-based communications for your virtual machine.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioSocketDevice](vzvirtiosocketdevice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Devices

- [VZVirtioSocketDevice](vzvirtiosocketdevice.md): A device that manages port-based connections between the guest system and the host computer.

# VZSocketDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common behavior of socket devices.

## Declaration

```objectivec
@interface VZSocketDevice : NSObject
```

<a id="overview"></a>

## Overview

Don’t create or use a [VZSocketDevice](vzsocketdevice.md) object directly. If your virtual machine’s configuration includes a [VZVirtioSocketDeviceConfiguration](vzvirtiosocketdeviceconfiguration.md) object, the virtual machine returns a [VZVirtioSocketDevice](vzvirtiosocketdevice.md) object in its [socketDevices](vzvirtualmachine/socketdevices.md) property. Use that object to configure the port-based communications for your virtual machine.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioSocketDevice](vzvirtiosocketdevice.md)

## See Also

### Devices

- [VZVirtioSocketDevice](vzvirtiosocketdevice.md): A device that manages port-based connections between the guest system and the host computer.
