> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textinputautocapitalization](https://developer.apple.com/documentation/swiftui/textinputautocapitalization)

# TextInputAutocapitalization

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The kind of autocapitalization behavior applied during text input.

## Declaration

```swift
struct TextInputAutocapitalization
```

<a id="overview"></a>

## Overview

Pass an instance of `TextInputAutocapitalization` to the [textInputAutocapitalization(\_:)](view/textinputautocapitalization%28__%29.md) view modifier.

## Topics

### Getting autocapitalization options

- [characters](textinputautocapitalization/characters.md): Defines an autocapitalizing behavior that will capitalize every letter.
- [sentences](textinputautocapitalization/sentences.md): Defines an autocapitalizing behavior that will capitalize the first letter in every sentence.
- [words](textinputautocapitalization/words.md): Defines an autocapitalizing behavior that will capitalize the first letter of every word.
- [never](textinputautocapitalization/never.md): Defines an autocapitalizing behavior that will not capitalize anything.

### Creating an autocapitalization type

- [init(\_:)](textinputautocapitalization/init%28__%29.md): Creates a new [TextInputAutocapitalization](textinputautocapitalization.md) struct from a `UITextAutocapitalizationType` enum.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing text entry

- [autocorrectionDisabled(\_:)](view/autocorrectiondisabled%28__%29.md): Sets whether to disable autocorrection for this view.
- [autocorrectionDisabled](environmentvalues/autocorrectiondisabled.md): A Boolean value that determines whether the view hierarchy has auto-correction enabled.
- [keyboardType(\_:)](view/keyboardtype%28__%29.md): Sets the keyboard type for this view.
- [scrollDismissesKeyboard(\_:)](view/scrolldismisseskeyboard%28__%29.md): Configures the behavior in which scrollable content interacts with the software keyboard.
- [textContentType(\_:)](view/textcontenttype%28__%29.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on macOS.
- [textInputAutocapitalization(\_:)](view/textinputautocapitalization%28__%29.md): Sets how often the shift key in the keyboard is automatically enabled.
- [textInputBorderShape(\_:)](view/textinputbordershape%28__%29.md): Sets the border shape for text input controls in the view hierarchy.
- [TextInputBorderShape](textinputbordershape.md): A shape used to draw the border of a text input control.
- [textInputCompletion(\_:)](view/textinputcompletion%28__%29.md): Associates a fully formed string with the value of this view when used as a text input suggestion
- [textInputSuggestions(\_:)](view/textinputsuggestions%28__%29.md): Configures the text input suggestions for this view.
- [textInputSuggestions(\_:content:)](view/textinputsuggestions%28__content_%29.md): Configures the text input suggestions for this view.
- [textInputSuggestions(\_:id:content:)](view/textinputsuggestions%28__id_content_%29.md): Configures the text input suggestions for this view.
- [textContentType(\_:)](view/textcontenttype%28__%29-4dqqb.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on a watchOS device.
- [textContentType(\_:)](view/textcontenttype%28__%29-6fic1.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on macOS.
- [textContentType(\_:)](view/textcontenttype%28__%29-ufdv.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on an iOS or tvOS device.
