> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicatebindings](https://developer.apple.com/documentation/foundation/predicatebindings)

# PredicateBindings

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A mapping from a predicates’s input variables to their values.

## Declaration

```swift
struct PredicateBindings
```

<a id="overview"></a>

## Overview

If you define a custom predicate expression type, you must propagate the predicate’s bindings to its subexpressions.

If you define a custom predicate type, you must create an instance of this structure, populate it with the predicate’s variables, and propagate it throughout the expression tree.

## Topics

### Initializers

- [init(\_:)](predicatebindings/init%28__%29.md)

### Instance Methods

- [binding(\_:to:)](predicatebindings/binding%28__to_%29.md)

### Subscripts

- [subscript(\_:)](predicatebindings/subscript%28__%29.md)

## See Also

### Filltering

- [Predicate](predicate.md): A logical condition used to test a set of input values for searching or filtering.
- [PredicateError](predicateerror.md): An error thrown while evaluating a predicate.
- [PredicateCodableConfiguration](predicatecodableconfiguration.md): A specification of the expected types and key paths found in an archived predicate.
- [PredicateCodableKeyPathProviding](predicatecodablekeypathproviding.md): A type that provides the expected key paths found in an archived predicate.
- [PredicateExpression](predicateexpression.md): A component expression that makes up part of a predicate.
- [StandardPredicateExpression](standardpredicateexpression.md): A component expression that makes up part of a predicate, and that’s supported by the standard predicate type.
- [PredicateExpressions](predicateexpressions.md): The expressions that make up a predicate.
- [NSPredicate](nspredicate.md): A definition of logical conditions for constraining a search for a fetch or for in-memory filtering.
- [NSExpression](nsexpression.md): An expression for use in a comparison predicate.
- [NSComparisonPredicate](nscomparisonpredicate.md): A specialized predicate for comparing expressions.
- [NSCompoundPredicate](nscompoundpredicate.md): A specialized predicate that evaluates logical combinations of other predicates.
