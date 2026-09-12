> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoleportconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtioconsoleportconfiguration)

# VZVirtioConsolePortConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that represents the configuration options you can set on a Virtio console port.

## Declaration

```swift
class VZVirtioConsolePortConfiguration
```

<a id="overview"></a>

## Overview

A console port is a two-way communication channel between a host [VZSerialPortAttachment](vzserialportattachment.md) and a VM console port. A Virtio device can have one or more attached console devices. Optionally, you can set a name for a console port and also configure a console port that the guest can use as the system console.

## Topics

### Creating a port configuration

- [init()](vzvirtioconsoleportconfiguration/init%28%29.md): Creates a new Virtio console port configuration.

### Configuring the port

- [isConsole](vzvirtioconsoleportconfiguration/isconsole.md): A Boolean value that indicates whether this port is a console.
- [name](vzvirtioconsoleportconfiguration/name.md): The name of the port.

## Relationships

### Inherits From

- [VZConsolePortConfiguration](vzconsoleportconfiguration.md)

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
- [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md): A console device that enables communication between the host and the guest using console ports through a Virtio interface.
- [VZVirtioConsolePortConfigurationArray](vzvirtioconsoleportconfigurationarray.md): A class that represents a collection of Virtio console port configurations.

# VZVirtioConsolePortConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that represents the configuration options you can set on a Virtio console port.

## Declaration

```objectivec
@interface VZVirtioConsolePortConfiguration : VZConsolePortConfiguration
```

<a id="overview"></a>

## Overview

A console port is a two-way communication channel between a host [VZSerialPortAttachment](vzserialportattachment.md) and a VM console port. A Virtio device can have one or more attached console devices. Optionally, you can set a name for a console port and also configure a console port that the guest can use as the system console.

## Topics

### Creating a port configuration

- [init](vzvirtioconsoleportconfiguration/init%28%29.md): Creates a new Virtio console port configuration.

### Configuring the port

- [isConsole](vzvirtioconsoleportconfiguration/isconsole.md): A Boolean value that indicates whether this port is a console.
- [name](vzvirtioconsoleportconfiguration/name.md): The name of the port.

## Relationships

### Inherits From

- [VZConsolePortConfiguration](vzconsoleportconfiguration.md)

## See Also

### Related Documentation

- [consoleDevices](vzvirtualmachineconfiguration/consoledevices.md): The array of console devices that you expose to the guest operating system.

### Configurations

- [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md): The base class for a console device configuration.
- [VZConsolePortConfiguration](vzconsoleportconfiguration.md): The base class for a console port configuration.
- [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md): A console device that enables communication between the host and the guest using console ports through a Virtio interface.
- [VZVirtioConsolePortConfigurationArray](vzvirtioconsoleportconfigurationarray.md): A class that represents a collection of Virtio console port configurations.
