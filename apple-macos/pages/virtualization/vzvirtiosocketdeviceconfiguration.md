> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketdeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtiosocketdeviceconfiguration)

# VZVirtioSocketDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A configuration object that requests the creation of a socket device to communicate with the guest system.

## Declaration

```swift
class VZVirtioSocketDeviceConfiguration
```

<a id="overview"></a>

## Overview

Use a [VZVirtioSocketDeviceConfiguration](vzvirtiosocketdeviceconfiguration.md) object to implement port-based communication between the guest operating system and the host computer. When you add this object to the [socketDevices](vzvirtualmachineconfiguration/socketdevices.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md), the virtual machine provides a corresponding [VZVirtioSocketDevice](vzvirtiosocketdevice.md) object to use to configure the ports. Add only one [VZVirtioSocketDeviceConfiguration](vzvirtiosocketdeviceconfiguration.md) to your virtual machine’s configuration.

## Topics

### Creating the Configuration Object

- [init()](vzvirtiosocketdeviceconfiguration/init%28%29.md): Creates a socket device configuration object.

## Relationships

### Inherits From

- [VZSocketDeviceConfiguration](vzsocketdeviceconfiguration.md)

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

- [VZSocketDeviceConfiguration](vzsocketdeviceconfiguration.md): The common configuration traits for socket device requests.

# VZVirtioSocketDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A configuration object that requests the creation of a socket device to communicate with the guest system.

## Declaration

```objectivec
@interface VZVirtioSocketDeviceConfiguration : VZSocketDeviceConfiguration
```

<a id="overview"></a>

## Overview

Use a [VZVirtioSocketDeviceConfiguration](vzvirtiosocketdeviceconfiguration.md) object to implement port-based communication between the guest operating system and the host computer. When you add this object to the [socketDevices](vzvirtualmachineconfiguration/socketdevices.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md), the virtual machine provides a corresponding [VZVirtioSocketDevice](vzvirtiosocketdevice.md) object to use to configure the ports. Add only one [VZVirtioSocketDeviceConfiguration](vzvirtiosocketdeviceconfiguration.md) to your virtual machine’s configuration.

## Topics

### Creating the Configuration Object

- [init](vzvirtiosocketdeviceconfiguration/init%28%29.md): Creates a socket device configuration object.

## Relationships

### Inherits From

- [VZSocketDeviceConfiguration](vzsocketdeviceconfiguration.md)

## See Also

### Configurations

- [VZSocketDeviceConfiguration](vzsocketdeviceconfiguration.md): The common configuration traits for socket device requests.
