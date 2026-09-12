> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzconsoledevice](https://developer.apple.com/documentation/virtualization/vzconsoledevice)

# VZConsoleDevice (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that represents a console device in a VM.

## Declaration

```swift
class VZConsoleDevice
```

<a id="overview"></a>

## Overview

Don’t instantiate a `VZConsoleDevice` directly: You first configure console devices on the [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) through a subclass of [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md). After you create [VZVirtualMachine](vzvirtualmachine.md) from the configuration, the console devices are available through the [consoleDevices](vzvirtualmachine/consoledevices.md) property.

The actual type of `VZConsoleDevice` corresponds to the type that the configuration uses. For example, a [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md) is a device of type [VZVirtioConsoleDevice](vzvirtioconsoledevice.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioConsoleDevice](vzvirtioconsoledevice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md): The base class for a console device configuration.

### Devices

- [VZVirtioConsoleDevice](vzvirtioconsoledevice.md): A class that represents a Virtio console device in a virtual machine.

# VZConsoleDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that represents a console device in a VM.

## Declaration

```objectivec
@interface VZConsoleDevice : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate a `VZConsoleDevice` directly: You first configure console devices on the [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) through a subclass of [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md). After you create [VZVirtualMachine](vzvirtualmachine.md) from the configuration, the console devices are available through the [consoleDevices](vzvirtualmachine/consoledevices.md) property.

The actual type of `VZConsoleDevice` corresponds to the type that the configuration uses. For example, a [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md) is a device of type [VZVirtioConsoleDevice](vzvirtioconsoledevice.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioConsoleDevice](vzvirtioconsoledevice.md)

## See Also

### Related Documentation

- [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md): The base class for a console device configuration.

### Devices

- [VZVirtioConsoleDevice](vzvirtioconsoledevice.md): A class that represents a Virtio console device in a virtual machine.
