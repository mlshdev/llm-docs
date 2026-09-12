> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/levelofdetailcomponent/selectionstrategy/resolutionmetric(switchingresolutions:boundingbox:)](https://developer.apple.com/documentation/realitykit/levelofdetailcomponent/selectionstrategy/resolutionmetric(switchingresolutions:boundingbox:))

# resolutionMetric(switchingResolutions:boundingBox:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a resolution metric for a level of detail component to switch with.

## Declaration

```swift
static func resolutionMetric(switchingResolutions: [LevelOfDetailComponent.SelectionStrategy.ResolutionMetric.DirectionalSwitchingResolutions], boundingBox: BoundingBox) -> LevelOfDetailComponent.SelectionStrategy
```

## Parameters

- `switchingResolutions`: An array of `ResolutionMetric.DirectionalSwitchingResolutions`. The `ResolutionMetric.DirectionalSwitchingResolutions` at index `i` corresponds to the LOD level `i + 1`.
- `boundingBox`: The bounding box of the entity used when calculating the switching resolutions .

<a id="return-value"></a>

## Return Value

A configured resolution metric selection strategy.

## See Also

### Selecting by resolution metric

- [LevelOfDetailComponent.SelectionStrategy.ResolutionMetric](resolutionmetric.md)
