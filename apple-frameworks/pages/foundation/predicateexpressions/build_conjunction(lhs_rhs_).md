> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicateexpressions/build_conjunction(lhs:rhs:)](https://developer.apple.com/documentation/foundation/predicateexpressions/build_conjunction(lhs:rhs:))

# build_Conjunction(lhs:rhs:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func build_Conjunction<LHS, RHS>(lhs: LHS, rhs: RHS) -> PredicateExpressions.Conjunction<LHS, RHS> where LHS : PredicateExpression, RHS : PredicateExpression, LHS.Output == Bool, RHS.Output == Bool
```
