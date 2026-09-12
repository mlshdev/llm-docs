> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicateexpressions/optionalflatmap/init(_:_:)-fnq2](https://developer.apple.com/documentation/foundation/predicateexpressions/optionalflatmap/init(_:_:)-fnq2)

# init(\_:\_:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
init(_ wrapped: LHS, _ builder: (PredicateExpressions.Variable<Wrapped>) -> RHS) where Result == RHS.Output
```
