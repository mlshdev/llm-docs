> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/curve25519/keyagreement](https://developer.apple.com/documentation/cryptokit/curve25519/keyagreement)

# Curve25519.KeyAgreement

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A mechanism used to create a shared secret between two users by performing X25519 key agreement.

## Declaration

```swift
enum KeyAgreement
```

## Topics

### Using keys

- [Curve25519.KeyAgreement.PrivateKey](keyagreement/privatekey.md): A Curve25519 private key used for key agreement.
- [Curve25519.KeyAgreement.PublicKey](keyagreement/publickey.md): A Curve25519 public key used for key agreement.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing operations

- [Curve25519.Signing](signing.md): A mechanism used to create or verify a cryptographic signature using Ed25519.
