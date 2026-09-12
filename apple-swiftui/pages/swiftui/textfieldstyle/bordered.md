> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfieldstyle/bordered](https://developer.apple.com/documentation/swiftui/textfieldstyle/bordered)

# bordered

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A text field style with a system-defined border whose shape is determined by the [textInputBorderShape(\_:)](../view/textinputbordershape%28__%29.md) modifier.

## Declaration

```swift
@export(implementation) static var bordered: BorderedTextFieldStyle { get }
```

## See Also

### Getting built-in text field styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultTextFieldStyle`. The default text field style, based on the text field’s context.
- [plain](plain.md): Conforms when `Self` is `PlainTextFieldStyle`. A text field style with no decoration.
- [roundedBorder](roundedborder.md): Deprecated. Conforms when `Self` is `RoundedBorderTextFieldStyle`. A text field style with a system-defined rounded border.
- [squareBorder](squareborder.md): Deprecated. Conforms when `Self` is `SquareBorderTextFieldStyle`. A text field style with a system-defined square border.
