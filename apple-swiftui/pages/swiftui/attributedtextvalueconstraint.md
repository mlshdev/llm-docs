> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextvalueconstraint](https://developer.apple.com/documentation/swiftui/attributedtextvalueconstraint)

# AttributedTextValueConstraint

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A protocol for defining a constraint on the value of a certain attribute.

## Declaration

```swift
protocol AttributedTextValueConstraint : Hashable, Sendable, AttributedTextFormattingDefinition
```

<a id="overview"></a>

## Overview

Used as an [AttributedTextFormattingDefinition](attributedtextformattingdefinition.md), this constrains the [AttributeKey](attributedtextvalueconstraint/attributekey.md)’s value using the `constrain(_:)-(Attributes)` function.

Given value constraints can read other attribute values, it is crucial to avoid mixing value constraints in a way where they create cyclic dependencies with undefined behavior. Thus, it is recommended to think about value constraints in the context of the [AttributedTextFormattingDefinition](attributedtextformattingdefinition.md) they will be used in:

A simple constraint only accesses a single attribute. It can be made generic over the attribute scope so it can be reused in different [AttributedTextFormattingDefinition](attributedtextformattingdefinition.md)s.

```swift
struct NoBlackOrWhiteForeground<Scope: AttributeScope>: AttributedTextValueConstraint {
    typealias AttributeKey = AttributeScopes.SwiftUIAttributes.ForegroundColorAttribute

    func constrain(
        _ container: inout Attributes
    ) {
        if container.foregroundColor == .white || container.foregroundColor == .black {
            container.foregroundColor = .primary
        }
    }
}
```

When the constraint needs to access other attribute values, it is recommended to define it on a specific attribute scope that is used for a single [AttributedTextFormattingDefinition](attributedtextformattingdefinition.md).

```swift
extension MyTextFormattingDefinition {
    struct Scope: AttributeScope {
        /* ... */
        let foregroundColor: AttributeScopes.SwiftUIAttributes.ForegroundColorAttribute
        let backgroundColor: AttributeScopes.SwiftUIAttributes.BackgroundColorAttribute
    }
}

struct NoEqualForegroundAndBackground: AttributedTextValueConstraint {
    typealias Scope = MyTextFormattingDefinition.Scope
    typealias AttributeKey = AttributeScopes.SwiftUIAttributes.BackgroundColorAttribute

    func constrain(
        _ container: inout Attributes
    ) {
        if let color = container.foregroundColor,
           container.backgroundColor == color
        {
            container.backgroundColor = nil
        }
    }
}
```

Constraints that access multiple attributes and are generic over the scope should document their dependencies so that the dependencies can be considered for the ordering of constraints in the [body](attributedtextformattingdefinition/body-1b01t.md).

```swift
/// Makes the background color for all Genmoji blue.
///
/// - Note: This constraint depends on a valid adaptiveImageGlyph value.
struct BlueGenmojiBackgroundConstraint<Scope: AttributeScope>: AttributedTextValueConstraint {
    typealias AttributeKey = AttributeScopes.SwiftUIAttributes
        .BackgroundColorAttribute

    func constrain(
        _ container: inout Attributes
    ) {
        if container[
            AttributeScopes.SwiftUIAttributes.AdaptiveImageGlyphAttribute.self
        ] != nil {
            container.backgroundColor = .blue
        }
    }
}
```

## Topics

### Associated Types

- [AttributeKey](attributedtextvalueconstraint/attributekey.md): The attribute constrained by this constraint.

### Instance Methods

- [constrain(\_:)](attributedtextvalueconstraint/constrain%28__%29.md): Enforce constraints on the attribute.

### Type Aliases

- [AttributedTextValueConstraint.Attributes](attributedtextvalueconstraint/attributes.md): A proxy type for a container of partially constrained attributes.

## Relationships

### Inherits From

- [AttributedTextFormattingDefinition](attributedtextformattingdefinition.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

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
- [AttributedTextFormattingDefinition](attributedtextformattingdefinition.md): A protocol for defining how text can be styled in a view.
- [AttributedTextFormatting](attributedtextformatting.md): A namespace for types related to attributed text formatting definitions.
