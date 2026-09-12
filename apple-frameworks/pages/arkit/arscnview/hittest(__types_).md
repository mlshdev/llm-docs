> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnview/hittest(_:types:)](https://developer.apple.com/documentation/arkit/arscnview/hittest(_:types:))

# hitTest(\_:types:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

Searches for real-world objects or AR anchors in the captured camera image corresponding to a point in the SceneKit view.

> Use \[ARSCNView raycastQueryFromPoint:allowingTarget:alignment\]

## Declaration

```swift
func hitTest(_ point: CGPoint, types: ARHitTestResult.ResultType) -> [ARHitTestResult]
```

## Parameters

- `point`: A point in the 2D coordinate system of the view.
- `types`: The types of hit-test result to search for.

<a id="return-value"></a>

## Return Value

A list of results, sorted from nearest to farthest (in distance from the camera).

<a id="Discussion"></a>

## Discussion

Hit testing searches for real-world objects or surfaces detected through the AR session’s processing of the camera image. A 2D point in the view’s coordinate system can refer to any point along a 3D line that starts at the device camera and extends in a direction determined by the device orientation and camera projection. This method searches along that line, returning all objects that intersect it in order of distance from the camera.

> **Note**

>  This method searches for AR anchors and real-world objects detected by the AR session, not SceneKit content displayed in the view. To search for SceneKit objects, use the view’s [hitTest(\_:options:)](../../scenekit/scnscenerenderer/hittest%28__options_%29.md) method instead.

The behavior of a hit test depends on which `types` you specify and the order you specify them in. For details, see [ARHitTestResult](../arhittestresult.md) and the various [ARHitTestResult.ResultType](../arhittestresult/resulttype.md) options.

## See Also

### Finding Real-World Surfaces

- [raycastQuery(from:allowing:alignment:)](raycastquery%28from_allowing_alignment_%29.md): Creates a raycast query that originates from a point on the view, aligned with the center of the camera’s field of view.

# hitTest:types: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

Searches for real-world objects or AR anchors in the captured camera image corresponding to a point in the SceneKit view.

> Use \[ARSCNView raycastQueryFromPoint:allowingTarget:alignment\]

## Declaration

```objectivec
- (NSArray<ARHitTestResult *> *) hitTest:(CGPoint) point types:(ARHitTestResultType) types;
```

## Parameters

- `point`: A point in the 2D coordinate system of the view.
- `types`: The types of hit-test result to search for.

<a id="return-value"></a>

## Return Value

A list of results, sorted from nearest to farthest (in distance from the camera).

<a id="Discussion"></a>

## Discussion

Hit testing searches for real-world objects or surfaces detected through the AR session’s processing of the camera image. A 2D point in the view’s coordinate system can refer to any point along a 3D line that starts at the device camera and extends in a direction determined by the device orientation and camera projection. This method searches along that line, returning all objects that intersect it in order of distance from the camera.

> **Note**

>  This method searches for AR anchors and real-world objects detected by the AR session, not SceneKit content displayed in the view. To search for SceneKit objects, use the view’s [hitTest:options:](../../scenekit/scnscenerenderer/hittest%28__options_%29.md) method instead.

The behavior of a hit test depends on which `types` you specify and the order you specify them in. For details, see [ARHitTestResult](../arhittestresult.md) and the various [ARHitTestResultType](../arhittestresult/resulttype.md) options.

## See Also

### Finding Real-World Surfaces

- [raycastQueryFromPoint:allowingTarget:alignment:](raycastquery%28from_allowing_alignment_%29.md): Creates a raycast query that originates from a point on the view, aligned with the center of the camera’s field of view.
