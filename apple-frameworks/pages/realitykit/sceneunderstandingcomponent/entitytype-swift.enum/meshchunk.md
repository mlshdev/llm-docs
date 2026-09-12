> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sceneunderstandingcomponent/entitytype-swift.enum/meshchunk](https://developer.apple.com/documentation/realitykit/sceneunderstandingcomponent/entitytype-swift.enum/meshchunk)

# SceneUnderstandingComponent.EntityType.meshChunk

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 27.0+ · visionOS 1.0+

An entity that models the physical shape of the environment within a given cubic region.

## Declaration

```swift
case meshChunk
```

<a id="discussion"></a>

## Discussion

When `SpotLightComponent.SurroundingsLight` or `PointLightComponent.SurroundingsLight` is enabled:

- On visionOS, RealityKit automatically selects the opaque meshes that intersect the bounding box of the entity’s mesh and illuminates them with surroundings light in a progressive immersive space.
- On macOS, surroundings light illuminates the entity’s mesh.

When [GroundingShadowComponent](../../groundingshadowcomponent.md) is enabled:

- On visionOS, the entity’s mesh receives grounding shadows in a progressive immersive space.
- On macOS, the entity’s mesh receives grounding shadows.

## See Also

### Choosing the entity type

- [SceneUnderstandingComponent.EntityType.face](face.md): An entity that models a face that the framework detects in the physical environment.
