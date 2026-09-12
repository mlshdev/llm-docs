> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablerowbuilder/buildeither(second:)](https://developer.apple.com/documentation/swiftui/tablerowbuilder/buildeither(second:))

# buildEither(second:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a row result for the second of two row content alternatives.

## Declaration

```swift
@export(implementation) static func buildEither<T, F>(second: F) -> _ConditionalContent<T, F> where Value == T.TableRowValue, T : TableRowContent, F : TableRowContent, T.TableRowValue == F.TableRowValue
```

<a id="discussion"></a>

## Discussion

This method provides support for “if” statements in multi-statement closures, producing conditional content for the “else” branch.

## See Also

### Building a row from conditionals

- [buildIf(\_:)](buildif%28__%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result for conditional statements.
- [buildEither(first:)](buildeither%28first_%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result for the first of two row content alternatives.
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the builder.
