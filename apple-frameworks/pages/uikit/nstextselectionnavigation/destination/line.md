> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectionnavigation/destination/line](https://developer.apple.com/documentation/uikit/nstextselectionnavigation/destination/line)

# NSTextSelectionNavigation.Destination.line (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The selection moves to the next line boundary.

## Declaration

```swift
case line
```

<a id="Discussion"></a>

## Discussion

The boundary of a line can be logical, based on the line separator characters, as well as visual using soft line wrapping.

## See Also

### Selection destinations

- [NSTextSelectionNavigation.Destination.character](character.md): The selection moves to the next extended grapheme cluster boundary.
- [NSTextSelectionNavigation.Destination.word](word.md): The selection moves to the next word boundary ignoring punctuation, whitespace, and format characters preceding the next word.
- [NSTextSelectionNavigation.Destination.sentence](sentence.md): The selection moves to the next sentence boundary, ignoring punctuation, whitespace, and format characters preceding the next sentence.
- [NSTextSelectionNavigation.Destination.paragraph](paragraph.md): The selection moves to the next paragraph boundary, ignoring the end of line elastic characters and paragraph separators.
- [NSTextSelectionNavigation.Destination.container](container.md): The selection moves to the next container or page boundary after boundary of the current container, ignoring the end of line elastic characters.
- [NSTextSelectionNavigation.Destination.document](document.md): The selection moves to the document boundary.

# NSTextSelectionNavigationDestinationLine (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The selection moves to the next line boundary.

## Declaration

```objectivec
NSTextSelectionNavigationDestinationLine
```

<a id="Discussion"></a>

## Discussion

The boundary of a line can be logical, based on the line separator characters, as well as visual using soft line wrapping.

## See Also

### Selection destinations

- [NSTextSelectionNavigationDestinationCharacter](character.md): The selection moves to the next extended grapheme cluster boundary.
- [NSTextSelectionNavigationDestinationWord](word.md): The selection moves to the next word boundary ignoring punctuation, whitespace, and format characters preceding the next word.
- [NSTextSelectionNavigationDestinationSentence](sentence.md): The selection moves to the next sentence boundary, ignoring punctuation, whitespace, and format characters preceding the next sentence.
- [NSTextSelectionNavigationDestinationParagraph](paragraph.md): The selection moves to the next paragraph boundary, ignoring the end of line elastic characters and paragraph separators.
- [NSTextSelectionNavigationDestinationContainer](container.md): The selection moves to the next container or page boundary after boundary of the current container, ignoring the end of line elastic characters.
- [NSTextSelectionNavigationDestinationDocument](document.md): The selection moves to the document boundary.
