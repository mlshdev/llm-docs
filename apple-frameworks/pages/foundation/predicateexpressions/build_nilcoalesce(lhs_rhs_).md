> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicateexpressions/build_nilcoalesce(lhs:rhs:)](https://developer.apple.com/documentation/foundation/predicateexpressions/build_nilcoalesce(lhs:rhs:))

# build_NilCoalesce(lhs:rhs:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func build_NilCoalesce<LHS, RHS>(lhs: LHS, rhs: RHS) -> PredicateExpressions.NilCoalesce<LHS, RHS> where LHS : PredicateExpression, RHS : PredicateExpression, LHS.Output == RHS.Output?
```
