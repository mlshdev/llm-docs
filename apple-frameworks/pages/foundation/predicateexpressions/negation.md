> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicateexpressions/negation](https://developer.apple.com/documentation/foundation/predicateexpressions/negation)

# PredicateExpressions.Negation

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
struct Negation<Wrapped> where Wrapped : PredicateExpression, Wrapped.Output == Bool
```

## Topics

### Initializers

- [init(\_:)](negation/init%28__%29.md)

### Instance Properties

- [wrapped](negation/wrapped.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [PredicateExpression](../predicateexpression.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [StandardPredicateExpression](../standardpredicateexpression.md)
