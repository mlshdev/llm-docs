> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/autocorrectiondisabled](https://developer.apple.com/documentation/swiftui/environmentvalues/autocorrectiondisabled)

# autocorrectionDisabled

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that determines whether the view hierarchy has auto-correction enabled.

## Declaration

```swift
@export(implementation) var autocorrectionDisabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Managing text entry

- [autocorrectionDisabled(\_:)](../view/autocorrectiondisabled%28__%29.md): Sets whether to disable autocorrection for this view.
- [keyboardType(\_:)](../view/keyboardtype%28__%29.md): Sets the keyboard type for this view.
- [scrollDismissesKeyboard(\_:)](../view/scrolldismisseskeyboard%28__%29.md): Configures the behavior in which scrollable content interacts with the software keyboard.
- [textContentType(\_:)](../view/textcontenttype%28__%29.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on macOS.
- [textInputAutocapitalization(\_:)](../view/textinputautocapitalization%28__%29.md): Sets how often the shift key in the keyboard is automatically enabled.
- [TextInputAutocapitalization](../textinputautocapitalization.md): The kind of autocapitalization behavior applied during text input.
- [textInputBorderShape(\_:)](../view/textinputbordershape%28__%29.md): Sets the border shape for text input controls in the view hierarchy.
- [TextInputBorderShape](../textinputbordershape.md): A shape used to draw the border of a text input control.
- [textInputCompletion(\_:)](../view/textinputcompletion%28__%29.md): Associates a fully formed string with the value of this view when used as a text input suggestion
- [textInputSuggestions(\_:)](../view/textinputsuggestions%28__%29.md): Configures the text input suggestions for this view.
- [textInputSuggestions(\_:content:)](../view/textinputsuggestions%28__content_%29.md): Configures the text input suggestions for this view.
- [textInputSuggestions(\_:id:content:)](../view/textinputsuggestions%28__id_content_%29.md): Configures the text input suggestions for this view.
- [textContentType(\_:)](../view/textcontenttype%28__%29-4dqqb.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on a watchOS device.
- [textContentType(\_:)](../view/textcontenttype%28__%29-6fic1.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on macOS.
- [textContentType(\_:)](../view/textcontenttype%28__%29-ufdv.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on an iOS or tvOS device.
