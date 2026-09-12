> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgenericmachineidentifier](https://developer.apple.com/documentation/virtualization/vzgenericmachineidentifier)

# VZGenericMachineIdentifier (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

An object that represents a unique identifier for a virtual machine.

## Declaration

```swift
class VZGenericMachineIdentifier
```

<a id="overview"></a>

## Overview

Use the data representation in [dataRepresentation](vzgenericmachineidentifier/datarepresentation.md) to save the VM’s identifier. To restore a previously saved identifier use [init(dataRepresentation:)](vzgenericmachineidentifier/init%28datarepresentation_%29.md).

## Topics

### Creating a Machine Identifier

- [init()](vzgenericmachineidentifier/init%28%29.md): Creates a new unique identifier for a VM.
- [init(dataRepresentation:)](vzgenericmachineidentifier/init%28datarepresentation_%29.md): Creates a new unique identifier for a VM with the provided data.

### Getting Information About the Machine Identifier

- [dataRepresentation](vzgenericmachineidentifier/datarepresentation.md): An opaque data representation of the VM’s identifier.

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

### Identifying the platform configuration

- [machineIdentifier](vzgenericplatformconfiguration/machineidentifier.md): A value that represents a unique identifier for the virtual machine.
- [isNestedVirtualizationEnabled](vzgenericplatformconfiguration/isnestedvirtualizationenabled.md): A Boolean value that indicates whether nested virtualization is in an enabled state.
- [isNestedVirtualizationSupported](vzgenericplatformconfiguration/isnestedvirtualizationsupported.md): A Boolean value that describes whether the platform configuration supports nested virtualization.

# VZGenericMachineIdentifier (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

An object that represents a unique identifier for a virtual machine.

## Declaration

```objectivec
@interface VZGenericMachineIdentifier : NSObject
```

<a id="overview"></a>

## Overview

Use the data representation in [dataRepresentation](vzgenericmachineidentifier/datarepresentation.md) to save the VM’s identifier. To restore a previously saved identifier use [initWithDataRepresentation:](vzgenericmachineidentifier/init%28datarepresentation_%29.md).

## Topics

### Creating a Machine Identifier

- [init](vzgenericmachineidentifier/init%28%29.md): Creates a new unique identifier for a VM.
- [initWithDataRepresentation:](vzgenericmachineidentifier/init%28datarepresentation_%29.md): Creates a new unique identifier for a VM with the provided data.

### Getting Information About the Machine Identifier

- [dataRepresentation](vzgenericmachineidentifier/datarepresentation.md): An opaque data representation of the VM’s identifier.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Identifying the platform configuration

- [machineIdentifier](vzgenericplatformconfiguration/machineidentifier.md): A value that represents a unique identifier for the virtual machine.
- [nestedVirtualizationEnabled](vzgenericplatformconfiguration/isnestedvirtualizationenabled.md): A Boolean value that indicates whether nested virtualization is in an enabled state.
- [nestedVirtualizationSupported](vzgenericplatformconfiguration/isnestedvirtualizationsupported.md): A Boolean value that describes whether the platform configuration supports nested virtualization.
