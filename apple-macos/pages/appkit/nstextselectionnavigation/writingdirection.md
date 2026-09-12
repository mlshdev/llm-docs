> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionnavigation/writingdirection](https://developer.apple.com/documentation/appkit/nstextselectionnavigation/writingdirection)

# NSTextSelectionNavigation.WritingDirection (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Values that describe the writing direction inside a text selection.

## Declaration

```swift
enum WritingDirection
```

## Topics

### Writing directions

- [NSTextSelectionNavigation.WritingDirection.leftToRight](writingdirection/lefttoright.md): The value that defines the left to right writing direction.
- [NSTextSelectionNavigation.WritingDirection.rightToLeft](writingdirection/righttoleft.md): The value that defines the right to left writing direction.

### Initializers

- [init(rawValue:)](writingdirection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Changing the characteristics of the selection

- [baseWritingDirection(at:)](../nstextselectiondatasource/basewritingdirection%28at_%29.md): Returns the base writing direction at the location you specify.
- [textLayoutOrientation(at:)](../nstextselectiondatasource/textlayoutorientation%28at_%29.md): Returns the layout orientation at the location you specify.
- [NSTextSelectionNavigation.LayoutOrientation](layoutorientation.md): Values that describe the possible layout orientations.

# NSTextSelectionNavigationWritingDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Values that describe the writing direction inside a text selection.

## Declaration

```objectivec
enum NSTextSelectionNavigationWritingDirection : NSInteger;
```

## Topics

### Writing directions

- [NSTextSelectionNavigationWritingDirectionLeftToRight](writingdirection/lefttoright.md): The value that defines the left to right writing direction.
- [NSTextSelectionNavigationWritingDirectionRightToLeft](writingdirection/righttoleft.md): The value that defines the right to left writing direction.

## See Also

### Changing the characteristics of the selection

- [baseWritingDirectionAtLocation:](../nstextselectiondatasource/basewritingdirection%28at_%29.md): Returns the base writing direction at the location you specify.
- [textLayoutOrientationAtLocation:](../nstextselectiondatasource/textlayoutorientation%28at_%29.md): Returns the layout orientation at the location you specify.
- [NSTextSelectionNavigationLayoutOrientation](layoutorientation.md): Values that describe the possible layout orientations.
