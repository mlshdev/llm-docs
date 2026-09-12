> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/levelofdetailcomponent/addbyscreenarea(to:levels:)](https://developer.apple.com/documentation/realitykit/levelofdetailcomponent/addbyscreenarea(to:levels:))

# addByScreenArea(to:levels:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds Level of Detail configuration using screen area-based switching to an entity.

## Declaration

```swift
static func addByScreenArea(to entity: Entity, levels: [(entities: LevelOfDetailComponent.DetailLevel, minArea: Float)])
```

## Parameters

- `levels`: An array of levels, where each level specifies the entities to display and the minimum projected screen area (0.0-1.0) at which they are visible.

<a id="discussion"></a>

## Discussion

Each level pairs a set of entities with a minimum screen area threshold. Entities within a level are shown or hidden together. Thresholds must be in descending order and in the range \[0.0, 1.0\].

Each entity in the provided levels is added as a child of the entity the component will be added to. Children not included in any level are unaffected by LOD switching.

## See Also

### Creating a component

- [init(levels:switchingAt:)](init%28levels_switchingat_%29.md): Creates a new Level of Detail component.
- [addByCameraDistance(to:levels:)](addbycameradistance%28to_levels_%29.md): Adds Level of Detail configuration using distance-based switching to an entity .
- [addByResolutionMetric(to:levels:boundingBox:)](addbyresolutionmetric%28to_levels_boundingbox_%29.md): Adds Level of Detail configuration using resolution metric-based switching to an entity.
