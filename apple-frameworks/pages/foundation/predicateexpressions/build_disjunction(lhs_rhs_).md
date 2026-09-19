> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/predicateexpressions/build_disjunction(lhs:rhs:)

# build_Disjunction(lhs:rhs:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func build_Disjunction<LHS, RHS>(lhs: LHS, rhs: RHS) -> PredicateExpressions.Disjunction<LHS, RHS> where LHS : PredicateExpression, RHS : PredicateExpression, LHS.Output == Bool, RHS.Output == Bool
```
