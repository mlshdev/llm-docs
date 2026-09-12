> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/underline(_:pattern:color:)](https://developer.apple.com/documentation/swiftui/view/underline(_:pattern:color:))

# underline(\_:pattern:color:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Applies an underline to the text in this view.

## Declaration

```swift
nonisolated func underline(_ isActive: Bool = true, pattern: Text.LineStyle.Pattern = .solid, color: Color? = nil) -> some View

```

## Parameters

- `isActive`: A Boolean value that indicates whether underline is added. The default value is `true`.
- `pattern`: The pattern of the line. The default value is `solid`.
- `color`: The color of the underline. If `color` is `nil`, the underline uses the default foreground color.

<a id="return-value"></a>

## Return Value

A view where text has a line running along its baseline.

## See Also

### Controlling text style

- [bold(\_:)](bold%28__%29.md): Applies a bold font weight to the text in this view.
- [italic(\_:)](italic%28__%29.md): Applies italics to the text in this view.
- [strikethrough(\_:pattern:color:)](strikethrough%28__pattern_color_%29.md): Applies a strikethrough to the text in this view.
- [textCase(\_:)](textcase%28__%29.md): Sets a transform for the case of the text contained in this view when displayed.
- [textCase](../environmentvalues/textcase.md): A stylistic override to transform the case of `Text` when displayed, using the environment’s locale.
- [monospaced(\_:)](monospaced%28__%29.md): Modifies the fonts of all child views to use the fixed-width variant of the current font, if possible.
- [monospacedDigit()](monospaceddigit%28%29.md): Modifies the fonts of all child views to use fixed-width digits, if possible, while leaving other characters proportionally spaced.
- [AttributedTextFormattingDefinition](../attributedtextformattingdefinition.md): A protocol for defining how text can be styled in a view.
- [AttributedTextValueConstraint](../attributedtextvalueconstraint.md): A protocol for defining a constraint on the value of a certain attribute.
- [AttributedTextFormatting](../attributedtextformatting.md): A namespace for types related to attributed text formatting definitions.
