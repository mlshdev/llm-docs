> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/symmetrickeysize](https://developer.apple.com/documentation/cryptokit/symmetrickeysize)

# SymmetricKeySize

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The sizes that a symmetric cryptographic key can take.

## Declaration

```swift
struct SymmetricKeySize
```

<a id="overview"></a>

## Overview

When creating a new [SymmetricKey](symmetrickey.md) instance with a call to its [init(size:)](symmetrickey/init%28size_%29.md) initializer, you typically use one of the standard key sizes, like [bits128](symmetrickeysize/bits128.md), [bits192](symmetrickeysize/bits192.md), or [bits256](symmetrickeysize/bits256.md). When you need a key with a non-standard length, use the [init(bitCount:)](symmetrickeysize/init%28bitcount_%29.md) initializer to create a `SymmetricKeySize` instance with a custom bit count.

## Topics

### Using standard key lengths

- [bits128](symmetrickeysize/bits128.md): A size of 128 bits.
- [bits192](symmetrickeysize/bits192.md): A size of 192 bits.
- [bits256](symmetrickeysize/bits256.md): A size of 256 bits.

### Creating a nonstandard key length

- [init(bitCount:)](symmetrickeysize/init%28bitcount_%29.md): Creates a new key size of the given length.

### Getting the length

- [bitCount](symmetrickeysize/bitcount.md): The number of bits in the key.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Message authentication codes

- [HMAC](hmac.md): A hash-based message authentication algorithm.
- [SymmetricKey](symmetrickey.md): A symmetric cryptographic key.
