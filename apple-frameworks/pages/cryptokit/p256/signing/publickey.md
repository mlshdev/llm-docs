> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p256/signing/publickey](https://developer.apple.com/documentation/cryptokit/p256/signing/publickey)

# P256.Signing.PublicKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A P-256 public key used to verify cryptographic signatures.

## Declaration

```swift
struct PublicKey
```

## Topics

### Creating a key

- [init(rawRepresentation:)](publickey/init%28rawrepresentation_%29.md): Creates a P-256 public key for signing from a collection of bytes.
- [init(compactRepresentation:)](publickey/init%28compactrepresentation_%29.md): Creates a P-256 public key for signing from a compact representation of the key.
- [init(compressedRepresentation:)](publickey/init%28compressedrepresentation_%29.md): Creates a P-256 public key for signing from a compressed representation of the key.
- [init(derRepresentation:)](publickey/init%28derrepresentation_%29.md): Creates a P-256 public key for signing from a Distinguished Encoding Rules (DER) encoded representation.
- [init(pemRepresentation:)](publickey/init%28pemrepresentation_%29.md): Creates a P-256 public key for signing from a Privacy-Enhanced Mail (PEM) representation.
- [init(x963Representation:)](publickey/init%28x963representation_%29.md): Creates a P-256 public key for signing from an ANSI x9.63 representation.

### Representing the key

- [rawRepresentation](publickey/rawrepresentation.md): A full representation of the public key.
- [compactRepresentation](publickey/compactrepresentation.md): A compact representation of the public key.
- [compressedRepresentation](publickey/compressedrepresentation.md): A compressed representation of the public key.
- [derRepresentation](publickey/derrepresentation.md): A Distinguished Encoding Rules (DER) encoded representation of the public key.
- [pemRepresentation](publickey/pemrepresentation.md): A Privacy-Enhanced Mail (PEM) representation of the public key.
- [x963Representation](publickey/x963representation.md): An ANSI x9.63 representation of the public key.

### Verifying a signature

- [isValidSignature(\_:for:)](publickey/isvalidsignature%28__for_%29-3da2m.md): Verifies an elliptic curve digital signature algorithm (ECDSA) signature on a block of data over the P-256 elliptic curve.
- [isValidSignature(\_:for:)](publickey/isvalidsignature%28__for_%29-2rsb5.md): Verifies an elliptic curve digital signature algorithm (ECDSA) signature on a digest over the P-256 elliptic curve.
- [P256.Signing.ECDSASignature](ecdsasignature.md): A P-256 elliptic curve digital signature algorithm (ECDSA) signature.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using keys

- [P256.Signing.PrivateKey](privatekey.md): A P-256 private key used to create cryptographic signatures.
