> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/predicateexpressions/build_contains(_:_:)-18oc3

# build_contains(\_:\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func build_contains<Base, Other>(_ base: Base, _ other: Other) -> PredicateExpressions.CollectionContainsCollection<Base, Other> where Base : PredicateExpression, Other : PredicateExpression, Base.Output : Collection, Other.Output : Collection, Base.Output.Element : Equatable, Base.Output.Element == Other.Output.Element
```
