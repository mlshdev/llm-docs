> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefibootloader](https://developer.apple.com/documentation/virtualization/vzefibootloader)

# VZEFIBootLoader (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The boot loader configuration the system uses to boot guest-operating systems that expect an Extensible Firmware Interface (EFI) ROM.

## Declaration

```swift
class VZEFIBootLoader
```

## Topics

### Creating an EFI boot loader

- [init()](vzefibootloader/init%28%29.md): Creates a new EFI boot loader.

### Working with secure boot configurations

- [VZEFISignatureDatabaseConfiguration](vzefisignaturedatabaseconfiguration.md): A container for Unified Extensible Firmware Interface (UEFI) Secure Boot signature lists.
- [VZEFISignatureList](vzefisignaturelist.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature list.
- [VZEFISignature](vzefisignature-swift.enum.md)

### Accessing the boot loader’s EFI variables

- [variableStore](vzefibootloader/variablestore.md): The boot loader’s EFI variable store.

## Relationships

### Inherits From

- [VZBootLoader](vzbootloader.md)

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

- [VZMacOSBootLoader](vzmacosbootloader.md): An object that loads and configures a boot loader for running macOS on Apple silicon as a guest system of your VM.

### Boot loaders

- [VZBootLoader](vzbootloader.md): The base class that defines the management of the initial process of the guest system.
- [VZLinuxBootLoader](vzlinuxbootloader.md): An object that loads and configures a Linux kernel as the guest system of your VM.
- [VZEFIVariableStore](vzefivariablestore.md): An object that represents the Extensible Firmware Interface (EFI) variable store that contains NVRAM variables the EFI exposes.

# VZEFIBootLoader (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The boot loader configuration the system uses to boot guest-operating systems that expect an Extensible Firmware Interface (EFI) ROM.

## Declaration

```objectivec
@interface VZEFIBootLoader : VZBootLoader
```

## Topics

### Creating an EFI boot loader

- [init](vzefibootloader/init%28%29.md): Creates a new EFI boot loader.

### Working with secure boot configurations

- [VZEFISignatureDatabaseConfiguration](vzefisignaturedatabaseconfiguration.md): A container for Unified Extensible Firmware Interface (UEFI) Secure Boot signature lists.
- [VZEFISignatureList](vzefisignaturelist.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature list.
- [VZEFISignature](vzefisignature-c.class.md): A base class that represents a Unified Extensible Firmware Interface (UEFI) signature.
- [VZEFISignatureX509Certificate](vzefisignaturex509certificate.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature based on an X.509 certificate.
- [VZEFISignatureSHA256Hash](vzefisignaturesha256hash.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature based on a SHA-256 cryptographic hash.

### Accessing the boot loader’s EFI variables

- [variableStore](vzefibootloader/variablestore.md): The boot loader’s EFI variable store.

## Relationships

### Inherits From

- [VZBootLoader](vzbootloader.md)

## See Also

### Related Documentation

- [VZMacOSBootLoader](vzmacosbootloader.md): An object that loads and configures a boot loader for running macOS on Apple silicon as a guest system of your VM.

### Boot loaders

- [VZBootLoader](vzbootloader.md): The base class that defines the management of the initial process of the guest system.
- [VZLinuxBootLoader](vzlinuxbootloader.md): An object that loads and configures a Linux kernel as the guest system of your VM.
- [VZEFIVariableStore](vzefivariablestore.md): An object that represents the Extensible Firmware Interface (EFI) variable store that contains NVRAM variables the EFI exposes.
