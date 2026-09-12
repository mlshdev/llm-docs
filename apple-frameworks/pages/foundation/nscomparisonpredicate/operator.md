> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonpredicate/operator](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/operator)

# NSComparisonPredicate.Operator (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines the type of comparison for a comparison predicate.

## Declaration

```swift
enum Operator
```

## Topics

### Constants

- [NSComparisonPredicate.Operator.lessThan](operator/lessthan.md): A less-than predicate.
- [NSComparisonPredicate.Operator.lessThanOrEqualTo](operator/lessthanorequalto.md): A less-than-or-equal-to predicate.
- [NSComparisonPredicate.Operator.greaterThan](operator/greaterthan.md): A greater-than predicate.
- [NSComparisonPredicate.Operator.greaterThanOrEqualTo](operator/greaterthanorequalto.md): A greater-than-or-equal-to predicate.
- [NSComparisonPredicate.Operator.equalTo](operator/equalto.md): An equal-to predicate.
- [NSComparisonPredicate.Operator.notEqualTo](operator/notequalto.md): A not-equal-to predicate.
- [NSComparisonPredicate.Operator.matches](operator/matches.md): A full regular expression matching predicate.
- [NSComparisonPredicate.Operator.like](operator/like.md): A simple subset of the MATCHES predicate, similar in behavior to SQL `LIKE`.
- [NSComparisonPredicate.Operator.beginsWith](operator/beginswith.md): A begins-with predicate.
- [NSComparisonPredicate.Operator.endsWith](operator/endswith.md): An ends-with predicate.
- [NSComparisonPredicate.Operator.in](operator/in.md): A predicate to determine if the left hand side is in the right hand side.
- [NSComparisonPredicate.Operator.customSelector](operator/customselector.md): A predicate that uses a custom selector that takes a single argument and returns a `BOOL` value.
- [NSComparisonPredicate.Operator.contains](operator/contains.md): A predicate to determine if the left hand side contains the right hand side.
- [NSComparisonPredicate.Operator.between](operator/between.md): A predicate to determine if the left hand side lies at or between bounds specified by the right hand side.

### Initializers

- [init(rawValue:)](operator/init%28rawvalue_%29.md)

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
- [NSComparisonPredicate.Modifier](modifier.md): Constants that describe the possible types of modifier for a comparison predicate.
- [customSelector](customselector.md): The selector for the receiver.
- [rightExpression](rightexpression.md): The right expression for the receiver.
- [leftExpression](leftexpression.md): The left expression for the receiver.
- [options](options-swift.property.md): The options to use for the receiver.
- [NSComparisonPredicate.Options](options-swift.struct.md): Constants that describe the possible types of string comparison for comparison predicates.
- [predicateOperatorType](predicateoperatortype.md): The predicate type for the receiver.

# NSPredicateOperatorType (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines the type of comparison for a comparison predicate.

## Declaration

```objectivec
enum NSPredicateOperatorType : NSUInteger;
```

## Topics

### Constants

- [NSLessThanPredicateOperatorType](operator/lessthan.md): A less-than predicate.
- [NSLessThanOrEqualToPredicateOperatorType](operator/lessthanorequalto.md): A less-than-or-equal-to predicate.
- [NSGreaterThanPredicateOperatorType](operator/greaterthan.md): A greater-than predicate.
- [NSGreaterThanOrEqualToPredicateOperatorType](operator/greaterthanorequalto.md): A greater-than-or-equal-to predicate.
- [NSEqualToPredicateOperatorType](operator/equalto.md): An equal-to predicate.
- [NSNotEqualToPredicateOperatorType](operator/notequalto.md): A not-equal-to predicate.
- [NSMatchesPredicateOperatorType](operator/matches.md): A full regular expression matching predicate.
- [NSLikePredicateOperatorType](operator/like.md): A simple subset of the MATCHES predicate, similar in behavior to SQL `LIKE`.
- [NSBeginsWithPredicateOperatorType](operator/beginswith.md): A begins-with predicate.
- [NSEndsWithPredicateOperatorType](operator/endswith.md): An ends-with predicate.
- [NSInPredicateOperatorType](operator/in.md): A predicate to determine if the left hand side is in the right hand side.
- [NSCustomSelectorPredicateOperatorType](operator/customselector.md): A predicate that uses a custom selector that takes a single argument and returns a `BOOL` value.
- [NSContainsPredicateOperatorType](operator/contains.md): A predicate to determine if the left hand side contains the right hand side.
- [NSBetweenPredicateOperatorType](operator/between.md): A predicate to determine if the left hand side lies at or between bounds specified by the right hand side.

## See Also

### Getting Information About a Comparison Predicate

- [comparisonPredicateModifier](comparisonpredicatemodifier.md): The comparison predicate modifier for the receiver.
- [NSComparisonPredicateModifier](modifier.md): Constants that describe the possible types of modifier for a comparison predicate.
- [customSelector](customselector.md): The selector for the receiver.
- [rightExpression](rightexpression.md): The right expression for the receiver.
- [leftExpression](leftexpression.md): The left expression for the receiver.
- [options](options-swift.property.md): The options to use for the receiver.
- [NSComparisonPredicateOptions](options-swift.struct.md): Constants that describe the possible types of string comparison for comparison predicates.
- [predicateOperatorType](predicateoperatortype.md): The predicate type for the receiver.
