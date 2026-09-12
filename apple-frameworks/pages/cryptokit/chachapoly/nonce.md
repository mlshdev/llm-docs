> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/chachapoly/nonce](https://developer.apple.com/documentation/cryptokit/chachapoly/nonce)

# ChaChaPoly.Nonce

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A value used once during a cryptographic operation and then discarded.

## Declaration

```swift
struct Nonce
```

<a id="overview"></a>

## Overview

Don’t reuse the same nonce for multiple calls to encryption APIs. It’s critical that nonces are unique per call to encryption APIs in order to protect the integrity of the encryption.

## Topics

### Creating a nonce

- [init()](nonce/init%28%29.md): Creates a new random nonce.
- [init(data:)](nonce/init%28data_%29.md): Creates a nonce from the given data.

### Iterating over a nonce’s bytes

- [makeIterator()](nonce/makeiterator%28%29.md): Returns an iterator over the elements of the nonce.

### Initializers

- [init(copying:)](nonce/init%28copying_%29.md): Creates a nonce from the given data.

### Instance Properties

- [bytes](nonce/bytes.md): The bytes stored in the nonce.
- [count](nonce/count.md): The number of bytes stored in the nonce.

## Relationships

### Conforms To

- [ContiguousBytes](../../foundation/contiguousbytes.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
