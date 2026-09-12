> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnview/raycastquery(from:allowing:alignment:)](https://developer.apple.com/documentation/arkit/arscnview/raycastquery(from:allowing:alignment:))

# raycastQuery(from:allowing:alignment:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Creates a raycast query that originates from a point on the view, aligned with the center of the camera’s field of view.

## Declaration

```swift
func raycastQuery(from point: CGPoint, allowing target: ARRaycastQuery.Target, alignment: ARRaycastQuery.TargetAlignment) -> ARRaycastQuery?
```

<a id="Discussion"></a>

## Discussion

When you call this function, ARKit creates a ray that extends in the positive z-direction from the argument screen space point, to determine if any of the argument targets exist in the physical environment anywhere along the ray. If so, ARKit returns a 3D position where the ray intersects the target.

## See Also

### Finding Real-World Surfaces

- [hitTest(\_:types:)](hittest%28__types_%29.md): Deprecated. Searches for real-world objects or AR anchors in the captured camera image corresponding to a point in the SceneKit view.

# raycastQueryFromPoint:allowingTarget:alignment: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Creates a raycast query that originates from a point on the view, aligned with the center of the camera’s field of view.

## Declaration

```objectivec
- (ARRaycastQuery *) raycastQueryFromPoint:(CGPoint) point allowingTarget:(ARRaycastTarget) target alignment:(ARRaycastTargetAlignment) alignment;
```

<a id="Discussion"></a>

## Discussion

When you call this function, ARKit creates a ray that extends in the positive z-direction from the argument screen space point, to determine if any of the argument targets exist in the physical environment anywhere along the ray. If so, ARKit returns a 3D position where the ray intersects the target.

## See Also

### Finding Real-World Surfaces

- [hitTest:types:](hittest%28__types_%29.md): Deprecated. Searches for real-world objects or AR anchors in the captured camera image corresponding to a point in the SceneKit view.
