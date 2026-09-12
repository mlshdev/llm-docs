> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/textinputformattingcontrolvisibility(_:for:)](https://developer.apple.com/documentation/swiftui/view/textinputformattingcontrolvisibility(_:for:))

# textInputFormattingControlVisibility(\_:for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specifies which system text formatting controls are available for people to format text.

## Declaration

```swift
nonisolated func textInputFormattingControlVisibility(_ visibility: Visibility, for placement: TextInputFormattingControlPlacement.Set) -> some View

```

## Parameters

- `visibility`: Whether the controls in the given placements may become visible.
- `placement`: The onscreen control to modify.

<a id="discussion"></a>

## Discussion

A [TextEditor](../texteditor.md) with a binding to an `AttributedString` offers built-in controls for formatting text. These controls appear in different placements depending on the platform. By default, `TextEditor` shows them in the context menu and in the keyboard toolbar on iOS. See [TextInputFormattingControlPlacement.Set](../textinputformattingcontrolplacement/set.md) for the available placements.

In this example, the formatting accessory bar is shown in a macOS editor:

```swift
struct StyledTextEditingView: View {
    @State private var text: AttributedString = ""

    var body: some View {
        TextEditor(text: $text)
            .textInputFormattingControlVisibility(.visible, for: .accessoryBar)
    }
}
```

## See Also

### Managing text entry

- [autocorrectionDisabled(\_:)](autocorrectiondisabled%28__%29.md): Sets whether to disable autocorrection for this view.
- [autocorrectionDisabled](../environmentvalues/autocorrectiondisabled.md): A Boolean value that determines whether the view hierarchy has auto-correction enabled.
- [keyboardType(\_:)](keyboardtype%28__%29.md): Sets the keyboard type for this view.
- [scrollDismissesKeyboard(\_:)](scrolldismisseskeyboard%28__%29.md): Configures the behavior in which scrollable content interacts with the software keyboard.
- [textContentType(\_:)](textcontenttype%28__%29.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on macOS.
- [textInputAutocapitalization(\_:)](textinputautocapitalization%28__%29.md): Sets how often the shift key in the keyboard is automatically enabled.
- [TextInputAutocapitalization](../textinputautocapitalization.md): The kind of autocapitalization behavior applied during text input.
- [textInputBorderShape(\_:)](textinputbordershape%28__%29.md): Sets the border shape for text input controls in the view hierarchy.
- [TextInputBorderShape](../textinputbordershape.md): A shape used to draw the border of a text input control.
- [textInputCompletion(\_:)](textinputcompletion%28__%29.md): Associates a fully formed string with the value of this view when used as a text input suggestion
- [textInputSuggestions(\_:)](textinputsuggestions%28__%29.md): Configures the text input suggestions for this view.
- [textInputSuggestions(\_:content:)](textinputsuggestions%28__content_%29.md): Configures the text input suggestions for this view.
- [textInputSuggestions(\_:id:content:)](textinputsuggestions%28__id_content_%29.md): Configures the text input suggestions for this view.
- [textContentType(\_:)](textcontenttype%28__%29-4dqqb.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on a watchOS device.
- [textContentType(\_:)](textcontenttype%28__%29-6fic1.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on macOS.
