> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/sha384digest](https://developer.apple.com/documentation/cryptokit/sha384digest)

# SHA384Digest

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The output of a Secure Hashing Algorithm 2 (SHA-2) hash with a 384-bit digest.

## Declaration

```swift
struct SHA384Digest
```

## Topics

### Inspecting the digest length

- [byteCount](sha384digest/bytecount.md): The number of bytes in the digest.

### Describing a digest

- [description](sha384digest/description.md): A human-readable description of the digest.

### Hashing a digest

- [hash(into:)](sha384digest/hash%28into_%29.md): Hashes the essential components of the digest by feeding them into the given hash function.

## Relationships

### Conforms To

- [ContiguousBytes](../foundation/contiguousbytes.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Digest](digest.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Specifying the output type

- [SHA384.Digest](sha384/digest.md): The digest type for a SHA384 hash function.
