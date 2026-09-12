> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/inode](https://developer.apple.com/documentation/system/inode)

# Inode

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A Swift wrapper of the C `ino_t` type.

## Declaration

```swift
@frozen struct Inode
```

## Topics

### Initializers

- [init(\_:)](inode/init%28__%29.md): Creates a strongly-typed `Inode` from the raw C value.
- [init(rawValue:)](inode/init%28rawvalue_%29.md): Creates a strongly-typed `Inode` from the raw C value.

### Instance Properties

- [rawValue](inode/rawvalue.md): The raw C `ino_t`.

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
