> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mldsa87/privatekey](https://developer.apple.com/documentation/cryptokit/mldsa87/privatekey)

# MLDSA87.PrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The private key for MLDSA87.

## Declaration

```swift
struct PrivateKey
```

## Topics

### Creating a private key

- [init()](privatekey/init%28%29.md): Creates a random MLDSA87 private key.
- [init(integrityCheckedRepresentation:)](privatekey/init%28integritycheckedrepresentation_%29.md): Initializes a private key from an integrity-checked data representation.
- [init(seedRepresentation:publicKey:)](privatekey/init%28seedrepresentation_publickey_%29.md): Initializes a private key from the seed representation.

### Inspecting a private key’s properties

- [integrityCheckedRepresentation](privatekey/integritycheckedrepresentation.md): The integrity-checked data representation of the private key.
- [publicKey](privatekey/publickey.md): The associated public key.
- [seedRepresentation](privatekey/seedrepresentation.md): The seed representation of the private key.

### Signing data

- [signature(for:)](privatekey/signature%28for_%29.md): Generates a MLDSA87 signature.
- [signature(for:context:)](privatekey/signature%28for_context_%29.md): Generates a MLDSA87 signature, with context.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Keys

- [MLDSA87.PublicKey](publickey.md): The public key for MLDSA87.
