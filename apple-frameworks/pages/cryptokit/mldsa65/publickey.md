> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mldsa65/publickey](https://developer.apple.com/documentation/cryptokit/mldsa65/publickey)

# MLDSA65.PublicKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The public key for MLDSA65.

## Declaration

```swift
struct PublicKey
```

## Topics

### Creating a public key

- [init(rawRepresentation:)](publickey/init%28rawrepresentation_%29.md): Parses a public key from a serialized representation.

### Getting the raw representation

- [rawRepresentation](publickey/rawrepresentation.md): A serialized representation of the public key.

### Instance Methods

- [isValidSignature(\_:for:)](publickey/isvalidsignature%28__for_%29.md): Verifies a MLDSA65 signature.
- [isValidSignature(\_:for:context:)](publickey/isvalidsignature%28__for_context_%29.md): Verifies a MLDSA65 signature, in a specific context.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Keys

- [MLDSA65.PrivateKey](privatekey.md): The private key for MLDSA65.
