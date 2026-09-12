> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/curve25519/signing/publickey](https://developer.apple.com/documentation/cryptokit/curve25519/signing/publickey)

# Curve25519.Signing.PublicKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Curve25519 public key used to verify cryptographic signatures.

## Declaration

```swift
struct PublicKey
```

## Topics

### Creating a public key

- [init(rawRepresentation:)](publickey/init%28rawrepresentation_%29.md): Creates a Curve25519 public key from a data representation.

### Representing the key

- [rawRepresentation](publickey/rawrepresentation.md): A representation of the public key.

### Verifying a signature

- [isValidSignature(\_:for:)](publickey/isvalidsignature%28__for_%29.md): Verifies an EdDSA signature over Curve25519.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using keys

- [Curve25519.Signing.PrivateKey](privatekey.md): A Curve25519 private key used to create cryptographic signatures.
