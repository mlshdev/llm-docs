> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoleportconfigurationarray](https://developer.apple.com/documentation/virtualization/vzvirtioconsoleportconfigurationarray)

# VZVirtioConsolePortConfigurationArray (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that represents a collection of Virtio console port configurations.

## Declaration

```swift
class VZVirtioConsolePortConfigurationArray
```

<a id="overview"></a>

## Overview

This array stores a collection of port configurations for a [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md). The index in the array corresponds to the port index that the VM uses. You can set a [maximumPortCount](vzvirtioconsoleportarray/maximumportcount.md) value, but the value must be larger than the highest indexed port. If there’s no `maximumPortCount` value set, the framework uses the value the highest indexed port.

## Topics

### Determining the number of ports

- [maximumPortCount](vzvirtioconsoleportconfigurationarray/maximumportcount.md): An unsigned integer that represents the maximum number of ports allocated by this device.

### Accessing a specific port

- [subscript(\_:)](vzvirtioconsoleportconfigurationarray/subscript%28__%29.md): Returns the Virtio console port configuration as the specified index.

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

## See Also

### Configurations

- [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md): The base class for a console device configuration.
- [VZConsolePortConfiguration](vzconsoleportconfiguration.md): The base class for a console port configuration.
- [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md): A console device that enables communication between the host and the guest using console ports through a Virtio interface.
- [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md): A class that represents the configuration options you can set on a Virtio console port.

# VZVirtioConsolePortConfigurationArray (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that represents a collection of Virtio console port configurations.

## Declaration

```objectivec
@interface VZVirtioConsolePortConfigurationArray : NSObject
```

<a id="overview"></a>

## Overview

This array stores a collection of port configurations for a [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md). The index in the array corresponds to the port index that the VM uses. You can set a [maximumPortCount](vzvirtioconsoleportarray/maximumportcount.md) value, but the value must be larger than the highest indexed port. If there’s no `maximumPortCount` value set, the framework uses the value the highest indexed port.

## Topics

### Determining the number of ports

- [maximumPortCount](vzvirtioconsoleportconfigurationarray/maximumportcount.md): An unsigned integer that represents the maximum number of ports allocated by this device.

### Accessing a specific port

- [objectAtIndexedSubscript:](vzvirtioconsoleportconfigurationarray/subscript%28__%29.md): Returns the Virtio console port configuration as the specified index.

### Adding a configuration

- [setObject:atIndexedSubscript:](vzvirtioconsoleportconfigurationarray/setobject_atindexedsubscript_.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configurations

- [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md): The base class for a console device configuration.
- [VZConsolePortConfiguration](vzconsoleportconfiguration.md): The base class for a console port configuration.
- [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md): A console device that enables communication between the host and the guest using console ports through a Virtio interface.
- [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md): A class that represents the configuration options you can set on a Virtio console port.
