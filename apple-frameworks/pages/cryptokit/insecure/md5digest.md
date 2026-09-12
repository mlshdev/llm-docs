> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/insecure/md5digest](https://developer.apple.com/documentation/cryptokit/insecure/md5digest)

# Insecure.MD5Digest

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The output of a MD5 hash.

## Declaration

```swift
struct MD5Digest
```

## Topics

### Inspecting the digest length

- [byteCount](md5digest/bytecount.md): The number of bytes in the digest.

### Describing a digest

- [description](md5digest/description.md): A human-readable description of the digest.

### Hashing a digest

- [hash(into:)](md5digest/hash%28into_%29.md): Hashes the essential components of the digest by feeding them into the given hash function.

## Relationships

### Conforms To

- [ContiguousBytes](../../foundation/contiguousbytes.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Digest](../digest.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Specifying the output type

- [Insecure.MD5.Digest](md5/digest.md): The digest type for a MD5 hash function.
