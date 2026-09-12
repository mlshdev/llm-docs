> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hashfunction](https://developer.apple.com/documentation/cryptokit/hashfunction)

# HashFunction

**Framework:** Apple CryptoKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that performs cryptographically secure hashing.

## Declaration

```swift
@preconcurrency protocol HashFunction : Sendable
```

<a id="overview"></a>

## Overview

The [HashFunction](hashfunction.md) protocol describes an interface for computing a fixed-length digest from an arbitrarily large collection of bytes. Because the digest is small, you can quickly compare the digests to detect a difference in two corresponding data sets. Alternatively, transmit or store data with its digest to detect changes introduced after initially calculating the digest.

Use one of the protocol’s adopters, like [SHA256](sha256.md), [SHA384](sha384.md), or [SHA512](sha512.md), to output a digest whose value varies significantly over even small differences in the input data.

Checking a digest doesn’t guard against changes made by a malicious user who also changes the digest to match. To handle this, compute a message authentication code (MAC) like [HMAC](hmac.md) instead. MACs rely on hashing, but incorporate a secret cryptographic key into the digest computation. Only a user that has the key can generate a valid MAC.

## Topics

### Specifying the output type

- [Digest](hashfunction/digest.md)
- [Digest](digest.md): A type that represents the output of a hash.

### Computing a hash in one call

- [hash(data:)](hashfunction/hash%28data_%29.md): Computes the digest of the bytes in the given data instance and returns the computed digest.

### Computing a hash iteratively

- [init()](hashfunction/init%28%29.md): Creates a hash function.
- [update(data:)](hashfunction/update%28data_%29.md): Incrementally updates the hash function with the given data.
- [update(bufferPointer:)](hashfunction/update%28bufferpointer_%29.md): Incrementally updates the hash function with the contents of the buffer.
- [finalize()](hashfunction/finalize%28%29.md): Finalizes the hash function and returns the computed digest.

### Inspecting hash information

- [blockByteCount](hashfunction/blockbytecount.md): The number of bytes that represents the hash function’s internal state.

### Instance Methods

- [update(bytes:)](hashfunction/update%28bytes_%29.md)

### Type Methods

- [hash(bytes:)](hashfunction/hash%28bytes_%29.md): Computes a digest of a span of bytes.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [Insecure.MD5](insecure/md5.md)
- [Insecure.SHA1](insecure/sha1.md)
- [SHA256](sha256.md)
- [SHA384](sha384.md)
- [SHA3_256](sha3_256.md)
- [SHA3_384](sha3_384.md)
- [SHA3_512](sha3_512.md)
- [SHA512](sha512.md)

## See Also

### Cryptographically secure hashes

- [SHA512](sha512.md): An implementation of Secure Hashing Algorithm 2 (SHA-2) hashing with a 512-bit digest.
- [SHA384](sha384.md): An implementation of Secure Hashing Algorithm 2 (SHA-2) hashing with a 384-bit digest.
- [SHA256](sha256.md): An implementation of Secure Hashing Algorithm 2 (SHA-2) hashing with a 256-bit digest.
