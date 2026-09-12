> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/textcase](https://developer.apple.com/documentation/swiftui/environmentvalues/textcase)

# textCase

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A stylistic override to transform the case of `Text` when displayed, using the environment’s locale.

## Declaration

```swift
var textCase: Text.Case? { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `nil`, displaying the `Text` without any case changes.

## See Also

### Controlling text style

- [bold(\_:)](../view/bold%28__%29.md): Applies a bold font weight to the text in this view.
- [italic(\_:)](../view/italic%28__%29.md): Applies italics to the text in this view.
- [underline(\_:pattern:color:)](../view/underline%28__pattern_color_%29.md): Applies an underline to the text in this view.
- [strikethrough(\_:pattern:color:)](../view/strikethrough%28__pattern_color_%29.md): Applies a strikethrough to the text in this view.
- [textCase(\_:)](../view/textcase%28__%29.md): Sets a transform for the case of the text contained in this view when displayed.
- [monospaced(\_:)](../view/monospaced%28__%29.md): Modifies the fonts of all child views to use the fixed-width variant of the current font, if possible.
- [monospacedDigit()](../view/monospaceddigit%28%29.md): Modifies the fonts of all child views to use fixed-width digits, if possible, while leaving other characters proportionally spaced.
- [AttributedTextFormattingDefinition](../attributedtextformattingdefinition.md): A protocol for defining how text can be styled in a view.
- [AttributedTextValueConstraint](../attributedtextvalueconstraint.md): A protocol for defining a constraint on the value of a certain attribute.
- [AttributedTextFormatting](../attributedtextformatting.md): A namespace for types related to attributed text formatting definitions.
