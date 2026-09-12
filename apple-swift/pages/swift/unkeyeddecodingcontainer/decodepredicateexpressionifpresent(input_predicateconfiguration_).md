> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unkeyeddecodingcontainer/decodepredicateexpressionifpresent(input:predicateconfiguration:)](https://developer.apple.com/documentation/swift/unkeyeddecodingcontainer/decodepredicateexpressionifpresent(input:predicateconfiguration:))

# decodePredicateExpressionIfPresent(input:predicateConfiguration:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
mutating func decodePredicateExpressionIfPresent<each Input>(input: repeat (each Input).Type, predicateConfiguration: PredicateCodableConfiguration) throws -> (expression: any PredicateExpression<Bool>, variable: (repeat PredicateExpressions.Variable<each Input>))?
```
