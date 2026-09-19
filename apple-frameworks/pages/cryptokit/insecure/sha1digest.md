> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/insecure/sha1digest

# Insecure.SHA1Digest

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The output of a SHA1 hash.

## Declaration

```swift
struct SHA1Digest
```

## Topics

### Inspecting the digest length

- [byteCount](sha1digest/bytecount.md): The number of bytes in the digest.

### Describing a digest

- [description](sha1digest/description.md): A human-readable description of the digest.

### Hasing a digest

- [hash(into:)](sha1digest/hash%28into_%29.md): Hashes the essential components of the digest by feeding them into the given hash function.

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

- [Insecure.SHA1.Digest](sha1/digest.md): The digest type for a SHA1 hash function.
