> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicateexpressions](https://developer.apple.com/documentation/foundation/predicateexpressions)

# PredicateExpressions

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The expressions that make up a predicate.

## Declaration

```swift
@frozen enum PredicateExpressions
```

<a id="overview"></a>

## Overview

Don’t use this type directly.  When you call the `Predicate(_:)` macro in your code, the  expansion of that macro produces these values.

## Topics

### Structures

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
- [PredicateExpressions.PredicateRegex](predicateexpressions/predicateregex.md)
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
- [PredicateExpressions.VariableID](predicateexpressions/variableid.md)

### Type Methods

- [build_Arg(\_:)](predicateexpressions/build_arg%28__%29-2e8wt.md)
- [build_Arg(\_:)](predicateexpressions/build_arg%28__%29-4nz6o.md)
- [build_Arg(\_:)](predicateexpressions/build_arg%28__%29-8jd6q.md)
- [build_Arithmetic(lhs:rhs:op:)](predicateexpressions/build_arithmetic%28lhs_rhs_op_%29.md)
- [build_ClosedRange(lower:upper:)](predicateexpressions/build_closedrange%28lower_upper_%29.md)
- [build_Comparison(lhs:rhs:op:)](predicateexpressions/build_comparison%28lhs_rhs_op_%29.md)
- [build_Conditional(\_:\_:\_:)](predicateexpressions/build_conditional%28______%29.md)
- [build_Conjunction(lhs:rhs:)](predicateexpressions/build_conjunction%28lhs_rhs_%29.md)
- [build_Disjunction(lhs:rhs:)](predicateexpressions/build_disjunction%28lhs_rhs_%29.md)
- [build_Division(lhs:rhs:)](predicateexpressions/build_division%28lhs_rhs_%29-5mg1h.md)
- [build_Division(lhs:rhs:)](predicateexpressions/build_division%28lhs_rhs_%29-958g1.md)
- [build_Equal(lhs:rhs:)](predicateexpressions/build_equal%28lhs_rhs_%29.md)
- [build_ForcedUnwrap(\_:)](predicateexpressions/build_forcedunwrap%28__%29.md)
- [build_KeyPath(root:keyPath:)](predicateexpressions/build_keypath%28root_keypath_%29.md)
- [build_Negation(\_:)](predicateexpressions/build_negation%28__%29.md)
- [build_NilCoalesce(lhs:rhs:)](predicateexpressions/build_nilcoalesce%28lhs_rhs_%29.md)
- [build_NilLiteral()](predicateexpressions/build_nilliteral%28%29.md)
- [build_NotEqual(lhs:rhs:)](predicateexpressions/build_notequal%28lhs_rhs_%29.md)
- [build_Range(lower:upper:)](predicateexpressions/build_range%28lower_upper_%29.md)
- [build_Remainder(lhs:rhs:)](predicateexpressions/build_remainder%28lhs_rhs_%29.md)
- [build_UnaryMinus(\_:)](predicateexpressions/build_unaryminus%28__%29.md)
- [build_allSatisfy(\_:\_:)](predicateexpressions/build_allsatisfy%28____%29.md)
- [build_caseInsensitiveCompare(\_:\_:)](predicateexpressions/build_caseinsensitivecompare%28____%29.md)
- [build_contains(\_:\_:)](predicateexpressions/build_contains%28____%29-18oc3.md)
- [build_contains(\_:\_:)](predicateexpressions/build_contains%28____%29-9bwzx.md)
- [build_contains(\_:\_:)](predicateexpressions/build_contains%28____%29-9ferb.md)
- [build_contains(\_:\_:)](predicateexpressions/build_contains%28____%29-9ulrw.md)
- [build_contains(\_:where:)](predicateexpressions/build_contains%28__where_%29.md)
- [build_evaluate(\_:\_:)](predicateexpressions/build_evaluate%28____%29-33oeu.md)
- [build_evaluate(\_:\_:)](predicateexpressions/build_evaluate%28____%29-6h1h.md)
- [build_filter(\_:\_:)](predicateexpressions/build_filter%28____%29.md)
- [build_flatMap(\_:\_:)](predicateexpressions/build_flatmap%28____%29-7d3x7.md)
- [build_flatMap(\_:\_:)](predicateexpressions/build_flatmap%28____%29-kcbs.md)
- [build_localizedCompare(\_:\_:)](predicateexpressions/build_localizedcompare%28____%29.md)
- [build_localizedStandardContains(\_:\_:)](predicateexpressions/build_localizedstandardcontains%28____%29.md)
- [build_max(\_:)](predicateexpressions/build_max%28__%29.md)
- [build_min(\_:)](predicateexpressions/build_min%28__%29.md)
- [build_starts(\_:with:)](predicateexpressions/build_starts%28__with_%29.md)
- [build_subscript(\_:\_:)](predicateexpressions/build_subscript%28____%29-61z8t.md)
- [build_subscript(\_:\_:)](predicateexpressions/build_subscript%28____%29-8f5bl.md)
- [build_subscript(\_:\_:)](predicateexpressions/build_subscript%28____%29-are7.md)
- [build_subscript(\_:\_:default:)](predicateexpressions/build_subscript%28____default_%29.md)

### Enumerations

- [PredicateExpressions.ArithmeticOperator](predicateexpressions/arithmeticoperator.md)
- [PredicateExpressions.ComparisonOperator](predicateexpressions/comparisonoperator.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)

## See Also

### Filltering

- [Predicate](predicate.md): A logical condition used to test a set of input values for searching or filtering.
- [PredicateError](predicateerror.md): An error thrown while evaluating a predicate.
- [PredicateCodableConfiguration](predicatecodableconfiguration.md): A specification of the expected types and key paths found in an archived predicate.
- [PredicateCodableKeyPathProviding](predicatecodablekeypathproviding.md): A type that provides the expected key paths found in an archived predicate.
- [PredicateExpression](predicateexpression.md): A component expression that makes up part of a predicate.
- [StandardPredicateExpression](standardpredicateexpression.md): A component expression that makes up part of a predicate, and that’s supported by the standard predicate type.
- [PredicateBindings](predicatebindings.md): A mapping from a predicates’s input variables to their values.
- [NSPredicate](nspredicate.md): A definition of logical conditions for constraining a search for a fetch or for in-memory filtering.
- [NSExpression](nsexpression.md): An expression for use in a comparison predicate.
- [NSComparisonPredicate](nscomparisonpredicate.md): A specialized predicate for comparing expressions.
- [NSCompoundPredicate](nscompoundpredicate.md): A specialized predicate that evaluates logical combinations of other predicates.
