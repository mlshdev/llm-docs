> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/secureenclave/p256/signing/privatekey](https://developer.apple.com/documentation/cryptokit/secureenclave/p256/signing/privatekey)

# SecureEnclave.P256.Signing.PrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A P-256 private key used for signing.

## Declaration

```swift
struct PrivateKey
```

## Topics

### Creating a private key

- [init(dataRepresentation:authenticationContext:)](privatekey/init%28datarepresentation_authenticationcontext_%29.md): Creates a P-256 private key for signing from a data representation of the key with the given authentication context.
- [init(compactRepresentable:accessControl:authenticationContext:)](privatekey/init%28compactrepresentable_accesscontrol_authenticationcontext_%29.md): Creates a P-256 private key for signing with the specified access control.

### Representing the key

- [dataRepresentation](privatekey/datarepresentation.md): A data representation of the private key.

### Getting the public key

- [publicKey](privatekey/publickey.md): The corresponding public key.

### Generating a signature

- [signature(for:)](privatekey/signature%28for_%29-3xogs.md): Generates an Elliptic Curve Digital Signature Algorithm (ECDSA) signature of the digest you provide over the P-256 elliptic curve.
- [signature(for:)](privatekey/signature%28for_%29-76j0u.md): Generates an elliptic curve digital signature algorithm (ECDSA) signature of the given data over the P-256 elliptic curve, using SHA-256 as the hash function.

### Initializers

- [init(compactRepresentable:accessControl:)](privatekey/init%28compactrepresentable_accesscontrol_%29.md): Creates a P-256 private key for signing with the specified access control.
- [init(dataRepresentation:)](privatekey/init%28datarepresentation_%29.md): Creates a P-256 private key for signing from the specified data representation.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
