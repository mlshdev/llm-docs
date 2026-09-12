> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgenericplatformconfiguration](https://developer.apple.com/documentation/virtualization/vzgenericplatformconfiguration)

# VZGenericPlatformConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The platform configuration for a generic Intel or ARM virtual machine.

## Declaration

```swift
class VZGenericPlatformConfiguration
```

## Topics

### Creating a platform configuration

- [init()](vzgenericplatformconfiguration/init%28%29.md): Returns a new generic platform configuration.

### Identifying the platform configuration

- [machineIdentifier](vzgenericplatformconfiguration/machineidentifier.md): A value that represents a unique identifier for the virtual machine.
- [isNestedVirtualizationEnabled](vzgenericplatformconfiguration/isnestedvirtualizationenabled.md): A Boolean value that indicates whether nested virtualization is in an enabled state.
- [isNestedVirtualizationSupported](vzgenericplatformconfiguration/isnestedvirtualizationsupported.md): A Boolean value that describes whether the platform configuration supports nested virtualization.
- [VZGenericMachineIdentifier](vzgenericmachineidentifier.md): An object that represents a unique identifier for a virtual machine.

## Relationships

### Inherits From

- [VZPlatformConfiguration](vzplatformconfiguration.md)

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

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZVirtualMachineStartOptions](vzvirtualmachinestartoptions.md): The abstract class for VM start options.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.

# VZGenericPlatformConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The platform configuration for a generic Intel or ARM virtual machine.

## Declaration

```objectivec
@interface VZGenericPlatformConfiguration : VZPlatformConfiguration
```

## Topics

### Creating a platform configuration

- [init](vzgenericplatformconfiguration/init%28%29.md): Returns a new generic platform configuration.

### Identifying the platform configuration

- [machineIdentifier](vzgenericplatformconfiguration/machineidentifier.md): A value that represents a unique identifier for the virtual machine.
- [nestedVirtualizationEnabled](vzgenericplatformconfiguration/isnestedvirtualizationenabled.md): A Boolean value that indicates whether nested virtualization is in an enabled state.
- [nestedVirtualizationSupported](vzgenericplatformconfiguration/isnestedvirtualizationsupported.md): A Boolean value that describes whether the platform configuration supports nested virtualization.
- [VZGenericMachineIdentifier](vzgenericmachineidentifier.md): An object that represents a unique identifier for a virtual machine.

## Relationships

### Inherits From

- [VZPlatformConfiguration](vzplatformconfiguration.md)

## See Also

### Configurations

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZVirtualMachineStartOptions](vzvirtualmachinestartoptions.md): The abstract class for VM start options.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.
