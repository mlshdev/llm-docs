> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arraycastquery/target-swift.enum/estimatedplane](https://developer.apple.com/documentation/arkit/arraycastquery/target-swift.enum/estimatedplane)

# ARRaycastQuery.Target.estimatedPlane (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A raycast target that specifies nonplanar surfaces, or planes about which ARKit can only estimate.

## Declaration

```swift
case estimatedPlane
```

<a id="Discussion"></a>

## Discussion

A raycast with this target intersects feature points around the ray that ARKit estimates may be a real-world surface.

When combined with [ARRaycastQuery.TargetAlignment.any](../targetalignment-swift.enum/any.md), ARKit bases estimated plane alignment on the normal of the surface.

When you set your world-tracking configuration’s [sceneReconstruction](../../arworldtrackingconfiguration/scenereconstruction.md) to one of the `mesh` options, ARKit allows a raycast with this target (and target-alignment [ARRaycastQuery.TargetAlignment.any](../targetalignment-swift.enum/any.md)) to intersect the scene mesh. Then the raycast result can include points even on nonplanar surfaces or surfaces that have few or no features, such as a white wall. If you set [sceneReconstruction](../../arworldtrackingconfiguration/scenereconstruction.md) to [ARSceneReconstructionNone](../../arscenereconstruction/arscenereconstructionnone.md), raycasts ignore the scene mesh.

## See Also

### Targets

- [ARRaycastQuery.Target.existingPlaneGeometry](existingplanegeometry.md): A raycast target that requires a plane to have a definitive size and shape.
- [ARRaycastQuery.Target.existingPlaneInfinite](existingplaneinfinite.md): A raycast target that specifies a detected plane, regardless of its size and shape.

# ARRaycastTargetEstimatedPlane (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

A raycast target that specifies nonplanar surfaces, or planes about which ARKit can only estimate.

## Declaration

```objectivec
ARRaycastTargetEstimatedPlane
```

<a id="Discussion"></a>

## Discussion

A raycast with this target intersects feature points around the ray that ARKit estimates may be a real-world surface.

When combined with [ARRaycastTargetAlignmentAny](../targetalignment-swift.enum/any.md), ARKit bases estimated plane alignment on the normal of the surface.

When you set your world-tracking configuration’s [sceneReconstruction](../../arworldtrackingconfiguration/scenereconstruction.md) to one of the `mesh` options, ARKit allows a raycast with this target (and target-alignment [ARRaycastTargetAlignmentAny](../targetalignment-swift.enum/any.md)) to intersect the scene mesh. Then the raycast result can include points even on nonplanar surfaces or surfaces that have few or no features, such as a white wall. If you set [sceneReconstruction](../../arworldtrackingconfiguration/scenereconstruction.md) to [ARSceneReconstructionNone](../../arscenereconstruction/arscenereconstructionnone.md), raycasts ignore the scene mesh.

## See Also

### Targets

- [ARRaycastTargetExistingPlaneGeometry](existingplanegeometry.md): A raycast target that requires a plane to have a definitive size and shape.
- [ARRaycastTargetExistingPlaneInfinite](existingplaneinfinite.md): A raycast target that specifies a detected plane, regardless of its size and shape.
