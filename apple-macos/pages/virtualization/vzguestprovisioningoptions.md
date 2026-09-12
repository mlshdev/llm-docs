> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzguestprovisioningoptions](https://developer.apple.com/documentation/virtualization/vzguestprovisioningoptions)

# VZGuestProvisioningOptions (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

The base class for guest provisioning options.

## Declaration

```swift
class VZGuestProvisioningOptions
```

<a id="overview"></a>

## Overview

Don’t instantiate `VZGuestProvisioningOptions` directly; instead, use one of its subclasses, such as [VZMacGuestProvisioningOptions](vzmacguestprovisioningoptions.md).

## Topics

### Instance Methods

- [validate()](vzguestprovisioningoptions/validate%28%29.md): Validates the provisioning options.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacGuestProvisioningOptions](vzmacguestprovisioningoptions.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Provisioning options

- [VZMacGuestProvisioningOptions](vzmacguestprovisioningoptions.md): The configuration for guest setup during macOS virtual machine startup.
- [VZGuestMemoryMapping](vzguestmemorymapping.md): An object that represents a chunk of the guest operating system’s dynamic random access memory (DRAM).

# VZGuestProvisioningOptions (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

The base class for guest provisioning options.

## Declaration

```objectivec
@interface VZGuestProvisioningOptions : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate `VZGuestProvisioningOptions` directly; instead, use one of its subclasses, such as [VZMacGuestProvisioningOptions](vzmacguestprovisioningoptions.md).

## Topics

### Instance Methods

- [validateWithError:](vzguestprovisioningoptions/validate%28%29.md): Validates the provisioning options.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacGuestProvisioningOptions](vzmacguestprovisioningoptions.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Provisioning options

- [VZMacGuestProvisioningOptions](vzmacguestprovisioningoptions.md): The configuration for guest setup during macOS virtual machine startup.
- [VZGuestMemoryMapping](vzguestmemorymapping.md): An object that represents a chunk of the guest operating system’s dynamic random access memory (DRAM).
