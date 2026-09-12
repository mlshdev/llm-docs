> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionnavigation/modifier](https://developer.apple.com/documentation/appkit/nstextselectionnavigation/modifier)

# NSTextSelectionNavigation.Modifier (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 12.0+

Values that describe how the framework handles different kinds of selection modifiers.

## Declaration

```swift
struct Modifier
```

## Topics

### Creating a navigation modifier

- [init(rawValue:)](modifier/init%28rawvalue_%29.md): Creates a new navigation modifier using a raw value.

### Navigation modifier characteristics

- [extend](modifier/extend.md): The value that indicates the framework extends the selection by not moving the initial location while in a drag selection.
- [multiple](modifier/multiple.md): The value that indicates the framework extends the selection visually inside the rectangular area defined by the anchor and dragged positions.
- [visual](modifier/visual.md): The value that indicates the framework extends the selection visually inside the rectangular area defined by the anchor and drag positions.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Selection characteristics

- [allowsNonContiguousRanges](allowsnoncontiguousranges.md): Determines if the instance could produce selections with multiple noncontiguous selections.
- [rotatesCoordinateSystemForLayoutOrientation](rotatescoordinatesystemforlayoutorientation.md): Determines if the framework rotates the coordinate system to match the layout orientation.
- [NSTextSelectionNavigation.Destination](destination.md): Values that affect how the framework handles navigation across different textual boundaries during a selection.
- [NSTextSelectionNavigation.Direction](direction.md): Values that describe the direction of a selection.
- [textSelection(for:enclosing:inContainerAt:)](textselection%28for_enclosing_incontainerat_%29.md): Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.

# NSTextSelectionNavigationModifier (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Values that describe how the framework handles different kinds of selection modifiers.

## Declaration

```objectivec
enum NSTextSelectionNavigationModifier : NSUInteger;
```

## Topics

### Navigation modifier characteristics

- [NSTextSelectionNavigationModifierExtend](modifier/extend.md): The value that indicates the framework extends the selection by not moving the initial location while in a drag selection.
- [NSTextSelectionNavigationModifierMultiple](modifier/multiple.md): The value that indicates the framework extends the selection visually inside the rectangular area defined by the anchor and dragged positions.
- [NSTextSelectionNavigationModifierVisual](modifier/visual.md): The value that indicates the framework extends the selection visually inside the rectangular area defined by the anchor and drag positions.

## See Also

### Selection characteristics

- [allowsNonContiguousRanges](allowsnoncontiguousranges.md): Determines if the instance could produce selections with multiple noncontiguous selections.
- [rotatesCoordinateSystemForLayoutOrientation](rotatescoordinatesystemforlayoutorientation.md): Determines if the framework rotates the coordinate system to match the layout orientation.
- [NSTextSelectionNavigationDestination](destination.md): Values that affect how the framework handles navigation across different textual boundaries during a selection.
- [NSTextSelectionNavigationDirection](direction.md): Values that describe the direction of a selection.
- [textSelectionForSelectionGranularity:enclosingPoint:inContainerAtLocation:](textselection%28for_enclosing_incontainerat_%29.md): Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.
