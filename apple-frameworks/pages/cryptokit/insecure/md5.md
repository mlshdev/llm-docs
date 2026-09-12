> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/insecure/md5](https://developer.apple.com/documentation/cryptokit/insecure/md5)

# Insecure.MD5

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An implementation of MD5 hashing.

## Declaration

```swift
struct MD5
```

<a id="overview"></a>

## Overview

The [Insecure.MD5](md5.md) hash implements the [HashFunction](../hashfunction.md) protocol to produce an MD5 digest ([Insecure.MD5Digest](md5digest.md)).

You can compute the digest by calling the static `hash(data:)` method once. Alternatively, if the data that you want to hash is too large to fit in memory, you can compute the digest iteratively by creating a new hash instance, calling the `update(data:)` method repeatedly with blocks of data, and then calling the [finalize()](md5/finalize%28%29.md) method to get the result.

> **Important**

> This hash algorithm isn’t considered cryptographically secure, but is provided for backward compatibility with older services that require it. For new services, prefer one of the secure hashes, like [SHA512](../sha512.md).

## Topics

### Specifying the output type

- [Insecure.MD5.Digest](md5/digest.md): The digest type for a MD5 hash function.
- [Insecure.MD5Digest](md5digest.md): The output of a MD5 hash.

### Reporting the hash length

- [byteCount](md5/bytecount.md): The number of bytes in an MD5 digest.

### Computing a hash iteratively

- [init()](md5/init%28%29.md): Creates a MD5 hash function.
- [update(bufferPointer:)](md5/update%28bufferpointer_%29.md): Incrementally updates the hash function with the contents of the buffer.
- [finalize()](md5/finalize%28%29.md): Finalizes the hash function and returns the computed digest.

### Reporting hash function information

- [blockByteCount](md5/blockbytecount.md): The number of bytes that represents the hash function’s internal state.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HashFunction](../hashfunction.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Hashes

- [Insecure.SHA1](sha1.md): An implementation of SHA1 hashing.
