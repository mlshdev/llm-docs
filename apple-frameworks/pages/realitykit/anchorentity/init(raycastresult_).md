> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchorentity/init(raycastresult:)](https://developer.apple.com/documentation/realitykit/anchorentity/init(raycastresult:))

# init(raycastResult:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

Creates an anchor entity using the information about a real-world surface discovered using a ray-cast query.

## Declaration

```swift
@MainActor @preconcurrency convenience init(raycastResult: ARRaycastResult)
```

## Parameters

- `raycastResult`: The ray-cast result.

## See Also

### Creating an anchor

- [init()](init%28%29.md): Creates a new anchor entity.
- [init(\_:)](init%28__%29-9vipc.md)
- [init(\_:)](init%28__%29-9rdwu.md): Creates an anchor entity targeting a particular kind of anchor.
- [init(\_:trackingMode:)](init%28__trackingmode_%29.md)
- [init(\_:trackingMode:physicsSimulation:)](init%28__trackingmode_physicssimulation_%29.md)
- [init(anchor:)](init%28anchor_%29.md): Creates an anchor entity that uses an existing AR anchor.
- [init(plane:classification:minimumBounds:)](init%28plane_classification_minimumbounds_%29.md): Creates an anchor entity that targets a plane with the given characteristics.
- [init(world:)](init%28world_%29-4snw2.md): Creates an anchor entity with a target fixed at the given position in the scene.
- [init(world:)](init%28world_%29-u9qv.md): Creates an anchor entity with a target fixed at the given position in the scene.
