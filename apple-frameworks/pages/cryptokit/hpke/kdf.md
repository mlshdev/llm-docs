> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpke/kdf](https://developer.apple.com/documentation/cryptokit/hpke/kdf)

# HPKE.KDF

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The key derivation functions to use in HPKE.

## Declaration

```swift
enum KDF
```

## Topics

### Enumeration Cases

- [HPKE.KDF.HKDF_SHA256](kdf/hkdf_sha256.md): An HMAC-based key derivation function that uses SHA-2 hashing with a 256-bit digest.
- [HPKE.KDF.HKDF_SHA384](kdf/hkdf_sha384.md): An HMAC-based key derivation function that uses SHA-2 hashing with a 384-bit digest.
- [HPKE.KDF.HKDF_SHA512](kdf/hkdf_sha512.md): An HMAC-based key derivation function that uses SHA-2 hashing with a 512-bit digest.

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
- [HPKE.KEM](kem.md): The key encapsulation mechanisms to use in HPKE.
- [HPKE.DHKEM](dhkem.md): A container for Diffie-Hellman key encapsulation mechanisms (KEMs).
