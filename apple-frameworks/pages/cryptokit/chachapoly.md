> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/chachapoly](https://developer.apple.com/documentation/cryptokit/chachapoly)

# ChaChaPoly

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An implementation of the ChaCha20-Poly1305 cipher.

## Declaration

```swift
enum ChaChaPoly
```

## Topics

### Storing the output

- [ChaChaPoly.SealedBox](chachapoly/sealedbox.md): A secure container for your data that you access using a cipher.

### Getting a nonce

- [ChaChaPoly.Nonce](chachapoly/nonce.md): A value used once during a cryptographic operation and then discarded.

### Securing the plaintext message

- [seal(\_:using:nonce:)](chachapoly/seal%28__using_nonce_%29.md): Secures the given plaintext message with encryption and an authentication tag.
- [seal(\_:using:nonce:authenticating:)](chachapoly/seal%28__using_nonce_authenticating_%29.md): Secures the given plaintext message with encryption and an authentication tag that covers both the encrypted data and additional data.

### Decrypting and verifying the message

- [open(\_:using:)](chachapoly/open%28__using_%29.md): Decrypts the message and verifies its authenticity.
- [open(\_:using:authenticating:)](chachapoly/open%28__using_authenticating_%29.md): Decrypts the message and verifies the authenticity of both the encrypted message and additional data.

### Type Methods

- [open(inPlace:using:nonce:authenticating:tag:)](chachapoly/open%28inplace_using_nonce_authenticating_tag_%29.md): Decrypts the message and verifies the authenticity of both the encrypted message and additional data.
- [seal(inPlace:using:nonce:authenticating:tag:)](chachapoly/seal%28inplace_using_nonce_authenticating_tag_%29.md): Secures the given plaintext message in place with encryption and an authentication tag.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Ciphers

- [AES](aes.md): A container for Advanced Encryption Standard (AES) ciphers.
