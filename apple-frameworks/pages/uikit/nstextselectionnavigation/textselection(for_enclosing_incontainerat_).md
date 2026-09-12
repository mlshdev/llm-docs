> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectionnavigation/textselection(for:enclosing:incontainerat:)](https://developer.apple.com/documentation/uikit/nstextselectionnavigation/textselection(for:enclosing:incontainerat:))

# textSelection(for:enclosing:inContainerAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.

## Declaration

```swift
func textSelection(for selectionGranularity: NSTextSelection.Granularity, enclosing point: CGPoint, inContainerAt location: any NSTextLocation) -> NSTextSelection?
```

## Parameters

- `selectionGranularity`: One of the available [NSTextSelection.Granularity](../nstextselection/granularity-swift.enum.md) options.
- `point`: The point that encloses the text.
- `location`: An [NSTextLocation](../nstextlocation.md) that describes the container.

<a id="return-value"></a>

## Return Value

A new `NSTextSelection`, or `nil` if the text selection is not found.

## See Also

### Selection characteristics

- [allowsNonContiguousRanges](allowsnoncontiguousranges.md): Determines if the instance could produce selections with multiple noncontiguous selections.
- [rotatesCoordinateSystemForLayoutOrientation](rotatescoordinatesystemforlayoutorientation.md): Determines if the framework rotates the coordinate system to match the layout orientation.
- [NSTextSelectionNavigation.Modifier](modifier.md): Values that describe how the framework handles different kinds of selection modifiers.
- [NSTextSelectionNavigation.Destination](destination.md): Values that affect how the framework handles navigation across different textual boundaries during a selection.
- [NSTextSelectionNavigation.Direction](direction.md): Values that describe the direction of a selection.

# textSelectionForSelectionGranularity:enclosingPoint:inContainerAtLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.

## Declaration

```objectivec
- (NSTextSelection *) textSelectionForSelectionGranularity:(NSTextSelectionGranularity) selectionGranularity enclosingPoint:(CGPoint) point inContainerAtLocation:(id<NSTextLocation>) location;
```

## Parameters

- `selectionGranularity`: One of the available [NSTextSelectionGranularity](../nstextselection/granularity-swift.enum.md) options.
- `point`: The point that encloses the text.
- `location`: An [NSTextLocation](../nstextlocation.md) that describes the container.

<a id="return-value"></a>

## Return Value

A new `NSTextSelection`, or `nil` if the text selection is not found.

## See Also

### Selection characteristics

- [allowsNonContiguousRanges](allowsnoncontiguousranges.md): Determines if the instance could produce selections with multiple noncontiguous selections.
- [rotatesCoordinateSystemForLayoutOrientation](rotatescoordinatesystemforlayoutorientation.md): Determines if the framework rotates the coordinate system to match the layout orientation.
- [NSTextSelectionNavigationModifier](modifier.md): Values that describe how the framework handles different kinds of selection modifiers.
- [NSTextSelectionNavigationDestination](destination.md): Values that affect how the framework handles navigation across different textual boundaries during a selection.
- [NSTextSelectionNavigationDirection](direction.md): Values that describe the direction of a selection.
