> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/digest](https://developer.apple.com/documentation/cryptokit/digest)

# Digest

**Framework:** Apple CryptoKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that represents the output of a hash.

## Declaration

```swift
@preconcurrency protocol Digest : ContiguousBytes, CustomStringConvertible, Hashable, Sendable, Sequence where Self.Element == UInt8
```

## Topics

### Getting the digest length

- [byteCount](digest/bytecount.md): The number of bytes in the digest.

### Comparing digests

- [==(\_:\_:)](digest/==%28____%29-7yz3z.md): Determines whether a digest is equivalent to a collection of contiguous bytes.
- [==(\_:\_:)](digest/==%28____%29-6m59k.md): Determines whether two digests are equal.

### Default Implementations

- [CustomStringConvertible Implementations](digest/customstringconvertible-implementations.md)

## Relationships

### Inherits From

- [ContiguousBytes](../foundation/contiguousbytes.md)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

### Conforming Types

- [Insecure.MD5Digest](insecure/md5digest.md)
- [Insecure.SHA1Digest](insecure/sha1digest.md)
- [SHA256Digest](sha256digest.md)
- [SHA384Digest](sha384digest.md)
- [SHA3_256Digest](sha3_256digest.md)
- [SHA3_384Digest](sha3_384digest.md)
- [SHA3_512Digest](sha3_512digest.md)
- [SHA512Digest](sha512digest.md)

## See Also

### Specifying the output type

- [Digest](hashfunction/digest.md)
