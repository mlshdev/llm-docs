> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfieldstyle/automatic](https://developer.apple.com/documentation/swiftui/textfieldstyle/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The default text field style, based on the text field’s context.

## Declaration

```swift
@export(implementation) static var automatic: DefaultTextFieldStyle { get }
```

<a id="discussion"></a>

## Discussion

The default style represents the recommended style based on the current platform and the text field’s context within the view hierarchy.

## See Also

### Getting built-in text field styles

- [bordered](bordered.md): Conforms when `Self` is `BorderedTextFieldStyle`. A text field style with a system-defined border whose shape is determined by the [textInputBorderShape(\_:)](../view/textinputbordershape%28__%29.md) modifier.
- [plain](plain.md): Conforms when `Self` is `PlainTextFieldStyle`. A text field style with no decoration.
- [roundedBorder](roundedborder.md): Deprecated. Conforms when `Self` is `RoundedBorderTextFieldStyle`. A text field style with a system-defined rounded border.
- [squareBorder](squareborder.md): Deprecated. Conforms when `Self` is `SquareBorderTextFieldStyle`. A text field style with a system-defined square border.
