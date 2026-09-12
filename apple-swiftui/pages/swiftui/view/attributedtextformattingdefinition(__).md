> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/attributedtextformattingdefinition(_:)](https://developer.apple.com/documentation/swiftui/view/attributedtextformattingdefinition(_:))

# attributedTextFormattingDefinition(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Apply a text formatting definition to nested views.

## Declaration

```swift
nonisolated func attributedTextFormattingDefinition<D>(_ definition: D) -> some View where D : AttributedTextFormattingDefinition

```

<a id="discussion"></a>

## Discussion

Applying a text formatting definition to a [Text](../text.md) or [TextEditor](../texteditor.md) created using the [init(\_:)](https://developer.apple.com/documentation/swiftui/text/init%28_:%29-1a4oh) or [init(text:selection:)](../texteditor/init%28text_selection_%29.md) initializer, respectively, makes sure that any content observable to the user adheres to the constraints of the formatting definition.

You can compose your own definition from an attribute scope and a series of [AttributedTextValueConstraint](../attributedtextvalueconstraint.md)s:

```swift
// MyTextFormattingDefinition.swift

struct MyTextFormattingDefinition: AttributedTextFormattingDefinition {
    var body: some AttributedTextFormattingDefinition<
        AttributeScopes.SwiftUIAttributes
    > {
        ValueConstraint(
            for: \.underlineStyle,
            values: [nil, .single],
            default: .single)
        MyAttributedTextValueConstraint()
    }
}

// MyEditorView.swift

TextEditor(text: $text)
    .attributedTextFormattingDefinition(MyTextFormattingDefinition())
```

> **Note**

> A [Binding](../binding.md) to the text of a view with an [AttributedTextFormattingDefinition](../attributedtextformattingdefinition.md) may still contain values that do not adhere to text formatting definition. E.g., a [TextEditor](../texteditor.md) may choose to not apply constraints in the text formatting definition to parts of a bound attributed string that are not visible on screen.

To manually enforce constraints, e.g. before serializing text contents, use the [constrain(\_:)](https://developer.apple.com/documentation/swiftui/attributedtextformattingdefinition/constrain%28_:%29-1ur9c) method.

## See Also

### Text style

- [bold(\_:)](bold%28__%29.md): Applies a bold font weight to the text in this view.
- [fontDesign(\_:)](fontdesign%28__%29.md): Sets the font design of the text in this view.
- [fontWeight(\_:)](fontweight%28__%29.md): Sets the font weight of the text in this view.
- [fontWidth(\_:)](fontwidth%28__%29.md): Sets the font width of the text in this view.
- [italic(\_:)](italic%28__%29.md): Applies italics to the text in this view.
- [monospaced(\_:)](monospaced%28__%29.md): Modifies the fonts of all child views to use the fixed-width variant of the current font, if possible.
- [monospacedDigit()](monospaceddigit%28%29.md): Modifies the fonts of all child views to use fixed-width digits, if possible, while leaving other characters proportionally spaced.
- [strikethrough(\_:pattern:color:)](strikethrough%28__pattern_color_%29.md): Applies a strikethrough to the text in this view.
- [textCase(\_:)](textcase%28__%29.md): Sets a transform for the case of the text contained in this view when displayed.
- [textScale(\_:isEnabled:)](textscale%28__isenabled_%29.md): Applies a text scale to text in the view.
- [textRenderer(\_:)](textrenderer%28__%29.md): Returns a new view such that any text views within it will use `renderer` to draw themselves.
- [underline(\_:pattern:color:)](underline%28__pattern_color_%29.md): Applies an underline to the text in this view.
