> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacmachineidentifier](https://developer.apple.com/documentation/virtualization/vzmacmachineidentifier)

# VZMacMachineIdentifier (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A unique identifier for a VM.

## Declaration

```swift
class VZMacMachineIdentifier
```

<a id="overview"></a>

## Overview

This value uniquely identifies a virtual Mac hardware instance. Two VMs running concurrently shouldn’t use the same identifier.

When serializing the VM to disk, you can preserve the identifier in a binary representation by serializing the data in the `VZMacMachineIdentifier`.[dataRepresentation](vzmachardwaremodel/datarepresentation.md) property. Conversely, you can recreate the identifier with [init(dataRepresentation:)](vzmacmachineidentifier/init%28datarepresentation_%29.md) from the binary representation.

You can compare the contents of two identifiers with [isEqual(to:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/isequal%28to:%29).

## Topics

### Creating a machine identifier

- [init(dataRepresentation:)](vzmacmachineidentifier/init%28datarepresentation_%29.md): Create a machine identifier described by the specified data representation.
- [init()](vzmacmachineidentifier/init%28%29.md): Creates a new unique machine identifier.

### Machine data representation

- [dataRepresentation](vzmacmachineidentifier/datarepresentation.md): Returns the opaque data representation of the machine identifier.

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

### Platform components

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.
- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.
- [VZMacHardwareModel](vzmachardwaremodel.md): A specification for the hardware elements and configurations present in a particular Mac hardware model.
- [VZMacAuxiliaryStorage](vzmacauxiliarystorage.md): An object that contains information the boot loader needs for booting macOS as a guest operating system.

# VZMacMachineIdentifier (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A unique identifier for a VM.

## Declaration

```objectivec
@interface VZMacMachineIdentifier : NSObject
```

<a id="overview"></a>

## Overview

This value uniquely identifies a virtual Mac hardware instance. Two VMs running concurrently shouldn’t use the same identifier.

When serializing the VM to disk, you can preserve the identifier in a binary representation by serializing the data in the `VZMacMachineIdentifier`.[dataRepresentation](vzmachardwaremodel/datarepresentation.md) property. Conversely, you can recreate the identifier with [initWithDataRepresentation:](vzmacmachineidentifier/init%28datarepresentation_%29.md) from the binary representation.

You can compare the contents of two identifiers with [isEqualTo:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/isequal%28to:%29).

## Topics

### Creating a machine identifier

- [initWithDataRepresentation:](vzmacmachineidentifier/init%28datarepresentation_%29.md): Create a machine identifier described by the specified data representation.
- [init](vzmacmachineidentifier/init%28%29.md): Creates a new unique machine identifier.

### Machine data representation

- [dataRepresentation](vzmacmachineidentifier/datarepresentation.md): Returns the opaque data representation of the machine identifier.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Platform components

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.
- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.
- [VZMacHardwareModel](vzmachardwaremodel.md): A specification for the hardware elements and configurations present in a particular Mac hardware model.
- [VZMacAuxiliaryStorage](vzmacauxiliarystorage.md): An object that contains information the boot loader needs for booting macOS as a guest operating system.
