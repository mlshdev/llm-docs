> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/entity(at:)](https://developer.apple.com/documentation/realitykit/arview/entity(at:))

# entity(at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

Finds the entity in the AR scene closest to the specified point.

## Declaration

```swift
@MainActor @preconcurrency func entity(at point: CGPoint) -> Entity?
```

## Parameters

- `point`: A point in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

The entity at `point`, or `nil` if no entity is found.

<a id="discussion"></a>

## Discussion

The method ignores entities that lack a [CollisionComponent](../collisioncomponent.md).

## See Also

### Finding entities at a point in the view

- [entities(at:)](entities%28at_%29.md): Finds the collection of entities at the specified point in the scene.
- [hitTest(\_:query:mask:)](hittest%28__query_mask_%29.md): Searches for objects corresponding to a point in the view based on a query and a collision mask.
- [hitTest(\_:types:)](hittest%28__types_%29.md): Searches for objects corresponding to a point in the view based on a set of result types.
- [makeRaycastQuery(from:allowing:alignment:)](makeraycastquery%28from_allowing_alignment_%29.md): Creates a ray-cast query originating from a point in the view, centered on the camera’s field of view.
- [raycast(from:allowing:alignment:)](raycast%28from_allowing_alignment_%29.md): Performs a ray cast, where a ray is cast into the scene from the center of the camera through a point in the view, and the results are immediately returned.
- [trackedRaycast(from:allowing:alignment:updateHandler:)](trackedraycast%28from_allowing_alignment_updatehandler_%29.md): Performs a tracked ray cast, where a ray is cast into the scene from the center of the camera through a point in the view.
