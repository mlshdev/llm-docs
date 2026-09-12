> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p521/signing/privatekey](https://developer.apple.com/documentation/cryptokit/p521/signing/privatekey)

# P521.Signing.PrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A P-521 private key used to create cryptographic signatures.

## Declaration

```swift
struct PrivateKey
```

## Topics

### Creating a key

- [init(rawRepresentation:)](privatekey/init%28rawrepresentation_%29.md): Creates a P-521 private key for signing from a collection of bytes.
- [init(compactRepresentable:)](privatekey/init%28compactrepresentable_%29.md): Creates a random P-521 private key for signing.
- [init(derRepresentation:)](privatekey/init%28derrepresentation_%29.md): Creates a P-521 private key for signing from a Distinguished Encoding Rules (DER) encoded representation.
- [init(pemRepresentation:)](privatekey/init%28pemrepresentation_%29.md): Creates a P-521 private key for signing from a Privacy-Enhanced Mail PEM) representation.
- [init(x963Representation:)](privatekey/init%28x963representation_%29.md): Creates a P-521 private key for signing from an ANSI x9.63 representation.

### Representing the key

- [rawRepresentation](privatekey/rawrepresentation.md): A data representation of the private key.
- [derRepresentation](privatekey/derrepresentation.md): A Distinguished Encoding Rules (DER) encoded representation of the private key.
- [pemRepresentation](privatekey/pemrepresentation.md): A Privacy-Enhanced Mail (PEM) representation of the private key.
- [x963Representation](privatekey/x963representation.md): An ANSI x9.63 representation of the private key.

### Finding the public key

- [publicKey](privatekey/publickey.md): The corresponding public key.

### Creating a signature

- [signature(for:)](privatekey/signature%28for_%29-34g01.md): Generates an Elliptic Curve Digital Signature Algorithm (ECDSA) signature of the data you provide over the P-521 elliptic curve, using SHA-512 as the hash function.
- [signature(for:)](privatekey/signature%28for_%29-7rxva.md): Generates an Elliptic Curve Digital Signature Algorithm (ECDSA) signature of the digest you provide over the P-521 elliptic curve.
- [P521.Signing.ECDSASignature](ecdsasignature.md): A P-521 elliptic curve digital signature algorithm (ECDSA) signature.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using keys

- [P521.Signing.PublicKey](publickey.md): A P-521 public key used to verify cryptographic signatures.
