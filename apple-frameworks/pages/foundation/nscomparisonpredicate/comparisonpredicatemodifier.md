> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonpredicate/comparisonpredicatemodifier](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/comparisonpredicatemodifier)

# comparisonPredicateModifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The comparison predicate modifier for the receiver.

## Declaration

```swift
var comparisonPredicateModifier: NSComparisonPredicate.Modifier { get }
```

<a id="Discussion"></a>

## Discussion

The default value is [NSComparisonPredicate.Modifier.direct](modifier/direct.md).

## See Also

### Getting Information About a Comparison Predicate

- [NSComparisonPredicate.Modifier](modifier.md): Constants that describe the possible types of modifier for a comparison predicate.
- [customSelector](customselector.md): The selector for the receiver.
- [rightExpression](rightexpression.md): The right expression for the receiver.
- [leftExpression](leftexpression.md): The left expression for the receiver.
- [options](options-swift.property.md): The options to use for the receiver.
- [NSComparisonPredicate.Options](options-swift.struct.md): Constants that describe the possible types of string comparison for comparison predicates.
- [predicateOperatorType](predicateoperatortype.md): The predicate type for the receiver.
- [NSComparisonPredicate.Operator](operator.md): Defines the type of comparison for a comparison predicate.

# comparisonPredicateModifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The comparison predicate modifier for the receiver.

## Declaration

```objectivec
@property (readonly) NSComparisonPredicateModifier comparisonPredicateModifier;
```

<a id="Discussion"></a>

## Discussion

The default value is [NSDirectPredicateModifier](modifier/direct.md).

## See Also

### Getting Information About a Comparison Predicate

- [NSComparisonPredicateModifier](modifier.md): Constants that describe the possible types of modifier for a comparison predicate.
- [customSelector](customselector.md): The selector for the receiver.
- [rightExpression](rightexpression.md): The right expression for the receiver.
- [leftExpression](leftexpression.md): The left expression for the receiver.
- [options](options-swift.property.md): The options to use for the receiver.
- [NSComparisonPredicateOptions](options-swift.struct.md): Constants that describe the possible types of string comparison for comparison predicates.
- [predicateOperatorType](predicateoperatortype.md): The predicate type for the receiver.
- [NSPredicateOperatorType](operator.md): Defines the type of comparison for a comparison predicate.
