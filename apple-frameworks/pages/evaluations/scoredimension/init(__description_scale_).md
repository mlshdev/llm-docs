> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/scoredimension/init(_:description:scale:)

# init(\_:description:scale:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a scoring dimension.

## Declaration

```swift
init(_ name: String, description: String? = nil, scale: ScoringScale)
```

## Parameters

- `name`: The dimension name, used as the DataFrame column name and for aggregation lookup.
- `description`: Optional description providing context about what this dimension measures.
- `scale`: The scoring scale for this dimension.
