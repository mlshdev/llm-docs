> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicateexpressions/keypath](https://developer.apple.com/documentation/foundation/predicateexpressions/keypath)

# PredicateExpressions.KeyPath

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
struct KeyPath<Root, Output> where Root : PredicateExpression
```

## Topics

### Initializers

- [init(root:keyPath:)](keypath/init%28root_keypath_%29.md)

### Instance Properties

- [keyPath](keypath/keypath.md)
- [kind](keypath/kind.md): Conforms when `Root` conforms to `PredicateExpression`.
- [root](keypath/root.md)

### Enumerations

- [PredicateExpressions.KeyPath.CommonKeyPathKind](keypath/commonkeypathkind.md): Conforms when `Root` conforms to `PredicateExpression`.

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
