> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p521/signing](https://developer.apple.com/documentation/cryptokit/p521/signing)

# P521.Signing

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A mechanism used to create or verify a cryptographic signature using the NIST P-521 elliptic curve digital signature algorithm (ECDSA).

## Declaration

```swift
enum Signing
```

## Topics

### Using keys

- [P521.Signing.PrivateKey](signing/privatekey.md): A P-521 private key used to create cryptographic signatures.
- [P521.Signing.PublicKey](signing/publickey.md): A P-521 public key used to verify cryptographic signatures.

### Structures

- [P521.Signing.ECDSASignature](signing/ecdsasignature.md): A P-521 elliptic curve digital signature algorithm (ECDSA) signature.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing operations

- [P521.KeyAgreement](keyagreement.md): A mechanism used to create a shared secret between two users by performing NIST P-521 elliptic curve Diffie Hellman (ECDH) key exchange.
