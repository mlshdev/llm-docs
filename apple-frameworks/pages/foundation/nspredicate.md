> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspredicate](https://developer.apple.com/documentation/foundation/nspredicate)

# NSPredicate (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A definition of logical conditions for constraining a search for a fetch or for in-memory filtering.

## Declaration

```swift
class NSPredicate
```

<a id="overview"></a>

## Overview

Predicates represent logical conditions, which you can use to filter collections of objects. Although it’s common to create predicates directly from instances of [NSComparisonPredicate](nscomparisonpredicate.md), [NSCompoundPredicate](nscompoundpredicate.md), and [NSExpression](nsexpression.md), you often create predicates from a format string that the class methods parse on [NSPredicate](nspredicate.md). Examples of predicate format strings include:

- Simple comparisons, such as `grade == "7"` or `firstName like "Juan"`
- Case- and diacritic-insensitive lookups, such as `name contains[cd] "stein"`
- Logical operations, such as `(firstName like "Mei") OR (lastName like "Chen")`
- Temporal range constraints, such as `date between {$YESTERDAY, $TOMORROW}`
- Relational conditions, such as `group.name like "work*"`
- Aggregate operations, such as `@sum.items.price < 1000`

For a complete syntax reference, refer to the [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789).

You can also create predicates that include variables using the [evaluate(with:substitutionVariables:)](nspredicate/evaluate%28with_substitutionvariables_%29.md) method so that you can predefine the predicate before substituting concrete values at runtime.

## Topics

### Creating a Predicate

- [init(format:argumentArray:)](nspredicate/init%28format_argumentarray_%29.md): Creates a predicate by substituting the values in a specified array into a format string and parsing the result.
- [init(format:arguments:)](nspredicate/init%28format_arguments_%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [init(format:\_:)](nspredicate/init%28format___%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [init(\_:)](nspredicate/init%28__%29.md): Creates a predicate by converting an existing predicate.
- [withSubstitutionVariables(\_:)](nspredicate/withsubstitutionvariables%28__%29.md): Returns a copy of the predicate and substitutes the predicates variables with specified values from a specified substitution variables dictionary.
- [init(value:)](nspredicate/init%28value_%29.md): Creates and returns a predicate that always evaluates to a specified Boolean value.
- [init(block:)](nspredicate/init%28block_%29.md): Creates a predicate that evaluates using a specified block object and bindings dictionary.
- [init(fromMetadataQueryString:)](nspredicate/init%28frommetadataquerystring_%29.md): Creates a predicate with a metadata query string.

### Evaluating a Predicate

- [evaluate(with:)](nspredicate/evaluate%28with_%29.md): Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies.
- [evaluate(with:substitutionVariables:)](nspredicate/evaluate%28with_substitutionvariables_%29.md): Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies after substituting in the values from a specified variables dictionary.
- [allowEvaluation()](nspredicate/allowevaluation%28%29.md): Forces a securely decoded predicate to allow evaluation.

### Getting a String Representation

- [predicateFormat](nspredicate/predicateformat.md): The predicate’s format string.

### Initializers

- [init(coder:)](nspredicate/init%28coder_%29.md)

### Instance Methods

- [allowEvaluation(validator:)](nspredicate/allowevaluation%28validator_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSComparisonPredicate](nscomparisonpredicate.md)
- [NSCompoundPredicate](nscompoundpredicate.md)

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
- [NSExpression](nsexpression.md): An expression for use in a comparison predicate.
- [NSComparisonPredicate](nscomparisonpredicate.md): A specialized predicate for comparing expressions.
- [NSCompoundPredicate](nscompoundpredicate.md): A specialized predicate that evaluates logical combinations of other predicates.

# NSPredicate (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A definition of logical conditions for constraining a search for a fetch or for in-memory filtering.

## Declaration

```objectivec
@interface NSPredicate : NSObject
```

<a id="overview"></a>

## Overview

Predicates represent logical conditions, which you can use to filter collections of objects. Although it’s common to create predicates directly from instances of [NSComparisonPredicate](nscomparisonpredicate.md), [NSCompoundPredicate](nscompoundpredicate.md), and [NSExpression](nsexpression.md), you often create predicates from a format string that the class methods parse on [NSPredicate](nspredicate.md). Examples of predicate format strings include:

- Simple comparisons, such as `grade == "7"` or `firstName like "Juan"`
- Case- and diacritic-insensitive lookups, such as `name contains[cd] "stein"`
- Logical operations, such as `(firstName like "Mei") OR (lastName like "Chen")`
- Temporal range constraints, such as `date between {$YESTERDAY, $TOMORROW}`
- Relational conditions, such as `group.name like "work*"`
- Aggregate operations, such as `@sum.items.price < 1000`

For a complete syntax reference, refer to the [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789).

You can also create predicates that include variables using the [evaluateWithObject:substitutionVariables:](nspredicate/evaluate%28with_substitutionvariables_%29.md) method so that you can predefine the predicate before substituting concrete values at runtime.

## Topics

### Creating a Predicate

- [predicateWithFormat:](nspredicate/predicatewithformat_.md): Creates and returns a new predicate formed by creating a new string with a specified format and parsing the result.
- [predicateWithFormat:argumentArray:](nspredicate/init%28format_argumentarray_%29.md): Creates a predicate by substituting the values in a specified array into a format string and parsing the result.
- [predicateWithFormat:arguments:](nspredicate/init%28format_arguments_%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [predicateWithSubstitutionVariables:](nspredicate/withsubstitutionvariables%28__%29.md): Returns a copy of the predicate and substitutes the predicates variables with specified values from a specified substitution variables dictionary.
- [predicateWithValue:](nspredicate/init%28value_%29.md): Creates and returns a predicate that always evaluates to a specified Boolean value.
- [predicateWithBlock:](nspredicate/init%28block_%29.md): Creates a predicate that evaluates using a specified block object and bindings dictionary.
- [predicateFromMetadataQueryString:](nspredicate/init%28frommetadataquerystring_%29.md): Creates a predicate with a metadata query string.

### Evaluating a Predicate

- [evaluateWithObject:](nspredicate/evaluate%28with_%29.md): Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies.
- [evaluateWithObject:substitutionVariables:](nspredicate/evaluate%28with_substitutionvariables_%29.md): Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies after substituting in the values from a specified variables dictionary.
- [allowEvaluation](nspredicate/allowevaluation%28%29.md): Forces a securely decoded predicate to allow evaluation.

### Getting a String Representation

- [predicateFormat](nspredicate/predicateformat.md): The predicate’s format string.

### Instance Variables

- [reserved](nspredicate/reserved.md)

### Instance Methods

- [allowEvaluationWithValidator:error:](nspredicate/allowevaluation%28validator_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSComparisonPredicate](nscomparisonpredicate.md)
- [NSCompoundPredicate](nscompoundpredicate.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Filltering

- [NSExpression](nsexpression.md): An expression for use in a comparison predicate.
- [NSComparisonPredicate](nscomparisonpredicate.md): A specialized predicate for comparing expressions.
- [NSCompoundPredicate](nscompoundpredicate.md): A specialized predicate that evaluates logical combinations of other predicates.
