> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p384/signing](https://developer.apple.com/documentation/cryptokit/p384/signing)

# P384.Signing

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A mechanism used to create or verify a cryptographic signature using the NIST P-384 elliptic curve digital signature algorithm (ECDSA).

## Declaration

```swift
enum Signing
```

## Topics

### Using keys

- [P384.Signing.PrivateKey](signing/privatekey.md): A P-384 private key used to create cryptographic signatures.
- [P384.Signing.PublicKey](signing/publickey.md): A P-384 public key used to verify cryptographic signatures.

### Structures

- [P384.Signing.ECDSASignature](signing/ecdsasignature.md): A P-384 elliptic curve digital signature algorithm (ECDSA) signature.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing operations

- [P384.KeyAgreement](keyagreement.md): A mechanism used to create a shared secret between two users by performing NIST P-384 elliptic curve Diffie Hellman (ECDH) key exchange.
