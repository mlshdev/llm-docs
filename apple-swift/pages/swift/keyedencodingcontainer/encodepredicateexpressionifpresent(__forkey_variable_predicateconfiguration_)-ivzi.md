> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainer/encodepredicateexpressionifpresent(_:forkey:variable:predicateconfiguration:)-ivzi](https://developer.apple.com/documentation/swift/keyedencodingcontainer/encodepredicateexpressionifpresent(_:forkey:variable:predicateconfiguration:)-ivzi)

# encodePredicateExpressionIfPresent(\_:forKey:variable:predicateConfiguration:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
mutating func encodePredicateExpressionIfPresent<T, each Input>(_ expression: T?, forKey key: KeyedEncodingContainer<K>.Key, variable: repeat PredicateExpressions.Variable<each Input>, predicateConfiguration: PredicateCodableConfiguration) throws where T : PredicateExpression, T : Encodable, T.Output == Bool
```
