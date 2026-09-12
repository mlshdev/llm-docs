> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/poseselector/init(strategy:)](https://developer.apple.com/documentation/createmlcomponents/poseselector/init(strategy:))

# init(strategy:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a pose selector.

## Declaration

```swift
init(strategy: PoseSelectionStrategy)
```

## Parameters

- `strategy`: The strategy used to choose a pose if multiple poses are detected on the same frame. Default strategy is to select a pose with maximum bounding box area.

## See Also

### Creating a selector

- [init()](init%28%29.md): Creates a pose selector.
- [init(strategy:confidenceThreshold:)](init%28strategy_confidencethreshold_%29.md): Creates a pose selector.
