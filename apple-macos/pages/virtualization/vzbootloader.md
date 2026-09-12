> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzbootloader](https://developer.apple.com/documentation/virtualization/vzbootloader)

# VZBootLoader (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The base class that defines the management of the initial process of the guest system.

## Declaration

```swift
class VZBootLoader
```

<a id="overview"></a>

## Overview

The [VZBootLoader](vzbootloader.md) abstract class defines the common behaviors for booting a guest operating system into a VM. Don’t create instances of this class directly. Instead, instantiate the subclass that corresponds to the type of operating system you plan to load. For example, to create a boot loader object for a Linux kernel, create a [VZLinuxBootLoader](vzlinuxbootloader.md) object; to create a boot loader object for installation using an ISO image create a [VZEFIBootLoader](vzefibootloader.md). For a macOS system create [VZMacOSBootLoader](vzmacosbootloader.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZEFIBootLoader](vzefibootloader.md)
- [VZLinuxBootLoader](vzlinuxbootloader.md)
- [VZMacOSBootLoader](vzmacosbootloader.md)

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

- [VZEFIBootLoader](vzefibootloader.md): The boot loader configuration the system uses to boot guest-operating systems that expect an Extensible Firmware Interface (EFI) ROM.
- [VZLinuxBootLoader](vzlinuxbootloader.md): An object that loads and configures a Linux kernel as the guest system of your VM.

### Boot loaders

- [VZLinuxBootLoader](vzlinuxbootloader.md): An object that loads and configures a Linux kernel as the guest system of your VM.
- [VZEFIBootLoader](vzefibootloader.md): The boot loader configuration the system uses to boot guest-operating systems that expect an Extensible Firmware Interface (EFI) ROM.
- [VZEFIVariableStore](vzefivariablestore.md): An object that represents the Extensible Firmware Interface (EFI) variable store that contains NVRAM variables the EFI exposes.

# VZBootLoader (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The base class that defines the management of the initial process of the guest system.

## Declaration

```objectivec
@interface VZBootLoader : NSObject
```

<a id="overview"></a>

## Overview

The [VZBootLoader](vzbootloader.md) abstract class defines the common behaviors for booting a guest operating system into a VM. Don’t create instances of this class directly. Instead, instantiate the subclass that corresponds to the type of operating system you plan to load. For example, to create a boot loader object for a Linux kernel, create a [VZLinuxBootLoader](vzlinuxbootloader.md) object; to create a boot loader object for installation using an ISO image create a [VZEFIBootLoader](vzefibootloader.md). For a macOS system create [VZMacOSBootLoader](vzmacosbootloader.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZEFIBootLoader](vzefibootloader.md)
- [VZLinuxBootLoader](vzlinuxbootloader.md)
- [VZMacOSBootLoader](vzmacosbootloader.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [VZEFIBootLoader](vzefibootloader.md): The boot loader configuration the system uses to boot guest-operating systems that expect an Extensible Firmware Interface (EFI) ROM.
- [VZLinuxBootLoader](vzlinuxbootloader.md): An object that loads and configures a Linux kernel as the guest system of your VM.

### Boot loaders

- [VZLinuxBootLoader](vzlinuxbootloader.md): An object that loads and configures a Linux kernel as the guest system of your VM.
- [VZEFIBootLoader](vzefibootloader.md): The boot loader configuration the system uses to boot guest-operating systems that expect an Extensible Firmware Interface (EFI) ROM.
- [VZEFIVariableStore](vzefivariablestore.md): An object that represents the Extensible Firmware Interface (EFI) variable store that contains NVRAM variables the EFI exposes.
