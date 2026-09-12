> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicateexpressions/build_notequal(lhs:rhs:)](https://developer.apple.com/documentation/foundation/predicateexpressions/build_notequal(lhs:rhs:))

# build_NotEqual(lhs:rhs:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func build_NotEqual<LHS, RHS>(lhs: LHS, rhs: RHS) -> PredicateExpressions.NotEqual<LHS, RHS> where LHS : PredicateExpression, RHS : PredicateExpression, LHS.Output : Equatable, LHS.Output == RHS.Output
```
