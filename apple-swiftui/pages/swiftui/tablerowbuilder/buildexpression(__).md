> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablerowbuilder/buildexpression(_:)](https://developer.apple.com/documentation/swiftui/tablerowbuilder/buildexpression(_:))

# buildExpression(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Builds an expression within the builder.

## Declaration

```swift
@export(implementation) static func buildExpression<Content>(_ content: Content) -> Content where Value == Content.TableRowValue, Content : TableRowContent
```

## See Also

### Building a row from conditionals

- [buildIf(\_:)](buildif%28__%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result for conditional statements.
- [buildEither(first:)](buildeither%28first_%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result for the first of two row content alternatives.
- [buildEither(second:)](buildeither%28second_%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result for the second of two row content alternatives.
