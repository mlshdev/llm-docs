> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/look(at:from:upvector:relativeto:forward:)](https://developer.apple.com/documentation/realitykit/hastransform/look(at:from:upvector:relativeto:forward:))

# look(at:from:upVector:relativeTo:forward:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Positions and orients the entity such that it looks at certain target from a give position.

## Declaration

```swift
@MainActor @preconcurrency func look(at target: SIMD3<Float>, from position: SIMD3<Float>, upVector: SIMD3<Float> = SIMD3<Float>(0, 1, 0), relativeTo referenceEntity: Entity?, forward: Entity.ForwardDirection = .negativeZ)
```

## Parameters

- `target`: The target position to look at.
- `position`: The new position of the entity.
- `upVector`: The *up* direction of the entity.
- `referenceEntity`: The reference entity which defines the frame of reference. Can be `nil`, which is equivalent to “world space”.
- `forward`: Use default forward (.negativeZ). Can be set to .positiveZ for non-camera entities

<a id="discussion"></a>

## Discussion

This function moves the entity to the specified `position`. It rotates the entity such that the forward direction is pointing towards `target`. It further makes sure that entity’s *up* direction aligns with the specified `upVector`.

> **Note**

> This method can be used for non-camera entities.

## See Also

### Moving an entity

- [move(to:relativeTo:)](move%28to_relativeto_%29-6lohd.md): Moves an entity instantly to a new location given by a transform.
- [move(to:relativeTo:)](move%28to_relativeto_%29-6jul8.md): Moves an entity instantly to a new location given by a 4x4 matrix.
- [look(at:from:upVector:relativeTo:)](look%28at_from_upvector_relativeto_%29.md): Positions and orients the entity to look at a target from a given position.
- [align(\_:to:)](align%28__to_%29.md): Moves and rotates the entity by a transformation from the origin pin to the target pin.
