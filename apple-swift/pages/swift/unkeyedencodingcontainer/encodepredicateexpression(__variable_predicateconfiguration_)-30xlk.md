> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unkeyedencodingcontainer/encodepredicateexpression(_:variable:predicateconfiguration:)-30xlk

# encodePredicateExpression(\_:variable:predicateConfiguration:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
mutating func encodePredicateExpression<T, each Input>(_ expression: T, variable: repeat PredicateExpressions.Variable<each Input>, predicateConfiguration: PredicateCodableConfiguration) throws where T : PredicateExpression, T : Encodable, T.Output == Bool
```
