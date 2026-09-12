> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicateexpressions/build_closedrange(lower:upper:)](https://developer.apple.com/documentation/foundation/predicateexpressions/build_closedrange(lower:upper:))

# build_ClosedRange(lower:upper:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func build_ClosedRange<LHS, RHS>(lower: LHS, upper: RHS) -> PredicateExpressions.ClosedRange<LHS, RHS> where LHS : PredicateExpression, RHS : PredicateExpression, LHS.Output : Comparable, LHS.Output == RHS.Output
```
