> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectionnavigation/allowsnoncontiguousranges](https://developer.apple.com/documentation/uikit/nstextselectionnavigation/allowsnoncontiguousranges)

# allowsNonContiguousRanges (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Determines if the instance could produce selections with multiple noncontiguous selections.

## Declaration

```swift
var allowsNonContiguousRanges: Bool { get set }
```

## See Also

### Selection characteristics

- [rotatesCoordinateSystemForLayoutOrientation](rotatescoordinatesystemforlayoutorientation.md): Determines if the framework rotates the coordinate system to match the layout orientation.
- [NSTextSelectionNavigation.Modifier](modifier.md): Values that describe how the framework handles different kinds of selection modifiers.
- [NSTextSelectionNavigation.Destination](destination.md): Values that affect how the framework handles navigation across different textual boundaries during a selection.
- [NSTextSelectionNavigation.Direction](direction.md): Values that describe the direction of a selection.
- [textSelection(for:enclosing:inContainerAt:)](textselection%28for_enclosing_incontainerat_%29.md): Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.

# allowsNonContiguousRanges (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Determines if the instance could produce selections with multiple noncontiguous selections.

## Declaration

```objectivec
@property BOOL allowsNonContiguousRanges;
```

## See Also

### Selection characteristics

- [rotatesCoordinateSystemForLayoutOrientation](rotatescoordinatesystemforlayoutorientation.md): Determines if the framework rotates the coordinate system to match the layout orientation.
- [NSTextSelectionNavigationModifier](modifier.md): Values that describe how the framework handles different kinds of selection modifiers.
- [NSTextSelectionNavigationDestination](destination.md): Values that affect how the framework handles navigation across different textual boundaries during a selection.
- [NSTextSelectionNavigationDirection](direction.md): Values that describe the direction of a selection.
- [textSelectionForSelectionGranularity:enclosingPoint:inContainerAtLocation:](textselection%28for_enclosing_incontainerat_%29.md): Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.
