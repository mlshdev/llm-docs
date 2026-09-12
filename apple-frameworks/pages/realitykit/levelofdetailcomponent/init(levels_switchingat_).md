> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/levelofdetailcomponent/init(levels:switchingat:)](https://developer.apple.com/documentation/realitykit/levelofdetailcomponent/init(levels:switchingat:))

# init(levels:switchingAt:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a new Level of Detail component.

## Declaration

```swift
init(levels: [LevelOfDetailComponent.DetailLevel], switchingAt strategy: LevelOfDetailComponent.SelectionStrategy)
```

## Parameters

- `levels`: Array of detail levels, where each level contains entities to show at that level.
- `strategy`: The selection strategy with threshold values.

## See Also

### Creating a component

- [addByCameraDistance(to:levels:)](addbycameradistance%28to_levels_%29.md): Adds Level of Detail configuration using distance-based switching to an entity .
- [addByScreenArea(to:levels:)](addbyscreenarea%28to_levels_%29.md): Adds Level of Detail configuration using screen area-based switching to an entity.
- [addByResolutionMetric(to:levels:boundingBox:)](addbyresolutionmetric%28to_levels_boundingbox_%29.md): Adds Level of Detail configuration using resolution metric-based switching to an entity.
