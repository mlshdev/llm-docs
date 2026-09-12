> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpke/kem](https://developer.apple.com/documentation/cryptokit/hpke/kem)

# HPKE.KEM

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The key encapsulation mechanisms to use in HPKE.

## Declaration

```swift
enum KEM
```

<a id="overview"></a>

## Overview

The module-lattice key encapsulation mechanism (ML-KEM) is designed to offer increased security in situations where an adversary uses a quantum computer.

## Topics

### Elliptic curve key encapsulation mechanisms

- [HPKE.KEM.Curve25519_HKDF_SHA256](kem/curve25519_hkdf_sha256.md): A key encapsulation mechanism using X25519 elliptic curve key agreement and SHA-2 hashing with a 256-bit digest.
- [HPKE.KEM.P256_HKDF_SHA256](kem/p256_hkdf_sha256.md): A key encapsulation mechanism using NIST P-256 elliptic curve key agreement and SHA-2 hashing with a 256-bit digest.
- [HPKE.KEM.P384_HKDF_SHA384](kem/p384_hkdf_sha384.md): A key encapsulation mechanism using NIST P-384 elliptic curve key agreement and SHA-2 hashing with a 384-bit digest.
- [HPKE.KEM.P521_HKDF_SHA512](kem/p521_hkdf_sha512.md): A key encapsulation mechanism using NIST P-521 elliptic curve key agreement and SHA-2 hashing with a 512-bit digest.

### Enumeration Cases

- [HPKE.KEM.XWingMLKEM768X25519](kem/xwingmlkem768x25519.md): A key encapsulation mechanism using the X-Wing (ML-KEM-768 with X25519) key encapsulation mechanism and SHA-2 hashing with a 256-bit digest.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Choosing cryptographic algorithms

- [HPKE.Ciphersuite](ciphersuite.md): Cipher suites to use in hybrid public key encryption (HPKE).
- [HPKE.AEAD](aead.md): The authenticated encryption with associated data (AEAD) algorithms to use in HPKE.
- [HPKE.KDF](kdf.md): The key derivation functions to use in HPKE.
- [HPKE.DHKEM](dhkem.md): A container for Diffie-Hellman key encapsulation mechanisms (KEMs).
