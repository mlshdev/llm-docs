> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/expression(_:)

# Expression(\_:)

**Framework:** Foundation  
**Kind:** Macro  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

## Declaration

```swift
@freestanding(expression) macro Expression<each Input, Output>(_ body: (repeat each Input) -> Output) -> Expression<repeat each Input, Output>
```

## See Also

### Macros

- [Predicate(\_:)](predicate%28__%29.md)
