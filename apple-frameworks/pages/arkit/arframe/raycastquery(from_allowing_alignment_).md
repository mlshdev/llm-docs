> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/raycastquery(from:allowing:alignment:)](https://developer.apple.com/documentation/arkit/arframe/raycastquery(from:allowing:alignment:))

# raycastQuery(from:allowing:alignment:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Get a ray-cast query for a screen point.

## Declaration

```swift
func raycastQuery(from point: CGPoint, allowing target: ARRaycastQuery.Target, alignment: ARRaycastQuery.TargetAlignment) -> ARRaycastQuery
```

## Parameters

- `point`: A normalized coordinate in the UI system, where 0 is top-left, and 1 is bottom-right.
- `target`: The types of plane you allow this ray cast to intersect with.
- `alignment`: An alignment with respect to gravity a plane must have to interset this ray.

<a id="Discussion"></a>

## Discussion

To cast the ray, you pass the resulting query to your current session via [raycast(\_:)](../arsession/raycast%28__%29.md) or [trackedRaycast(\_:updateHandler:)](../arsession/trackedraycast%28__updatehandler_%29.md).

## See Also

### Tracking and interacting with the real world

- [anchors](anchors.md): The list of anchors representing positions tracked or objects detected in the scene.
- [hitTest(\_:types:)](hittest%28__types_%29.md): Deprecated. Searches for real-world objects or AR anchors in the captured camera image.

# raycastQueryFromPoint:allowingTarget:alignment: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Get a ray-cast query for a screen point.

## Declaration

```objectivec
- (ARRaycastQuery *) raycastQueryFromPoint:(CGPoint) point allowingTarget:(ARRaycastTarget) target alignment:(ARRaycastTargetAlignment) alignment;
```

## Parameters

- `point`: A normalized coordinate in the UI system, where 0 is top-left, and 1 is bottom-right.
- `target`: The types of plane you allow this ray cast to intersect with.
- `alignment`: An alignment with respect to gravity a plane must have to interset this ray.

<a id="Discussion"></a>

## Discussion

To cast the ray, you pass the resulting query to your current session via [raycast:](../arsession/raycast%28__%29.md) or [trackedRaycast:updateHandler:](../arsession/trackedraycast%28__updatehandler_%29.md).

## See Also

### Tracking and interacting with the real world

- [anchors](anchors.md): The list of anchors representing positions tracked or objects detected in the scene.
- [hitTest:types:](hittest%28__types_%29.md): Deprecated. Searches for real-world objects or AR anchors in the captured camera image.
