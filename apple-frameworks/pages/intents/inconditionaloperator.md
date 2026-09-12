> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inconditionaloperator](https://developer.apple.com/documentation/intents/inconditionaloperator)

# INConditionalOperator (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating how search attributes are interpreted.

## Declaration

```swift
enum INConditionalOperator
```

## Topics

### Constants

- [INConditionalOperator.all](inconditionaloperator/all.md): All relevant attributes must be present for the search to yield a match. This is equivalent to an AND operator.
- [INConditionalOperator.any](inconditionaloperator/any.md): One or more of the relevant attributes must be present for the search to yield a match. This is equivalent to an OR operator.
- [INConditionalOperator.none](inconditionaloperator/none.md): None of the specified attributes must be present for the search to yield a match.

### Initializers

- [init(rawValue:)](inconditionaloperator/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# INConditionalOperator (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating how search attributes are interpreted.

## Declaration

```objectivec
enum INConditionalOperator : NSInteger;
```

## Topics

### Constants

- [INConditionalOperatorAll](inconditionaloperator/all.md): All relevant attributes must be present for the search to yield a match. This is equivalent to an AND operator.
- [INConditionalOperatorAny](inconditionaloperator/any.md): One or more of the relevant attributes must be present for the search to yield a match. This is equivalent to an OR operator.
- [INConditionalOperatorNone](inconditionaloperator/none.md): None of the specified attributes must be present for the search to yield a match.
