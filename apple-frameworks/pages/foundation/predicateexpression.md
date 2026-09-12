> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicateexpression](https://developer.apple.com/documentation/foundation/predicateexpression)

# PredicateExpression

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A component expression that makes up part of a predicate.

## Declaration

```swift
protocol PredicateExpression<Output>
```

<a id="overview"></a>

## Overview

To transform a predicate, define a protocol for the result and add conformance on each predicate expression type that you support. For example:

```swift
protocol ProsePredicateExpression {
    func proseQuery() -> String
}

// Repeated for each supported operator.
extension PredicateExpressions.Equal: ProsePredicateExpression 
        where LHS: ProsePredicateExpression,
        RHS: ProsePredicateExpression {
    func proseQuery() -> String {
        return lhs.proseQuery() + " is equal to " + rhs.proseQuery()
    }
}

extension Predicate  {
    func proseQuery() -> String? {
        guard let expression = expression as? ProsePredicateExpression else { return nil }
        return expression.proseQuery()
    }
}
```

## Topics

### Evaluating a predicate expression

- [Output](predicateexpression/output.md)
- [evaluate(\_:)](predicateexpression/evaluate%28__%29.md)

## Relationships

### Inherited By

- [StandardPredicateExpression](standardpredicateexpression.md)

### Conforming Types

- [PredicateExpressions.Arithmetic](predicateexpressions/arithmetic.md)
- [PredicateExpressions.ClosedRange](predicateexpressions/closedrange.md)
- [PredicateExpressions.CollectionContainsCollection](predicateexpressions/collectioncontainscollection.md)
- [PredicateExpressions.CollectionIndexSubscript](predicateexpressions/collectionindexsubscript.md)
- [PredicateExpressions.CollectionRangeSubscript](predicateexpressions/collectionrangesubscript.md)
- [PredicateExpressions.Comparison](predicateexpressions/comparison.md)
- [PredicateExpressions.Conditional](predicateexpressions/conditional.md)
- [PredicateExpressions.ConditionalCast](predicateexpressions/conditionalcast.md)
- [PredicateExpressions.Conjunction](predicateexpressions/conjunction.md)
- [PredicateExpressions.DictionaryKeyDefaultValueSubscript](predicateexpressions/dictionarykeydefaultvaluesubscript.md)
- [PredicateExpressions.DictionaryKeySubscript](predicateexpressions/dictionarykeysubscript.md)
- [PredicateExpressions.Disjunction](predicateexpressions/disjunction.md)
- [PredicateExpressions.Equal](predicateexpressions/equal.md)
- [PredicateExpressions.ExpressionEvaluate](predicateexpressions/expressionevaluate.md)
- [PredicateExpressions.Filter](predicateexpressions/filter.md)
- [PredicateExpressions.FloatDivision](predicateexpressions/floatdivision.md)
- [PredicateExpressions.ForceCast](predicateexpressions/forcecast.md)
- [PredicateExpressions.ForcedUnwrap](predicateexpressions/forcedunwrap.md)
- [PredicateExpressions.IntDivision](predicateexpressions/intdivision.md)
- [PredicateExpressions.IntRemainder](predicateexpressions/intremainder.md)
- [PredicateExpressions.KeyPath](predicateexpressions/keypath.md)
- [PredicateExpressions.Negation](predicateexpressions/negation.md)
- [PredicateExpressions.NilCoalesce](predicateexpressions/nilcoalesce.md)
- [PredicateExpressions.NilLiteral](predicateexpressions/nilliteral.md)
- [PredicateExpressions.NotEqual](predicateexpressions/notequal.md)
- [PredicateExpressions.OptionalFlatMap](predicateexpressions/optionalflatmap.md)
- [PredicateExpressions.PredicateEvaluate](predicateexpressions/predicateevaluate.md)
- [PredicateExpressions.Range](predicateexpressions/range.md)
- [PredicateExpressions.RangeExpressionContains](predicateexpressions/rangeexpressioncontains.md)
- [PredicateExpressions.SequenceAllSatisfy](predicateexpressions/sequenceallsatisfy.md)
- [PredicateExpressions.SequenceContains](predicateexpressions/sequencecontains.md)
- [PredicateExpressions.SequenceContainsWhere](predicateexpressions/sequencecontainswhere.md)
- [PredicateExpressions.SequenceMaximum](predicateexpressions/sequencemaximum.md)
- [PredicateExpressions.SequenceMinimum](predicateexpressions/sequenceminimum.md)
- [PredicateExpressions.SequenceStartsWith](predicateexpressions/sequencestartswith.md)
- [PredicateExpressions.StringCaseInsensitiveCompare](predicateexpressions/stringcaseinsensitivecompare.md)
- [PredicateExpressions.StringContainsRegex](predicateexpressions/stringcontainsregex.md)
- [PredicateExpressions.StringLocalizedCompare](predicateexpressions/stringlocalizedcompare.md)
- [PredicateExpressions.StringLocalizedStandardContains](predicateexpressions/stringlocalizedstandardcontains.md)
- [PredicateExpressions.TypeCheck](predicateexpressions/typecheck.md)
- [PredicateExpressions.UnaryMinus](predicateexpressions/unaryminus.md)
- [PredicateExpressions.Value](predicateexpressions/value.md)
- [PredicateExpressions.Variable](predicateexpressions/variable.md)

## See Also

### Filltering

- [Predicate](predicate.md): A logical condition used to test a set of input values for searching or filtering.
- [PredicateError](predicateerror.md): An error thrown while evaluating a predicate.
- [PredicateCodableConfiguration](predicatecodableconfiguration.md): A specification of the expected types and key paths found in an archived predicate.
- [PredicateCodableKeyPathProviding](predicatecodablekeypathproviding.md): A type that provides the expected key paths found in an archived predicate.
- [StandardPredicateExpression](standardpredicateexpression.md): A component expression that makes up part of a predicate, and that’s supported by the standard predicate type.
- [PredicateExpressions](predicateexpressions.md): The expressions that make up a predicate.
- [PredicateBindings](predicatebindings.md): A mapping from a predicates’s input variables to their values.
- [NSPredicate](nspredicate.md): A definition of logical conditions for constraining a search for a fetch or for in-memory filtering.
- [NSExpression](nsexpression.md): An expression for use in a comparison predicate.
- [NSComparisonPredicate](nscomparisonpredicate.md): A specialized predicate for comparing expressions.
- [NSCompoundPredicate](nscompoundpredicate.md): A specialized predicate that evaluates logical combinations of other predicates.
