> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpke/aead](https://developer.apple.com/documentation/cryptokit/hpke/aead)

# HPKE.AEAD

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The authenticated encryption with associated data (AEAD) algorithms to use in HPKE.

## Declaration

```swift
enum AEAD
```

## Topics

### Enumeration Cases

- [HPKE.AEAD.AES_GCM_128](aead/aes_gcm_128.md): An Advanced Encryption Standard cipher in Galois/Counter Mode with a key length of 128 bits.
- [HPKE.AEAD.AES_GCM_256](aead/aes_gcm_256.md): An Advanced Encryption Standard cipher in Galois/Counter Mode with a key length of 256 bits.
- [HPKE.AEAD.chaChaPoly](aead/chachapoly.md): A ChaCha20 stream cipher with the Poly1305 message authentication code.
- [HPKE.AEAD.exportOnly](aead/exportonly.md): An export-only mode.

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
- [HPKE.KDF](kdf.md): The key derivation functions to use in HPKE.
- [HPKE.KEM](kem.md): The key encapsulation mechanisms to use in HPKE.
- [HPKE.DHKEM](dhkem.md): A container for Diffie-Hellman key encapsulation mechanisms (KEMs).
