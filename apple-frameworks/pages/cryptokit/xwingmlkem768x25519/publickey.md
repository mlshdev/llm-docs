> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/xwingmlkem768x25519/publickey](https://developer.apple.com/documentation/cryptokit/xwingmlkem768x25519/publickey)

# XWingMLKEM768X25519.PublicKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
struct PublicKey
```

## Topics

### Accessing a key’s raw representation

- [rawRepresentation](publickey/rawrepresentation.md)

### Accessing the corresponding private key type

- [XWingMLKEM768X25519.PublicKey.HPKEEphemeralPrivateKey](publickey/hpkeephemeralprivatekey.md): The type of the ephemeral private key associated with this public key.

### Initializers

- [init(rawRepresentation:)](publickey/init%28rawrepresentation_%29.md)

### Default Implementations

- [HPKEKEMPublicKey Implementations](publickey/hpkekempublickey-implementations.md)
- [HPKEPublicKeySerialization Implementations](publickey/hpkepublickeyserialization-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HPKEKEMPublicKey](../hpkekempublickey.md)
- [HPKEPublicKeySerialization](../hpkepublickeyserialization.md)
- [KEMPublicKey](../kempublickey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Keys

- [XWingMLKEM768X25519.PrivateKey](privatekey.md)
