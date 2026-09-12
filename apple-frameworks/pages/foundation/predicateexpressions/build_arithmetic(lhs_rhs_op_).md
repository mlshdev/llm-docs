> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicateexpressions/build_arithmetic(lhs:rhs:op:)](https://developer.apple.com/documentation/foundation/predicateexpressions/build_arithmetic(lhs:rhs:op:))

# build_Arithmetic(lhs:rhs:op:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func build_Arithmetic<LHS, RHS>(lhs: LHS, rhs: RHS, op: PredicateExpressions.ArithmeticOperator) -> PredicateExpressions.Arithmetic<LHS, RHS> where LHS : PredicateExpression, RHS : PredicateExpression, LHS.Output : Numeric, LHS.Output == RHS.Output
```
