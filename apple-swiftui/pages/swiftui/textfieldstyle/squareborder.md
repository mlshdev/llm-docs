> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfieldstyle/squareborder](https://developer.apple.com/documentation/swiftui/textfieldstyle/squareborder)

# squareBorder

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 10.15+ (deprecated in 27.0)

A text field style with a system-defined square border.

> Use \`textFieldStyle(.bordered)\` instead. As of macOS 26, text fields no longer have a rectangular border.

## Declaration

```swift
@export(implementation) static var squareBorder: SquareBorderTextFieldStyle { get }
```

<a id="discussion"></a>

## Discussion

As of macOS 26, text fields no longer have a rectangular border.

## See Also

### Getting built-in text field styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultTextFieldStyle`. The default text field style, based on the text field’s context.
- [bordered](bordered.md): Conforms when `Self` is `BorderedTextFieldStyle`. A text field style with a system-defined border whose shape is determined by the [textInputBorderShape(\_:)](../view/textinputbordershape%28__%29.md) modifier.
- [plain](plain.md): Conforms when `Self` is `PlainTextFieldStyle`. A text field style with no decoration.
- [roundedBorder](roundedborder.md): Deprecated. Conforms when `Self` is `RoundedBorderTextFieldStyle`. A text field style with a system-defined rounded border.
