> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/predicateexpressions/build_filter(_:_:)

# build_filter(\_:\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func build_filter<LHS, RHS>(_ lhs: LHS, _ builder: (PredicateExpressions.Variable<LHS.Output.Element>) -> RHS) -> PredicateExpressions.Filter<LHS, RHS> where LHS : PredicateExpression, RHS : PredicateExpression, LHS.Output : Sequence, RHS.Output == Bool
```
