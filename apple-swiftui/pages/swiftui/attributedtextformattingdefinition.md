> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextformattingdefinition](https://developer.apple.com/documentation/swiftui/attributedtextformattingdefinition)

# AttributedTextFormattingDefinition

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A protocol for defining how text can be styled in a view.

## Declaration

```swift
protocol AttributedTextFormattingDefinition<Scope>
```

<a id="overview"></a>

## Overview

A formatting definition consists of an attribute scope and a number of value constraints. It is applied to a view hierarchy using the [attributedTextFormattingDefinition(\_:)](https://developer.apple.com/documentation/swiftui/view/attributedtextformattingdefinition%28_:%29-81jn6) view modifier and affects nested [Text](text.md) and [TextEditor](texteditor.md) views when initialized with [AttributedString](https://developer.apple.com/documentation/foundation/attributedstring).

Create a formatting definition by first choosing an attribute scope that contains all attributes relevant for your view. All other attributes will be ignored by value constraints and by the affected views.

Use the `Foundation/AttributeScopes/SwiftUIAttributes` for the default set of attributes supported by SwiftUI. You can create your own scope only listing out a subset of the attributes in SwiftUI’s attribute scope. You can also include custom attributes in your scope. This allows you to take advantage of advanced attributed string features, such as [runBoundaries](https://developer.apple.com/documentation/foundation/attributedstringkey/runboundaries).

Custom attributes also allow you to separate semantic information stored on the text, e.g. the information that a sequence of characters refers a specific person in contacts, from how this part of the text is to be formatted, e.g. with the foreground color “purple”. The rules defining what values attributes can have, are called [AttributedTextValueConstraint](attributedtextvalueconstraint.md)s.

```swift
struct ContactsArePurple: AttributedTextValueConstraint {
    typealias Scope = MyScope
    typealias AttributeKey = Scope.ForegroundColorAttribute

    func constrain(_ container: inout Attributes) {
        if container.annotation == .contact {
            container.foregroundColor = .purple
        } else {
            container.foregroundColor = nil
        }
    }
}
```

While associating formatting with custom semantic attributes is one important use case, value constraints are a generic mechanism for constraining the formatting that is available in a text editor - with or without dependencies on other attributes. For example, a value constraint could also be used to only allow a single, solid underline, but not a double underline or a dashed underline.

SwiftUI validates formatting UI provided by the system to the user to make sure only controls that are compatible with your formatting definition and its constraints are visible and enabled. If the system formatting UI does not provide sufficient utility based on your formatting definition, or you provide custom UI that is better tailored to your text editing experience, consider hiding the system-provided UI using the [textInputFormattingControlVisibility(\_:for:)](view/textinputformattingcontrolvisibility%28__for_%29.md) view modifier.

To declare the attributed text formatting definition, specify the attribute scope in the generic of the [body](attributedtextformattingdefinition/body-1b01t.md)’s type, and list all value constraints inside the [body](attributedtextformattingdefinition/body-1b01t.md) using result builder syntax:

```swift
struct MyTextFormattingDefinition: AttributedTextFormattingDefinition {
    var body: some AttributedTextFormattingDefinition<
        AttributeScopes.SwiftUIAttributes
    > {
        ValueConstraint(
            for: \.underlineStyle,
            values: [nil, .single],
            default: .single)
        MyAttributedTextValueConstraint()
        ContactsArePurple()
    }
}
```

Use the [attributedTextFormattingDefinition(\_:)](https://developer.apple.com/documentation/swiftui/view/attributedtextformattingdefinition%28_:%29-81jn6) view modifier to apply the definition to a view.

## Topics

### Associated Types

- [Body](attributedtextformattingdefinition/body-swift.associatedtype.md): The type of view representing the body of this formatting definition.
- [Scope](attributedtextformattingdefinition/scope.md): The text formatting definition only allows usage of attributes in this attribute scope.

### Instance Properties

- [body](attributedtextformattingdefinition/body-1b01t.md): The constraints of the formatting definition.

### Instance Methods

- [constrain(\_:)](attributedtextformattingdefinition/constrain%28__%29.md): Applies all value constraints to a given attribute container.

### Type Aliases

- [AttributedTextFormattingDefinition.ValueConstraint](attributedtextformattingdefinition/valueconstraint.md): A text formatting definition that permits a single attribute to be used, optionally constrained to a set of values.

## Relationships

### Inherited By

- [AttributedTextValueConstraint](attributedtextvalueconstraint.md)

### Conforming Types

- [AttributedTextFormatting.AnyDefinition](attributedtextformatting/anydefinition.md)
- [AttributedTextFormatting.EmptyDefinition](attributedtextformatting/emptydefinition.md)
- [AttributedTextFormatting.TupleDefinition](attributedtextformatting/tupledefinition.md)
- [AttributedTextFormatting.ValueConstraint](attributedtextformatting/valueconstraint.md)

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
- [AttributedTextValueConstraint](attributedtextvalueconstraint.md): A protocol for defining a constraint on the value of a certain attribute.
- [AttributedTextFormatting](attributedtextformatting.md): A namespace for types related to attributed text formatting definitions.
