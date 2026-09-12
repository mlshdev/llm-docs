> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p521/keyagreement/publickey](https://developer.apple.com/documentation/cryptokit/p521/keyagreement/publickey)

# P521.KeyAgreement.PublicKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A P-521 public key used for key agreement.

## Declaration

```swift
struct PublicKey
```

## Topics

### Creating a public key

- [init(rawRepresentation:)](publickey/init%28rawrepresentation_%29.md): Creates a P-521 public key for key agreement from a collection of bytes.
- [init(compactRepresentation:)](publickey/init%28compactrepresentation_%29.md): Creates a P-521 public key for key agreement from a compact representation of the key.
- [init(derRepresentation:)](publickey/init%28derrepresentation_%29.md): Creates a P-521 public key for key agreement from a Distinguished Encoding Rules (DER) encoded representation.
- [init(pemRepresentation:)](publickey/init%28pemrepresentation_%29.md): Creates a P-521 public key for key agreement from a Privacy-Enhanced Mail (PEM) representation.
- [init(x963Representation:)](publickey/init%28x963representation_%29.md): Creates a P-521 public key for key agreement from an ANSI x9.63 representation.
- [init(compressedRepresentation:)](publickey/init%28compressedrepresentation_%29.md): Creates a P-521 public key for key agreement from a compressed representation of the key.

### Representing the key

- [rawRepresentation](publickey/rawrepresentation.md): A full representation of the public key.
- [compactRepresentation](publickey/compactrepresentation.md): A compact representation of the public key.
- [derRepresentation](publickey/derrepresentation.md): A Distinguished Encoding Rules (DER) encoded representation of the public key.
- [pemRepresentation](publickey/pemrepresentation.md): A Privacy-Enhanced Mail (PEM) representation of the public key.
- [x963Representation](publickey/x963representation.md): An ANSI x9.63 representation of the public key.
- [compressedRepresentation](publickey/compressedrepresentation.md): A compressed representation of the public key.

### Type Aliases

- [P521.KeyAgreement.PublicKey.HPKEEphemeralPrivateKey](publickey/hpkeephemeralprivatekey.md): The type of the ephemeral private key associated with this public key.

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

- [P521.KeyAgreement.PrivateKey](privatekey.md): A P-521 private key used for key agreement.
