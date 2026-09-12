> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/texteditor/init(text:selection:)](https://developer.apple.com/documentation/swiftui/texteditor/init(text:selection:))

# init(text:selection:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a styled text editor.

## Declaration

```swift
nonisolated init(text: Binding<AttributedString>, selection: Binding<AttributedTextSelection>? = nil)
```

## Parameters

- `text`: A [Binding](../binding.md) to the variable containing the styled text to edit.
- `selection`: An optional [Binding](../binding.md) to the variable containing the selection.

<a id="discussion"></a>

## Discussion

Use a [TextEditor](../texteditor.md) instance to create a view in which users can enter and edit long-form styled text.

In this example the text editor is setup to edit styled text:

```swift
struct StyledTextEditingView: View {
    @State private var text =
        AttributedString("This is some editable text...")

    var body: some View {
        TextEditor(text: $text)
    }
}
```

<a id="Format-text-by-combining-attributes-and-view-modifiers"></a>

### Format text by combining attributes and view modifiers

If the AttributedString does not have a font and/or foreground color specified for a given range of text, the rich text editor will use the font and/or foreground color inherited from the environment for that range of text, just like [init(\_:)](https://developer.apple.com/documentation/swiftui/text/init%28_:%29-1a4oh). To control what formatting options are available in the editor, use the [AttributedTextFormattingDefinition](../attributedtextformattingdefinition.md) protocol.

> **Note**

> Other than [Text](../text.md), this editor does not automatically translate UIKit or AppKit formatting attributes into SwiftUI attributes. For importing RTF documents, which encode formatting using UIKit and AppKit attributes, use [AttributedTextFormatting.Transferable](../attributedtextformatting/transferable.md) to obtain an attributed string compatible with this editor.

<a id="Build-custom-controls-using-the-selection-binding"></a>

### Build custom controls using the selection binding

Use [AttributedTextSelection](../attributedtextselection.md) for implementing custom controls, e.g. for applying formatting such as boldness:

```swift
struct StyledTextEditingView: View {
    @State private var text: AttributedString = ""
    @State private var selection = AttributedTextSelection()

    @Environment(\.fontResolutionContext) private var fontResolutionContext

    var body: some View {
        TextEditor(text: $text, selection: $selection)
            .toolbar {
                // A toggle controlling whether the current selection in the
                // editor has bold font.
                Toggle(
                    "Toggle Boldness",
                    systemImage: "bold",
                    isOn: Binding(get: {
                        // Get the font for the current selection.
                        let font = selection.typingAttributes(in: text).font
                        // Resolve the font in the current environment.
                        let resolved = (font ?? .default).resolve(in: fontResolutionContext)
                        // Return whether the resolved font is bold.
                        return resolved.isBold
                    }, set: { isBold in
                        // Update each run in the current selection, including
                        // the typing attributes, to reflect the new `isBold`
                        // value.
                        text.transformAttributes(in: &selection) {
                            // Override the boldness of the font. If no font is
                            // present, use `Font.default` for the effective
                            // environment font as the basis.
                            $0.font = ($0.font ?? .default).bold(isBold)
                        }
                    })
                )
            }
    }
}
```

> **Note**

> When binding the `selection`, always make sure it is updated after you mutate the `text`. Otherwise, the editor resets the selection to the end of the `text`. For more details, see [indices(in:)](../attributedtextselection/indices%28in_%29.md).

> **See Also**

> [AttributedTextSelection](../attributedtextselection.md), `View/attributedTextFormattingDefinition(_:)-uc57`, [AttributedTextFormattingDefinition](../attributedtextformattingdefinition.md), [AttributedTextValueConstraint](../attributedtextvalueconstraint.md), [AttributedTextFormatting](../attributedtextformatting.md)
