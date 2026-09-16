> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/textfieldstyle/roundedborder

# roundedBorder

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+

A text field style with a system-defined rounded border.

> Use \`textFieldStyle(.bordered)\` with \`textInputBorderShape(.roundedRectangle)\`

## Declaration

```swift
@export(implementation) static var roundedBorder: RoundedBorderTextFieldStyle { get }
```

<a id="discussion"></a>

## Discussion

Use [textFieldStyle(\_:)](../view/textfieldstyle%28__%29.md) to apply the [bordered](bordered.md) style with [textInputBorderShape(\_:)](../view/textinputbordershape%28__%29.md) to apply the [roundedRectangle](../textinputbordershape/roundedrectangle.md) shape instead.

## See Also

### Getting built-in text field styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultTextFieldStyle`. The default text field style, based on the text field’s context.
- [bordered](bordered.md): Conforms when `Self` is `BorderedTextFieldStyle`. A text field style with a system-defined border whose shape is determined by the [textInputBorderShape(\_:)](../view/textinputbordershape%28__%29.md) modifier.
- [plain](plain.md): Conforms when `Self` is `PlainTextFieldStyle`. A text field style with no decoration.
- [squareBorder](squareborder.md): Deprecated. Conforms when `Self` is `SquareBorderTextFieldStyle`. A text field style with a system-defined square border.
