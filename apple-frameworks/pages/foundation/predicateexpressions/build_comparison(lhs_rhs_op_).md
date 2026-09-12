> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicateexpressions/build_comparison(lhs:rhs:op:)](https://developer.apple.com/documentation/foundation/predicateexpressions/build_comparison(lhs:rhs:op:))

# build_Comparison(lhs:rhs:op:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func build_Comparison<LHS, RHS>(lhs: LHS, rhs: RHS, op: PredicateExpressions.ComparisonOperator) -> PredicateExpressions.Comparison<LHS, RHS> where LHS : PredicateExpression, RHS : PredicateExpression, LHS.Output : Comparable, LHS.Output == RHS.Output
```
