> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corespotlight/scoredsearchableitem/init(item:score:)

# init(item:score:)

**Framework:** CoreSpotlight  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Initializes the type with the specified item and score values.

## Declaration

```swift
init(item: SearchableItem, score: Double)
```

## Parameters

- `item`: The searchable item from the app’s index.
- `score`: The relevance score for `item`.
