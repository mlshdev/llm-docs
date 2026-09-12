> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/move(to:relativeto:)-6jul8](https://developer.apple.com/documentation/realitykit/hastransform/move(to:relativeto:)-6jul8)

# move(to:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Moves an entity instantly to a new location given by a 4x4 matrix.

## Declaration

```swift
@MainActor @preconcurrency func move(to transform: float4x4, relativeTo referenceEntity: Entity?)
```

## Parameters

- `transform`: A 4x4 matrix that indicates the new location.
- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.

## See Also

### Moving an entity

- [move(to:relativeTo:)](move%28to_relativeto_%29-6lohd.md): Moves an entity instantly to a new location given by a transform.
- [look(at:from:upVector:relativeTo:)](look%28at_from_upvector_relativeto_%29.md): Positions and orients the entity to look at a target from a given position.
- [look(at:from:upVector:relativeTo:forward:)](look%28at_from_upvector_relativeto_forward_%29.md): Positions and orients the entity such that it looks at certain target from a give position.
- [align(\_:to:)](align%28__to_%29.md): Moves and rotates the entity by a transformation from the origin pin to the target pin.
