> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinebreakmode](https://developer.apple.com/documentation/coretext/ctlinebreakmode)

# CTLineBreakMode (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

These constants specify what happens when a line is too long for its frame.

## Declaration

```swift
enum CTLineBreakMode
```

## Topics

### Constants

- [CTLineBreakMode.byWordWrapping](ctlinebreakmode/bywordwrapping.md)
- [CTLineBreakMode.byCharWrapping](ctlinebreakmode/bycharwrapping.md)
- [CTLineBreakMode.byClipping](ctlinebreakmode/byclipping.md)
- [CTLineBreakMode.byTruncatingHead](ctlinebreakmode/bytruncatinghead.md)
- [CTLineBreakMode.byTruncatingTail](ctlinebreakmode/bytruncatingtail.md)
- [CTLineBreakMode.byTruncatingMiddle](ctlinebreakmode/bytruncatingmiddle.md)

### Initializers

- [init(rawValue:)](ctlinebreakmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [CTTextAlignment](cttextalignment.md): Constants that specify text alignment.
- [CTWritingDirection](ctwritingdirection.md): These constants specify the writing direction.
- [CTParagraphStyleSpecifier](ctparagraphstylespecifier.md): Constants used to query and modify a paragraph style object.

# CTLineBreakMode (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

These constants specify what happens when a line is too long for its frame.

## Declaration

```objectivec
enum CTLineBreakMode : uint8_t;
```

## Topics

### Constants

- [kCTLineBreakByWordWrapping](ctlinebreakmode/bywordwrapping.md)
- [kCTLineBreakByCharWrapping](ctlinebreakmode/bycharwrapping.md)
- [kCTLineBreakByClipping](ctlinebreakmode/byclipping.md)
- [kCTLineBreakByTruncatingHead](ctlinebreakmode/bytruncatinghead.md)
- [kCTLineBreakByTruncatingTail](ctlinebreakmode/bytruncatingtail.md)
- [kCTLineBreakByTruncatingMiddle](ctlinebreakmode/bytruncatingmiddle.md)

## See Also

### Constants

- [CTTextAlignment](cttextalignment.md): Constants that specify text alignment.
- [CTWritingDirection](ctwritingdirection.md): These constants specify the writing direction.
- [CTParagraphStyleSpecifier](ctparagraphstylespecifier.md): Constants used to query and modify a paragraph style object.
