> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/coordinatespacereference/scene](https://developer.apple.com/documentation/realitykit/entity/coordinatespacereference/scene)

# Entity.CoordinateSpaceReference.scene

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** visionOS 2.0+

A reference to an entity’s parent window scene.

## Declaration

```swift
case scene
```

<a id="discussion"></a>

## Discussion

You can use this enum case to get an entity’s relative transform in its parented window scene:

```swift
let transformInWindowSpace = windowEntity.transformMatrix(relativeTo: .scene)
```

> **Note**

> If an entity is parented under an **immersive space**, calling `Entity/transformMatrix(relativeTo:)-70l1k` with the case `scene` returns `nil`.
