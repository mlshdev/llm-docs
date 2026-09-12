> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/textcase(_:)](https://developer.apple.com/documentation/swiftui/view/textcase(_:))

# textCase(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sets a transform for the case of the text contained in this view when displayed.

## Declaration

```swift
nonisolated func textCase(_ textCase: Text.Case?) -> some View

```

## Parameters

- `textCase`: One of the [Text.Case](../text/case.md) enumerations; the default is `nil`.

<a id="return-value"></a>

## Return Value

A view that transforms the case of the text.

<a id="discussion"></a>

## Discussion

The default value is `nil`, displaying the text without any case changes.

## See Also

### Controlling text style

- [bold(\_:)](bold%28__%29.md): Applies a bold font weight to the text in this view.
- [italic(\_:)](italic%28__%29.md): Applies italics to the text in this view.
- [underline(\_:pattern:color:)](underline%28__pattern_color_%29.md): Applies an underline to the text in this view.
- [strikethrough(\_:pattern:color:)](strikethrough%28__pattern_color_%29.md): Applies a strikethrough to the text in this view.
- [textCase](../environmentvalues/textcase.md): A stylistic override to transform the case of `Text` when displayed, using the environment’s locale.
- [monospaced(\_:)](monospaced%28__%29.md): Modifies the fonts of all child views to use the fixed-width variant of the current font, if possible.
- [monospacedDigit()](monospaceddigit%28%29.md): Modifies the fonts of all child views to use fixed-width digits, if possible, while leaving other characters proportionally spaced.
- [AttributedTextFormattingDefinition](../attributedtextformattingdefinition.md): A protocol for defining how text can be styled in a view.
- [AttributedTextValueConstraint](../attributedtextvalueconstraint.md): A protocol for defining a constraint on the value of a certain attribute.
- [AttributedTextFormatting](../attributedtextformatting.md): A namespace for types related to attributed text formatting definitions.
