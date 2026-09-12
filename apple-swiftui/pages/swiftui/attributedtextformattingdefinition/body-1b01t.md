> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextformattingdefinition/body-1b01t](https://developer.apple.com/documentation/swiftui/attributedtextformattingdefinition/body-1b01t)

# body

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The constraints of the formatting definition.

## Declaration

```swift
@AttributedTextFormatting.DefinitionBuilder<Self.Scope> var body: Self.Body { get }
```

<a id="discussion"></a>

## Discussion

When you implement a custom definition, you must implement a computed `body` property to provide the constraints of your definition. Return a definition that’s composed of built-in definitions that SwiftUI provides, such as [AttributedTextFormattingDefinition.ValueConstraint](valueconstraint.md) and [AttributedTextValueConstraint](../attributedtextvalueconstraint.md)s, plus other composite [AttributedTextFormattingDefinition](../attributedtextformattingdefinition.md)s that you’ve already defined:

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
    }
}
```

Note that the order of the constraints in the result builder matters as constraints are applied in order. For details, see `AttributedTextValueConstraint/constrain(_:)-(Attributes)`.

## Default Implementations

### AttributedTextFormattingDefinition Implementations

- [body](body-48m9l.md)
