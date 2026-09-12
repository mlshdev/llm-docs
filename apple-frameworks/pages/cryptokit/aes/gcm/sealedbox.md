> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/aes/gcm/sealedbox](https://developer.apple.com/documentation/cryptokit/aes/gcm/sealedbox)

# AES.GCM.SealedBox

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A secure container for your data that you can access using a cipher.

## Declaration

```swift
struct SealedBox
```

<a id="overview"></a>

## Overview

Use a sealed box as a container for data that you want to transmit securely. Seal data into a box with one of the cipher algorithms, like [seal(\_:using:nonce:)](seal%28__using_nonce_%29.md).

The box holds an encrypted version of the original data, an authentication tag, and the nonce during encryption. The encryption makes the data unintelligible to anyone without the key, while the authentication tag makes it possible for the intended receiver to be sure the data remains intact.

The receiver uses another instance of the same cipher, like the [open(\_:using:)](open%28__using_%29.md) method, to open the box.

## Topics

### Creating the sealed box

- [init(nonce:ciphertext:tag:)](sealedbox/init%28nonce_ciphertext_tag_%29.md): Creates a sealed box from the given tag, nonce, and ciphertext.
- [init(combined:)](sealedbox/init%28combined_%29.md): Creates a sealed box from the combined bytes of an authentication tag, nonce, and encrypted data.

### Retrieving the combined contents

- [combined](sealedbox/combined.md): A combined element composed of the nonce, encrypted data, and authentication tag.

### Inspecting the component elements

- [nonce](sealedbox/nonce.md): The nonce used to encrypt the data.
- [ciphertext](sealedbox/ciphertext.md): The encrypted data.
- [tag](sealedbox/tag.md): An authentication tag.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
