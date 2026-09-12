> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nswritingdirection](https://developer.apple.com/documentation/uikit/nswritingdirection)

# NSWritingDirection (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that specify the writing direction.

## Declaration

```swift
enum NSWritingDirection
```

## Topics

### Constants

- [NSWritingDirection.natural](nswritingdirection/natural.md): The writing direction of the current script that the system determines using the Unicode Bidi Algorithm rules P2 and P3.
- [NSWritingDirection.leftToRight](nswritingdirection/lefttoright.md): The writing direction is left to right.
- [NSWritingDirection.rightToLeft](nswritingdirection/righttoleft.md): The writing direction is right to left.

### Initializers

- [init(rawValue:)](nswritingdirection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining writing direction

- [defaultWritingDirection(forLanguage:)](nsparagraphstyle/defaultwritingdirection%28forlanguage_%29.md): Returns the default writing direction for the specified language.
- [baseWritingDirection](nsparagraphstyle/basewritingdirection.md): The base writing direction for the paragraph.

# NSWritingDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that specify the writing direction.

## Declaration

```objectivec
enum NSWritingDirection : NSInteger;
```

## Topics

### Constants

- [NSWritingDirectionNatural](nswritingdirection/natural.md): The writing direction of the current script that the system determines using the Unicode Bidi Algorithm rules P2 and P3.
- [NSWritingDirectionLeftToRight](nswritingdirection/lefttoright.md): The writing direction is left to right.
- [NSWritingDirectionRightToLeft](nswritingdirection/righttoleft.md): The writing direction is right to left.

## See Also

### Determining writing direction

- [defaultWritingDirectionForLanguage:](nsparagraphstyle/defaultwritingdirection%28forlanguage_%29.md): Returns the default writing direction for the specified language.
- [baseWritingDirection](nsparagraphstyle/basewritingdirection.md): The base writing direction for the paragraph.
