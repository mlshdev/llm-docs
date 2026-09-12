> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzplatformconfiguration](https://developer.apple.com/documentation/virtualization/vzplatformconfiguration)

# VZPlatformConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for a platform configuration.

## Declaration

```swift
class VZPlatformConfiguration
```

<a id="overview"></a>

## Overview

Don’t instantiate directly `VZPlatformConfiguration`, use one of its subclasses, such as [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md) or [VZMacPlatformConfiguration](vzmacplatformconfiguration.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md)
- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md)

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

- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.

### Configurations

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZVirtualMachineStartOptions](vzvirtualmachinestartoptions.md): The abstract class for VM start options.
- [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md): The platform configuration for a generic Intel or ARM virtual machine.

# VZPlatformConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for a platform configuration.

## Declaration

```objectivec
@interface VZPlatformConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate directly `VZPlatformConfiguration`, use one of its subclasses, such as [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md) or [VZMacPlatformConfiguration](vzmacplatformconfiguration.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md)
- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.

### Configurations

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZVirtualMachineStartOptions](vzvirtualmachinestartoptions.md): The abstract class for VM start options.
- [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md): The platform configuration for a generic Intel or ARM virtual machine.
