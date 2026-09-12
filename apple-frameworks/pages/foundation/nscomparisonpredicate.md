> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonpredicate](https://developer.apple.com/documentation/foundation/nscomparisonpredicate)

# NSComparisonPredicate (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A specialized predicate for comparing expressions.

## Declaration

```swift
class NSComparisonPredicate
```

<a id="overview"></a>

## Overview

Use comparison predicates to compare the results of two expressions. You create a comparison predicate with an operator, a left expression, and a right expression, and use instances of the [NSExpression](nsexpression.md) class to represent those expressions. When you evaluate the predicate, it returns a `BOOL` value as the result of invoking the operator with the results of evaluating the expressions.

## Topics

### Creating Comparison Predicates

- [Displaying searchable content by using a search controller](../uikit/displaying-searchable-content-by-using-a-search-controller.md): Create a user interface with searchable content in a table view.
- [init(leftExpression:rightExpression:customSelector:)](nscomparisonpredicate/init%28leftexpression_rightexpression_customselector_%29.md): Creates a predicate that you form by combining specified left and right expressions using a specified selector.
- [init(leftExpression:rightExpression:modifier:type:options:)](nscomparisonpredicate/init%28leftexpression_rightexpression_modifier_type_options_%29.md): Creates a predicate to a specified type that you form by combining specified left and right expressions using a specified modifier and options.
- [init(coder:)](nscomparisonpredicate/init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.

### Getting Information About a Comparison Predicate

- [comparisonPredicateModifier](nscomparisonpredicate/comparisonpredicatemodifier.md): The comparison predicate modifier for the receiver.
- [NSComparisonPredicate.Modifier](nscomparisonpredicate/modifier.md): Constants that describe the possible types of modifier for a comparison predicate.
- [customSelector](nscomparisonpredicate/customselector.md): The selector for the receiver.
- [rightExpression](nscomparisonpredicate/rightexpression.md): The right expression for the receiver.
- [leftExpression](nscomparisonpredicate/leftexpression.md): The left expression for the receiver.
- [options](nscomparisonpredicate/options-swift.property.md): The options to use for the receiver.
- [NSComparisonPredicate.Options](nscomparisonpredicate/options-swift.struct.md): Constants that describe the possible types of string comparison for comparison predicates.
- [predicateOperatorType](nscomparisonpredicate/predicateoperatortype.md): The predicate type for the receiver.
- [NSComparisonPredicate.Operator](nscomparisonpredicate/operator.md): Defines the type of comparison for a comparison predicate.

## Relationships

### Inherits From

- [NSPredicate](nspredicate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Filltering

- [Predicate](predicate.md): A logical condition used to test a set of input values for searching or filtering.
- [PredicateError](predicateerror.md): An error thrown while evaluating a predicate.
- [PredicateCodableConfiguration](predicatecodableconfiguration.md): A specification of the expected types and key paths found in an archived predicate.
- [PredicateCodableKeyPathProviding](predicatecodablekeypathproviding.md): A type that provides the expected key paths found in an archived predicate.
- [PredicateExpression](predicateexpression.md): A component expression that makes up part of a predicate.
- [StandardPredicateExpression](standardpredicateexpression.md): A component expression that makes up part of a predicate, and that’s supported by the standard predicate type.
- [PredicateExpressions](predicateexpressions.md): The expressions that make up a predicate.
- [PredicateBindings](predicatebindings.md): A mapping from a predicates’s input variables to their values.
- [NSPredicate](nspredicate.md): A definition of logical conditions for constraining a search for a fetch or for in-memory filtering.
- [NSExpression](nsexpression.md): An expression for use in a comparison predicate.
- [NSCompoundPredicate](nscompoundpredicate.md): A specialized predicate that evaluates logical combinations of other predicates.

# NSComparisonPredicate (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A specialized predicate for comparing expressions.

## Declaration

```objectivec
@interface NSComparisonPredicate : NSPredicate
```

<a id="overview"></a>

## Overview

Use comparison predicates to compare the results of two expressions. You create a comparison predicate with an operator, a left expression, and a right expression, and use instances of the [NSExpression](nsexpression.md) class to represent those expressions. When you evaluate the predicate, it returns a `BOOL` value as the result of invoking the operator with the results of evaluating the expressions.

## Topics

### Creating Comparison Predicates

- [Displaying searchable content by using a search controller](../uikit/displaying-searchable-content-by-using-a-search-controller.md): Create a user interface with searchable content in a table view.
- [predicateWithLeftExpression:rightExpression:customSelector:](nscomparisonpredicate/predicatewithleftexpression_rightexpression_customselector_.md): Returns a new predicate formed by combining the left and right expressions using a given selector.
- [predicateWithLeftExpression:rightExpression:modifier:type:options:](nscomparisonpredicate/predicatewithleftexpression_rightexpression_modifier_type_options_.md): Creates and returns a predicate of a given type formed by combining given left and right expressions using a given modifier and options.
- [initWithLeftExpression:rightExpression:customSelector:](nscomparisonpredicate/init%28leftexpression_rightexpression_customselector_%29.md): Creates a predicate that you form by combining specified left and right expressions using a specified selector.
- [initWithLeftExpression:rightExpression:modifier:type:options:](nscomparisonpredicate/init%28leftexpression_rightexpression_modifier_type_options_%29.md): Creates a predicate to a specified type that you form by combining specified left and right expressions using a specified modifier and options.
- [initWithCoder:](nscomparisonpredicate/init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.

### Getting Information About a Comparison Predicate

- [comparisonPredicateModifier](nscomparisonpredicate/comparisonpredicatemodifier.md): The comparison predicate modifier for the receiver.
- [NSComparisonPredicateModifier](nscomparisonpredicate/modifier.md): Constants that describe the possible types of modifier for a comparison predicate.
- [customSelector](nscomparisonpredicate/customselector.md): The selector for the receiver.
- [rightExpression](nscomparisonpredicate/rightexpression.md): The right expression for the receiver.
- [leftExpression](nscomparisonpredicate/leftexpression.md): The left expression for the receiver.
- [options](nscomparisonpredicate/options-swift.property.md): The options to use for the receiver.
- [NSComparisonPredicateOptions](nscomparisonpredicate/options-swift.struct.md): Constants that describe the possible types of string comparison for comparison predicates.
- [predicateOperatorType](nscomparisonpredicate/predicateoperatortype.md): The predicate type for the receiver.
- [NSPredicateOperatorType](nscomparisonpredicate/operator.md): Defines the type of comparison for a comparison predicate.

## Relationships

### Inherits From

- [NSPredicate](nspredicate.md)

## See Also

### Filltering

- [NSPredicate](nspredicate.md): A definition of logical conditions for constraining a search for a fetch or for in-memory filtering.
- [NSExpression](nsexpression.md): An expression for use in a comparison predicate.
- [NSCompoundPredicate](nscompoundpredicate.md): A specialized predicate that evaluates logical combinations of other predicates.
