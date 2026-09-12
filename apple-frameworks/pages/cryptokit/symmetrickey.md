> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/symmetrickey](https://developer.apple.com/documentation/cryptokit/symmetrickey)

# SymmetricKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A symmetric cryptographic key.

## Declaration

```swift
struct SymmetricKey
```

<a id="overview"></a>

## Overview

You typically derive a symmetric key from an instance of a shared secret ([SharedSecret](sharedsecret.md)) that you obtain through key agreement. You use a symmetric key to compute a message authentication code like [HMAC](hmac.md), or to open and close a sealed box ([ChaChaPoly.SealedBox](chachapoly/sealedbox.md) or [AES.GCM.SealedBox](aes/gcm/sealedbox.md)) using a cipher like [ChaChaPoly](chachapoly.md) or [AES](aes.md).

## Topics

### Creating a key

- [init(data:)](symmetrickey/init%28data_%29.md): Creates a key from the given data.
- [init(size:)](symmetrickey/init%28size_%29.md): Generates a new random key of the given size.

### Getting the key length

- [bitCount](symmetrickey/bitcount.md): The number of bits in the key.

### Initializers

- [init(copying:)](symmetrickey/init%28copying_%29.md): Creates a key from the given data.
- [init(copyingWithZeroing:)](symmetrickey/init%28copyingwithzeroing_%29.md): Creates a key from the given data, zeroing out the bytes afterward.
- [init(size:initializingWith:)](symmetrickey/init%28size_initializingwith_%29.md): Creates a new key of the given size where the key contents are initialized via a callback.

### Instance Properties

- [bytes](symmetrickey/bytes.md): Access the raw bytes of the key.

## Relationships

### Conforms To

- [ContiguousBytes](../foundation/contiguousbytes.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Message authentication codes

- [HMAC](hmac.md): A hash-based message authentication algorithm.
- [SymmetricKeySize](symmetrickeysize.md): The sizes that a symmetric cryptographic key can take.
