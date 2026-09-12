> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectionnavigation/destination](https://developer.apple.com/documentation/uikit/nstextselectionnavigation/destination)

# NSTextSelectionNavigation.Destination (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Values that affect how the framework handles navigation across different textual boundaries during a selection.

## Declaration

```swift
enum Destination
```

## Topics

### Selection destinations

- [NSTextSelectionNavigation.Destination.character](destination/character.md): The selection moves to the next extended grapheme cluster boundary.
- [NSTextSelectionNavigation.Destination.word](destination/word.md): The selection moves to the next word boundary ignoring punctuation, whitespace, and format characters preceding the next word.
- [NSTextSelectionNavigation.Destination.line](destination/line.md): The selection moves to the next line boundary.
- [NSTextSelectionNavigation.Destination.sentence](destination/sentence.md): The selection moves to the next sentence boundary, ignoring punctuation, whitespace, and format characters preceding the next sentence.
- [NSTextSelectionNavigation.Destination.paragraph](destination/paragraph.md): The selection moves to the next paragraph boundary, ignoring the end of line elastic characters and paragraph separators.
- [NSTextSelectionNavigation.Destination.container](destination/container.md): The selection moves to the next container or page boundary after boundary of the current container, ignoring the end of line elastic characters.
- [NSTextSelectionNavigation.Destination.document](destination/document.md): The selection moves to the document boundary.

### Initializers

- [init(rawValue:)](destination/init%28rawvalue_%29.md)

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
- [NSTextSelectionNavigation.Direction](direction.md): Values that describe the direction of a selection.
- [textSelection(for:enclosing:inContainerAt:)](textselection%28for_enclosing_incontainerat_%29.md): Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.

# NSTextSelectionNavigationDestination (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Values that affect how the framework handles navigation across different textual boundaries during a selection.

## Declaration

```objectivec
enum NSTextSelectionNavigationDestination : NSInteger;
```

## Topics

### Selection destinations

- [NSTextSelectionNavigationDestinationCharacter](destination/character.md): The selection moves to the next extended grapheme cluster boundary.
- [NSTextSelectionNavigationDestinationWord](destination/word.md): The selection moves to the next word boundary ignoring punctuation, whitespace, and format characters preceding the next word.
- [NSTextSelectionNavigationDestinationLine](destination/line.md): The selection moves to the next line boundary.
- [NSTextSelectionNavigationDestinationSentence](destination/sentence.md): The selection moves to the next sentence boundary, ignoring punctuation, whitespace, and format characters preceding the next sentence.
- [NSTextSelectionNavigationDestinationParagraph](destination/paragraph.md): The selection moves to the next paragraph boundary, ignoring the end of line elastic characters and paragraph separators.
- [NSTextSelectionNavigationDestinationContainer](destination/container.md): The selection moves to the next container or page boundary after boundary of the current container, ignoring the end of line elastic characters.
- [NSTextSelectionNavigationDestinationDocument](destination/document.md): The selection moves to the document boundary.

## See Also

### Selection characteristics

- [allowsNonContiguousRanges](allowsnoncontiguousranges.md): Determines if the instance could produce selections with multiple noncontiguous selections.
- [rotatesCoordinateSystemForLayoutOrientation](rotatescoordinatesystemforlayoutorientation.md): Determines if the framework rotates the coordinate system to match the layout orientation.
- [NSTextSelectionNavigationModifier](modifier.md): Values that describe how the framework handles different kinds of selection modifiers.
- [NSTextSelectionNavigationDirection](direction.md): Values that describe the direction of a selection.
- [textSelectionForSelectionGranularity:enclosingPoint:inContainerAtLocation:](textselection%28for_enclosing_incontainerat_%29.md): Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.
