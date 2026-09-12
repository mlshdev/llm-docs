> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefisignaturedatabaseconfiguration](https://developer.apple.com/documentation/virtualization/vzefisignaturedatabaseconfiguration)

# VZEFISignatureDatabaseConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A container for Unified Extensible Firmware Interface (UEFI) Secure Boot signature lists.

## Declaration

```swift
class VZEFISignatureDatabaseConfiguration
```

<a id="overview"></a>

## Overview

This class represents the signature lists used in UEFI Secure Boot configuration. It contains three separate arrays, one for each UEFI signature database, which are:

- **Key Exchange Key (KEK)**: This list contains keys authorized to update the db and dbx databases. The array acts as a bridge between the platform owner (who controls the Platform Key) and operating system vendors.
- **Allowed Signature Database (db)**: An “allow list” of trusted UEFI applications, bootloaders, and drivers. The EFI boot loader allows code signed by these signatures to execute during boot.
- **Forbidden Signature Database (dbx)**: A “deny list” of revoked or malicious signatures. The EFI boot loader blocks code matching these signatures from running, even if it matches a signature in the db database.

## Topics

### Initializers

- [init(keyExchangeKeys:dbSignatures:dbxSignatures:)](vzefisignaturedatabaseconfiguration/init%28keyexchangekeys_dbsignatures_dbxsignatures_%29.md): Creates a signature lists container from signature list objects.

### Instance Properties

- [dbSignatures](vzefisignaturedatabaseconfiguration/dbsignatures.md): Allowed signature database (db) entries.
- [dbxSignatures](vzefisignaturedatabaseconfiguration/dbxsignatures.md): Forbidden signature database (dbx) entries.
- [keyExchangeKeys](vzefisignaturedatabaseconfiguration/keyexchangekeys.md): Key Exchange Key (KEK) database entries.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [VZEFISignatureList](vzefisignaturelist.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature list.
- [VZEFIVariableStore](vzefivariablestore.md): An object that represents the Extensible Firmware Interface (EFI) variable store that contains NVRAM variables the EFI exposes.

### Working with secure boot configurations

- [VZEFISignatureList](vzefisignaturelist.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature list.
- [VZEFISignature](vzefisignature-swift.enum.md)

# VZEFISignatureDatabaseConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A container for Unified Extensible Firmware Interface (UEFI) Secure Boot signature lists.

## Declaration

```objectivec
@interface VZEFISignatureDatabaseConfiguration : NSObject
```

<a id="overview"></a>

## Overview

This class represents the signature lists used in UEFI Secure Boot configuration. It contains three separate arrays, one for each UEFI signature database, which are:

- **Key Exchange Key (KEK)**: This list contains keys authorized to update the db and dbx databases. The array acts as a bridge between the platform owner (who controls the Platform Key) and operating system vendors.
- **Allowed Signature Database (db)**: An “allow list” of trusted UEFI applications, bootloaders, and drivers. The EFI boot loader allows code signed by these signatures to execute during boot.
- **Forbidden Signature Database (dbx)**: A “deny list” of revoked or malicious signatures. The EFI boot loader blocks code matching these signatures from running, even if it matches a signature in the db database.

## Topics

### Instance Properties

- [dbSignatures](vzefisignaturedatabaseconfiguration/dbsignatures.md): Allowed signature database (db) entries.
- [dbxSignatures](vzefisignaturedatabaseconfiguration/dbxsignatures.md): Forbidden signature database (dbx) entries.
- [keyExchangeKeys](vzefisignaturedatabaseconfiguration/keyexchangekeys.md): Key Exchange Key (KEK) database entries.

### Instance Methods

- [initWithKeyExchangeKeys:dbSignatures:dbxSignatures:](vzefisignaturedatabaseconfiguration/init%28keyexchangekeys_dbsignatures_dbxsignatures_%29.md): Creates a signature lists container from signature list objects.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [VZEFISignatureList](vzefisignaturelist.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature list.
- [VZEFIVariableStore](vzefivariablestore.md): An object that represents the Extensible Firmware Interface (EFI) variable store that contains NVRAM variables the EFI exposes.

### Working with secure boot configurations

- [VZEFISignatureList](vzefisignaturelist.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature list.
- [VZEFISignature](vzefisignature-c.class.md): A base class that represents a Unified Extensible Firmware Interface (UEFI) signature.
- [VZEFISignatureX509Certificate](vzefisignaturex509certificate.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature based on an X.509 certificate.
- [VZEFISignatureSHA256Hash](vzefisignaturesha256hash.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature based on a SHA-256 cryptographic hash.
