> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/textinputsuggestions(_:id:content:)](https://developer.apple.com/documentation/swiftui/view/textinputsuggestions(_:id:content:))

# textInputSuggestions(\_:id:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Configures the text input suggestions for this view.

## Declaration

```swift
nonisolated func textInputSuggestions<Data, ID, Content>(_ data: Data, id: KeyPath<Data.Element, ID>, @ContentBuilder content: @escaping (Data.Element) -> Content) -> some View where Data : RandomAccessCollection, ID : Hashable, Content : View

```

## Parameters

- `data`: The data that is used to create views dynamically.
- `id`: The key path to the provided data’s identifier.
- `content`: The content builder that creates views dynamically.

<a id="discussion"></a>

## Discussion

You can suggest text completions during a text input operation by providing data to this modifier. The interface presents the suggestion views as a list of choices when someone activates the text editing interface.

Associate a string with each suggestion view by adding the [textInputCompletion(\_:)](textinputcompletion%28__%29.md) modifier to the view.

Use `Label` to get platform-standard visual representations of suggestion text accompanied with images, and `Section` for labelled sections of results.

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
- [textContentType(\_:)](textcontenttype%28__%29-4dqqb.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on a watchOS device.
- [textContentType(\_:)](textcontenttype%28__%29-6fic1.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on macOS.
- [textContentType(\_:)](textcontenttype%28__%29-ufdv.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on an iOS or tvOS device.
