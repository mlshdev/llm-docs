> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p521/keyagreement](https://developer.apple.com/documentation/cryptokit/p521/keyagreement)

# P521.KeyAgreement

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A mechanism used to create a shared secret between two users by performing NIST P-521 elliptic curve Diffie Hellman (ECDH) key exchange.

## Declaration

```swift
enum KeyAgreement
```

## Topics

### Using keys

- [P521.KeyAgreement.PrivateKey](keyagreement/privatekey.md): A P-521 private key used for key agreement.
- [P521.KeyAgreement.PublicKey](keyagreement/publickey.md): A P-521 public key used for key agreement.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing operations

- [P521.Signing](signing.md): A mechanism used to create or verify a cryptographic signature using the NIST P-521 elliptic curve digital signature algorithm (ECDSA).
