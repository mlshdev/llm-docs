> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/textinputcompletion(_:)](https://developer.apple.com/documentation/swiftui/view/textinputcompletion(_:))

# textInputCompletion(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Associates a fully formed string with the value of this view when used as a text input suggestion

## Declaration

```swift
nonisolated func textInputCompletion(_ completion: String) -> some View

```

## Parameters

- `completion`: A string to use as the view’s completion.

<a id="discussion"></a>

## Discussion

Use this method to associate a fully formed string with a view that is within a text input suggestion list context. The system uses this value when the view is selected to replace the partial text being currently edited of the associated text field.

```swift
TextField("Location", text: $addressText)
    .textInputSuggestions(isEnabled: true) {
        Text("The Fillmore")
            .textInputCompletion("1805 Geary Blvd, San Francisco")
        Text("The Catalyst")
            .textInputCompletion("1011 Pacific Ave, Santa Cruz")
        Text("Rio Theatre")
            .textInputCompletion("1205 Soquel Ave, Santa Cruz")
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
- [textInputSuggestions(\_:)](textinputsuggestions%28__%29.md): Configures the text input suggestions for this view.
- [textInputSuggestions(\_:content:)](textinputsuggestions%28__content_%29.md): Configures the text input suggestions for this view.
- [textInputSuggestions(\_:id:content:)](textinputsuggestions%28__id_content_%29.md): Configures the text input suggestions for this view.
- [textContentType(\_:)](textcontenttype%28__%29-4dqqb.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on a watchOS device.
- [textContentType(\_:)](textcontenttype%28__%29-6fic1.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on macOS.
- [textContentType(\_:)](textcontenttype%28__%29-ufdv.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on an iOS or tvOS device.
