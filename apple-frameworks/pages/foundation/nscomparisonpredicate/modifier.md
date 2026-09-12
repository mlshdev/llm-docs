> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonpredicate/modifier](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/modifier)

# NSComparisonPredicate.Modifier (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that describe the possible types of modifier for a comparison predicate.

## Declaration

```swift
enum Modifier
```

## Topics

### Constants

- [NSComparisonPredicate.Modifier.direct](modifier/direct.md): A predicate to compare directly the left and right hand sides.
- [NSComparisonPredicate.Modifier.all](modifier/all.md): A predicate to compare all entries in the destination of a to-many relationship.
- [NSComparisonPredicate.Modifier.any](modifier/any.md): A predicate to match with any entry in the destination of a to-many relationship.

### Initializers

- [init(rawValue:)](modifier/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Information About a Comparison Predicate

- [comparisonPredicateModifier](comparisonpredicatemodifier.md): The comparison predicate modifier for the receiver.
- [customSelector](customselector.md): The selector for the receiver.
- [rightExpression](rightexpression.md): The right expression for the receiver.
- [leftExpression](leftexpression.md): The left expression for the receiver.
- [options](options-swift.property.md): The options to use for the receiver.
- [NSComparisonPredicate.Options](options-swift.struct.md): Constants that describe the possible types of string comparison for comparison predicates.
- [predicateOperatorType](predicateoperatortype.md): The predicate type for the receiver.
- [NSComparisonPredicate.Operator](operator.md): Defines the type of comparison for a comparison predicate.

# NSComparisonPredicateModifier (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that describe the possible types of modifier for a comparison predicate.

## Declaration

```objectivec
enum NSComparisonPredicateModifier : NSUInteger;
```

## Topics

### Constants

- [NSDirectPredicateModifier](modifier/direct.md): A predicate to compare directly the left and right hand sides.
- [NSAllPredicateModifier](modifier/all.md): A predicate to compare all entries in the destination of a to-many relationship.
- [NSAnyPredicateModifier](modifier/any.md): A predicate to match with any entry in the destination of a to-many relationship.

## See Also

### Getting Information About a Comparison Predicate

- [comparisonPredicateModifier](comparisonpredicatemodifier.md): The comparison predicate modifier for the receiver.
- [customSelector](customselector.md): The selector for the receiver.
- [rightExpression](rightexpression.md): The right expression for the receiver.
- [leftExpression](leftexpression.md): The left expression for the receiver.
- [options](options-swift.property.md): The options to use for the receiver.
- [NSComparisonPredicateOptions](options-swift.struct.md): Constants that describe the possible types of string comparison for comparison predicates.
- [predicateOperatorType](predicateoperatortype.md): The predicate type for the receiver.
- [NSPredicateOperatorType](operator.md): Defines the type of comparison for a comparison predicate.
