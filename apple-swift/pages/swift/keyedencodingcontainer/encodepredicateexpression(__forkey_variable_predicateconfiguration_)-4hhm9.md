> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainer/encodepredicateexpression(_:forkey:variable:predicateconfiguration:)-4hhm9](https://developer.apple.com/documentation/swift/keyedencodingcontainer/encodepredicateexpression(_:forkey:variable:predicateconfiguration:)-4hhm9)

# encodePredicateExpression(\_:forKey:variable:predicateConfiguration:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

## Declaration

```swift
mutating func encodePredicateExpression<T, each Input>(_ expression: T, forKey key: KeyedEncodingContainer<K>.Key, variable: repeat PredicateExpressions.Variable<each Input>, predicateConfiguration: PredicateCodableConfiguration) throws where T : PredicateExpression, T : Encodable
```
