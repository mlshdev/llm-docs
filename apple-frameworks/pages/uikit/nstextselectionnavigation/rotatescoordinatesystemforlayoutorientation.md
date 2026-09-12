> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectionnavigation/rotatescoordinatesystemforlayoutorientation](https://developer.apple.com/documentation/uikit/nstextselectionnavigation/rotatescoordinatesystemforlayoutorientation)

# rotatesCoordinateSystemForLayoutOrientation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Determines if the framework rotates the coordinate system to match the layout orientation.

## Declaration

```swift
var rotatesCoordinateSystemForLayoutOrientation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If set to `true`, the framework rotates the coordinate system for arguments passed to the navigation methods such as [textSelections(interactingAt:inContainerAt:anchors:modifiers:selecting:bounds:)](textselections%28interactingat_incontainerat_anchors_modifiers_selecting_bounds_%29.md): based on the text container layout orientation. Defaults to `false`.

## See Also

### Selection characteristics

- [allowsNonContiguousRanges](allowsnoncontiguousranges.md): Determines if the instance could produce selections with multiple noncontiguous selections.
- [NSTextSelectionNavigation.Modifier](modifier.md): Values that describe how the framework handles different kinds of selection modifiers.
- [NSTextSelectionNavigation.Destination](destination.md): Values that affect how the framework handles navigation across different textual boundaries during a selection.
- [NSTextSelectionNavigation.Direction](direction.md): Values that describe the direction of a selection.
- [textSelection(for:enclosing:inContainerAt:)](textselection%28for_enclosing_incontainerat_%29.md): Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.

# rotatesCoordinateSystemForLayoutOrientation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Determines if the framework rotates the coordinate system to match the layout orientation.

## Declaration

```objectivec
@property BOOL rotatesCoordinateSystemForLayoutOrientation;
```

<a id="Discussion"></a>

## Discussion

If set to `true`, the framework rotates the coordinate system for arguments passed to the navigation methods such as [textSelectionsInteractingAtPoint:inContainerAtLocation:anchors:modifiers:selecting:bounds:](textselections%28interactingat_incontainerat_anchors_modifiers_selecting_bounds_%29.md): based on the text container layout orientation. Defaults to `false`.

## See Also

### Selection characteristics

- [allowsNonContiguousRanges](allowsnoncontiguousranges.md): Determines if the instance could produce selections with multiple noncontiguous selections.
- [NSTextSelectionNavigationModifier](modifier.md): Values that describe how the framework handles different kinds of selection modifiers.
- [NSTextSelectionNavigationDestination](destination.md): Values that affect how the framework handles navigation across different textual boundaries during a selection.
- [NSTextSelectionNavigationDirection](direction.md): Values that describe the direction of a selection.
- [textSelectionForSelectionGranularity:enclosingPoint:inContainerAtLocation:](textselection%28for_enclosing_incontainerat_%29.md): Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.
