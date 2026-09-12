> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefisignaturelist](https://developer.apple.com/documentation/virtualization/vzefisignaturelist)

# VZEFISignatureList (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A class that represents a Unified Extensible Firmware Interface (UEFI) signature list.

## Declaration

```swift
class VZEFISignatureList
```

<a id="overview"></a>

## Overview

This class represents a UEFI signature list that can contain X.509 certificates or SHA-256 hashes.

UEFI firmware stores the contents of signature lists in the Key Exchange Key (KEK) signature database, allowed signature database (db), and the forbidden signature database (dbx).

## Topics

### Initializers

- [init(contentsOf:)](vzefisignaturelist/init%28contentsof_%29.md): Creates a signature list from a file.
- [init(contentsOfURL:)](vzefisignaturelist/init%28contentsofurl_%29.md)
- [init(signatures:)](vzefisignaturelist/init%28signatures_%29.md)

### Instance Properties

- [signatures](vzefisignaturelist/signatures-3cz50.md)

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

- [VZEFISignatureDatabaseConfiguration](vzefisignaturedatabaseconfiguration.md): A container for Unified Extensible Firmware Interface (UEFI) Secure Boot signature lists.

### Working with secure boot configurations

- [VZEFISignatureDatabaseConfiguration](vzefisignaturedatabaseconfiguration.md): A container for Unified Extensible Firmware Interface (UEFI) Secure Boot signature lists.
- [VZEFISignature](vzefisignature-swift.enum.md)

# VZEFISignatureList (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A class that represents a Unified Extensible Firmware Interface (UEFI) signature list.

## Declaration

```objectivec
@interface VZEFISignatureList : NSObject
```

<a id="overview"></a>

## Overview

This class represents a UEFI signature list that can contain X.509 certificates or SHA-256 hashes.

UEFI firmware stores the contents of signature lists in the Key Exchange Key (KEK) signature database, allowed signature database (db), and the forbidden signature database (dbx).

## Topics

### Instance Properties

- [signatures](vzefisignaturelist/signatures-78pcm.md): An array of EFI signatures this signature list contains.

### Instance Methods

- [initWithContentsOfURL:error:](vzefisignaturelist/init%28contentsof_%29.md): Creates a signature list from a file.
- [initWithSignatures:](vzefisignaturelist/initwithsignatures_.md): Creates a signature list from the provided signatures.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [VZEFISignatureDatabaseConfiguration](vzefisignaturedatabaseconfiguration.md): A container for Unified Extensible Firmware Interface (UEFI) Secure Boot signature lists.

### Working with secure boot configurations

- [VZEFISignatureDatabaseConfiguration](vzefisignaturedatabaseconfiguration.md): A container for Unified Extensible Firmware Interface (UEFI) Secure Boot signature lists.
- [VZEFISignature](vzefisignature-c.class.md): A base class that represents a Unified Extensible Firmware Interface (UEFI) signature.
- [VZEFISignatureX509Certificate](vzefisignaturex509certificate.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature based on an X.509 certificate.
- [VZEFISignatureSHA256Hash](vzefisignaturesha256hash.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature based on a SHA-256 cryptographic hash.
