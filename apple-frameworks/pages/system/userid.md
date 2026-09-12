> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/userid](https://developer.apple.com/documentation/system/userid)

# UserID

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A Swift wrapper of the C `uid_t` type.

## Declaration

```swift
@frozen struct UserID
```

## Topics

### Initializers

- [init(\_:)](userid/init%28__%29.md): Creates a strongly-typed `UserID` from the raw C value.
- [init(rawValue:)](userid/init%28rawvalue_%29.md): Creates a strongly-typed `UserID` from the raw C value.

### Instance Properties

- [rawValue](userid/rawvalue.md): The raw C `uid_t`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
