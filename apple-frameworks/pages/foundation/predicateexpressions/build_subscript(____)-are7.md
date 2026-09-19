> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/predicateexpressions/build_subscript(_:_:)-are7

# build_subscript(\_:\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func build_subscript<Wrapped, Index>(_ wrapped: Wrapped, _ index: Index) -> PredicateExpressions.CollectionIndexSubscript<Wrapped, Index> where Wrapped : PredicateExpression, Index : PredicateExpression, Wrapped.Output : Collection, Index.Output == Wrapped.Output.Index
```
