> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/levelofdetailcomponent/selectionstrategy](https://developer.apple.com/documentation/realitykit/levelofdetailcomponent/selectionstrategy)

# LevelOfDetailComponent.SelectionStrategy

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The strategy used to select which detail level to display.

## Declaration

```swift
struct SelectionStrategy
```

## Topics

### Creating a strategy

- [screenArea(\_:)](selectionstrategy/screenarea%28__%29.md): Switch levels based on projected screen area (0.0 = invisible, 1.0 = fills screen).
- [cameraDistance(\_:)](selectionstrategy/cameradistance%28__%29.md): Switch levels based on distance from the camera.

### Selecting by resolution metric

- [resolutionMetric(switchingResolutions:boundingBox:)](selectionstrategy/resolutionmetric%28switchingresolutions_boundingbox_%29.md): Creates a resolution metric for a level of detail component to switch with.
- [LevelOfDetailComponent.SelectionStrategy.ResolutionMetric](selectionstrategy/resolutionmetric.md)

## See Also

### Choosing a level

- [strategy](strategy.md)
- [levelSelection](levelselection-swift.property.md): The level selection mode. Defaults to automatic selection based on the strategy.
- [LevelOfDetailComponent.LevelSelection](levelselection-swift.struct.md): Controls whether LOD selection is automatic or manually overridden.
