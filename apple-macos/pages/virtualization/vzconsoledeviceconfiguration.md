> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzconsoledeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzconsoledeviceconfiguration)

# VZConsoleDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The base class for a console device configuration.

## Declaration

```swift
class VZConsoleDeviceConfiguration
```

<a id="overview"></a>

## Overview

Don’t instantiate VZConsoleDeviceConfiguration directly, instead use one of its subclasses like [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md)

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

- [VZConsolePortConfiguration](vzconsoleportconfiguration.md): The base class for a console port configuration.
- [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md): A console device that enables communication between the host and the guest using console ports through a Virtio interface.
- [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md): A class that represents the configuration options you can set on a Virtio console port.
- [VZVirtioConsolePortConfigurationArray](vzvirtioconsoleportconfigurationarray.md): A class that represents a collection of Virtio console port configurations.

# VZConsoleDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The base class for a console device configuration.

## Declaration

```objectivec
@interface VZConsoleDeviceConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate VZConsoleDeviceConfiguration directly, instead use one of its subclasses like [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configurations

- [VZConsolePortConfiguration](vzconsoleportconfiguration.md): The base class for a console port configuration.
- [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md): A console device that enables communication between the host and the guest using console ports through a Virtio interface.
- [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md): A class that represents the configuration options you can set on a Virtio console port.
- [VZVirtioConsolePortConfigurationArray](vzvirtioconsoleportconfigurationarray.md): A class that represents a collection of Virtio console port configurations.
