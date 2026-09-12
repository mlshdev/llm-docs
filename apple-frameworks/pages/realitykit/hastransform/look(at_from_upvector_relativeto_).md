> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/look(at:from:upvector:relativeto:)](https://developer.apple.com/documentation/realitykit/hastransform/look(at:from:upvector:relativeto:))

# look(at:from:upVector:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Positions and orients the entity to look at a target from a given position.

## Declaration

```swift
@MainActor @preconcurrency func look(at target: SIMD3<Float>, from position: SIMD3<Float>, upVector: SIMD3<Float> = SIMD3<Float>(0, 1, 0), relativeTo referenceEntity: Entity?)
```

## Parameters

- `target`: The target position to look at.
- `position`: The new position of the entity.
- `upVector`: The up direction of the entity after moving.
- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.

<a id="discussion"></a>

## Discussion

You can use this method on any entity, but it’s particularly useful for orienting cameras and lights to aim at a particular point in space.

## See Also

### Moving an entity

- [move(to:relativeTo:)](move%28to_relativeto_%29-6lohd.md): Moves an entity instantly to a new location given by a transform.
- [move(to:relativeTo:)](move%28to_relativeto_%29-6jul8.md): Moves an entity instantly to a new location given by a 4x4 matrix.
- [look(at:from:upVector:relativeTo:forward:)](look%28at_from_upvector_relativeto_forward_%29.md): Positions and orients the entity such that it looks at certain target from a give position.
- [align(\_:to:)](align%28__to_%29.md): Moves and rotates the entity by a transformation from the origin pin to the target pin.
