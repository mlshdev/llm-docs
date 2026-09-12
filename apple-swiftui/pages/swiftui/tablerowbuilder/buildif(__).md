> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablerowbuilder/buildif(_:)](https://developer.apple.com/documentation/swiftui/tablerowbuilder/buildif(_:))

# buildIf(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a row result for conditional statements.

## Declaration

```swift
@export(implementation) static func buildIf<C>(_ content: C?) -> C? where Value == C.TableRowValue, C : TableRowContent
```

<a id="discussion"></a>

## Discussion

This method provides support for “if” statements in multi-statement closures, producing an optional value that is visible only when the condition evaluates to `true`.

## See Also

### Building a row from conditionals

- [buildEither(first:)](buildeither%28first_%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result for the first of two row content alternatives.
- [buildEither(second:)](buildeither%28second_%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result for the second of two row content alternatives.
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the builder.
