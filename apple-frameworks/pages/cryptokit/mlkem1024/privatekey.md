> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mlkem1024/privatekey](https://developer.apple.com/documentation/cryptokit/mlkem1024/privatekey)

# MLKEM1024.PrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A private key you use to decapsulate shared secrets with the Module-Lattice key encapsulation mechanism.

## Declaration

```swift
struct PrivateKey
```

## Topics

### Creating a private key

- [generate()](privatekey/generate%28%29.md): Generates a new, random private key.
- [init()](privatekey/init%28%29.md): Initializes a random private key.
- [init(integrityCheckedRepresentation:)](privatekey/init%28integritycheckedrepresentation_%29.md): Initializes a private key from an integrity-checked representation.
- [init(seedRepresentation:publicKey:)](privatekey/init%28seedrepresentation_publickey_%29.md): Initializes a private key from a seed representation and optional public key.

### Inspecting a private key’s properties

- [integrityCheckedRepresentation](privatekey/integritycheckedrepresentation.md): An integrity-checked representation of the private key.
- [publicKey](privatekey/publickey.md): The corresponding public key.
- [seedRepresentation](privatekey/seedrepresentation.md): The private key’s seed representation.

### Decapsulating shared secrets

- [decapsulate(\_:)](privatekey/decapsulate%28__%29.md): Decapsulate a shared secret.

## Relationships

### Conforms To

- [KEMPrivateKey](../kemprivatekey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Keys

- [MLKEM1024.PublicKey](publickey.md): A public key you use to encapsulate shared secrets with the Module-Lattice key encapsulation mechanism.
