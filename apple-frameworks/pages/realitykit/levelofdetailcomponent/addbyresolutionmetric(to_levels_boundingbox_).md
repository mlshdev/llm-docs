> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/levelofdetailcomponent/addbyresolutionmetric(to:levels:boundingbox:)](https://developer.apple.com/documentation/realitykit/levelofdetailcomponent/addbyresolutionmetric(to:levels:boundingbox:))

# addByResolutionMetric(to:levels:boundingBox:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds Level of Detail configuration using resolution metric-based switching to an entity.

## Declaration

```swift
static func addByResolutionMetric(to entity: Entity, levels: [(entities: LevelOfDetailComponent.DetailLevel, switchingResolutions: LevelOfDetailComponent.SelectionStrategy.ResolutionMetric.DirectionalSwitchingResolutions)], boundingBox: BoundingBox)
```

## Parameters

- `levels`: An array of levels, where each level specifies the entities to display and the level’s associated directional switching resolutions.
- `boundingBox`: The bounding box of the entity used when calculating the switching resolutions .

<a id="discussion"></a>

## Discussion

Each level pairs a set of entities with a directional switching resolutions struct. Level 0 should have an empty directional switching resolutions struct. Entities within a level are shown or hidden together.

Each entity in the provided levels is added as a child of the entity the component will be added to. Children not included in any level are unaffected by LOD switching.

## See Also

### Creating a component

- [init(levels:switchingAt:)](init%28levels_switchingat_%29.md): Creates a new Level of Detail component.
- [addByCameraDistance(to:levels:)](addbycameradistance%28to_levels_%29.md): Adds Level of Detail configuration using distance-based switching to an entity .
- [addByScreenArea(to:levels:)](addbyscreenarea%28to_levels_%29.md): Adds Level of Detail configuration using screen area-based switching to an entity.
