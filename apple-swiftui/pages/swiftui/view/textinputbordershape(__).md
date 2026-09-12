> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/textinputbordershape(_:)](https://developer.apple.com/documentation/swiftui/view/textinputbordershape(_:))

# textInputBorderShape(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Sets the border shape for text input controls in the view hierarchy.

## Declaration

```swift
nonisolated func textInputBorderShape(_ shape: TextInputBorderShape) -> some View

```

## Parameters

- `shape`: The shape to use for the border of text input controls.

<a id="discussion"></a>

## Discussion

Use this modifier to customize the border shape of [TextField](../textfield.md) and other text input controls. The shape can be applied to individual controls or to a container to affect all text input controls within it.

In this example, a search field and button both use a capsule shape:

```swift
HStack {
    TextField("Search", text: $searchText)
    Button("Go", action: search)
}
.buttonBorderShape(.capsule)
.textInputBorderShape(.capsule)
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
- [TextInputBorderShape](../textinputbordershape.md): A shape used to draw the border of a text input control.
- [textInputCompletion(\_:)](textinputcompletion%28__%29.md): Associates a fully formed string with the value of this view when used as a text input suggestion
- [textInputSuggestions(\_:)](textinputsuggestions%28__%29.md): Configures the text input suggestions for this view.
- [textInputSuggestions(\_:content:)](textinputsuggestions%28__content_%29.md): Configures the text input suggestions for this view.
- [textInputSuggestions(\_:id:content:)](textinputsuggestions%28__id_content_%29.md): Configures the text input suggestions for this view.
- [textContentType(\_:)](textcontenttype%28__%29-4dqqb.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on a watchOS device.
- [textContentType(\_:)](textcontenttype%28__%29-6fic1.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on macOS.
- [textContentType(\_:)](textcontenttype%28__%29-ufdv.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on an iOS or tvOS device.
