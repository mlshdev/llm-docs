> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscompoundpredicate](https://developer.apple.com/documentation/foundation/nscompoundpredicate)

# NSCompoundPredicate (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A specialized predicate that evaluates logical combinations of other predicates.

## Declaration

```swift
class NSCompoundPredicate
```

<a id="overview"></a>

## Overview

Use [NSCompoundPredicate](nscompoundpredicate.md) to create an `AND` or `OR` compound predicate of one or more other predicates, or the `NOT` of a single predicate. For the logical `AND` and `OR` operations:

- An `AND` predicate with no subpredicates evaluates to [true](https://developer.apple.com/documentation/swift/true).
- An `OR` predicate with no subpredicates evaluates to [false](https://developer.apple.com/documentation/swift/false).
- A compound predicate with one or more subpredicates evaluates to the truth of its subpredicates.

## Topics

### Creating Compound Predicates

- [init(andPredicateWithSubpredicates:)](nscompoundpredicate/init%28andpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an AND operation on the predicates in a specified array.
- [init(notPredicateWithSubpredicate:)](nscompoundpredicate/init%28notpredicatewithsubpredicate_%29.md): Returns a new predicate that you form using a NOT operation on a specified predicate.
- [init(orPredicateWithSubpredicates:)](nscompoundpredicate/init%28orpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an OR operation on the predicates in a specified array.
- [init(type:subpredicates:)](nscompoundpredicate/init%28type_subpredicates_%29.md): Returns the receiver that a specified type initializes using predicates from a specified array.
- [init(coder:)](nscompoundpredicate/init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.

### Getting Information About a Compound Predicate

- [compoundPredicateType](nscompoundpredicate/compoundpredicatetype.md): The predicate type for the receiver.
- [subpredicates](nscompoundpredicate/subpredicates.md): The receiver’s subpredicates.
- [NSCompoundPredicate.LogicalType](nscompoundpredicate/logicaltype.md): Constants that describe the possible types of a compound predicate.

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
- [NSComparisonPredicate](nscomparisonpredicate.md): A specialized predicate for comparing expressions.

# NSCompoundPredicate (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A specialized predicate that evaluates logical combinations of other predicates.

## Declaration

```objectivec
@interface NSCompoundPredicate : NSPredicate
```

<a id="overview"></a>

## Overview

Use [NSCompoundPredicate](nscompoundpredicate.md) to create an `AND` or `OR` compound predicate of one or more other predicates, or the `NOT` of a single predicate. For the logical `AND` and `OR` operations:

- An `AND` predicate with no subpredicates evaluates to [true](https://developer.apple.com/documentation/swift/true).
- An `OR` predicate with no subpredicates evaluates to [false](https://developer.apple.com/documentation/swift/false).
- A compound predicate with one or more subpredicates evaluates to the truth of its subpredicates.

## Topics

### Creating Compound Predicates

- [andPredicateWithSubpredicates:](nscompoundpredicate/init%28andpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an AND operation on the predicates in a specified array.
- [notPredicateWithSubpredicate:](nscompoundpredicate/init%28notpredicatewithsubpredicate_%29.md): Returns a new predicate that you form using a NOT operation on a specified predicate.
- [orPredicateWithSubpredicates:](nscompoundpredicate/init%28orpredicatewithsubpredicates_%29.md): Returns a new predicate that you form using an OR operation on the predicates in a specified array.
- [initWithType:subpredicates:](nscompoundpredicate/init%28type_subpredicates_%29.md): Returns the receiver that a specified type initializes using predicates from a specified array.
- [initWithCoder:](nscompoundpredicate/init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.

### Getting Information About a Compound Predicate

- [compoundPredicateType](nscompoundpredicate/compoundpredicatetype.md): The predicate type for the receiver.
- [subpredicates](nscompoundpredicate/subpredicates.md): The receiver’s subpredicates.
- [NSCompoundPredicateType](nscompoundpredicate/logicaltype.md): Constants that describe the possible types of a compound predicate.

## Relationships

### Inherits From

- [NSPredicate](nspredicate.md)

## See Also

### Filltering

- [NSPredicate](nspredicate.md): A definition of logical conditions for constraining a search for a fetch or for in-memory filtering.
- [NSExpression](nsexpression.md): An expression for use in a comparison predicate.
- [NSComparisonPredicate](nscomparisonpredicate.md): A specialized predicate for comparing expressions.
