> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unkeyedencodingcontainer/encodepredicateexpressionifpresent(_:variable:predicateconfiguration:)-438on

# encodePredicateExpressionIfPresent(\_:variable:predicateConfiguration:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

## Declaration

```swift
mutating func encodePredicateExpressionIfPresent<T, each Input>(_ expression: T?, variable: repeat PredicateExpressions.Variable<each Input>, predicateConfiguration: PredicateCodableConfiguration) throws where T : PredicateExpression, T : Encodable
```
