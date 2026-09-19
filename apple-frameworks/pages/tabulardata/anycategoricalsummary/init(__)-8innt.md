> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/anycategoricalsummary/init(_:)-8innt

# init(\_:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a type-erased categorical summary from a typed categorical summary.

## Declaration

```swift
init<T>(_ summary: CategoricalSummary<T>) where T : Hashable
```

## Parameters

- `summary`: A typed categorical summary.
