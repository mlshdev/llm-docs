> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionnavigation/direction](https://developer.apple.com/documentation/appkit/nstextselectionnavigation/direction)

# NSTextSelectionNavigation.Direction (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Values that describe the direction of a selection.

## Declaration

```swift
enum Direction
```

## Topics

### Navigation directions

- [NSTextSelectionNavigation.Direction.forward](direction/forward.md): The value that represents a logical forward selection based on the flow of text stored in the document.
- [NSTextSelectionNavigation.Direction.backward](direction/backward.md): The value that represents a backward selection based on the flow of text stored in the document.
- [NSTextSelectionNavigation.Direction.left](direction/left.md): The value that represents a selection in the left direction along the current line.
- [NSTextSelectionNavigation.Direction.right](direction/right.md): The value that represents a selection in the right direction along the current line.
- [NSTextSelectionNavigation.Direction.up](direction/up.md): The value that represents a selection in the up direction, above the current line.
- [NSTextSelectionNavigation.Direction.down](direction/down.md): The value that represents a selection in the down direction, below the current line.

### Initializers

- [init(rawValue:)](direction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selection characteristics

- [allowsNonContiguousRanges](allowsnoncontiguousranges.md): Determines if the instance could produce selections with multiple noncontiguous selections.
- [rotatesCoordinateSystemForLayoutOrientation](rotatescoordinatesystemforlayoutorientation.md): Determines if the framework rotates the coordinate system to match the layout orientation.
- [NSTextSelectionNavigation.Modifier](modifier.md): Values that describe how the framework handles different kinds of selection modifiers.
- [NSTextSelectionNavigation.Destination](destination.md): Values that affect how the framework handles navigation across different textual boundaries during a selection.
- [textSelection(for:enclosing:inContainerAt:)](textselection%28for_enclosing_incontainerat_%29.md): Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.

# NSTextSelectionNavigationDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Values that describe the direction of a selection.

## Declaration

```objectivec
enum NSTextSelectionNavigationDirection : NSInteger;
```

## Topics

### Navigation directions

- [NSTextSelectionNavigationDirectionForward](direction/forward.md): The value that represents a logical forward selection based on the flow of text stored in the document.
- [NSTextSelectionNavigationDirectionBackward](direction/backward.md): The value that represents a backward selection based on the flow of text stored in the document.
- [NSTextSelectionNavigationDirectionLeft](direction/left.md): The value that represents a selection in the left direction along the current line.
- [NSTextSelectionNavigationDirectionRight](direction/right.md): The value that represents a selection in the right direction along the current line.
- [NSTextSelectionNavigationDirectionUp](direction/up.md): The value that represents a selection in the up direction, above the current line.
- [NSTextSelectionNavigationDirectionDown](direction/down.md): The value that represents a selection in the down direction, below the current line.

## See Also

### Selection characteristics

- [allowsNonContiguousRanges](allowsnoncontiguousranges.md): Determines if the instance could produce selections with multiple noncontiguous selections.
- [rotatesCoordinateSystemForLayoutOrientation](rotatescoordinatesystemforlayoutorientation.md): Determines if the framework rotates the coordinate system to match the layout orientation.
- [NSTextSelectionNavigationModifier](modifier.md): Values that describe how the framework handles different kinds of selection modifiers.
- [NSTextSelectionNavigationDestination](destination.md): Values that affect how the framework handles navigation across different textual boundaries during a selection.
- [textSelectionForSelectionGranularity:enclosingPoint:inContainerAtLocation:](textselection%28for_enclosing_incontainerat_%29.md): Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.
