> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinetruncationtype](https://developer.apple.com/documentation/coretext/ctlinetruncationtype)

# CTLineTruncationType (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Truncation types required by the [CTLineCreateTruncatedLine(\_:\_:\_:\_:)](ctlinecreatetruncatedline%28________%29.md) function to tell the truncation engine which type of truncation is being requested.

## Declaration

```swift
enum CTLineTruncationType
```

## Topics

### Constants

- [CTLineTruncationType.start](ctlinetruncationtype/start.md)
- [CTLineTruncationType.end](ctlinetruncationtype/end.md)
- [CTLineTruncationType.middle](ctlinetruncationtype/middle.md)

### Initializers

- [init(rawValue:)](ctlinetruncationtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CTLineTruncationType (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Truncation types required by the [CTLineCreateTruncatedLine](ctlinecreatetruncatedline%28________%29.md) function to tell the truncation engine which type of truncation is being requested.

## Declaration

```objectivec
enum CTLineTruncationType : uint32_t;
```

## Topics

### Constants

- [kCTLineTruncationStart](ctlinetruncationtype/start.md)
- [kCTLineTruncationEnd](ctlinetruncationtype/end.md)
- [kCTLineTruncationMiddle](ctlinetruncationtype/middle.md)
