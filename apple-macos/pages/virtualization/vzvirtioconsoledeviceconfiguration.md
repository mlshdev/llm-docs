> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoledeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtioconsoledeviceconfiguration)

# VZVirtioConsoleDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A console device that enables communication between the host and the guest using console ports through a Virtio interface.

## Declaration

```swift
class VZVirtioConsoleDeviceConfiguration
```

<a id="overview"></a>

## Overview

A [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md) object enables serial communication between the guest-operating system and host computer through the Virtio interface. The device sets up one or more ports through [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md) on the Virtio console device.

## Topics

### Creating the configuration object

- [init()](vzvirtioconsoledeviceconfiguration/init%28%29.md): Creates a console port configuration object.

### Configuring the console ports

- [ports](vzvirtioconsoledeviceconfiguration/ports.md): The list of Virtio port configurations.

## Relationships

### Inherits From

- [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [consoleDevices](vzvirtualmachineconfiguration/consoledevices.md): The array of console devices that you expose to the guest operating system.

### Configurations

- [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md): The base class for a console device configuration.
- [VZConsolePortConfiguration](vzconsoleportconfiguration.md): The base class for a console port configuration.
- [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md): A class that represents the configuration options you can set on a Virtio console port.
- [VZVirtioConsolePortConfigurationArray](vzvirtioconsoleportconfigurationarray.md): A class that represents a collection of Virtio console port configurations.

# VZVirtioConsoleDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A console device that enables communication between the host and the guest using console ports through a Virtio interface.

## Declaration

```objectivec
@interface VZVirtioConsoleDeviceConfiguration : VZConsoleDeviceConfiguration
```

<a id="overview"></a>

## Overview

A [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md) object enables serial communication between the guest-operating system and host computer through the Virtio interface. The device sets up one or more ports through [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md) on the Virtio console device.

## Topics

### Creating the configuration object

- [init](vzvirtioconsoledeviceconfiguration/init%28%29.md): Creates a console port configuration object.

### Configuring the console ports

- [ports](vzvirtioconsoledeviceconfiguration/ports.md): The list of Virtio port configurations.

## Relationships

### Inherits From

- [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md)

## See Also

### Related Documentation

- [consoleDevices](vzvirtualmachineconfiguration/consoledevices.md): The array of console devices that you expose to the guest operating system.

### Configurations

- [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md): The base class for a console device configuration.
- [VZConsolePortConfiguration](vzconsoleportconfiguration.md): The base class for a console port configuration.
- [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md): A class that represents the configuration options you can set on a Virtio console port.
- [VZVirtioConsolePortConfigurationArray](vzvirtioconsoleportconfigurationarray.md): A class that represents a collection of Virtio console port configurations.
