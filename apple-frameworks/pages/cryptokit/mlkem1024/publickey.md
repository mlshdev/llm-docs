> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mlkem1024/publickey](https://developer.apple.com/documentation/cryptokit/mlkem1024/publickey)

# MLKEM1024.PublicKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A public key you use to encapsulate shared secrets with the Module-Lattice key encapsulation mechanism.

## Declaration

```swift
struct PublicKey
```

## Topics

### Creating a public key

- [init(rawRepresentation:)](publickey/init%28rawrepresentation_%29.md): Initializes a public key from a raw representation.

### Accessing a key’s raw representation

- [rawRepresentation](publickey/rawrepresentation.md): A serialized representation of the public key.

### Encapsulating a shared secret

- [encapsulate()](publickey/encapsulate%28%29.md): Generates and encapsulates a shared secret.

## Relationships

### Conforms To

- [KEMPublicKey](../kempublickey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Keys

- [MLKEM1024.PrivateKey](privatekey.md): A private key you use to decapsulate shared secrets with the Module-Lattice key encapsulation mechanism.
