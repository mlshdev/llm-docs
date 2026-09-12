> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextselection](https://developer.apple.com/documentation/swiftui/attributedtextselection)

# AttributedTextSelection

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Represents a selection of attributed text.

## Declaration

```swift
struct AttributedTextSelection
```

<a id="overview"></a>

## Overview

A selection is either an insertion point (e.g. a cursor in the text), or spans over a range of characters. While that range is always visually contiguous, it may not be logically contiguous in the text storage. Specifically, a single selection value cannot represent multiple cursors.

This is frequently used to represent selection of text in a `TextEditor`. The following example shows a text editor that leverages text selection to offer live suggestions based on the current selection.

```swift
struct SuggestionTextEditor: View {
    @State var text: AttributedString = ""
    @State var selection = AttributedTextSelection()

    var body: some View {
        VStack {
            TextEditor(text: $text, selection: $selection)
            // A helper view that offers live suggestions based on selection.
            SuggestionsView(substrings: getSubstrings(
                text: text, indices: selection.indices(in: text))
        }
    }

    private func getSubstrings(
        text: String, indices: AttributedTextSelection.Indices
    ) -> [Substring] {
        // Resolve substrings representing the current selection...
    }
}

struct SuggestionsView: View { ... }
```

You can also use the [textSelectionAffinity(\_:)](view/textselectionaffinity%28__%29.md) modifier to specify a selection affinity on the given hierarchy:

```swift
struct SuggestionTextEditor: View {
    @State var text: AttributedString = ""
    @State var selection = AttributedTextSelection()

    var body: some View {
        VStack {
            TextEditor(text: $text, selection: $selection)
            // A helper view that offers live suggestions based on selection.
            SuggestionsView(substrings: getSubstrings(
                text: text, indices: selection.indices(in: text))
        }
        .textSelectionAffinity(.upstream)
    }

    private func getSubstrings(
        text: String, indices: AttributedTextSelection.Indices
    ) -> [Substring] {
        // Resolve substrings representing the current selection...
    }
}

struct SuggestionsView: View { ... }
```

> **See Also**

> [TextSelectionAffinity](textselectionaffinity.md), [TextEditor](texteditor.md)

## Topics

### Structures

- [AttributedTextSelection.Attributes](attributedtextselection/attributes.md): A sequence of all attribute values a selection has in a certain text.

### Initializers

- [init()](attributedtextselection/init%28%29.md): Initialize the default selection for a new text editor.
- [init(insertionPoint:typingAttributes:)](attributedtextselection/init%28insertionpoint_typingattributes_%29.md): Initialize a selection to a single insertion point.
- [init(range:)](attributedtextselection/init%28range_%29.md): Initialize a selection to a character range.
- [init(ranges:)](attributedtextselection/init%28ranges_%29.md): Initialize a selection to character ranges.

### Instance Methods

- [affinity(in:)](attributedtextselection/affinity%28in_%29.md): Return the selection affinity of the selection.
- [attributes(in:)](attributedtextselection/attributes%28in_%29.md): Obtain a lazy sequence of all attribute values the selection has in a given text.
- [indices(in:)](attributedtextselection/indices%28in_%29.md): The current text selection indices.
- [typingAttributes(in:)](attributedtextselection/typingattributes%28in_%29.md): Returns the typing attributes for a corresponding text.

### Enumerations

- [AttributedTextSelection.Indices](attributedtextselection/indices.md): The indices of the current selection.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting text

- [textSelection(\_:)](view/textselection%28__%29.md): Controls whether people can select text within this view.
- [TextSelectability](textselectability.md): A type that describes the ability to select text.
- [TextSelection](textselection.md): Represents a selection of text.
- [textSelectionAffinity(\_:)](view/textselectionaffinity%28__%29.md): Sets the direction of a selection or cursor relative to a text character.
- [textSelectionAffinity](environmentvalues/textselectionaffinity.md): A representation of the direction or association of a selection or cursor relative to a text character. This concept becomes much more prominent when dealing with bidirectional text (text that contains both LTR and RTL scripts, like English and Arabic combined).
- [TextSelectionAffinity](textselectionaffinity.md): A representation of the direction or association of a selection or cursor relative to a text character. This concept becomes much more prominent when dealing with bidirectional text (text that contains both LTR and RTL scripts, like English and Arabic combined).
