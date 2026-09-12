> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonpredicate/operator/contains](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/operator/contains)

# NSComparisonPredicate.Operator.contains (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A predicate to determine if the left hand side contains the right hand side.

## Declaration

```swift
case contains
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if `[lhs contains rhs]`; the left hand side must be an `NSExpression` object that evaluates to a collection

## See Also

### Constants

- [NSComparisonPredicate.Operator.lessThan](lessthan.md): A less-than predicate.
- [NSComparisonPredicate.Operator.lessThanOrEqualTo](lessthanorequalto.md): A less-than-or-equal-to predicate.
- [NSComparisonPredicate.Operator.greaterThan](greaterthan.md): A greater-than predicate.
- [NSComparisonPredicate.Operator.greaterThanOrEqualTo](greaterthanorequalto.md): A greater-than-or-equal-to predicate.
- [NSComparisonPredicate.Operator.equalTo](equalto.md): An equal-to predicate.
- [NSComparisonPredicate.Operator.notEqualTo](notequalto.md): A not-equal-to predicate.
- [NSComparisonPredicate.Operator.matches](matches.md): A full regular expression matching predicate.
- [NSComparisonPredicate.Operator.like](like.md): A simple subset of the MATCHES predicate, similar in behavior to SQL `LIKE`.
- [NSComparisonPredicate.Operator.beginsWith](beginswith.md): A begins-with predicate.
- [NSComparisonPredicate.Operator.endsWith](endswith.md): An ends-with predicate.
- [NSComparisonPredicate.Operator.in](in.md): A predicate to determine if the left hand side is in the right hand side.
- [NSComparisonPredicate.Operator.customSelector](customselector.md): A predicate that uses a custom selector that takes a single argument and returns a `BOOL` value.
- [NSComparisonPredicate.Operator.between](between.md): A predicate to determine if the left hand side lies at or between bounds specified by the right hand side.

# NSContainsPredicateOperatorType (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A predicate to determine if the left hand side contains the right hand side.

## Declaration

```objectivec
NSContainsPredicateOperatorType
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if `[lhs contains rhs]`; the left hand side must be an `NSExpression` object that evaluates to a collection

## See Also

### Constants

- [NSLessThanPredicateOperatorType](lessthan.md): A less-than predicate.
- [NSLessThanOrEqualToPredicateOperatorType](lessthanorequalto.md): A less-than-or-equal-to predicate.
- [NSGreaterThanPredicateOperatorType](greaterthan.md): A greater-than predicate.
- [NSGreaterThanOrEqualToPredicateOperatorType](greaterthanorequalto.md): A greater-than-or-equal-to predicate.
- [NSEqualToPredicateOperatorType](equalto.md): An equal-to predicate.
- [NSNotEqualToPredicateOperatorType](notequalto.md): A not-equal-to predicate.
- [NSMatchesPredicateOperatorType](matches.md): A full regular expression matching predicate.
- [NSLikePredicateOperatorType](like.md): A simple subset of the MATCHES predicate, similar in behavior to SQL `LIKE`.
- [NSBeginsWithPredicateOperatorType](beginswith.md): A begins-with predicate.
- [NSEndsWithPredicateOperatorType](endswith.md): An ends-with predicate.
- [NSInPredicateOperatorType](in.md): A predicate to determine if the left hand side is in the right hand side.
- [NSCustomSelectorPredicateOperatorType](customselector.md): A predicate that uses a custom selector that takes a single argument and returns a `BOOL` value.
- [NSBetweenPredicateOperatorType](between.md): A predicate to determine if the left hand side lies at or between bounds specified by the right hand side.
