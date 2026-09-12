> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/levelofdetailcomponent/selectionstrategy/resolutionmetric](https://developer.apple.com/documentation/realitykit/levelofdetailcomponent/selectionstrategy/resolutionmetric)

# LevelOfDetailComponent.SelectionStrategy.ResolutionMetric

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
struct ResolutionMetric
```

## Topics

### Creating a resolution metric

- [init(switchingResolutions:boundingBox:)](resolutionmetric/init%28switchingresolutions_boundingbox_%29.md): Creates a resolution metric for a level of detail component to switch with.

### Configuring the metric

- [switchingResolutions](resolutionmetric/switchingresolutions.md)
- [LevelOfDetailComponent.SelectionStrategy.ResolutionMetric.DirectionalSwitchingResolutions](resolutionmetric/directionalswitchingresolutions.md): A struct containing the ideal switching resolutions for a single detail level in a `LevelOfDetailComponent` when viewed from a specific direction. Note that switching may not actually occur at these resolutions depending on device performance.
- [boundingBox](resolutionmetric/boundingbox.md)

## See Also

### Selecting by resolution metric

- [resolutionMetric(switchingResolutions:boundingBox:)](resolutionmetric%28switchingresolutions_boundingbox_%29.md): Creates a resolution metric for a level of detail component to switch with.
