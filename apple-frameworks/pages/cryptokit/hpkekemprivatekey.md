> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpkekemprivatekey](https://developer.apple.com/documentation/cryptokit/hpkekemprivatekey)

# HPKEKEMPrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A type that represents the private key in HPKE.

## Declaration

```swift
@preconcurrency protocol HPKEKEMPrivateKey : KEMPrivateKey where Self.PublicKey : HPKEKEMPublicKey
```

## Relationships

### Inherits From

- [KEMPrivateKey](kemprivatekey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [HPKEKEMPrivateKeyGeneration](hpkekemprivatekeygeneration.md)

### Conforming Types

- [XWingMLKEM768X25519.PrivateKey](xwingmlkem768x25519/privatekey.md)
