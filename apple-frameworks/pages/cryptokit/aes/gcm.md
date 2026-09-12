> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/aes/gcm](https://developer.apple.com/documentation/cryptokit/aes/gcm)

# AES.GCM

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The Advanced Encryption Standard (AES) Galois Counter Mode (GCM) cipher suite.

## Declaration

```swift
enum GCM
```

## Topics

### Storing the output

- [AES.GCM.SealedBox](gcm/sealedbox.md): A secure container for your data that you can access using a cipher.

### Getting a nonce

- [AES.GCM.Nonce](gcm/nonce.md): A value used once during a cryptographic operation and then discarded.

### Securing the plaintext message

- [seal(\_:using:nonce:)](gcm/seal%28__using_nonce_%29.md): Secures the given plaintext message with encryption and an authentication tag.
- [seal(\_:using:nonce:authenticating:)](gcm/seal%28__using_nonce_authenticating_%29.md): Secures the given plaintext message with encryption and an authentication tag that covers both the encrypted data and additional data.

### Decrypting and verifying the message

- [open(\_:using:)](gcm/open%28__using_%29.md): Decrypts the message and verifies its authenticity.
- [open(\_:using:authenticating:)](gcm/open%28__using_authenticating_%29.md): Decrypts the message and verifies the authenticity of both the encrypted message and additional data.

### Type Methods

- [open(inPlace:using:nonce:authenticating:tag:)](gcm/open%28inplace_using_nonce_authenticating_tag_%29.md): Decrypts the message and verifies its authenticity.
- [seal(inPlace:using:nonce:authenticating:tag:)](gcm/seal%28inplace_using_nonce_authenticating_tag_%29.md): Secures the given plaintext message with encryption and an optional authentication tag.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
