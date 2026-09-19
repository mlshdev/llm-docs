> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/predicateexpressions/collectionindexsubscript

# PredicateExpressions.CollectionIndexSubscript

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
struct CollectionIndexSubscript<Wrapped, Index> where Wrapped : PredicateExpression, Index : PredicateExpression, Wrapped.Output : Collection, Index.Output == Wrapped.Output.Index
```

## Topics

### Initializers

- [init(wrapped:index:)](collectionindexsubscript/init%28wrapped_index_%29.md)

### Instance Properties

- [index](collectionindexsubscript/index.md)
- [wrapped](collectionindexsubscript/wrapped.md)

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
