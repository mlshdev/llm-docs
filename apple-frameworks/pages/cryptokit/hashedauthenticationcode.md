> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/hashedauthenticationcode

# HashedAuthenticationCode

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A hash-based message authentication code.

## Declaration

```swift
struct HashedAuthenticationCode<H> where H : HashFunction
```

## Topics

### Retrieving the code length

- [byteCount](hashedauthenticationcode/bytecount.md): The number of bytes in the message authentication code.

### Describing a code

- [description](hashedauthenticationcode/description.md): A human-readable description of the code.

## Relationships

### Conforms To

- [ContiguousBytes](../foundation/contiguousbytes.md)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MessageAuthenticationCode](messageauthenticationcode.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Working with codes

- [HMAC.MAC](hmac/mac.md): An alias for a hash-based message authentication code.
- [MessageAuthenticationCode](messageauthenticationcode.md): A type that represents a message authentication code.
