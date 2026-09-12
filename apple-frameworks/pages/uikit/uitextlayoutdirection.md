> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextlayoutdirection](https://developer.apple.com/documentation/uikit/uitextlayoutdirection)

# UITextLayoutDirection (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The direction of text layout.

## Declaration

```swift
enum UITextLayoutDirection
```

<a id="overview"></a>

## Overview

Constants of this type are used as arguments in the [position(from:in:offset:)](uitextinput/position%28from_in_offset_%29.md), [position(within:farthestIn:)](uitextinput/position%28within_farthestin_%29.md), and [characterRange(byExtending:in:)](uitextinput/characterrange%28byextending_in_%29.md) methods.

## Topics

### Constants

- [UITextLayoutDirection.right](uitextlayoutdirection/right.md): Layout of the text to the right.
- [UITextLayoutDirection.left](uitextlayoutdirection/left.md): Layout of the text to the left.
- [UITextLayoutDirection.up](uitextlayoutdirection/up.md): Layout of the text in an upward direction.
- [UITextLayoutDirection.down](uitextlayoutdirection/down.md): Layout of the text in a downward direction.

### Initializers

- [init(rawValue:)](uitextlayoutdirection/init%28rawvalue_%29.md)

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

- [UITextDirection](uitextdirection.md): The direction of the text.
- [UITextStorageDirection](uitextstoragedirection.md): The direction of text storage.

# UITextLayoutDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The direction of text layout.

## Declaration

```objectivec
enum UITextLayoutDirection : NSInteger;
```

<a id="overview"></a>

## Overview

Constants of this type are used as arguments in the [positionFromPosition:inDirection:offset:](uitextinput/position%28from_in_offset_%29.md), [positionWithinRange:farthestInDirection:](uitextinput/position%28within_farthestin_%29.md), and [characterRangeByExtendingPosition:inDirection:](uitextinput/characterrange%28byextending_in_%29.md) methods.

## Topics

### Constants

- [UITextLayoutDirectionRight](uitextlayoutdirection/right.md): Layout of the text to the right.
- [UITextLayoutDirectionLeft](uitextlayoutdirection/left.md): Layout of the text to the left.
- [UITextLayoutDirectionUp](uitextlayoutdirection/up.md): Layout of the text in an upward direction.
- [UITextLayoutDirectionDown](uitextlayoutdirection/down.md): Layout of the text in a downward direction.

## See Also

### Constants

- [UITextDirection](uitextdirection.md): The direction of the text.
- [UITextStorageDirection](uitextstoragedirection.md): The direction of text storage.
