> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/keyeddecodingcontainer/decodepredicateexpression(forkey:input:predicateconfiguration:)

# decodePredicateExpression(forKey:input:predicateConfiguration:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
mutating func decodePredicateExpression<each Input>(forKey key: KeyedDecodingContainer<K>.Key, input: repeat (each Input).Type, predicateConfiguration: PredicateCodableConfiguration) throws -> (expression: any PredicateExpression<Bool>, variable: (repeat PredicateExpressions.Variable<each Input>))
```
