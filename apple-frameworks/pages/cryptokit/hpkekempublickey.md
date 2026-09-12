> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpkekempublickey](https://developer.apple.com/documentation/cryptokit/hpkekempublickey)

# HPKEKEMPublicKey

**Framework:** Apple CryptoKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A type that represents the public key in HPKE

## Declaration

```swift
@preconcurrency protocol HPKEKEMPublicKey : HPKEPublicKeySerialization, KEMPublicKey
```

## Topics

### Associated Types

- [EphemeralPrivateKey](hpkekempublickey/ephemeralprivatekey.md): The type of the ephemeral private key.

## Relationships

### Inherits From

- [HPKEPublicKeySerialization](hpkepublickeyserialization.md)
- [KEMPublicKey](kempublickey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [XWingMLKEM768X25519.PublicKey](xwingmlkem768x25519/publickey.md)
