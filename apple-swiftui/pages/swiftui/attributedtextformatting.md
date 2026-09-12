> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextformatting](https://developer.apple.com/documentation/swiftui/attributedtextformatting)

# AttributedTextFormatting

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A namespace for types related to attributed text formatting definitions.

## Declaration

```swift
enum AttributedTextFormatting
```

<a id="overview"></a>

## Overview

> **See Also**

> [AttributedTextFormattingDefinition](attributedtextformattingdefinition.md), `View/attributedTextFormattingDefinition(_:)-uc57`

## Topics

### Structures

- [AttributedTextFormatting.AnyDefinition](attributedtextformatting/anydefinition.md): A type-erased text formatting definition.
- [AttributedTextFormatting.AttributeContainerProxy](attributedtextformatting/attributecontainerproxy.md): A proxy for a partially validated set of attributes.
- [AttributedTextFormatting.DefinitionBuilder](attributedtextformatting/definitionbuilder.md): A result builder for attributed text formatting definition.
- [AttributedTextFormatting.EmptyDefinition](attributedtextformatting/emptydefinition.md): A text formatting definition that places no constraints on the values of attributes.
- [AttributedTextFormatting.Transferable](attributedtextformatting/transferable.md): A transferable representation of an attributed string interpreted in a SwiftUI environment.
- [AttributedTextFormatting.TupleDefinition](attributedtextformatting/tupledefinition.md): A text formatting definition that enforces the constraints of a series of text formatting definitions.
- [AttributedTextFormatting.ValueConstraint](attributedtextformatting/valueconstraint.md): A text formatting definition that constrains the value of a single attribute to the members of a set.

## See Also

### Controlling text style

- [bold(\_:)](view/bold%28__%29.md): Applies a bold font weight to the text in this view.
- [italic(\_:)](view/italic%28__%29.md): Applies italics to the text in this view.
- [underline(\_:pattern:color:)](view/underline%28__pattern_color_%29.md): Applies an underline to the text in this view.
- [strikethrough(\_:pattern:color:)](view/strikethrough%28__pattern_color_%29.md): Applies a strikethrough to the text in this view.
- [textCase(\_:)](view/textcase%28__%29.md): Sets a transform for the case of the text contained in this view when displayed.
- [textCase](environmentvalues/textcase.md): A stylistic override to transform the case of `Text` when displayed, using the environment’s locale.
- [monospaced(\_:)](view/monospaced%28__%29.md): Modifies the fonts of all child views to use the fixed-width variant of the current font, if possible.
- [monospacedDigit()](view/monospaceddigit%28%29.md): Modifies the fonts of all child views to use fixed-width digits, if possible, while leaving other characters proportionally spaced.
- [AttributedTextFormattingDefinition](attributedtextformattingdefinition.md): A protocol for defining how text can be styled in a view.
- [AttributedTextValueConstraint](attributedtextvalueconstraint.md): A protocol for defining a constraint on the value of a certain attribute.
