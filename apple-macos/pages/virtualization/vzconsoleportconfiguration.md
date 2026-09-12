> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzconsoleportconfiguration](https://developer.apple.com/documentation/virtualization/vzconsoleportconfiguration)

# VZConsolePortConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The base class for a console port configuration.

## Declaration

```swift
class VZConsolePortConfiguration
```

<a id="overview"></a>

## Overview

Don’t instantiate `VZConsolePortConfiguration` directly, instead use one of its subclasses like [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md).

## Topics

### Configuring the attachment

- [attachment](vzconsoleportconfiguration/attachment.md): The serial port attachment.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md)

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
- [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md): A console device that enables communication between the host and the guest using console ports through a Virtio interface.
- [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md): A class that represents the configuration options you can set on a Virtio console port.
- [VZVirtioConsolePortConfigurationArray](vzvirtioconsoleportconfigurationarray.md): A class that represents a collection of Virtio console port configurations.

# VZConsolePortConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The base class for a console port configuration.

## Declaration

```objectivec
@interface VZConsolePortConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate `VZConsolePortConfiguration` directly, instead use one of its subclasses like [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md).

## Topics

### Configuring the attachment

- [attachment](vzconsoleportconfiguration/attachment.md): The serial port attachment.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configurations

- [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md): The base class for a console device configuration.
- [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md): A console device that enables communication between the host and the guest using console ports through a Virtio interface.
- [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md): A class that represents the configuration options you can set on a Virtio console port.
- [VZVirtioConsolePortConfigurationArray](vzvirtioconsoleportconfigurationarray.md): A class that represents a collection of Virtio console port configurations.
