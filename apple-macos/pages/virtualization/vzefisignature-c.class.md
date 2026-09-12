> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefisignature-c.class](https://developer.apple.com/documentation/virtualization/vzefisignature-c.class)

# VZEFISignature

**Interface language:** Objective-C

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A base class that represents a Unified Extensible Firmware Interface (UEFI) signature.

## Declaration

```objectivec
@interface VZEFISignature : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate `VZEFISignature` objects directly; instead, create an instance of one of its subclasses, such as [VZEFISignatureX509Certificate](vzefisignaturex509certificate.md) or [VZEFISignatureSHA256Hash](vzefisignaturesha256hash.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZEFISignatureSHA256Hash](vzefisignaturesha256hash.md)
- [VZEFISignatureX509Certificate](vzefisignaturex509certificate.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [VZEFISignatureX509Certificate](vzefisignaturex509certificate.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature based on an X.509 certificate.
- [VZEFISignatureSHA256Hash](vzefisignaturesha256hash.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature based on a SHA-256 cryptographic hash.
- [VZEFISignatureList](vzefisignaturelist.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature list.

### Working with secure boot configurations

- [VZEFISignatureDatabaseConfiguration](vzefisignaturedatabaseconfiguration.md): A container for Unified Extensible Firmware Interface (UEFI) Secure Boot signature lists.
- [VZEFISignatureList](vzefisignaturelist.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature list.
- [VZEFISignatureX509Certificate](vzefisignaturex509certificate.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature based on an X.509 certificate.
- [VZEFISignatureSHA256Hash](vzefisignaturesha256hash.md): A class that represents a Unified Extensible Firmware Interface (UEFI) signature based on a SHA-256 cryptographic hash.
