> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/curve25519/keyagreement/publickey](https://developer.apple.com/documentation/cryptokit/curve25519/keyagreement/publickey)

# Curve25519.KeyAgreement.PublicKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Curve25519 public key used for key agreement.

## Declaration

```swift
struct PublicKey
```

## Topics

### Creating a public key

- [init(rawRepresentation:)](publickey/init%28rawrepresentation_%29.md): Creates a Curve25519 public key for key agreement from a collection of bytes.

### Representing the key

- [rawRepresentation](publickey/rawrepresentation.md): A representation of the Curve25519 public key as a collection of bytes.

### Type Aliases

- [Curve25519.KeyAgreement.PublicKey.HPKEEphemeralPrivateKey](publickey/hpkeephemeralprivatekey.md): The type of the ephemeral private key associated with this public key.

### Default Implementations

- [HPKEDiffieHellmanPublicKey Implementations](publickey/hpkediffiehellmanpublickey-implementations.md)
- [HPKEPublicKeySerialization Implementations](publickey/hpkepublickeyserialization-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HPKEDiffieHellmanPublicKey](../../hpkediffiehellmanpublickey.md)
- [HPKEPublicKeySerialization](../../hpkepublickeyserialization.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using keys

- [Curve25519.KeyAgreement.PrivateKey](privatekey.md): A Curve25519 private key used for key agreement.
