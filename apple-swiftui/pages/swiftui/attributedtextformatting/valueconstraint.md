> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextformatting/valueconstraint](https://developer.apple.com/documentation/swiftui/attributedtextformatting/valueconstraint)

# AttributedTextFormatting.ValueConstraint

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A text formatting definition that constrains the value of a single attribute to the members of a set.

## Declaration

```swift
struct ValueConstraint<Scope, AttributeKey> where Scope : AttributeScope, AttributeKey : AttributedStringKey, AttributeKey.Value : Sendable
```

<a id="overview"></a>

## Overview

```swift
struct MyTextFormattingDefinition: AttributedTextFormattingDefinition {
    var body: some AttributedTextFormattingDefinition<
        AttributeScopes.SwiftUIAttributes
    > {
        // Allow no underline or the `.single` underline style. If
        // a text has any other underline style, it is corrected
        // to the default value `.single`
        ValueConstraint(
            for: \.underlineStyle,
            values: [nil, .single],
            default: .single)
    }
}
```

## Topics

### Initializers

- [init(for:values:default:)](valueconstraint/init%28for_values_default_%29.md): Create a definition that constrains an attribute’s value to a defined set of allowed values.

## Relationships

### Conforms To

- [AttributedTextFormattingDefinition](../attributedtextformattingdefinition.md)
- [AttributedTextValueConstraint](../attributedtextvalueconstraint.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
