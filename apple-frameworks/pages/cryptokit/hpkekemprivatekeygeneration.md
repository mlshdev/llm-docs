> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpkekemprivatekeygeneration](https://developer.apple.com/documentation/cryptokit/hpkekemprivatekeygeneration)

# HPKEKEMPrivateKeyGeneration

**Framework:** Apple CryptoKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A type that represents the generation of private keys in HPKE

## Declaration

```swift
@preconcurrency protocol HPKEKEMPrivateKeyGeneration : HPKEKEMPrivateKey
```

## Topics

### Initializers

- [init()](hpkekemprivatekeygeneration/init%28%29.md): Creates a private key generator.

## Relationships

### Inherits From

- [HPKEKEMPrivateKey](hpkekemprivatekey.md)
- [KEMPrivateKey](kemprivatekey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [XWingMLKEM768X25519.PrivateKey](xwingmlkem768x25519/privatekey.md)
