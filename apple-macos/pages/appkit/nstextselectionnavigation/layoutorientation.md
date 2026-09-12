> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionnavigation/layoutorientation](https://developer.apple.com/documentation/appkit/nstextselectionnavigation/layoutorientation)

# NSTextSelectionNavigation.LayoutOrientation (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Values that describe the possible layout orientations.

## Declaration

```swift
enum LayoutOrientation
```

## Topics

### Layout orientations

- [NSTextSelectionNavigation.LayoutOrientation.horizontal](layoutorientation/horizontal.md): The value that defines horizontal layout orientation.
- [NSTextSelectionNavigation.LayoutOrientation.vertical](layoutorientation/vertical.md): The value that defines vertical layout orientation.

### Initializers

- [init(rawValue:)](layoutorientation/init%28rawvalue_%29.md)

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
- [NSTextSelectionNavigation.WritingDirection](writingdirection.md): Values that describe the writing direction inside a text selection.
- [textLayoutOrientation(at:)](../nstextselectiondatasource/textlayoutorientation%28at_%29.md): Returns the layout orientation at the location you specify.

# NSTextSelectionNavigationLayoutOrientation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Values that describe the possible layout orientations.

## Declaration

```objectivec
enum NSTextSelectionNavigationLayoutOrientation : NSInteger;
```

## Topics

### Layout orientations

- [NSTextSelectionNavigationLayoutOrientationHorizontal](layoutorientation/horizontal.md): The value that defines horizontal layout orientation.
- [NSTextSelectionNavigationLayoutOrientationVertical](layoutorientation/vertical.md): The value that defines vertical layout orientation.

## See Also

### Changing the characteristics of the selection

- [baseWritingDirectionAtLocation:](../nstextselectiondatasource/basewritingdirection%28at_%29.md): Returns the base writing direction at the location you specify.
- [NSTextSelectionNavigationWritingDirection](writingdirection.md): Values that describe the writing direction inside a text selection.
- [textLayoutOrientationAtLocation:](../nstextselectiondatasource/textlayoutorientation%28at_%29.md): Returns the layout orientation at the location you specify.
