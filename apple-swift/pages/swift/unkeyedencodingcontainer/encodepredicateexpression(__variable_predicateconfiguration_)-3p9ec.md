> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unkeyedencodingcontainer/encodepredicateexpression(_:variable:predicateconfiguration:)-3p9ec](https://developer.apple.com/documentation/swift/unkeyedencodingcontainer/encodepredicateexpression(_:variable:predicateconfiguration:)-3p9ec)

# encodePredicateExpression(\_:variable:predicateConfiguration:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

## Declaration

```swift
mutating func encodePredicateExpression<T, each Input>(_ expression: T, variable: repeat PredicateExpressions.Variable<each Input>, predicateConfiguration: PredicateCodableConfiguration) throws where T : PredicateExpression, T : Encodable
```
