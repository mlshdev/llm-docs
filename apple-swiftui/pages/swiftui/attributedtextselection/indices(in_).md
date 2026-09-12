> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextselection/indices(in:)](https://developer.apple.com/documentation/swiftui/attributedtextselection/indices(in:))

# indices(in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The current text selection indices.

## Declaration

```swift
func indices(in text: AttributedString) -> AttributedTextSelection.Indices
```

<a id="return-value"></a>

## Return Value

The current selection if valid for the given `text` or a valid fallback index otherwise.

<a id="discussion"></a>

## Discussion

Always make sure to keep selection and text synchronized. Use `Foundation/AttributedString/transform(updating:body:)`, `Foundation/AttributedString/transformAttributes(in:body:)` or `Foundation/AttributedString/replaceSelection(_:with:)` to do so automatically.

Reset your selection manually to a newly initialized one after making programmatic changes to the text where the selection should not just move with the characters.

```swift
struct ContentView: View {
    @State private var text = AttributedString()
    @State private var selection = AttributedTextSelection()

    var body: some View {
        TextEditor(text: $text, selection: $selection)

        Button("Insert Date") {
            text.replaceSelection(
                &selection,
                withCharacters: Date.now.formatted())
        }

        Button("Reset") {
            text = "Hello, World!"
            selection = .init(range: text.startIndex..<text.endIndex)
        }
    }
}
```

For more details on attributed string index validity, see [isValid(within:)](https://developer.apple.com/documentation/foundation/attributedstring/index/isvalid%28within:%29-8fw50).
