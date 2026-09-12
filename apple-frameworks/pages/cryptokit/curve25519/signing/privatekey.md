> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/curve25519/signing/privatekey](https://developer.apple.com/documentation/cryptokit/curve25519/signing/privatekey)

# Curve25519.Signing.PrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Curve25519 private key used to create cryptographic signatures.

## Declaration

```swift
struct PrivateKey
```

## Topics

### Creating a private key

- [init()](privatekey/init%28%29.md): Creates a random Curve25519 private key for signing.
- [init(rawRepresentation:)](privatekey/init%28rawrepresentation_%29.md): Creates a Curve25519 private key for signing from a data representation.

### Reporting the private key

- [rawRepresentation](privatekey/rawrepresentation.md): The raw representation of the key as a collection of contiguous bytes.

### Finding the public key

- [publicKey](privatekey/publickey.md): The corresponding public key.

### Creating a signature

- [signature(for:)](privatekey/signature%28for_%29.md): Generates an EdDSA signature over Curve25519.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using keys

- [Curve25519.Signing.PublicKey](publickey.md): A Curve25519 public key used to verify cryptographic signatures.
