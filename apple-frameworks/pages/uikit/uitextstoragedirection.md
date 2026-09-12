> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextstoragedirection](https://developer.apple.com/documentation/uikit/uitextstoragedirection)

# UITextStorageDirection (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The direction of text storage.

## Declaration

```swift
enum UITextStorageDirection
```

<a id="overview"></a>

## Overview

Constants of this type are used as arguments to the [baseWritingDirection(for:in:)](uitextinput/basewritingdirection%28for_in_%29.md) and [textStyling(at:in:)](uitextinput/textstyling%28at_in_%29.md) methods.

## Topics

### Constants

- [UITextStorageDirection.forward](uitextstoragedirection/forward.md): Storage of the text in a forward direction.
- [UITextStorageDirection.backward](uitextstoragedirection/backward.md): Storage of the text in a backward direction.

### Initializers

- [init(rawValue:)](uitextstoragedirection/init%28rawvalue_%29.md)

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
- [UITextLayoutDirection](uitextlayoutdirection.md): The direction of text layout.

# UITextStorageDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The direction of text storage.

## Declaration

```objectivec
enum UITextStorageDirection : NSInteger;
```

<a id="overview"></a>

## Overview

Constants of this type are used as arguments to the [baseWritingDirectionForPosition:inDirection:](uitextinput/basewritingdirection%28for_in_%29.md) and [textStylingAtPosition:inDirection:](uitextinput/textstyling%28at_in_%29.md) methods.

## Topics

### Constants

- [UITextStorageDirectionForward](uitextstoragedirection/forward.md): Storage of the text in a forward direction.
- [UITextStorageDirectionBackward](uitextstoragedirection/backward.md): Storage of the text in a backward direction.

## See Also

### Constants

- [UITextDirection](uitextdirection.md): The direction of the text.
- [UITextLayoutDirection](uitextlayoutdirection.md): The direction of text layout.
