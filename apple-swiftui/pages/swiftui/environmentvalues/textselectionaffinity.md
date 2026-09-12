> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/textselectionaffinity](https://developer.apple.com/documentation/swiftui/environmentvalues/textselectionaffinity)

# textSelectionAffinity

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A representation of the direction or association of a selection or cursor relative to a text character. This concept becomes much more prominent when dealing with bidirectional text (text that contains both LTR and RTL scripts, like English and Arabic combined).

## Declaration

```swift
var textSelectionAffinity: TextSelectionAffinity { get set }
```

<a id="discussion"></a>

## Discussion

You can configure the selection affinity on a given hierarchy by using the [textSelectionAffinity(\_:)](../view/textselectionaffinity%28__%29.md) modifier.

## See Also

### Selecting text

- [textSelection(\_:)](../view/textselection%28__%29.md): Controls whether people can select text within this view.
- [TextSelectability](../textselectability.md): A type that describes the ability to select text.
- [TextSelection](../textselection.md): Represents a selection of text.
- [textSelectionAffinity(\_:)](../view/textselectionaffinity%28__%29.md): Sets the direction of a selection or cursor relative to a text character.
- [TextSelectionAffinity](../textselectionaffinity.md): A representation of the direction or association of a selection or cursor relative to a text character. This concept becomes much more prominent when dealing with bidirectional text (text that contains both LTR and RTL scripts, like English and Arabic combined).
- [AttributedTextSelection](../attributedtextselection.md): Represents a selection of attributed text.
