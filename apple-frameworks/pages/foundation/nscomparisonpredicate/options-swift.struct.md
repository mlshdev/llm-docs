> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonpredicate/options-swift.struct](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/options-swift.struct)

# NSComparisonPredicate.Options (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that describe the possible types of string comparison for comparison predicates.

## Declaration

```swift
struct Options
```

<a id="overview"></a>

## Overview

The system supports these options for `LIKE`, as well as all of the equality/comparison operators.

## Topics

### Constants

- [caseInsensitive](options-swift.struct/caseinsensitive.md): A case-insensitive predicate.
- [diacriticInsensitive](options-swift.struct/diacriticinsensitive.md): A diacritic-insensitive predicate.
- [normalized](options-swift.struct/normalized.md): A predicate that indicates you’ve preprocessed the strings to compare.

### Initializers

- [init(rawValue:)](options-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting Information About a Comparison Predicate

- [comparisonPredicateModifier](comparisonpredicatemodifier.md): The comparison predicate modifier for the receiver.
- [NSComparisonPredicate.Modifier](modifier.md): Constants that describe the possible types of modifier for a comparison predicate.
- [customSelector](customselector.md): The selector for the receiver.
- [rightExpression](rightexpression.md): The right expression for the receiver.
- [leftExpression](leftexpression.md): The left expression for the receiver.
- [options](options-swift.property.md): The options to use for the receiver.
- [predicateOperatorType](predicateoperatortype.md): The predicate type for the receiver.
- [NSComparisonPredicate.Operator](operator.md): Defines the type of comparison for a comparison predicate.

# NSComparisonPredicateOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that describe the possible types of string comparison for comparison predicates.

## Declaration

```objectivec
enum NSComparisonPredicateOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

The system supports these options for `LIKE`, as well as all of the equality/comparison operators.

## Topics

### Constants

- [NSCaseInsensitivePredicateOption](options-swift.struct/caseinsensitive.md): A case-insensitive predicate.
- [NSDiacriticInsensitivePredicateOption](options-swift.struct/diacriticinsensitive.md): A diacritic-insensitive predicate.
- [NSNormalizedPredicateOption](options-swift.struct/normalized.md): A predicate that indicates you’ve preprocessed the strings to compare.

## See Also

### Getting Information About a Comparison Predicate

- [comparisonPredicateModifier](comparisonpredicatemodifier.md): The comparison predicate modifier for the receiver.
- [NSComparisonPredicateModifier](modifier.md): Constants that describe the possible types of modifier for a comparison predicate.
- [customSelector](customselector.md): The selector for the receiver.
- [rightExpression](rightexpression.md): The right expression for the receiver.
- [leftExpression](leftexpression.md): The left expression for the receiver.
- [options](options-swift.property.md): The options to use for the receiver.
- [predicateOperatorType](predicateoperatortype.md): The predicate type for the receiver.
- [NSPredicateOperatorType](operator.md): Defines the type of comparison for a comparison predicate.
