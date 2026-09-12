> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/messageauthenticationcode](https://developer.apple.com/documentation/cryptokit/messageauthenticationcode)

# MessageAuthenticationCode

**Framework:** Apple CryptoKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that represents a message authentication code.

## Declaration

```swift
@preconcurrency protocol MessageAuthenticationCode : ContiguousBytes, CustomStringConvertible, Hashable, Sendable, Sequence where Self.Element == UInt8
```

## Topics

### Retrieving the code length

- [byteCount](messageauthenticationcode/bytecount.md): The number of bytes in the message authentication code.

### Comparing codes

- [==(\_:\_:)](messageauthenticationcode/==%28____%29-3rxc4.md): Returns a Boolean value indicating whether a message authentication code is equivalent to a collection of binary data.
- [==(\_:\_:)](messageauthenticationcode/==%28____%29-b90.md): Returns a Boolean value indicating whether two message authentication codes are equal.

### Default Implementations

- [CustomStringConvertible Implementations](messageauthenticationcode/customstringconvertible-implementations.md)

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

- [HashedAuthenticationCode](hashedauthenticationcode.md)

## See Also

### Working with codes

- [HMAC.MAC](hmac/mac.md): An alias for a hash-based message authentication code.
- [HashedAuthenticationCode](hashedauthenticationcode.md): A hash-based message authentication code.
