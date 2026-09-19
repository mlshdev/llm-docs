> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/predicateexpressions/build_division(lhs:rhs:)-958g1

# build_Division(lhs:rhs:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func build_Division<LHS, RHS>(lhs: LHS, rhs: RHS) -> PredicateExpressions.IntDivision<LHS, RHS> where LHS : PredicateExpression, RHS : PredicateExpression, LHS.Output : BinaryInteger, LHS.Output == RHS.Output
```
