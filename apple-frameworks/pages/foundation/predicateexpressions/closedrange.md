> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/predicateexpressions/closedrange

# PredicateExpressions.ClosedRange

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
struct ClosedRange<LHS, RHS> where LHS : PredicateExpression, RHS : PredicateExpression, LHS.Output : Comparable, LHS.Output == RHS.Output
```

## Topics

### Initializers

- [init(lower:upper:)](closedrange/init%28lower_upper_%29.md)

### Instance Properties

- [lower](closedrange/lower.md)
- [upper](closedrange/upper.md)

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
