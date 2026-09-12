> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/unprojectpoint(_:)](https://developer.apple.com/documentation/scenekit/scnscenerenderer/unprojectpoint(_:))

# unprojectPoint(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Unprojects a point from the 2D pixel coordinate system of the renderer to the 3D world coordinate system of the scene.

## Declaration

```swift
func unprojectPoint(_ point: SCNVector3) -> SCNVector3
```

## Parameters

- `point`: A point in the screen-space (view, layer, or GPU viewport) coordinate system of the scene renderer.

<a id="return-value"></a>

## Return Value

The corresponding point in the world coordinate system of the renderer’s scene.

<a id="Discussion"></a>

## Discussion

The z-coordinate of the `point` parameter describes the depth at which to unproject the point relative to the near and far clipping planes of the renderer’s viewing frustum (defined by its [pointOfView](pointofview.md) node). Unprojecting a point whose z-coordinate is `0.0` returns a point on the near clipping plane; unprojecting a point whose z-coordinate is `1.0` returns a point on the far clipping plane.

A 2D point in the rendered screen coordinate space can refer to any point along a line segment in the 3D scene coordinate space. To test for scene contents along this line—for example, to find the geometry corresponding to the location of a click event in a view—use the [hitTest(\_:options:)](hittest%28__options_%29.md) method.

## See Also

### Working With Projected Scene Contents

- [hitTest(\_:options:)](hittest%28__options_%29.md): Searches the renderer’s scene for objects corresponding to a point in the rendered image.
- [SCNHitTestOption](../scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.
- [isNode(\_:insideFrustumOf:)](isnode%28__insidefrustumof_%29.md): Returns a Boolean value indicating whether a node might be visible from a specified point of view.
- [nodesInsideFrustum(of:)](nodesinsidefrustum%28of_%29.md): Returns all nodes that might be visible from a specified point of view.
- [projectPoint(\_:)](projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the renderer.

# unprojectPoint: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Unprojects a point from the 2D pixel coordinate system of the renderer to the 3D world coordinate system of the scene.

## Declaration

```objectivec
- (SCNVector3) unprojectPoint:(SCNVector3) point;
```

## Parameters

- `point`: A point in the screen-space (view, layer, or GPU viewport) coordinate system of the scene renderer.

<a id="return-value"></a>

## Return Value

The corresponding point in the world coordinate system of the renderer’s scene.

<a id="Discussion"></a>

## Discussion

The z-coordinate of the `point` parameter describes the depth at which to unproject the point relative to the near and far clipping planes of the renderer’s viewing frustum (defined by its [pointOfView](pointofview.md) node). Unprojecting a point whose z-coordinate is `0.0` returns a point on the near clipping plane; unprojecting a point whose z-coordinate is `1.0` returns a point on the far clipping plane.

A 2D point in the rendered screen coordinate space can refer to any point along a line segment in the 3D scene coordinate space. To test for scene contents along this line—for example, to find the geometry corresponding to the location of a click event in a view—use the [hitTest:options:](hittest%28__options_%29.md) method.

## See Also

### Working With Projected Scene Contents

- [hitTest:options:](hittest%28__options_%29.md): Searches the renderer’s scene for objects corresponding to a point in the rendered image.
- [SCNHitTestOption](../scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.
- [isNodeInsideFrustum:withPointOfView:](isnode%28__insidefrustumof_%29.md): Returns a Boolean value indicating whether a node might be visible from a specified point of view.
- [nodesInsideFrustumWithPointOfView:](nodesinsidefrustum%28of_%29.md): Returns all nodes that might be visible from a specified point of view.
- [projectPoint:](projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the renderer.
