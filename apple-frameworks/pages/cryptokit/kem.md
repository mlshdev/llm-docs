> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/kem](https://developer.apple.com/documentation/cryptokit/kem)

# KEM

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A key encapsulation mechanism.

## Declaration

```swift
enum KEM
```

<a id="overview"></a>

## Overview

Use a key encapsulation mechanism (KEM) to protect a symmetric cryptographic key that you share with another party.

## Topics

### Defining encapsulation outputs

- [KEM.EncapsulationResult](kem/encapsulationresult.md): The result of a key encapsulation operation.

### Handling errors

- [KEM.Errors](kem/errors.md): Errors that CryptoKit throws when it encounters problems in key encapsulation mechanism (KEM) operations.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Key encapsulation mechanisms (KEM)

- [MLKEM768](mlkem768.md): The Module-Lattice key encapsulation mechanism (KEM).
- [MLKEM1024](mlkem1024.md): The Module-Lattice key encapsulation mechanism (KEM).
- [XWingMLKEM768X25519](xwingmlkem768x25519.md): The X-Wing (ML-KEM768 with X25519) Key Encapsulation Mechanism, defined in https://datatracker.ietf.org/doc/html/draft-connolly-cfrg-xwing-kem-06
