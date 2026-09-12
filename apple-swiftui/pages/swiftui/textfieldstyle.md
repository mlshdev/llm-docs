> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfieldstyle](https://developer.apple.com/documentation/swiftui/textfieldstyle)

# TextFieldStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A specification for the appearance and interaction of a text field.

## Declaration

```swift
protocol TextFieldStyle
```

## Topics

### Getting built-in text field styles

- [automatic](textfieldstyle/automatic.md): Conforms when `Self` is `DefaultTextFieldStyle`. The default text field style, based on the text field’s context.
- [bordered](textfieldstyle/bordered.md): Conforms when `Self` is `BorderedTextFieldStyle`. A text field style with a system-defined border whose shape is determined by the [textInputBorderShape(\_:)](view/textinputbordershape%28__%29.md) modifier.
- [plain](textfieldstyle/plain.md): Conforms when `Self` is `PlainTextFieldStyle`. A text field style with no decoration.
- [roundedBorder](textfieldstyle/roundedborder.md): Deprecated. Conforms when `Self` is `RoundedBorderTextFieldStyle`. A text field style with a system-defined rounded border.
- [squareBorder](textfieldstyle/squareborder.md): Deprecated. Conforms when `Self` is `SquareBorderTextFieldStyle`. A text field style with a system-defined square border.

### Supporting types

- [BorderedTextFieldStyle](borderedtextfieldstyle.md): A text field style with a system-defined border.
- [DefaultTextFieldStyle](defaulttextfieldstyle.md): The default text field style, based on the text field’s context.
- [PlainTextFieldStyle](plaintextfieldstyle.md): A text field style with no decoration.
- [RoundedBorderTextFieldStyle](roundedbordertextfieldstyle.md): Deprecated. A text field style with a system-defined rounded border.
- [SquareBorderTextFieldStyle](squarebordertextfieldstyle.md): Deprecated. A text field style with a system-defined square border.

## Relationships

### Conforming Types

- [BorderedTextFieldStyle](borderedtextfieldstyle.md)
- [DefaultTextFieldStyle](defaulttextfieldstyle.md)
- [PlainTextFieldStyle](plaintextfieldstyle.md)
- [RoundedBorderTextFieldStyle](roundedbordertextfieldstyle.md)
- [SquareBorderTextFieldStyle](squarebordertextfieldstyle.md)

## See Also

### Styling views that display text

- [labelStyle(\_:)](view/labelstyle%28__%29.md): Sets the style for labels within this view.
- [LabelStyle](labelstyle.md): A type that applies a custom appearance to all labels within a view.
- [LabelStyleConfiguration](labelstyleconfiguration.md): The properties of a label.
- [textFieldStyle(\_:)](view/textfieldstyle%28__%29.md): Sets the style for text fields within this view.
- [textEditorStyle(\_:)](view/texteditorstyle%28__%29.md): Sets the style for text editors within this view.
- [TextEditorStyle](texteditorstyle.md): A specification for the appearance and interaction of a text editor.
- [TextEditorStyleConfiguration](texteditorstyleconfiguration.md): The properties of a text editor.
