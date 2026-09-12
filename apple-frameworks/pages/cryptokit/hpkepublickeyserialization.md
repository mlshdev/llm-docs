> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpkepublickeyserialization](https://developer.apple.com/documentation/cryptokit/hpkepublickeyserialization)

# HPKEPublicKeySerialization

**Framework:** Apple CryptoKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that [HPKE](hpke.md) uses to encode the public key.

## Declaration

```swift
@preconcurrency protocol HPKEPublicKeySerialization : Sendable
```

## Topics

### Initializers

- [init(\_:kem:)](hpkepublickeyserialization/init%28__kem_%29.md): Creates a public key from an encoded representation.

### Instance Methods

- [hpkeRepresentation(kem:)](hpkepublickeyserialization/hpkerepresentation%28kem_%29.md): Creates an encoded representation of the public key.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [HPKEDiffieHellmanPublicKey](hpkediffiehellmanpublickey.md)
- [HPKEKEMPublicKey](hpkekempublickey.md)

### Conforming Types

- [Curve25519.KeyAgreement.PublicKey](curve25519/keyagreement/publickey.md)
- [P256.KeyAgreement.PublicKey](p256/keyagreement/publickey.md)
- [P384.KeyAgreement.PublicKey](p384/keyagreement/publickey.md)
- [P521.KeyAgreement.PublicKey](p521/keyagreement/publickey.md)
- [XWingMLKEM768X25519.PublicKey](xwingmlkem768x25519/publickey.md)
