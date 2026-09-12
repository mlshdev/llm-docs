> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/kem/errors](https://developer.apple.com/documentation/cryptokit/kem/errors)

# KEM.Errors

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Errors that CryptoKit throws when it encounters problems in key encapsulation mechanism (KEM) operations.

## Declaration

```swift
enum Errors
```

## Topics

### Enumeration Cases

- [KEM.Errors.invalidSeed](errors/invalidseed.md): The seed value supplied for deriving a key isn’t valid.
- [KEM.Errors.publicKeyMismatchDuringInitialization](errors/publickeymismatchduringinitialization.md): The public key CryptoKit receives when it initializes a key encapsulation operation doesn’t match the expected value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
