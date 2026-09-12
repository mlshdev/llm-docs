> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/levelofdetailcomponent/selectionstrategy/resolutionmetric/directionalswitchingresolutions](https://developer.apple.com/documentation/realitykit/levelofdetailcomponent/selectionstrategy/resolutionmetric/directionalswitchingresolutions)

# LevelOfDetailComponent.SelectionStrategy.ResolutionMetric.DirectionalSwitchingResolutions

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A struct containing the ideal switching resolutions for a single detail level in a `LevelOfDetailComponent` when viewed from a specific direction. Note that switching may not actually occur at these resolutions depending on device performance.

## Declaration

```swift
struct DirectionalSwitchingResolutions
```

## Topics

### Creating switching resolutions

- [init(positiveX:negativeX:positiveY:negativeY:positiveZ:negativeZ:)](directionalswitchingresolutions/init%28positivex_negativex_positivey_negativey_positivez_negativez_%29.md)

### Setting axis resolutions

- [positiveX](directionalswitchingresolutions/positivex.md)
- [negativeX](directionalswitchingresolutions/negativex.md)
- [positiveY](directionalswitchingresolutions/positivey.md)
- [negativeY](directionalswitchingresolutions/negativey.md)
- [positiveZ](directionalswitchingresolutions/positivez.md)
- [negativeZ](directionalswitchingresolutions/negativez.md)

### Initializers

- [init()](directionalswitchingresolutions/init%28%29.md): Creates an empty `DirectionalSwitchingResolutions` for the base level.

## See Also

### Configuring the metric

- [switchingResolutions](switchingresolutions.md)
- [boundingBox](boundingbox.md)
