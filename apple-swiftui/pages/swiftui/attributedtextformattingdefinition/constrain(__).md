> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextformattingdefinition/constrain(_:)](https://developer.apple.com/documentation/swiftui/attributedtextformattingdefinition/constrain(_:))

# constrain(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Applies all value constraints to a given attribute container.

## Declaration

```swift
func constrain(_ container: inout AttributeContainer)
```

<a id="discussion"></a>

## Discussion

Modifies the given `container` by applying all [AttributedTextValueConstraint](../attributedtextvalueconstraint.md)s that are part of this definition to the container.

Use this function to test your [AttributedTextFormattingDefinition](../attributedtextformattingdefinition.md), or to ensure your constraints are applied before passing content to API that cannot itself apply the definition.
