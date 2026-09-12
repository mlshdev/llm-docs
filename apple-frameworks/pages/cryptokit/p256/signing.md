> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p256/signing](https://developer.apple.com/documentation/cryptokit/p256/signing)

# P256.Signing

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A mechanism used to create or verify a cryptographic signature using the NIST P-256 elliptic curve digital signature algorithm (ECDSA).

## Declaration

```swift
enum Signing
```

## Topics

### Using keys

- [P256.Signing.PrivateKey](signing/privatekey.md): A P-256 private key used to create cryptographic signatures.
- [P256.Signing.PublicKey](signing/publickey.md): A P-256 public key used to verify cryptographic signatures.

### Structures

- [P256.Signing.ECDSASignature](signing/ecdsasignature.md): A P-256 elliptic curve digital signature algorithm (ECDSA) signature.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing operations

- [P256.KeyAgreement](keyagreement.md): A mechanism used to create a shared secret between two users by performing NIST P-256 elliptic curve Diffie Hellman (ECDH) key exchange.
