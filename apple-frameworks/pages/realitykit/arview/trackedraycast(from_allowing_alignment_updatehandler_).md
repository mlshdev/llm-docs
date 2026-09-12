> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/trackedraycast(from:allowing:alignment:updatehandler:)](https://developer.apple.com/documentation/realitykit/arview/trackedraycast(from:allowing:alignment:updatehandler:))

# trackedRaycast(from:allowing:alignment:updateHandler:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

Performs a tracked ray cast, where a ray is cast into the scene from the center of the camera through a point in the view.

## Declaration

```swift
@MainActor @preconcurrency func trackedRaycast(from point: CGPoint, allowing target: ARRaycastQuery.Target, alignment: ARRaycastQuery.TargetAlignment, updateHandler: @escaping ([ARRaycastResult]) -> Void) -> ARTrackedRaycast?
```

## Parameters

- `point`: A point in the view’s local coordinate system.
- `target`: The type of target where the ray should terminate.
- `alignment`: The alignment of the target.
- `updateHandler`: A closure the method calls to update the list of results, sorted from nearest to farthest from the camera. The closure is called on the [session](session.md) instance’s delegate queue.

<a id="return-value"></a>

## Return Value

A tracked ray-cast instance used to update or stop ray casting. The result is `nil` if the ray cast fails or if the AR [session](session.md) configuration isn’t [ARWorldTrackingConfiguration](../../arkit/arworldtrackingconfiguration.md) or one of its subclasses.

## See Also

### Finding entities at a point in the view

- [entity(at:)](entity%28at_%29.md): Finds the entity in the AR scene closest to the specified point.
- [entities(at:)](entities%28at_%29.md): Finds the collection of entities at the specified point in the scene.
- [hitTest(\_:query:mask:)](hittest%28__query_mask_%29.md): Searches for objects corresponding to a point in the view based on a query and a collision mask.
- [hitTest(\_:types:)](hittest%28__types_%29.md): Searches for objects corresponding to a point in the view based on a set of result types.
- [makeRaycastQuery(from:allowing:alignment:)](makeraycastquery%28from_allowing_alignment_%29.md): Creates a ray-cast query originating from a point in the view, centered on the camera’s field of view.
- [raycast(from:allowing:alignment:)](raycast%28from_allowing_alignment_%29.md): Performs a ray cast, where a ray is cast into the scene from the center of the camera through a point in the view, and the results are immediately returned.
